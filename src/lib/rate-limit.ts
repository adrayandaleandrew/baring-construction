const requests = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3;

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = requests.get(ip) ?? [];

  // Remove stale entries outside the window
  const recent = timestamps.filter(
    (t) => now - t < RATE_LIMIT_WINDOW
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    requests.set(ip, recent);
    return true;
  }

  recent.push(now);
  requests.set(ip, recent);

  // Periodically clean up old IPs
  if (requests.size > 1000) {
    for (const [key, times] of requests) {
      const active = times.filter(
        (t) => now - t < RATE_LIMIT_WINDOW
      );
      if (active.length === 0) {
        requests.delete(key);
      } else {
        requests.set(key, active);
      }
    }
  }

  return false;
}

/** Reset all rate limit state (for testing). */
export function resetRateLimits(): void {
  requests.clear();
}
