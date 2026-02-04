import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { ProjectGallery } from './ProjectGallery';
import type { ProjectImage } from '@/types';

const images: ProjectImage[] = [
  {
    url: '/img/1.jpg',
    alt: 'Building front view',
    caption: 'Front view',
    isPrimary: true,
  },
  {
    url: '/img/2.jpg',
    alt: 'Building side view',
    caption: 'Side view',
    isPrimary: false,
  },
  {
    url: '/img/3.jpg',
    alt: 'Interior shot',
    caption: 'Interior',
    isPrimary: false,
  },
];

describe('ProjectGallery', () => {
  it('returns null for empty images', () => {
    const { container } = render(
      <ProjectGallery images={[]} projectTitle="Test" />
    );
    expect(container.innerHTML).toBe('');
  });

  it('renders thumbnail buttons', () => {
    render(
      <ProjectGallery images={images} projectTitle="Test" />
    );
    const buttons = screen.getAllByRole('button', {
      name: /view/i,
    });
    expect(buttons).toHaveLength(3);
  });

  it('opens modal on thumbnail click', () => {
    render(
      <ProjectGallery images={images} projectTitle="Test" />
    );
    const thumbnails = screen.getAllByRole('button', {
      name: /view/i,
    });
    fireEvent.click(thumbnails[0]);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Front view')).toBeInTheDocument();
  });

  it('navigates to next image', () => {
    render(
      <ProjectGallery images={images} projectTitle="Test" />
    );

    // Open first image
    fireEvent.click(
      screen.getAllByRole('button', { name: /view/i })[0]
    );
    expect(screen.getByText('Front view')).toBeInTheDocument();

    // Click next
    fireEvent.click(
      screen.getByRole('button', { name: /next/i })
    );
    expect(screen.getByText('Side view')).toBeInTheDocument();
  });

  it('navigates to previous image', () => {
    render(
      <ProjectGallery images={images} projectTitle="Test" />
    );

    // Open second image
    fireEvent.click(
      screen.getAllByRole('button', { name: /view/i })[1]
    );
    expect(screen.getByText('Side view')).toBeInTheDocument();

    // Click prev
    fireEvent.click(
      screen.getByRole('button', { name: /previous/i })
    );
    expect(screen.getByText('Front view')).toBeInTheDocument();
  });

  it('wraps around from last to first', () => {
    render(
      <ProjectGallery images={images} projectTitle="Test" />
    );

    // Open last image
    fireEvent.click(
      screen.getAllByRole('button', { name: /view/i })[2]
    );
    expect(screen.getByText('Interior')).toBeInTheDocument();

    // Click next → wraps to first
    fireEvent.click(
      screen.getByRole('button', { name: /next/i })
    );
    expect(screen.getByText('Front view')).toBeInTheDocument();
  });

  it('wraps around from first to last', () => {
    render(
      <ProjectGallery images={images} projectTitle="Test" />
    );

    // Open first image
    fireEvent.click(
      screen.getAllByRole('button', { name: /view/i })[0]
    );

    // Click prev → wraps to last
    fireEvent.click(
      screen.getByRole('button', { name: /previous/i })
    );
    expect(screen.getByText('Interior')).toBeInTheDocument();
  });

  it('shows image counter', () => {
    render(
      <ProjectGallery images={images} projectTitle="Test" />
    );

    fireEvent.click(
      screen.getAllByRole('button', { name: /view/i })[0]
    );
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
  });
});
