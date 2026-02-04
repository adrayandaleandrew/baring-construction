import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import type { Project } from '@/types';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { layout, initial, animate, exit, transition, ...rest } = props;
      return <div {...rest}>{children}</div>;
    },
  },
  AnimatePresence: ({
    children,
  }: React.PropsWithChildren) => <>{children}</>,
}));

// Mock ProjectCard to simplify testing
vi.mock('@/components/project/ProjectCard', () => ({
  ProjectCard: ({ project }: { project: Project }) => (
    <div data-testid={`project-${project.id}`}>
      {project.title}
    </div>
  ),
}));

import { ProjectsListing } from './ProjectsListing';

const mockProjects: Project[] = [
  {
    id: 'proj-001',
    slug: 'test-residential',
    title: 'Test Residence',
    category: 'residential',
    location: 'Batangas',
    budget: '₱1M - ₱3M',
    duration: '6 months',
    completionDate: '2024-01-01',
    status: 'completed',
    client: null,
    featured: true,
    images: [
      {
        url: '/img.jpg',
        alt: 'Test',
        caption: 'Test',
        isPrimary: true,
      },
    ],
    services: ['Construction'],
    description: 'Test project',
    challenges: null,
    solutions: null,
    highlights: ['Done'],
    specifications: {
      area: '100 sqm',
      floors: 2,
      rooms: 3,
      capacity: null,
    },
    testimonial: null,
    relatedProjects: [],
    metadata: {
      metaTitle: 'Test',
      metaDescription: 'Test',
      keywords: ['test'],
    },
  },
  {
    id: 'proj-002',
    slug: 'test-commercial',
    title: 'Test Office',
    category: 'commercial',
    location: 'Laguna',
    budget: '₱3M - ₱5M',
    duration: '4 months',
    completionDate: '2024-06-01',
    status: 'completed',
    client: null,
    featured: false,
    images: [
      {
        url: '/img2.jpg',
        alt: 'Test 2',
        caption: 'Test 2',
        isPrimary: true,
      },
    ],
    services: ['Fit-out'],
    description: 'Test office project',
    challenges: null,
    solutions: null,
    highlights: ['Complete'],
    specifications: {
      area: '200 sqm',
      floors: 1,
      rooms: 5,
      capacity: null,
    },
    testimonial: null,
    relatedProjects: [],
    metadata: {
      metaTitle: 'Test 2',
      metaDescription: 'Test 2',
      keywords: ['test'],
    },
  },
];

describe('ProjectsListing', () => {
  it('shows all projects when "All" is active', () => {
    render(<ProjectsListing projects={mockProjects} />);
    expect(
      screen.getByTestId('project-proj-001')
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('project-proj-002')
    ).toBeInTheDocument();
  });

  it('filters to specific category', () => {
    render(<ProjectsListing projects={mockProjects} />);
    fireEvent.click(screen.getByText('Residential'));
    expect(
      screen.getByTestId('project-proj-001')
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId('project-proj-002')
    ).not.toBeInTheDocument();
  });

  it('shows empty state for no matches', () => {
    render(<ProjectsListing projects={mockProjects} />);
    fireEvent.click(screen.getByText('Educational'));
    expect(
      screen.getByText('No projects found')
    ).toBeInTheDocument();
  });

  it('shows all again after switching back', () => {
    render(<ProjectsListing projects={mockProjects} />);
    fireEvent.click(screen.getByText('Residential'));
    fireEvent.click(screen.getByText('All'));
    expect(
      screen.getByTestId('project-proj-001')
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('project-proj-002')
    ).toBeInTheDocument();
  });

  it('renders filter component', () => {
    render(<ProjectsListing projects={mockProjects} />);
    expect(
      screen.getByRole('group', {
        name: /filter projects/i,
      })
    ).toBeInTheDocument();
  });
});
