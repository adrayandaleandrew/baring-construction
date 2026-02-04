import { vi, beforeEach, afterEach } from 'vitest';

let getRecaptchaToken: typeof import('./recaptcha-client').getRecaptchaToken;

beforeEach(() => {
  vi.resetModules();
});

afterEach(() => {
  vi.unstubAllEnvs();
  delete window.grecaptcha;
});

describe('getRecaptchaToken', () => {
  it('returns null when no site key is set', async () => {
    vi.stubEnv('NEXT_PUBLIC_RECAPTCHA_SITE_KEY', '');
    const mod = await import('./recaptcha-client');
    getRecaptchaToken = mod.getRecaptchaToken;

    const result = await getRecaptchaToken('contact');
    expect(result).toBeNull();
  });

  it('loads script and returns token', async () => {
    vi.stubEnv('NEXT_PUBLIC_RECAPTCHA_SITE_KEY', 'test-key');

    // Mock document.createElement to simulate script loading
    const origCreateElement = document.createElement.bind(document);
    const mockCreateElement = vi.fn((tag: string) => {
      const el = origCreateElement(tag);
      if (tag === 'script') {
        // Simulate async script load
        setTimeout(() => {
          window.grecaptcha = {
            ready: (cb: () => void) => cb(),
            execute: vi
              .fn()
              .mockResolvedValue('mock-token'),
          };
          el.onload?.call(el, new Event('load'));
        }, 0);
      }
      return el;
    });
    vi.spyOn(document, 'createElement').mockImplementation(
      mockCreateElement
    );

    const mod = await import('./recaptcha-client');
    getRecaptchaToken = mod.getRecaptchaToken;

    const result = await getRecaptchaToken('contact');
    expect(result).toBe('mock-token');

    vi.restoreAllMocks();
  });

  it('returns null when grecaptcha.execute throws', async () => {
    vi.stubEnv('NEXT_PUBLIC_RECAPTCHA_SITE_KEY', 'test-key');

    // Pre-set grecaptcha so script loading is skipped
    window.grecaptcha = {
      ready: (cb: () => void) => cb(),
      execute: vi.fn().mockRejectedValue(new Error('Failed')),
    };

    // Mock createElement to simulate the script already loaded
    const origCreateElement = document.createElement.bind(document);
    vi.spyOn(document, 'createElement').mockImplementation(
      (tag: string) => {
        const el = origCreateElement(tag);
        if (tag === 'script') {
          setTimeout(() => el.onload?.call(el, new Event('load')), 0);
        }
        return el;
      }
    );

    const mod = await import('./recaptcha-client');
    getRecaptchaToken = mod.getRecaptchaToken;

    const result = await getRecaptchaToken('contact');
    expect(result).toBeNull();

    vi.restoreAllMocks();
  });
});
