import { vi } from 'vitest';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navbar } from './Navbar';
import { NAV_ITEMS } from '@/data/navigation';
import { SITE_CONFIG } from '@/lib/constants';

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

vi.mock('@/components/layout/MobileMenu', () => ({
  MobileMenu: ({
    open,
    onClose,
  }: {
    open: boolean;
    onClose: () => void;
  }) =>
    open ? (
      <div data-testid="mobile-menu" onClick={onClose}>
        Mobile Menu
      </div>
    ) : null,
}));

describe('Navbar', () => {
  beforeEach(() => {
    mockPathname.mockReturnValue('/');
  });

  describe('Rendering', () => {
    it('renders logo and company name', () => {
      render(<Navbar />);
      expect(
        screen.getByText(SITE_CONFIG.shortName)
      ).toBeInTheDocument();
      expect(
        screen.getByAltText(`${SITE_CONFIG.shortName} logo`)
      ).toBeInTheDocument();
    });

    it('renders home link with aria-label', () => {
      render(<Navbar />);
      const homeLink = screen.getByRole('link', {
        name: `${SITE_CONFIG.shortName} - Home`,
      });
      expect(homeLink).toHaveAttribute('href', '/');
    });

    it('renders skip-to-content link', () => {
      render(<Navbar />);
      const skipLink = screen.getByText(
        /Skip to main content/
      );
      expect(skipLink).toHaveAttribute(
        'href',
        '#main-content'
      );
    });

    it('renders Request Quote CTA', () => {
      render(<Navbar />);
      expect(
        screen.getByRole('link', {
          name: /Request Quote/,
        })
      ).toBeInTheDocument();
    });

    it('renders desktop nav links', () => {
      render(<Navbar />);
      const nonCtaItems = NAV_ITEMS.filter(
        (item) => !item.cta && !item.dropdown
      );
      for (const item of nonCtaItems) {
        expect(
          screen.getByRole('link', { name: item.label })
        ).toBeInTheDocument();
      }
    });

    it('renders mobile toggle button', () => {
      render(<Navbar />);
      expect(
        screen.getByRole('button', { name: /Open menu/ })
      ).toBeInTheDocument();
    });
  });

  describe('Dropdown', () => {
    it('Services trigger has aria-haspopup', () => {
      render(<Navbar />);
      const servicesBtn = screen.getByRole('button', {
        name: /Services/,
      });
      expect(servicesBtn).toHaveAttribute(
        'aria-haspopup',
        'true'
      );
    });

    it('opens dropdown on click showing menu items', () => {
      render(<Navbar />);
      const servicesBtn = screen.getByRole('button', {
        name: /Services/,
      });
      fireEvent.click(servicesBtn);

      expect(
        screen.getByRole('menu')
      ).toBeInTheDocument();
      expect(
        screen.getByRole('menuitem', {
          name: /All Services/,
        })
      ).toBeInTheDocument();
    });

    it('sets aria-expanded=true when dropdown is open', () => {
      render(<Navbar />);
      const servicesBtn = screen.getByRole('button', {
        name: /Services/,
      });
      expect(servicesBtn).toHaveAttribute(
        'aria-expanded',
        'false'
      );

      fireEvent.click(servicesBtn);
      expect(servicesBtn).toHaveAttribute(
        'aria-expanded',
        'true'
      );
    });

    it('closes dropdown on outside click', () => {
      render(<Navbar />);
      const servicesBtn = screen.getByRole('button', {
        name: /Services/,
      });
      fireEvent.click(servicesBtn);
      expect(
        screen.getByRole('menu')
      ).toBeInTheDocument();

      fireEvent.mouseDown(document.body);
      expect(
        screen.queryByRole('menu')
      ).not.toBeInTheDocument();
    });
  });

  describe('Mobile Menu', () => {
    it('opens mobile menu when toggle is clicked', async () => {
      const user = userEvent.setup();
      render(<Navbar />);
      const toggle = screen.getByRole('button', {
        name: /Open menu/,
      });
      await user.click(toggle);
      expect(
        screen.getByTestId('mobile-menu')
      ).toBeInTheDocument();
    });
  });

  describe('Scroll Behavior', () => {
    it('does not have scroll styles initially', () => {
      render(<Navbar />);
      const header = document.querySelector('header');
      expect(header?.className).not.toContain(
        'backdrop-blur'
      );
    });

    it('adds backdrop-blur after scrolling past 10px', () => {
      render(<Navbar />);
      Object.defineProperty(window, 'scrollY', {
        value: 50,
        writable: true,
      });
      fireEvent.scroll(window);
      const header = document.querySelector('header');
      expect(header?.className).toContain(
        'backdrop-blur'
      );
    });
  });

  describe('Active States', () => {
    it('highlights active nav link based on pathname', () => {
      mockPathname.mockReturnValue('/about');
      render(<Navbar />);
      const aboutLink = screen.getByRole('link', {
        name: 'About',
      });
      expect(aboutLink.className).toContain(
        'text-baring-blue-500'
      );
    });
  });

  describe('Accessibility', () => {
    it('nav has aria-label="Main navigation"', () => {
      render(<Navbar />);
      expect(
        screen.getByRole('navigation', {
          name: /Main navigation/,
        })
      ).toBeInTheDocument();
    });
  });
});
