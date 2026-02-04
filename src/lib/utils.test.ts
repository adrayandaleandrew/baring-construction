import { cn, formatCurrency, formatDate, slugify, truncate } from './utils';

describe('cn', () => {
  it('merges multiple class strings', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('handles conditional classes', () => {
    expect(cn('base', false && 'hidden', 'visible')).toBe(
      'base visible'
    );
  });

  it('handles undefined and null', () => {
    expect(cn('a', undefined, null, 'b')).toBe('a b');
  });

  it('returns empty string for no inputs', () => {
    expect(cn()).toBe('');
  });

  it('handles empty strings', () => {
    expect(cn('', 'a', '')).toBe('a');
  });
});

describe('formatCurrency', () => {
  it('formats zero', () => {
    const result = formatCurrency(0);
    expect(result).toContain('0');
    expect(result).toContain('₱');
  });

  it('formats small amount', () => {
    const result = formatCurrency(500);
    expect(result).toContain('500');
  });

  it('formats amount with comma separator', () => {
    const result = formatCurrency(1000000);
    expect(result).toMatch(/1[,.]000[,.]000/);
  });

  it('formats large amount', () => {
    const result = formatCurrency(50000000);
    expect(result).toContain('₱');
  });

  it('returns no decimal places', () => {
    const result = formatCurrency(1234);
    expect(result).not.toContain('.');
  });
});

describe('formatDate', () => {
  it('formats ISO date string', () => {
    const result = formatDate('2024-01-15');
    expect(result).toContain('January');
    expect(result).toContain('15');
    expect(result).toContain('2024');
  });

  it('formats another date', () => {
    const result = formatDate('2023-12-25');
    expect(result).toContain('December');
    expect(result).toContain('25');
    expect(result).toContain('2023');
  });

  it('formats date with time component', () => {
    const result = formatDate('2024-06-01T10:30:00Z');
    expect(result).toContain('2024');
  });
});

describe('slugify', () => {
  it('converts spaces to hyphens', () => {
    expect(slugify('hello world')).toBe('hello-world');
  });

  it('converts to lowercase', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('removes special characters', () => {
    expect(slugify('hello! @world#')).toBe('hello-world');
  });

  it('collapses multiple hyphens', () => {
    expect(slugify('hello---world')).toBe('hello-world');
  });

  it('collapses multiple spaces', () => {
    expect(slugify('hello   world')).toBe('hello-world');
  });

  it('handles empty string', () => {
    expect(slugify('')).toBe('');
  });

  it('handles string with only special chars', () => {
    expect(slugify('!@#$%')).toBe('');
  });
});

describe('truncate', () => {
  it('returns text shorter than max unchanged', () => {
    expect(truncate('short', 150)).toBe('short');
  });

  it('returns text at exact boundary unchanged', () => {
    const text = 'a'.repeat(150);
    expect(truncate(text, 150)).toBe(text);
  });

  it('truncates text longer than max with ellipsis', () => {
    const text = 'a'.repeat(200);
    const result = truncate(text, 150);
    expect(result).toHaveLength(153); // 150 + '...'
    expect(result.endsWith('...')).toBe(true);
  });

  it('uses default maxLength of 150', () => {
    const text = 'a'.repeat(200);
    const result = truncate(text);
    expect(result).toHaveLength(153);
  });

  it('trims trailing whitespace before ellipsis', () => {
    // 10 chars then spaces then more chars
    const text = 'hello     ' + 'a'.repeat(200);
    const result = truncate(text, 12);
    expect(result).not.toMatch(/\s\.\.\.$/);
  });
});
