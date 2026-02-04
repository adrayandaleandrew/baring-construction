'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ServiceFAQ } from '@/types';

interface AccordionProps {
  items?: ServiceFAQ[];
  className?: string;
}

export function Accordion({ items = [], className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  if (items.length === 0) return null;

  return (
    <div
      className={cn(
        'divide-y divide-gray-200 rounded-xl border border-gray-200',
        className
      )}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `accordion-trigger-${index}`;
        const panelId = `accordion-panel-${index}`;

        return (
          <div key={index}>
            <button
              id={triggerId}
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full min-h-[44px] items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-gray-50"
            >
              <span className="font-heading text-base font-semibold text-gray-900">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200',
                  isOpen && 'rotate-180'
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
