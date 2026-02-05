import { isRateLimited, resetRateLimits } from './rate-limit';

beforeEach(() => {
  resetRateLimits();
});

describe('isRateLimited', () => {
  it('allows first request', () => {
    expect(isRateLimited('1.2.3.4')).toBe(false);
  });

  it('allows up to 3 requests', () => {
    expect(isRateLimited('1.2.3.4')).toBe(false);
    expect(isRateLimited('1.2.3.4')).toBe(false);
    expect(isRateLimited('1.2.3.4')).toBe(false);
  });

  it('blocks 4th request from same IP', () => {
    isRateLimited('1.2.3.4');
    isRateLimited('1.2.3.4');
    isRateLimited('1.2.3.4');
    expect(isRateLimited('1.2.3.4')).toBe(true);
  });

  it('does not confuse IPs with shared prefix', () => {
    // Fill up 192.168.1.1
    isRateLimited('192.168.1.1');
    isRateLimited('192.168.1.1');
    isRateLimited('192.168.1.1');

    // 192.168.1.10 should still be allowed
    expect(isRateLimited('192.168.1.10')).toBe(false);
  });

  it('tracks different IPs independently', () => {
    isRateLimited('10.0.0.1');
    isRateLimited('10.0.0.1');
    isRateLimited('10.0.0.1');

    expect(isRateLimited('10.0.0.1')).toBe(true);
    expect(isRateLimited('10.0.0.2')).toBe(false);
  });

  it('resets after window expires', () => {
    vi.useFakeTimers();

    isRateLimited('1.2.3.4');
    isRateLimited('1.2.3.4');
    isRateLimited('1.2.3.4');
    expect(isRateLimited('1.2.3.4')).toBe(true);

    // Advance past the 60s window
    vi.advanceTimersByTime(61_000);

    expect(isRateLimited('1.2.3.4')).toBe(false);

    vi.useRealTimers();
  });
});
