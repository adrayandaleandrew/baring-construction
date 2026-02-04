import { PROJECTS } from './projects';

const validCategories = [
  'residential',
  'commercial',
  'educational',
  'industrial',
  'electrical',
];

describe('PROJECTS data', () => {
  it('has 10 projects', () => {
    expect(PROJECTS).toHaveLength(10);
  });

  it('has unique IDs', () => {
    const ids = PROJECTS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has unique slugs', () => {
    const slugs = PROJECTS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it.each(PROJECTS.map((p) => [p.title, p]))(
    '%s has a valid category',
    (_title, project) => {
      expect(validCategories).toContain(project.category);
    }
  );

  it.each(PROJECTS.map((p) => [p.title, p]))(
    '%s has at least one primary image',
    (_title, project) => {
      const primary = project.images.filter((i) => i.isPrimary);
      expect(primary.length).toBeGreaterThanOrEqual(1);
    }
  );

  it.each(PROJECTS.map((p) => [p.title, p]))(
    '%s has a valid completion date',
    (_title, project) => {
      const date = new Date(project.completionDate);
      expect(date.toString()).not.toBe('Invalid Date');
    }
  );

  it('all relatedProjects reference valid IDs', () => {
    const allIds = new Set(PROJECTS.map((p) => p.id));
    for (const project of PROJECTS) {
      for (const relId of project.relatedProjects) {
        expect(allIds.has(relId)).toBe(true);
      }
    }
  });

  it.each(PROJECTS.map((p) => [p.title, p]))(
    '%s has metadata',
    (_title, project) => {
      expect(project.metadata.metaTitle).toBeTruthy();
      expect(project.metadata.metaDescription).toBeTruthy();
      expect(project.metadata.keywords.length).toBeGreaterThan(0);
    }
  );

  it('all images have url and alt text', () => {
    for (const project of PROJECTS) {
      for (const image of project.images) {
        expect(image.url).toBeTruthy();
        expect(image.alt).toBeTruthy();
      }
    }
  });

  it('all projects have services listed', () => {
    for (const project of PROJECTS) {
      expect(project.services.length).toBeGreaterThan(0);
    }
  });

  it('all projects have descriptions', () => {
    for (const project of PROJECTS) {
      expect(project.description).toBeTruthy();
    }
  });
});
