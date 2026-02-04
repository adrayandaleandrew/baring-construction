import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { CallToAction } from '@/components/sections/CallToAction';
import { ProjectsListing } from '@/components/project/ProjectsListing';
import { PROJECTS } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Our Projects | Baring Construction Services',
  description:
    'Browse our portfolio of completed construction projects across Batangas, Laguna, and Cavite. Residential, commercial, industrial, and electrical projects.',
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-baring-blue-900/90 to-gray-900/95" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Our{' '}
              <span className="text-baring-gold-400">Projects</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Explore our portfolio of completed construction
              projects. From residential homes to commercial
              fit-outs and industrial installations.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Listing */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <ProjectsListing projects={PROJECTS} />
        </Container>
      </section>

      {/* CTA */}
      <CallToAction />
    </>
  );
}
