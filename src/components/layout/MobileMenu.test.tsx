import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MobileMenu } from './MobileMenu';
import { NAV_ITEMS, FOOTER_LINKS } from '@/data/navigation';
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants';

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

vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => {
    const { fill, priority, ...rest } = props;
    void fill;
    void priority;
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...rest} />;
  },
}));

const mockPathname = vi.fn().mockReturnValue('/');
vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname(),
}));

describe('MobileMenu', () => {
  const onClose = vi.fn();

  beforeEach(() => {
    onClose.mockClear();
    document.body.style.overflow = '';
  });

  afterEach(() => {
    document.body.style.overflow = '';
  });

  describe('Rendering', () => {
    it('renders nothing when open=false', () => {
      const { container } = render(
        <MobileMenu open={false} onClose={onClose} />
      );
      expect(
        container.querySelector('[role="dialog"]')
      ).not.toBeInTheDocument();
    });

    it('renders dialog when open=true', () => {
      render(
        <MobileMenu open={true} onClose={onClose} />
      );
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('renders company name', () => {
      render(
        <MobileMenu open={true} onClose={onClose} />
      );
      expect(
        screen.getByText(SITE_CONFIG.shortName)
      ).toBeInTheDocument();
    });

    it('renders logo image', () => {
      render(
        <MobileMenu open={true} onClose={onClose} />
      );
      expect(
        screen.getByAltText(`${SITE_CONFIG.shortName} logo`)
      ).toBeInTheDocument();
    });
  });

  describe('Nav Links', () => {
    it('renders all non-CTA nav items', () => {
      render(
        <MobileMenu open={true} onClose={onClose} />
      );
      const nonCtaItems = NAV_ITEMS.filter(
        (item) => !item.cta && !item.dropdown
      );
      for (const item of nonCtaItems) {
        expect(
          screen.getByRole('link', { name: item.label })
        ).toBeInTheDocument();
      }
    });

    it('renders Request Quote button in footer', () => {
      render(
        <MobileMenu open={true} onClose={onClose} />
      );
      expect(
        screen.getByRole('link', { name: /Request Quote/ })
      ).toBeInTheDocument();
    });

    it('renders phone link', () => {
      render(
        <MobileMenu open={true} onClose={onClose} />
      );
      const phoneLink = screen.getByRole('link', {
        name: new RegExp(
          CONTACT_INFO.phone!.replace(/[+()]/g, '\\$&')
        ),
      });
      expect(phoneLink).toHaveAttribute(
        'href',
        `tel:${CONTACT_INFO.phone!.replace(/\s/g, '')}`
      );
    });
  });

  describe('Services Dropdown', () => {
    it('toggles services dropdown on click', async () => {
      const user = userEvent.setup();
      render(
        <MobileMenu open={true} onClose={onClose} />
      );
      const servicesBtn = screen.getByRole('button', {
        name: /Services/,
      });
      expect(servicesBtn).toHaveAttribute(
        'aria-expanded',
        'false'
      );

      await user.click(servicesBtn);
      expect(servicesBtn).toHaveAttribute(
        'aria-expanded',
        'true'
      );
    });

    it('collapses dropdown on second click', async () => {
      const user = userEvent.setup();
      render(
        <MobileMenu open={true} onClose={onClose} />
      );
      const servicesBtn = screen.getByRole('button', {
        name: /Services/,
      });

      await user.click(servicesBtn);
      expect(servicesBtn).toHaveAttribute(
        'aria-expanded',
        'true'
      );

      await user.click(servicesBtn);
      expect(servicesBtn).toHaveAttribute(
        'aria-expanded',
        'false'
      );
    });
  });

  describe('Close Behavior', () => {
    it('close button calls onClose', async () => {
      const user = userEvent.setup();
      render(
        <MobileMenu open={true} onClose={onClose} />
      );
      const closeBtn = screen.getByRole('button', {
        name: /Close menu/,
      });
      await user.click(closeBtn);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('overlay click calls onClose', () => {
      render(
        <MobileMenu open={true} onClose={onClose} />
      );
      const overlay = document.querySelector(
        '[aria-hidden]'
      ) as HTMLElement;
      fireEvent.click(overlay);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('ESC key calls onClose', () => {
      render(
        <MobileMenu open={true} onClose={onClose} />
      );
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Scroll Lock', () => {
    it('sets body overflow to hidden when open', () => {
      render(
        <MobileMenu open={true} onClose={onClose} />
      );
      expect(document.body.style.overflow).toBe('hidden');
    });
  });

  describe('ARIA', () => {
    it('dialog has aria-modal="true" and aria-label', () => {
      render(
        <MobileMenu open={true} onClose={onClose} />
      );
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute(
        'aria-modal',
        'true'
      );
      expect(dialog).toHaveAttribute(
        'aria-label',
        'Mobile navigation'
      );
    });
  });
});
