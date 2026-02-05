import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants';
import { FOOTER_LINKS } from '@/data/navigation';

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

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  describe('Company Info', () => {
    it('renders the logo image', () => {
      expect(
        screen.getByAltText(`${SITE_CONFIG.shortName} logo`)
      ).toBeInTheDocument();
    });

    it('renders the company short name', () => {
      expect(
        screen.getByText(SITE_CONFIG.shortName)
      ).toBeInTheDocument();
    });

    it('renders the company description', () => {
      expect(
        screen.getByText(SITE_CONFIG.description)
      ).toBeInTheDocument();
    });

    it('renders service areas text', () => {
      expect(
        screen.getByText(/Serving:.*Batangas/)
      ).toBeInTheDocument();
    });
  });

  describe('Footer Links', () => {
    it('renders Services heading and all service links', () => {
      expect(
        screen.getByRole('heading', { name: /Services/ })
      ).toBeInTheDocument();
      for (const link of FOOTER_LINKS.services) {
        const el = screen.getByRole('link', {
          name: link.label,
        });
        expect(el).toHaveAttribute('href', link.href);
      }
    });

    it('renders Company heading and all company links', () => {
      expect(
        screen.getByRole('heading', { name: /Company/ })
      ).toBeInTheDocument();
      for (const link of FOOTER_LINKS.company) {
        const matches = screen.getAllByRole('link', {
          name: link.label,
        });
        const match = matches.find(
          (el) => el.getAttribute('href') === link.href
        );
        expect(match).toBeDefined();
      }
    });
  });

  describe('Contact Info', () => {
    it('renders phone number with tel: href', () => {
      const phoneLink = screen.getByRole('link', {
        name: CONTACT_INFO.phone!,
      });
      expect(phoneLink).toHaveAttribute(
        'href',
        `tel:${CONTACT_INFO.phone!.replace(/\s/g, '')}`
      );
    });

    it('renders email with mailto: href', () => {
      const emailLink = screen.getByRole('link', {
        name: CONTACT_INFO.email!,
      });
      expect(emailLink).toHaveAttribute(
        'href',
        `mailto:${CONTACT_INFO.email}`
      );
    });

    it('renders business hours', () => {
      expect(
        screen.getByText(CONTACT_INFO.businessHours!)
      ).toBeInTheDocument();
    });

    it('renders address', () => {
      expect(
        screen.getByText(CONTACT_INFO.address!)
      ).toBeInTheDocument();
    });
  });

  describe('Social', () => {
    it('renders Facebook link with target="_blank"', () => {
      const fbLink = screen.getByRole('link', {
        name: /Facebook/,
      });
      expect(fbLink).toHaveAttribute('target', '_blank');
      expect(fbLink).toHaveAttribute(
        'href',
        CONTACT_INFO.facebook
      );
    });
  });

  describe('Bottom Bar', () => {
    it('renders copyright with current year', () => {
      const year = new Date().getFullYear();
      expect(
        screen.getByText(
          new RegExp(`© ${year}.*All rights reserved`)
        )
      ).toBeInTheDocument();
    });

    it('renders Privacy Policy link in bottom bar', () => {
      const links = screen.getAllByRole('link', {
        name: /Privacy Policy/,
      });
      const bottomBarLink = links.find(
        (link) =>
          link.closest('.border-t') !== null
      );
      expect(bottomBarLink).toBeDefined();
      expect(bottomBarLink).toHaveAttribute(
        'href',
        '/privacy-policy'
      );
    });
  });

  describe('Accessibility', () => {
    it('footer has role="contentinfo"', () => {
      expect(
        screen.getByRole('contentinfo')
      ).toBeInTheDocument();
    });
  });
});
