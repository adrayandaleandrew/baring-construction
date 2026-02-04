const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

let scriptLoaded = false;

function loadScript(): Promise<void> {
  if (scriptLoaded || !SITE_KEY) return Promise.resolve();
  if (typeof window === 'undefined') return Promise.resolve();

  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.onload = () => {
      scriptLoaded = true;
      resolve();
    };
    document.head.appendChild(script);
  });
}

export async function getRecaptchaToken(
  action: string
): Promise<string | null> {
  if (!SITE_KEY) return null;

  await loadScript();

  return new Promise((resolve) => {
    window.grecaptcha?.ready(async () => {
      try {
        const token = await window.grecaptcha!.execute(
          SITE_KEY,
          { action }
        );
        resolve(token);
      } catch {
        resolve(null);
      }
    });
  });
}
