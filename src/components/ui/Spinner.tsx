import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

const sizes = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-3',
  lg: 'h-12 w-12 border-4',
} as const;

type SpinnerSize = keyof typeof sizes;

interface SpinnerProps extends ComponentPropsWithoutRef<'div'> {
  size?: SpinnerSize;
  label?: string;
}

export function Spinner({
  size = 'md',
  className,
  label = 'Loading',
  ...props
}: SpinnerProps) {
  return (
    <div role="status" aria-label={label} {...props}>
      <div
        className={cn(
          'animate-spin rounded-full border-baring-blue-200 border-t-baring-blue-500',
          sizes[size],
          className
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}
