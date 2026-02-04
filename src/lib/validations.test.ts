import { ContactFormSchema, QuoteFormSchema } from './validations';

const validContact = {
  name: 'Juan Dela Cruz',
  email: 'juan@example.com',
  phone: '09171234567',
  projectType: 'Residential Construction' as const,
  message: 'I need help with my construction project.',
};

const validQuote = {
  name: 'Maria Santos',
  email: 'maria@example.com',
  phone: '+63 917 123 4567',
  projectType: 'Commercial Construction' as const,
  location: 'Batangas City, Batangas',
  budget: '₱1M - ₱3M' as const,
  timeline: '1-3 months' as const,
  description:
    'We need a complete commercial fit-out for our new office space including electrical, plumbing, and interior finishing.',
};

describe('ContactFormSchema', () => {
  it('accepts valid contact data', () => {
    const result = ContactFormSchema.safeParse(validContact);
    expect(result.success).toBe(true);
  });

  // Name field
  describe('name', () => {
    it('rejects name shorter than 2 chars', () => {
      const result = ContactFormSchema.safeParse({
        ...validContact,
        name: 'A',
      });
      expect(result.success).toBe(false);
    });

    it('accepts name with exactly 2 chars', () => {
      const result = ContactFormSchema.safeParse({
        ...validContact,
        name: 'AB',
      });
      expect(result.success).toBe(true);
    });

    it('rejects name longer than 100 chars', () => {
      const result = ContactFormSchema.safeParse({
        ...validContact,
        name: 'A'.repeat(101),
      });
      expect(result.success).toBe(false);
    });

    it('accepts name with exactly 100 chars', () => {
      const result = ContactFormSchema.safeParse({
        ...validContact,
        name: 'A'.repeat(100),
      });
      expect(result.success).toBe(true);
    });
  });

  // Email field
  describe('email', () => {
    it('rejects invalid email', () => {
      const result = ContactFormSchema.safeParse({
        ...validContact,
        email: 'not-an-email',
      });
      expect(result.success).toBe(false);
    });

    it('rejects email without domain', () => {
      const result = ContactFormSchema.safeParse({
        ...validContact,
        email: 'test@',
      });
      expect(result.success).toBe(false);
    });
  });

  // Phone field
  describe('phone', () => {
    it('accepts Philippine mobile starting with 09', () => {
      const result = ContactFormSchema.safeParse({
        ...validContact,
        phone: '09171234567',
      });
      expect(result.success).toBe(true);
    });

    it('accepts phone with +63 prefix', () => {
      const result = ContactFormSchema.safeParse({
        ...validContact,
        phone: '+639171234567',
      });
      expect(result.success).toBe(true);
    });

    it('accepts phone with spaces and dashes', () => {
      const result = ContactFormSchema.safeParse({
        ...validContact,
        phone: '+63 917-123-4567',
      });
      expect(result.success).toBe(true);
    });

    it('rejects phone that is too short', () => {
      const result = ContactFormSchema.safeParse({
        ...validContact,
        phone: '0917',
      });
      expect(result.success).toBe(false);
    });
  });

  // Project type field
  describe('projectType', () => {
    const validTypes = [
      'Residential Construction',
      'Commercial Construction',
      'Electrical Works',
      'Civil & Structural Works',
      'MEPF Services',
      'Renovation/Fit-out',
      'Other',
    ];

    it.each(validTypes)('accepts "%s"', (type) => {
      const result = ContactFormSchema.safeParse({
        ...validContact,
        projectType: type,
      });
      expect(result.success).toBe(true);
    });

    it('rejects invalid project type', () => {
      const result = ContactFormSchema.safeParse({
        ...validContact,
        projectType: 'Invalid Type',
      });
      expect(result.success).toBe(false);
    });
  });

  // Message field
  describe('message', () => {
    it('rejects message shorter than 10 chars', () => {
      const result = ContactFormSchema.safeParse({
        ...validContact,
        message: 'Too short',
      });
      expect(result.success).toBe(false);
    });

    it('accepts message with exactly 10 chars', () => {
      const result = ContactFormSchema.safeParse({
        ...validContact,
        message: '1234567890',
      });
      expect(result.success).toBe(true);
    });

    it('rejects message longer than 1000 chars', () => {
      const result = ContactFormSchema.safeParse({
        ...validContact,
        message: 'A'.repeat(1001),
      });
      expect(result.success).toBe(false);
    });

    it('accepts message with exactly 1000 chars', () => {
      const result = ContactFormSchema.safeParse({
        ...validContact,
        message: 'A'.repeat(1000),
      });
      expect(result.success).toBe(true);
    });
  });
});

describe('QuoteFormSchema', () => {
  it('accepts valid quote data', () => {
    const result = QuoteFormSchema.safeParse(validQuote);
    expect(result.success).toBe(true);
  });

  it('accepts quote with optional company', () => {
    const result = QuoteFormSchema.safeParse({
      ...validQuote,
      company: 'Baring Corp',
    });
    expect(result.success).toBe(true);
  });

  it('accepts quote with empty company', () => {
    const result = QuoteFormSchema.safeParse({
      ...validQuote,
      company: '',
    });
    expect(result.success).toBe(true);
  });

  it('accepts quote without company field', () => {
    const { company: _, ...noCompany } = validQuote;
    const result = QuoteFormSchema.safeParse(noCompany);
    expect(result.success).toBe(true);
  });

  // Project types unique to QuoteForm
  describe('projectType', () => {
    it('accepts Swimming Pool & Landscaping', () => {
      const result = QuoteFormSchema.safeParse({
        ...validQuote,
        projectType: 'Swimming Pool & Landscaping',
      });
      expect(result.success).toBe(true);
    });

    it('accepts Industrial Projects', () => {
      const result = QuoteFormSchema.safeParse({
        ...validQuote,
        projectType: 'Industrial Projects',
      });
      expect(result.success).toBe(true);
    });
  });

  // Location field
  describe('location', () => {
    it('rejects location shorter than 3 chars', () => {
      const result = QuoteFormSchema.safeParse({
        ...validQuote,
        location: 'AB',
      });
      expect(result.success).toBe(false);
    });

    it('accepts location with exactly 3 chars', () => {
      const result = QuoteFormSchema.safeParse({
        ...validQuote,
        location: 'QC ',
      });
      expect(result.success).toBe(true);
    });

    it('rejects location longer than 200 chars', () => {
      const result = QuoteFormSchema.safeParse({
        ...validQuote,
        location: 'A'.repeat(201),
      });
      expect(result.success).toBe(false);
    });
  });

  // Budget field
  describe('budget', () => {
    const validBudgets = [
      '₱500K - ₱1M',
      '₱1M - ₱3M',
      '₱3M - ₱5M',
      '₱5M - ₱10M',
      '₱10M+',
      'Not Sure Yet',
    ];

    it.each(validBudgets)('accepts "%s"', (budget) => {
      const result = QuoteFormSchema.safeParse({
        ...validQuote,
        budget,
      });
      expect(result.success).toBe(true);
    });

    it('rejects invalid budget', () => {
      const result = QuoteFormSchema.safeParse({
        ...validQuote,
        budget: 'Free',
      });
      expect(result.success).toBe(false);
    });
  });

  // Timeline field
  describe('timeline', () => {
    const validTimelines = [
      'ASAP (Within 1 month)',
      '1-3 months',
      '3-6 months',
      '6+ months',
      'Flexible',
    ];

    it.each(validTimelines)('accepts "%s"', (timeline) => {
      const result = QuoteFormSchema.safeParse({
        ...validQuote,
        timeline,
      });
      expect(result.success).toBe(true);
    });

    it('rejects invalid timeline', () => {
      const result = QuoteFormSchema.safeParse({
        ...validQuote,
        timeline: 'Yesterday',
      });
      expect(result.success).toBe(false);
    });
  });

  // Description field
  describe('description', () => {
    it('rejects description shorter than 50 chars', () => {
      const result = QuoteFormSchema.safeParse({
        ...validQuote,
        description: 'Too short for a project description.',
      });
      expect(result.success).toBe(false);
    });

    it('accepts description with exactly 50 chars', () => {
      const result = QuoteFormSchema.safeParse({
        ...validQuote,
        description: 'A'.repeat(50),
      });
      expect(result.success).toBe(true);
    });

    it('rejects description longer than 2000 chars', () => {
      const result = QuoteFormSchema.safeParse({
        ...validQuote,
        description: 'A'.repeat(2001),
      });
      expect(result.success).toBe(false);
    });

    it('accepts description with exactly 2000 chars', () => {
      const result = QuoteFormSchema.safeParse({
        ...validQuote,
        description: 'A'.repeat(2000),
      });
      expect(result.success).toBe(true);
    });
  });
});
