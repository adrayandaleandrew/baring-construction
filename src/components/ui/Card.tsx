import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  hover?: boolean;
}

export function Card({
  children,
  hover = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl bg-white border border-gray-200 overflow-hidden',
        hover &&
          'transition-shadow duration-300 hover:shadow-lg hover:border-gray-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn('px-6 pt-6', className)} {...props}>
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn('px-6 py-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn('px-6 pb-6 pt-2', className)}
      {...props}
    >
      {children}
    </div>
  );
}
