'use client';

import { cn } from '@/lib/utils';
import { PROJECT_CATEGORIES } from '@/lib/constants';

interface ProjectFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProjectFilter({
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Filter projects by category"
    >
      {PROJECT_CATEGORIES.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onCategoryChange(cat.value)}
          className={cn(
            'min-h-[44px] rounded-full px-5 py-2 text-sm font-semibold',
            'transition-colors duration-200',
            'focus-visible:outline-2 focus-visible:outline-offset-2',
            'focus-visible:outline-baring-blue-500',
            activeCategory === cat.value
              ? 'bg-baring-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          )}
          aria-pressed={activeCategory === cat.value}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
