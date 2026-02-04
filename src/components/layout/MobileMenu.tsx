'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/data/navigation';
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLElement>(null);

  // Reset menu state on route change (adjust state during render)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    onClose();
    setServicesOpen(false);
  }

  // Manage mount/unmount with CSS transitions
  useEffect(() => {
    if (open) {
      setVisible(true);
      // Trigger reflow before adding transition class
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          panelRef.current?.setAttribute('data-open', '');
        });
      });
    } else {
      panelRef.current?.removeAttribute('data-open');
    }
  }, [open]);

  const handleTransitionEnd = useCallback(() => {
    if (!open) setVisible(false);
  }, [open]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
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

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  if (!visible && !open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/50 transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0'
        )}
        onClick={onClose}
        aria-hidden
      />

      {/* Panel */}
      <nav
        ref={panelRef}
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm translate-x-full flex-col bg-white shadow-xl transition-transform duration-300 data-[open]:translate-x-0"
        onTransitionEnd={handleTransitionEnd}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <span className="flex items-center gap-2 font-heading text-lg font-bold text-baring-blue-500">
            <Image
              src="/images/logo/logo.jpg"
              alt={`${SITE_CONFIG.shortName} logo`}
              width={32}
              height={32}
              className="h-8 w-8 rounded-full"
            />
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

                    <div
                      className={cn(
                        'grid transition-[grid-template-rows] duration-200',
                        servicesOpen
                          ? 'grid-rows-[1fr]'
                          : 'grid-rows-[0fr]'
                      )}
                    >
                      <ul className="ml-4 space-y-1 overflow-hidden pt-1">
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
                      </ul>
                    </div>
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
      </nav>
    </>
  );
}
