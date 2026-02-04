declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export function pageview(url: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
}

interface EventParams {
  action: string;
  category: string;
  label: string;
  value?: number;
}

export function event({
  action,
  category,
  label,
  value,
}: EventParams): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}
