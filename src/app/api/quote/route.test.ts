import { vi } from 'vitest';

const {
  mockSendQuoteEmail,
  mockSendAutoReply,
  mockVerifyRecaptcha,
  mockIsRateLimited,
  mockPut,
} = vi.hoisted(() => ({
  mockSendQuoteEmail: vi.fn().mockResolvedValue({}),
  mockSendAutoReply: vi.fn().mockResolvedValue({}),
  mockVerifyRecaptcha: vi
    .fn()
    .mockResolvedValue({ valid: true, score: 0.9 }),
  mockIsRateLimited: vi.fn().mockReturnValue(false),
  mockPut: vi
    .fn()
    .mockResolvedValue({ url: 'https://blob.example.com/file' }),
}));

vi.mock('@/lib/email', () => ({
  sendQuoteEmail: mockSendQuoteEmail,
  sendAutoReply: mockSendAutoReply,
}));

vi.mock('@/lib/recaptcha', () => ({
  verifyRecaptcha: mockVerifyRecaptcha,
}));

vi.mock('@/lib/rate-limit', () => ({
  isRateLimited: mockIsRateLimited,
}));

vi.mock('@vercel/blob', () => ({
  put: mockPut,
}));

import { POST } from './route';

function createFormData(
  fields: Record<string, string>,
  files?: { name: string; type: string; size: number }[]
) {
  const fd = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    fd.append(key, value);
  }
  if (files) {
    for (const f of files) {
      const blob = new Blob(
        [new Uint8Array(f.size)],
        { type: f.type }
      );
      fd.append('files', new File([blob], f.name, { type: f.type }));
    }
  }
  return fd;
}

const validFields = {
  name: 'Maria Santos',
  email: 'maria@example.com',
  phone: '09171234567',
  company: '',
  projectType: 'Commercial Construction',
  location: 'Batangas City, Batangas',
  budget: '₱1M - ₱3M',
  timeline: '1-3 months',
  description:
    'We need a complete commercial fit-out for our new office space including electrical, plumbing, and interior finishing works.',
  recaptchaToken: 'valid-token',
};

function makeRequest(
  formData: FormData,
  ip: string = '127.0.0.1'
) {
  return new Request('http://localhost/api/quote', {
    method: 'POST',
    headers: { 'x-forwarded-for': ip },
    body: formData,
  });
}

beforeEach(() => {
  mockSendQuoteEmail.mockClear();
  mockSendAutoReply.mockClear();
  mockVerifyRecaptcha.mockClear();
  mockIsRateLimited.mockClear();
  mockPut.mockClear();
  mockVerifyRecaptcha.mockResolvedValue({
    valid: true,
    score: 0.9,
  });
  mockIsRateLimited.mockReturnValue(false);
});

describe('POST /api/quote', () => {
  it('returns 200 for valid data without files', async () => {
    const fd = createFormData(validFields);
    const res = await POST(makeRequest(fd));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
  });

  it('calls sendQuoteEmail with correct data', async () => {
    const fd = createFormData(validFields);
    await POST(makeRequest(fd));
    expect(mockSendQuoteEmail).toHaveBeenCalledTimes(1);
    expect(mockSendQuoteEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Maria Santos',
        email: 'maria@example.com',
      })
    );
  });

  it('calls sendAutoReply after quote submission', async () => {
    const fd = createFormData(validFields);
    await POST(makeRequest(fd));
    expect(mockSendAutoReply).toHaveBeenCalledWith(
      'maria@example.com',
      'Maria Santos'
    );
  });

  it('returns 429 when rate limited', async () => {
    mockIsRateLimited.mockReturnValue(true);
    const fd = createFormData(validFields);
    const res = await POST(makeRequest(fd, '192.168.1.1'));
    expect(res.status).toBe(429);
    const json = await res.json();
    expect(json.error).toContain('Too many requests');
  });

  it('returns 200 with valid files', async () => {
    const fd = createFormData(validFields, [
      { name: 'plan.pdf', type: 'application/pdf', size: 1024 },
    ]);
    const res = await POST(makeRequest(fd));
    expect(res.status).toBe(200);
  });

  it('returns 400 when more than 5 files', async () => {
    const files = Array.from({ length: 6 }, (_, i) => ({
      name: `file${i}.pdf`,
      type: 'application/pdf',
      size: 1024,
    }));
    const fd = createFormData(validFields, files);
    const res = await POST(makeRequest(fd));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toContain('Maximum');
  });

  it('returns 400 for invalid file type', async () => {
    const fd = createFormData(validFields, [
      { name: 'script.exe', type: 'application/x-msdownload', size: 1024 },
    ]);
    const res = await POST(makeRequest(fd));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toContain('Invalid file type');
  });

  it('returns 400 for file over 5MB', async () => {
    const fd = createFormData(validFields, [
      {
        name: 'large.pdf',
        type: 'application/pdf',
        size: 6 * 1024 * 1024,
      },
    ]);
    const res = await POST(makeRequest(fd));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toContain('too large');
  });

  it('returns 400 when reCAPTCHA fails', async () => {
    mockVerifyRecaptcha.mockResolvedValue({
      valid: false,
      score: 0.1,
    });
    const fd = createFormData(validFields);
    const res = await POST(makeRequest(fd));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toContain('reCAPTCHA');
  });

  it('returns 400 for invalid form data', async () => {
    const fd = createFormData({
      ...validFields,
      name: 'A',
      description: 'too short',
    });
    const res = await POST(makeRequest(fd));
    expect(res.status).toBe(400);
  });

  it('uploads to blob when BLOB_READ_WRITE_TOKEN set', async () => {
    const original = process.env.BLOB_READ_WRITE_TOKEN;
    process.env.BLOB_READ_WRITE_TOKEN = 'test-token';

    const fd = createFormData(validFields, [
      { name: 'plan.pdf', type: 'application/pdf', size: 1024 },
    ]);
    await POST(makeRequest(fd));
    expect(mockPut).toHaveBeenCalled();

    process.env.BLOB_READ_WRITE_TOKEN = original;
  });

  it('does not upload to blob when token not set', async () => {
    const original = process.env.BLOB_READ_WRITE_TOKEN;
    delete process.env.BLOB_READ_WRITE_TOKEN;

    const fd = createFormData(validFields, [
      { name: 'plan.pdf', type: 'application/pdf', size: 1024 },
    ]);
    await POST(makeRequest(fd));
    expect(mockPut).not.toHaveBeenCalled();

    process.env.BLOB_READ_WRITE_TOKEN = original;
  });

  it('verifies recaptcha with quote action', async () => {
    const fd = createFormData(validFields);
    await POST(makeRequest(fd));
    expect(mockVerifyRecaptcha).toHaveBeenCalledWith(
      'valid-token',
      'quote'
    );
  });

  it('returns 500 when email fails', async () => {
    mockSendQuoteEmail.mockRejectedValueOnce(
      new Error('Email error')
    );
    const fd = createFormData(validFields);
    const res = await POST(makeRequest(fd));
    expect(res.status).toBe(500);
  });

  it('passes fileNames to sendQuoteEmail', async () => {
    const fd = createFormData(validFields, [
      { name: 'doc.pdf', type: 'application/pdf', size: 512 },
    ]);
    await POST(makeRequest(fd));
    expect(mockSendQuoteEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        fileNames: expect.arrayContaining(['doc.pdf']),
      })
    );
  });
});
