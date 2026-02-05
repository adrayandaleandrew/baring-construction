import { vi } from 'vitest';
import {
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from './ContactForm';

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

describe('ContactForm', () => {
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
      screen.getByLabelText(/Message/),
      'I need a new house built in Batangas.'
    );
  }

  describe('Rendering', () => {
    it('renders all 5 form fields', () => {
      render(<ContactForm />);
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
        screen.getByLabelText(/Project Type/)
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(/Message/)
      ).toBeInTheDocument();
    });

    it('renders submit button', () => {
      render(<ContactForm />);
      expect(
        screen.getByRole('button', {
          name: /Send Message/,
        })
      ).toBeInTheDocument();
    });
  });

  describe('Validation', () => {
    it('shows errors on empty submit', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);
      await user.click(
        screen.getByRole('button', {
          name: /Send Message/,
        })
      );
      await waitFor(() => {
        expect(
          screen.getByText(/Name must be at least/)
        ).toBeInTheDocument();
      });
    });

    it('shows error for invalid email', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);
      await user.type(
        screen.getByLabelText(/Email Address/),
        'not-an-email'
      );
      await user.click(
        screen.getByRole('button', {
          name: /Send Message/,
        })
      );
      await waitFor(() => {
        expect(
          screen.getByText(/Invalid email/)
        ).toBeInTheDocument();
      });
    });

    it('shows error for short message', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);
      await user.type(
        screen.getByLabelText(/Message/),
        'short'
      );
      await user.click(
        screen.getByRole('button', {
          name: /Send Message/,
        })
      );
      await waitFor(() => {
        expect(
          screen.getByText(/Message must be at least 10/)
        ).toBeInTheDocument();
      });
    });
  });

  describe('Successful Submission', () => {
    it('submits and shows success message', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);
      await fillValidForm(user);
      await user.click(
        screen.getByRole('button', {
          name: /Send Message/,
        })
      );
      await waitFor(() => {
        expect(
          screen.getByText(/Message Sent!/)
        ).toBeInTheDocument();
      });
    });

    it('calls fetch with correct data and recaptcha token', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);
      await fillValidForm(user);
      await user.click(
        screen.getByRole('button', {
          name: /Send Message/,
        })
      );
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
          '/api/contact',
          expect.objectContaining({
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          })
        );
      });
      const body = JSON.parse(
        (global.fetch as ReturnType<typeof vi.fn>).mock
          .calls[0][1].body
      );
      expect(body.recaptchaToken).toBe(
        'mock-recaptcha-token'
      );
      expect(body.name).toBe('Juan Dela Cruz');
    });

    it('fires GA event on success', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);
      await fillValidForm(user);
      await user.click(
        screen.getByRole('button', {
          name: /Send Message/,
        })
      );
      await waitFor(() => {
        expect(mockGaEvent).toHaveBeenCalledWith(
          expect.objectContaining({
            action: 'contact_form_submitted',
            category: 'engagement',
          })
        );
      });
    });

    it('form resets on "Send Another Message" click', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);
      await fillValidForm(user);
      await user.click(
        screen.getByRole('button', {
          name: /Send Message/,
        })
      );
      await waitFor(() => {
        expect(
          screen.getByText(/Message Sent!/)
        ).toBeInTheDocument();
      });
      await user.click(
        screen.getByRole('button', {
          name: /Send Another Message/,
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
      render(<ContactForm />);
      await fillValidForm(user);
      await user.click(
        screen.getByRole('button', {
          name: /Send Message/,
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

    it('allows retry after error', async () => {
      (global.fetch as ReturnType<typeof vi.fn>)
        .mockResolvedValueOnce({ ok: false })
        .mockResolvedValueOnce({
          ok: true,
          json: () =>
            Promise.resolve({ success: true }),
        });
      const user = userEvent.setup();
      render(<ContactForm />);
      await fillValidForm(user);
      await user.click(
        screen.getByRole('button', {
          name: /Send Message/,
        })
      );
      await waitFor(() => {
        expect(
          screen.getByRole('alert')
        ).toBeInTheDocument();
      });
      await user.click(
        screen.getByRole('button', {
          name: /Send Message/,
        })
      );
      await waitFor(() => {
        expect(
          screen.getByText(/Message Sent!/)
        ).toBeInTheDocument();
      });
    });
  });

  describe('Loading State', () => {
    it('submit button is disabled while submitting', async () => {
      let resolveSubmit: (value: unknown) => void;
      (global.fetch as ReturnType<typeof vi.fn>)
        .mockImplementationOnce(
          () =>
            new Promise((resolve) => {
              resolveSubmit = resolve;
            })
        );
      const user = userEvent.setup();
      render(<ContactForm />);
      await fillValidForm(user);
      await user.click(
        screen.getByRole('button', {
          name: /Send Message/,
        })
      );
      await waitFor(() => {
        const btn = screen.getByRole('button', {
          name: /Send Message/,
        });
        expect(btn).toBeDisabled();
      });
      resolveSubmit!({
        ok: true,
        json: () =>
          Promise.resolve({ success: true }),
      });
    });
  });
});
