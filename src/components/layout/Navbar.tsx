'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/data/navigation';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';
import { MobileMenu } from '@/components/layout/MobileMenu';

export function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Reset menu state on route change (adjust state during render)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setDropdownOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-baring-blue-500 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-white'
        )}
      >
        <Container>
          <nav
            className="flex h-16 items-center justify-between lg:h-20"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-heading text-xl font-bold text-baring-blue-500"
              aria-label={`${SITE_CONFIG.shortName} - Home`}
            >
              {SITE_CONFIG.shortName}
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) => {
                if (item.cta) return null;

                if (item.dropdown) {
                  return (
                    <div key={item.label} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        onMouseEnter={() => setDropdownOpen(true)}
                        className={cn(
                          'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                          isActive(item.href)
                            ? 'text-baring-blue-500'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-baring-blue-500'
                        )}
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform',
                            dropdownOpen && 'rotate-180'
                          )}
                        />
                      </button>

                      {dropdownOpen && (
                        <div
                          className="absolute left-0 top-full mt-1 w-56 rounded-xl border border-gray-200 bg-white py-2 shadow-lg"
                          onMouseLeave={() => setDropdownOpen(false)}
                          role="menu"
                        >
                          <Link
                            href={item.href}
                            className={cn(
                              'block px-4 py-2 text-sm font-medium transition-colors',
                              pathname === item.href
                                ? 'bg-baring-blue-50 text-baring-blue-500'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-baring-blue-500'
                            )}
                            role="menuitem"
                          >
                            All Services
                          </Link>
                          <div className="my-1 border-t border-gray-100" />
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={cn(
                                'block px-4 py-2 text-sm transition-colors',
                                pathname === sub.href
                                  ? 'bg-baring-blue-50 text-baring-blue-500'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-baring-blue-500'
                              )}
                              role="menuitem"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      isActive(item.href)
                        ? 'text-baring-blue-500'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-baring-blue-500'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Button href="/quote" size="sm" className="ml-3">
                Request Quote
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </nav>
        </Container>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20" />

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
