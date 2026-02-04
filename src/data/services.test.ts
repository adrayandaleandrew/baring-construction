import { SERVICES } from './services';

describe('SERVICES data', () => {
  it('has 6 services', () => {
    expect(SERVICES).toHaveLength(6);
  });

  it('has unique IDs', () => {
    const ids = SERVICES.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has unique slugs', () => {
    const slugs = SERVICES.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('has sequential order 1-6', () => {
    const orders = SERVICES.map((s) => s.order).sort();
    expect(orders).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it.each(SERVICES.map((s) => [s.title, s]))(
    '%s has subServices',
    (_title, service) => {
      expect(service.subServices.length).toBeGreaterThan(0);
    }
  );

  it.each(SERVICES.map((s) => [s.title, s]))(
    '%s has FAQs',
    (_title, service) => {
      expect(service.faqs.length).toBeGreaterThan(0);
    }
  );

  it.each(SERVICES.map((s) => [s.title, s]))(
    '%s has metadata with metaTitle and metaDescription',
    (_title, service) => {
      expect(service.metadata.metaTitle).toBeTruthy();
      expect(service.metadata.metaDescription).toBeTruthy();
      expect(service.metadata.keywords.length).toBeGreaterThan(0);
    }
  );

  it('all have valid icon names (non-empty strings)', () => {
    for (const service of SERVICES) {
      expect(service.icon).toBeTruthy();
      expect(typeof service.icon).toBe('string');
    }
  });

  it('all subServices have features', () => {
    for (const service of SERVICES) {
      for (const sub of service.subServices) {
        expect(sub.features.length).toBeGreaterThan(0);
        expect(sub.title).toBeTruthy();
        expect(sub.description).toBeTruthy();
      }
    }
  });
});
