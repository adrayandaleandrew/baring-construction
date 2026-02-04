const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_THRESHOLD = 0.5;

interface RecaptchaResponse {
  success: boolean;
  score: number;
  action: string;
  'error-codes'?: string[];
}

export async function verifyRecaptcha(
  token: string,
  expectedAction: string
): Promise<{ valid: boolean; score: number }> {
  if (!RECAPTCHA_SECRET_KEY) {
    // Skip verification if secret key not configured
    return { valid: true, score: 1 };
  }

  const res = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    }
  );

  const data: RecaptchaResponse = await res.json();

  return {
    valid:
      data.success &&
      data.score >= RECAPTCHA_THRESHOLD &&
      data.action === expectedAction,
    score: data.score ?? 0,
  };
}
