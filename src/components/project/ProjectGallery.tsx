'use client';

import { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import type { ProjectImage } from '@/types';

interface ProjectGalleryProps {
  images: ProjectImage[];
  projectTitle: string;
}

export function ProjectGallery({
  images,
  projectTitle,
}: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    null
  );

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : images.length - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null && prev < images.length - 1 ? prev + 1 : 0
    );
  }, [images.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  if (images.length === 0) return null;

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-baring-blue-500"
            aria-label={`View ${image.alt}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-baring-blue-100 to-baring-blue-50">
              <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-baring-blue-400">
                Photo
              </span>
            </div>
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Modal
        open={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        title={`${projectTitle} - Photo ${selectedIndex !== null ? selectedIndex + 1 : 0} of ${images.length}`}
        size="xl"
      >
        {selectedIndex !== null && (
          <div className="relative">
            {/* Image placeholder */}
            <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-gradient-to-br from-baring-blue-100 to-baring-blue-50">
              <div className="flex h-full items-center justify-center">
                <span className="text-sm font-medium text-baring-blue-400">
                  {images[selectedIndex].alt}
                </span>
              </div>
            </div>

            {/* Caption */}
            {images[selectedIndex].caption && (
              <p className="mt-3 text-center text-sm text-gray-600">
                {images[selectedIndex].caption}
              </p>
            )}

            {/* Navigation */}
            {images.length > 1 && (
              <div className="mt-4 flex items-center justify-center gap-4">
                <button
                  onClick={handlePrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="text-sm text-gray-500">
                  {selectedIndex + 1} / {images.length}
                </span>
                <button
                  onClick={handleNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
