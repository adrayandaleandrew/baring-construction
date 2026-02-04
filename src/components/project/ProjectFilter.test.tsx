import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { ProjectFilter } from './ProjectFilter';

describe('ProjectFilter', () => {
  it('renders all category buttons', () => {
    render(
      <ProjectFilter
        activeCategory="all"
        onCategoryChange={vi.fn()}
      />
    );
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Residential')).toBeInTheDocument();
    expect(screen.getByText('Commercial')).toBeInTheDocument();
    expect(screen.getByText('Educational')).toBeInTheDocument();
    expect(screen.getByText('Industrial')).toBeInTheDocument();
    expect(screen.getByText('Electrical')).toBeInTheDocument();
  });

  it('sets aria-pressed on active category', () => {
    render(
      <ProjectFilter
        activeCategory="residential"
        onCategoryChange={vi.fn()}
      />
    );
    expect(
      screen.getByText('Residential')
    ).toHaveAttribute('aria-pressed', 'true');
    expect(
      screen.getByText('All')
    ).toHaveAttribute('aria-pressed', 'false');
  });

  it('calls onCategoryChange when clicked', () => {
    const onChange = vi.fn();
    render(
      <ProjectFilter
        activeCategory="all"
        onCategoryChange={onChange}
      />
    );
    fireEvent.click(screen.getByText('Commercial'));
    expect(onChange).toHaveBeenCalledWith('commercial');
  });

  it('has group role with label', () => {
    render(
      <ProjectFilter
        activeCategory="all"
        onCategoryChange={vi.fn()}
      />
    );
    expect(
      screen.getByRole('group', {
        name: /filter projects/i,
      })
    ).toBeInTheDocument();
  });
});
