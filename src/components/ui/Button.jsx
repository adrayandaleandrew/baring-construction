'use client';

import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

const variants = {
  primary:
    'bg-baring-blue-500 text-white hover:bg-baring-blue-600 active:bg-baring-blue-700',
  secondary:
    'bg-baring-gold-500 text-baring-blue-900 hover:bg-baring-gold-600 active:bg-baring-gold-700',
  outline:
    'border-2 border-baring-blue-500 text-baring-blue-500 hover:bg-baring-blue-50 active:bg-baring-blue-100',
  ghost:
    'text-baring-blue-500 hover:bg-baring-blue-50 active:bg-baring-blue-100',
  white:
    'bg-white text-baring-blue-500 hover:bg-gray-50 active:bg-gray-100',
};

const sizes = {
  sm: 'px-4 py-2 text-sm min-h-[36px]',
  md: 'px-6 py-3 text-base min-h-[44px]',
  lg: 'px-8 py-4 text-lg min-h-[52px]',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  loading = false,
  disabled = false,
  fullWidth = false,
  className,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-heading font-semibold transition-colors duration-200',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-baring-blue-500',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <Loader2 className="h-5 w-5 animate-spin" aria-hidden />}
      {children}
    </button>
  );
}
