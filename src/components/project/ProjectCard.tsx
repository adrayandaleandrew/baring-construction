import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
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
          <h3 className="font-heading text-base font-semibold text-gray-900 transition-colors group-hover:text-baring-blue-500">
            {project.title}
          </h3>
          <div className="mt-1.5 flex items-center gap-1 text-sm text-gray-500">
            <MapPin className="h-3.5 w-3.5" />
            {project.location}
          </div>
          <p className="mt-2 text-sm font-semibold text-baring-gold-800">
            {project.budget}
          </p>
        </div>
      </Card>
    </Link>
  );
}
