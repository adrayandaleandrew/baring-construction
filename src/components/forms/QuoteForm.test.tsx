import { vi } from 'vitest';
import {
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuoteForm } from './QuoteForm';

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const mockGetRecaptchaToken = vi.fn().mockResolvedValue(
  'mock-recaptcha-token'
);
vi.mock('@/lib/recaptcha-client', () => ({
  getRecaptchaToken: (...args: unknown[]) =>
    mockGetRecaptchaToken(...args),
}));

const mockGaEvent = vi.fn();
vi.mock('@/lib/analytics', () => ({
  event: (...args: unknown[]) => mockGaEvent(...args),
}));

vi.mock('@/components/forms/FileUpload', () => ({
  FileUpload: ({
    onFilesChange,
  }: {
    files: File[];
    onFilesChange: (files: File[]) => void;
  }) => (
    <div data-testid="file-upload">
      <button
        type="button"
        onClick={() =>
          onFilesChange([
            new File(['test'], 'test.pdf', {
              type: 'application/pdf',
            }),
          ])
        }
      >
        Mock Upload
      </button>
    </div>
  ),
}));

describe('QuoteForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
    await user.type(
      screen.getByLabelText(/Full Name/),
      'Juan Dela Cruz'
    );
    await user.type(
      screen.getByLabelText(/Email Address/),
      'juan@example.com'
    );
    await user.type(
      screen.getByLabelText(/Phone Number/),
      '+63 956 315 0476'
    );
    await user.selectOptions(
      screen.getByLabelText(/Project Type/),
      'Residential Construction'
    );
    await user.type(
      screen.getByLabelText(/Project Location/),
      'Makati City'
    );
    await user.selectOptions(
      screen.getByLabelText(/Estimated Budget/),
      '₱1M - ₱3M'
    );
    await user.selectOptions(
      screen.getByLabelText(/Preferred Timeline/),
      '1-3 months'
    );
    await user.type(
      screen.getByLabelText(/Project Description/),
      'I need a new commercial building with full MEPF systems and modern interior finishing.'
    );
  }

  describe('Rendering', () => {
    it('renders 3 section headings', () => {
      render(<QuoteForm />);
      expect(
        screen.getByRole('heading', {
          name: /Personal Information/,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', {
          name: /Project Details/,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', {
          name: /Attachments/,
        })
      ).toBeInTheDocument();
    });

    it('renders personal info fields', () => {
      render(<QuoteForm />);
      expect(
        screen.getByLabelText(/Full Name/)
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(/Email Address/)
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(/Phone Number/)
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(/Company/)
      ).toBeInTheDocument();
    });

    it('renders project detail fields', () => {
      render(<QuoteForm />);
      expect(
        screen.getByLabelText(/Project Type/)
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(/Project Location/)
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(/Estimated Budget/)
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(/Preferred Timeline/)
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(/Project Description/)
      ).toBeInTheDocument();
    });

    it('renders FileUpload component', () => {
      render(<QuoteForm />);
      expect(
        screen.getByTestId('file-upload')
      ).toBeInTheDocument();
    });

    it('renders submit button', () => {
      render(<QuoteForm />);
      expect(
        screen.getByRole('button', {
          name: /Submit Quote Request/,
        })
      ).toBeInTheDocument();
    });

    it('renders description help text', () => {
      render(<QuoteForm />);
      expect(
        screen.getByText(/Minimum 50 characters/)
      ).toBeInTheDocument();
    });
  });

  describe('Validation', () => {
    it('shows errors on empty submit', async () => {
      const user = userEvent.setup();
      render(<QuoteForm />);
      await user.click(
        screen.getByRole('button', {
          name: /Submit Quote Request/,
        })
      );
      await waitFor(() => {
        expect(
          screen.getByText(/Name must be at least/)
        ).toBeInTheDocument();
      });
    });

    it('shows error for short description', async () => {
      const user = userEvent.setup();
      render(<QuoteForm />);
      await user.type(
        screen.getByLabelText(/Project Description/),
        'Too short description.'
      );
      await user.click(
        screen.getByRole('button', {
          name: /Submit Quote Request/,
        })
      );
      await waitFor(() => {
        expect(
          screen.getByText(/at least 50 characters/)
        ).toBeInTheDocument();
      });
    });
  });

  describe('Successful Submission', () => {
    it('submits and shows success message', async () => {
      const user = userEvent.setup();
      render(<QuoteForm />);
      await fillValidForm(user);
      await user.click(
        screen.getByRole('button', {
          name: /Submit Quote Request/,
        })
      );
      await waitFor(() => {
        expect(
          screen.getByText(/Quote Request Submitted!/)
        ).toBeInTheDocument();
      });
    });

    it('sends FormData to /api/quote', async () => {
      const user = userEvent.setup();
      render(<QuoteForm />);
      await fillValidForm(user);
      await user.click(
        screen.getByRole('button', {
          name: /Submit Quote Request/,
        })
      );
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
          '/api/quote',
          expect.objectContaining({
            method: 'POST',
          })
        );
      });
      const body = (
        global.fetch as ReturnType<typeof vi.fn>
      ).mock.calls[0][1].body;
      expect(body).toBeInstanceOf(FormData);
    });

    it('fires GA event on success', async () => {
      const user = userEvent.setup();
      render(<QuoteForm />);
      await fillValidForm(user);
      await user.click(
        screen.getByRole('button', {
          name: /Submit Quote Request/,
        })
      );
      await waitFor(() => {
        expect(mockGaEvent).toHaveBeenCalledWith(
          expect.objectContaining({
            action: 'quote_request_submitted',
            category: 'conversion',
          })
        );
      });
    });

    it('resets form on "Submit Another Request" click', async () => {
      const user = userEvent.setup();
      render(<QuoteForm />);
      await fillValidForm(user);
      await user.click(
        screen.getByRole('button', {
          name: /Submit Quote Request/,
        })
      );
      await waitFor(() => {
        expect(
          screen.getByText(/Quote Request Submitted!/)
        ).toBeInTheDocument();
      });
      await user.click(
        screen.getByRole('button', {
          name: /Submit Another Request/,
        })
      );
      expect(
        screen.getByLabelText(/Full Name/)
      ).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('shows error alert on fetch failure', async () => {
      (global.fetch as ReturnType<typeof vi.fn>)
        .mockResolvedValueOnce({ ok: false });
      const user = userEvent.setup();
      render(<QuoteForm />);
      await fillValidForm(user);
      await user.click(
        screen.getByRole('button', {
          name: /Submit Quote Request/,
        })
      );
      await waitFor(() => {
        expect(
          screen.getByRole('alert')
        ).toBeInTheDocument();
        expect(
          screen.getByText(/Something went wrong/)
        ).toBeInTheDocument();
      });
    });
  });
});
