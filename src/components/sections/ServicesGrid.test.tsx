import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ServicesGrid } from './ServicesGrid';
import { SERVICES } from '@/data/services';

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

describe('ServicesGrid', () => {
  beforeEach(() => {
    render(<ServicesGrid />);
  });

  it('renders within a section element', () => {
    const section = document.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('renders section heading "Our Services"', () => {
    expect(
      screen.getByRole('heading', { name: /Our Services/ })
    ).toBeInTheDocument();
  });

  it('renders section description', () => {
    expect(
      screen.getByText(
        /Comprehensive construction solutions for every need/
      )
    ).toBeInTheDocument();
  });

  it('renders all 6 service titles', () => {
    for (const service of SERVICES) {
      expect(
        screen.getByRole('heading', { name: service.title })
      ).toBeInTheDocument();
    }
  });

  it('renders service overview text', () => {
    for (const service of SERVICES) {
      expect(
        screen.getByText(service.overview)
      ).toBeInTheDocument();
    }
  });

  it('renders 6 "Learn More" links with correct hrefs', () => {
    const links = screen.getAllByRole('link', {
      name: /Learn More/,
    });
    expect(links).toHaveLength(6);
    for (const service of SERVICES) {
      const link = screen.getByRole('link', {
        name: new RegExp(`about ${service.title}`),
      });
      expect(link).toHaveAttribute(
        'href',
        `/services/${service.slug}`
      );
    }
  });

  it('includes sr-only text with service title in Learn More links', () => {
    for (const service of SERVICES) {
      expect(
        screen.getByText(`about ${service.title}`, {
          selector: '.sr-only',
        })
      ).toBeInTheDocument();
    }
  });
});
