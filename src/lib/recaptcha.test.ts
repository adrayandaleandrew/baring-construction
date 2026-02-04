import { vi, beforeEach, afterEach } from 'vitest';

const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);

// Need to dynamically import to pick up env changes
let verifyRecaptcha: typeof import('./recaptcha').verifyRecaptcha;

beforeEach(async () => {
  mockFetch.mockReset();
  vi.resetModules();
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe('verifyRecaptcha', () => {
  it('returns valid with score 1 when no secret key', async () => {
    vi.stubEnv('RECAPTCHA_SECRET_KEY', '');
    const mod = await import('./recaptcha');
    verifyRecaptcha = mod.verifyRecaptcha;

    const result = await verifyRecaptcha('token', 'contact');
    expect(result).toEqual({ valid: true, score: 1 });
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it('calls Google API with correct params', async () => {
    vi.stubEnv('RECAPTCHA_SECRET_KEY', 'test-secret');
    mockFetch.mockResolvedValue({
      json: () =>
        Promise.resolve({
          success: true,
          score: 0.9,
          action: 'contact',
        }),
    });

    const mod = await import('./recaptcha');
    verifyRecaptcha = mod.verifyRecaptcha;

    await verifyRecaptcha('test-token', 'contact');
    expect(mockFetch).toHaveBeenCalledTimes(1);
    const [url, options] = mockFetch.mock.calls[0];
    expect(url).toContain('recaptcha');
    expect(options.method).toBe('POST');
  });

  it('returns valid for high score and matching action', async () => {
    vi.stubEnv('RECAPTCHA_SECRET_KEY', 'test-secret');
    mockFetch.mockResolvedValue({
      json: () =>
        Promise.resolve({
          success: true,
          score: 0.9,
          action: 'contact',
        }),
    });

    const mod = await import('./recaptcha');
    verifyRecaptcha = mod.verifyRecaptcha;

    const result = await verifyRecaptcha('token', 'contact');
    expect(result.valid).toBe(true);
    expect(result.score).toBe(0.9);
  });

  it('returns invalid for low score', async () => {
    vi.stubEnv('RECAPTCHA_SECRET_KEY', 'test-secret');
    mockFetch.mockResolvedValue({
      json: () =>
        Promise.resolve({
          success: true,
          score: 0.2,
          action: 'contact',
        }),
    });

    const mod = await import('./recaptcha');
    verifyRecaptcha = mod.verifyRecaptcha;

    const result = await verifyRecaptcha('token', 'contact');
    expect(result.valid).toBe(false);
  });

  it('returns invalid for wrong action', async () => {
    vi.stubEnv('RECAPTCHA_SECRET_KEY', 'test-secret');
    mockFetch.mockResolvedValue({
      json: () =>
        Promise.resolve({
          success: true,
          score: 0.9,
          action: 'wrong-action',
        }),
    });

    const mod = await import('./recaptcha');
    verifyRecaptcha = mod.verifyRecaptcha;

    const result = await verifyRecaptcha('token', 'contact');
    expect(result.valid).toBe(false);
  });

  it('returns invalid when success is false', async () => {
    vi.stubEnv('RECAPTCHA_SECRET_KEY', 'test-secret');
    mockFetch.mockResolvedValue({
      json: () =>
        Promise.resolve({
          success: false,
          score: 0.9,
          action: 'contact',
        }),
    });

    const mod = await import('./recaptcha');
    verifyRecaptcha = mod.verifyRecaptcha;

    const result = await verifyRecaptcha('token', 'contact');
    expect(result.valid).toBe(false);
  });

  it('returns score 0 when score is missing', async () => {
    vi.stubEnv('RECAPTCHA_SECRET_KEY', 'test-secret');
    mockFetch.mockResolvedValue({
      json: () =>
        Promise.resolve({
          success: false,
          action: 'contact',
        }),
    });

    const mod = await import('./recaptcha');
    verifyRecaptcha = mod.verifyRecaptcha;

    const result = await verifyRecaptcha('token', 'contact');
    expect(result.score).toBe(0);
  });
});
