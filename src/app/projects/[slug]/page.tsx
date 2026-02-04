import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronRight,
  ArrowRight,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  Ruler,
  Building2,
  Users,
  Layers,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Card, CardBody } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectGallery } from '@/components/project/ProjectGallery';
import { ProjectCard } from '@/components/project/ProjectCard';
import { PROJECTS } from '@/data/projects';
import { formatDate } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.metadata.metaTitle,
    description: project.metadata.metaDescription,
    keywords: project.metadata.keywords.join(', '),
    openGraph: {
      title: project.metadata.metaTitle,
      description: project.metadata.metaDescription,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  const relatedProjects = PROJECTS.filter((p) =>
    project.relatedProjects.includes(p.id)
  );

  const specs = project.specifications;
  const hasSpecs =
    specs.area || specs.floors || specs.rooms || specs.capacity;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-baring-blue-900/90 to-gray-900/95" />
        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight
                  className="h-4 w-4"
                  aria-hidden
                />
              </li>
              <li>
                <Link
                  href="/projects"
                  className="transition-colors hover:text-white"
                >
                  Projects
                </Link>
              </li>
              <li>
                <ChevronRight
                  className="h-4 w-4"
                  aria-hidden
                />
              </li>
              <li className="text-baring-gold-400">
                {project.title}
              </li>
            </ol>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="blue" size="md">
              {project.category}
            </Badge>
            <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl">
              {project.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(project.completionDate)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {project.duration}
              </span>
            </div>
            <div className="mt-8">
              <Button href="/quote" size="lg">
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Project Overview + Specs */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Overview */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl font-bold text-gray-900">
                Project Overview
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {project.description}
              </p>

              {/* Services provided */}
              <h3 className="mt-8 font-heading text-xl font-semibold text-gray-900">
                Services Provided
              </h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {project.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-4 w-4 shrink-0 text-baring-blue-500" />
                    <span className="text-sm text-gray-700">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs Card */}
            <div>
              <Card>
                <CardBody className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-gray-900">
                    Project Details
                  </h3>
                  <dl className="mt-4 space-y-4">
                    {project.client && (
                      <div className="flex items-start gap-3">
                        <Users className="mt-0.5 h-4 w-4 shrink-0 text-baring-blue-500" />
                        <div>
                          <dt className="text-xs font-semibold uppercase text-gray-500">
                            Client
                          </dt>
                          <dd className="text-sm text-gray-900">
                            {project.client}
                          </dd>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <DollarSign className="mt-0.5 h-4 w-4 shrink-0 text-baring-blue-500" />
                      <div>
                        <dt className="text-xs font-semibold uppercase text-gray-500">
                          Budget
                        </dt>
                        <dd className="text-sm text-gray-900">
                          {project.budget}
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-baring-blue-500" />
                      <div>
                        <dt className="text-xs font-semibold uppercase text-gray-500">
                          Duration
                        </dt>
                        <dd className="text-sm text-gray-900">
                          {project.duration}
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-baring-blue-500" />
                      <div>
                        <dt className="text-xs font-semibold uppercase text-gray-500">
                          Location
                        </dt>
                        <dd className="text-sm text-gray-900">
                          {project.location}
                        </dd>
                      </div>
                    </div>
                    {hasSpecs && (
                      <>
                        <hr className="border-gray-200" />
                        <p className="text-xs font-semibold uppercase text-gray-500">
                          Specifications
                        </p>
                        {specs.area && (
                          <div className="flex items-start gap-3">
                            <Ruler className="mt-0.5 h-4 w-4 shrink-0 text-baring-gold-500" />
                            <div>
                              <dt className="text-xs text-gray-500">
                                Area
                              </dt>
                              <dd className="text-sm text-gray-900">
                                {specs.area}
                              </dd>
                            </div>
                          </div>
                        )}
                        {specs.floors && (
                          <div className="flex items-start gap-3">
                            <Layers className="mt-0.5 h-4 w-4 shrink-0 text-baring-gold-500" />
                            <div>
                              <dt className="text-xs text-gray-500">
                                Floors
                              </dt>
                              <dd className="text-sm text-gray-900">
                                {specs.floors}
                              </dd>
                            </div>
                          </div>
                        )}
                        {specs.rooms && (
                          <div className="flex items-start gap-3">
                            <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-baring-gold-500" />
                            <div>
                              <dt className="text-xs text-gray-500">
                                Rooms
                              </dt>
                              <dd className="text-sm text-gray-900">
                                {specs.rooms}
                              </dd>
                            </div>
                          </div>
                        )}
                        {specs.capacity && (
                          <div className="flex items-start gap-3">
                            <Users className="mt-0.5 h-4 w-4 shrink-0 text-baring-gold-500" />
                            <div>
                              <dt className="text-xs text-gray-500">
                                Capacity
                              </dt>
                              <dd className="text-sm text-gray-900">
                                {specs.capacity}
                              </dd>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </dl>
                </CardBody>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      {project.images.length > 0 && (
        <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
          <Container>
            <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              Project Gallery
            </h2>
            <div className="mt-8">
              <ProjectGallery
                images={project.images}
                projectTitle={project.title}
              />
            </div>
          </Container>
        </section>
      )}

      {/* Challenges & Solutions */}
      {(project.challenges || project.solutions) && (
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
                Challenges & Solutions
              </h2>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {project.challenges && (
                  <Card>
                    <CardBody className="p-6">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-baring-gold-500" />
                        <h3 className="font-heading text-lg font-semibold text-gray-900">
                          Challenge
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-gray-600">
                        {project.challenges}
                      </p>
                    </CardBody>
                  </Card>
                )}
                {project.solutions && (
                  <Card>
                    <CardBody className="p-6">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-baring-blue-500" />
                        <h3 className="font-heading text-lg font-semibold text-gray-900">
                          Solution
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-gray-600">
                        {project.solutions}
                      </p>
                    </CardBody>
                  </Card>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Highlights */}
      {project.highlights.length > 0 && (
        <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
                Project Highlights
              </h2>
              <ul className="mt-8 space-y-4">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-3 text-left"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-baring-blue-500" />
                    <span className="text-gray-700">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <h2 className="text-center font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              Related Projects
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((rp) => (
                <ProjectCard key={rp.id} project={rp} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="bg-baring-blue-500 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Start Your Project
            </h2>
            <p className="mt-4 text-lg text-baring-blue-100">
              Interested in a similar project? Get a free
              consultation and detailed quotation from our team.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/quote" variant="secondary" size="lg">
                Request Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href="/contact" variant="white" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
