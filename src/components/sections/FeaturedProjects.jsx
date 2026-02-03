import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PROJECTS } from '@/data/projects';

export function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Browse our portfolio of completed construction projects across Metro
            Manila, Rizal, and Pampanga.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group"
            >
              <Card hover className="h-full">
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-baring-blue-100 to-baring-blue-50">
                    <span className="text-sm font-medium text-baring-blue-400">
                      Project Photo
                    </span>
                  </div>
                  <div className="absolute left-3 top-3">
                    <Badge variant="blue" size="sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 py-4">
                  <h3 className="font-heading text-base font-semibold text-gray-900 group-hover:text-baring-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.location}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-baring-gold-600">
                    {project.budget}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Button href="/projects" variant="outline">
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
