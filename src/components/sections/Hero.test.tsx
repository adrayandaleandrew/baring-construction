import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

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

describe('Hero', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it('renders within a section element', () => {
    const section = document.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('renders the main h1 heading', () => {
    expect(
      screen.getByRole('heading', { level: 1 })
    ).toHaveTextContent(/Building Excellence/);
  });

  it('renders the subheading paragraph', () => {
    expect(
      screen.getByText(/Premium construction services/)
    ).toBeInTheDocument();
  });

  it('renders "Request Free Quote" CTA linking to /quote', () => {
    const link = screen.getByRole('link', {
      name: /Request Free Quote/,
    });
    expect(link).toHaveAttribute('href', '/quote');
  });

  it('renders "View Our Projects" CTA linking to /projects', () => {
    const link = screen.getByRole('link', {
      name: /View Our Projects/,
    });
    expect(link).toHaveAttribute('href', '/projects');
  });

  it('renders all 3 trust badge labels', () => {
    expect(screen.getByText('50+ Projects')).toBeInTheDocument();
    expect(screen.getByText('3 Regions')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('renders trust badge descriptions', () => {
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('Served')).toBeInTheDocument();
    expect(screen.getByText('Satisfaction')).toBeInTheDocument();
  });
});
