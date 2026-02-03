import { cn } from '@/lib/utils';

const variants = {
  default: 'bg-gray-100 text-gray-700',
  blue: 'bg-baring-blue-50 text-baring-blue-600',
  gold: 'bg-baring-gold-50 text-baring-gold-700',
  green: 'bg-green-50 text-green-700',
  red: 'bg-red-50 text-red-700',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
};

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
  ...props
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-semibold',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
