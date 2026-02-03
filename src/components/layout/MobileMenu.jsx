'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/data/navigation';
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export function MobileMenu({ open, onClose }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, handleKeyDown]);

  useEffect(() => {
    onClose();
    setServicesOpen(false);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />

          {/* Panel */}
          <motion.nav
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <span className="font-heading text-lg font-bold text-baring-blue-500">
                {SITE_CONFIG.shortName}
              </span>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  if (item.cta) return null;

                  if (item.dropdown) {
                    return (
                      <li key={item.label}>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className={cn(
                            'flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors',
                            isActive(item.href)
                              ? 'bg-baring-blue-50 text-baring-blue-500'
                              : 'text-gray-700 hover:bg-gray-50'
                          )}
                          aria-expanded={servicesOpen}
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              'h-5 w-5 transition-transform',
                              servicesOpen && 'rotate-180'
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.ul
                              className="ml-4 mt-1 space-y-1 overflow-hidden"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <li>
                                <Link
                                  href={item.href}
                                  className={cn(
                                    'block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors',
                                    pathname === item.href
                                      ? 'text-baring-blue-500'
                                      : 'text-gray-600 hover:bg-gray-50 hover:text-baring-blue-500'
                                  )}
                                >
                                  All Services
                                </Link>
                              </li>
                              {item.dropdown.map((sub) => (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    className={cn(
                                      'block rounded-lg px-4 py-2.5 text-sm transition-colors',
                                      pathname === sub.href
                                        ? 'text-baring-blue-500'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-baring-blue-500'
                                    )}
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  }

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                          isActive(item.href)
                            ? 'bg-baring-blue-50 text-baring-blue-500'
                            : 'text-gray-700 hover:bg-gray-50'
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 px-6 py-4 space-y-3">
              <Button href="/quote" fullWidth>
                Request Quote
              </Button>
              {CONTACT_INFO.phone && (
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="block text-center text-sm font-medium text-baring-blue-500 hover:underline"
                >
                  Call {CONTACT_INFO.phone}
                </a>
              )}
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
