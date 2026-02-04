'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderOpen } from 'lucide-react';
import { ProjectFilter } from '@/components/project/ProjectFilter';
import { ProjectCard } from '@/components/project/ProjectCard';
import type { Project } from '@/types';

interface ProjectsListingProps {
  projects: Project[];
}

export function ProjectsListing({ projects }: ProjectsListingProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Filter */}
      <div className="flex justify-center">
        <ProjectFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="mt-16 flex flex-col items-center text-center">
          <FolderOpen className="h-12 w-12 text-gray-300" />
          <h3 className="mt-4 font-heading text-lg font-semibold text-gray-900">
            No projects found
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            No projects match the selected category. Try selecting
            a different filter.
          </p>
        </div>
      )}
    </div>
  );
}
