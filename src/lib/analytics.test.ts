import { vi, beforeEach, afterEach } from 'vitest';
import { pageview, event } from './analytics';

describe('analytics', () => {
  const mockGtag = vi.fn();

  beforeEach(() => {
    mockGtag.mockClear();
    window.gtag = mockGtag;
  });

  afterEach(() => {
    delete window.gtag;
  });

  describe('pageview', () => {
    it('calls gtag with config and page_path', () => {
      pageview('/about');
      expect(mockGtag).toHaveBeenCalledWith(
        'config',
        undefined, // GA_TRACKING_ID not set in test env
        { page_path: '/about' }
      );
    });

    it('does not crash when gtag is undefined', () => {
      delete window.gtag;
      expect(() => pageview('/test')).not.toThrow();
    });
  });

  describe('event', () => {
    it('calls gtag with event params', () => {
      event({
        action: 'form_submit',
        category: 'contact',
        label: 'homepage',
      });
      expect(mockGtag).toHaveBeenCalledWith(
        'event',
        'form_submit',
        {
          event_category: 'contact',
          event_label: 'homepage',
          value: undefined,
        }
      );
    });

    it('includes value when provided', () => {
      event({
        action: 'click',
        category: 'cta',
        label: 'quote',
        value: 1,
      });
      expect(mockGtag).toHaveBeenCalledWith(
        'event',
        'click',
        expect.objectContaining({ value: 1 })
      );
    });

    it('does not crash when gtag is undefined', () => {
      delete window.gtag;
      expect(() =>
        event({
          action: 'test',
          category: 'test',
          label: 'test',
        })
      ).not.toThrow();
    });
  });
});
