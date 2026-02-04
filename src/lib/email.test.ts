import { vi } from 'vitest';

const mockSend = vi.fn().mockResolvedValue({ id: 'test-id' });

vi.mock('resend', () => {
  return {
    Resend: class MockResend {
      emails = { send: mockSend };
    },
  };
});

// Must re-import after mock to reset the cached _resend singleton
let sendContactEmail: typeof import('./email').sendContactEmail;
let sendQuoteEmail: typeof import('./email').sendQuoteEmail;
let sendAutoReply: typeof import('./email').sendAutoReply;

beforeEach(async () => {
  mockSend.mockClear();
  // Reset the module to clear the _resend singleton
  vi.resetModules();
  const mod = await import('./email');
  sendContactEmail = mod.sendContactEmail;
  sendQuoteEmail = mod.sendQuoteEmail;
  sendAutoReply = mod.sendAutoReply;
});

describe('sendContactEmail', () => {
  const data = {
    name: 'Juan Dela Cruz',
    email: 'juan@example.com',
    phone: '09171234567',
    projectType: 'Residential Construction',
    message: 'I need a house built.',
  };

  it('calls resend with correct from/to', async () => {
    await sendContactEmail(data);
    expect(mockSend).toHaveBeenCalledTimes(1);
    const args = mockSend.mock.calls[0][0];
    expect(args.to).toBe('baringcons@gmail.com');
    expect(args.from).toBeTruthy();
  });

  it('sets subject with name and project type', async () => {
    await sendContactEmail(data);
    const args = mockSend.mock.calls[0][0];
    expect(args.subject).toContain('Juan Dela Cruz');
    expect(args.subject).toContain('Residential Construction');
  });

  it('sets replyTo to sender email', async () => {
    await sendContactEmail(data);
    const args = mockSend.mock.calls[0][0];
    expect(args.replyTo).toBe('juan@example.com');
  });

  it('HTML-escapes ampersand', async () => {
    await sendContactEmail({
      ...data,
      name: 'Tom & Jerry',
    });
    const html = mockSend.mock.calls[0][0].html;
    expect(html).toContain('Tom &amp; Jerry');
    expect(html).not.toContain('Tom & Jerry');
  });

  it('HTML-escapes angle brackets', async () => {
    await sendContactEmail({
      ...data,
      message: '<script>alert("xss")</script>',
    });
    const html = mockSend.mock.calls[0][0].html;
    expect(html).toContain('&lt;script&gt;');
    expect(html).not.toContain('<script>');
  });

  it('HTML-escapes quotes', async () => {
    await sendContactEmail({
      ...data,
      name: 'John "JD" Doe',
    });
    const html = mockSend.mock.calls[0][0].html;
    expect(html).toContain('&quot;JD&quot;');
  });

  it("HTML-escapes single quotes", async () => {
    await sendContactEmail({
      ...data,
      name: "O'Brien",
    });
    const html = mockSend.mock.calls[0][0].html;
    expect(html).toContain('O&#039;Brien');
  });
});

describe('sendQuoteEmail', () => {
  const data = {
    name: 'Maria Santos',
    email: 'maria@example.com',
    phone: '+639171234567',
    projectType: 'Commercial Construction',
    location: 'Batangas City',
    budget: '₱1M - ₱3M',
    timeline: '1-3 months',
    description: 'Office fit-out project.',
  };

  it('sends email with correct subject', async () => {
    await sendQuoteEmail(data);
    const args = mockSend.mock.calls[0][0];
    expect(args.subject).toContain('Maria Santos');
    expect(args.subject).toContain('Commercial Construction');
  });

  it('includes file links in HTML when provided', async () => {
    await sendQuoteEmail({
      ...data,
      fileLinks: [
        {
          name: 'plan.pdf',
          url: 'https://blob.example.com/plan.pdf',
        },
      ],
    });
    const html = mockSend.mock.calls[0][0].html;
    expect(html).toContain('plan.pdf');
    expect(html).toContain(
      'https://blob.example.com/plan.pdf'
    );
  });

  it('includes file names when no links', async () => {
    await sendQuoteEmail({
      ...data,
      fileNames: ['document.pdf', 'photo.jpg'],
    });
    const html = mockSend.mock.calls[0][0].html;
    expect(html).toContain('document.pdf');
    expect(html).toContain('photo.jpg');
  });

  it('works without files', async () => {
    await sendQuoteEmail(data);
    const html = mockSend.mock.calls[0][0].html;
    expect(html).not.toContain('Attachments');
  });

  it('includes company when provided', async () => {
    await sendQuoteEmail({
      ...data,
      company: 'Baring Corp',
    });
    const html = mockSend.mock.calls[0][0].html;
    expect(html).toContain('Baring Corp');
  });

  it('omits company row when not provided', async () => {
    await sendQuoteEmail(data);
    const html = mockSend.mock.calls[0][0].html;
    expect(html).not.toContain('Company:');
  });
});

describe('sendAutoReply', () => {
  it('sends to the correct recipient', async () => {
    await sendAutoReply('user@example.com', 'Juan');
    const args = mockSend.mock.calls[0][0];
    expect(args.to).toBe('user@example.com');
  });

  it('includes escaped name in HTML', async () => {
    await sendAutoReply('user@example.com', 'Tom & Jerry');
    const html = mockSend.mock.calls[0][0].html;
    expect(html).toContain('Tom &amp; Jerry');
  });

  it('has a thank you subject line', async () => {
    await sendAutoReply('user@example.com', 'Juan');
    const args = mockSend.mock.calls[0][0];
    expect(args.subject.toLowerCase()).toContain('thank you');
  });
});
