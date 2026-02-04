import type { ComponentPropsWithRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  id?: string;
  error?: string;
  helpText?: string;
  required?: boolean;
}

export function Input({
  label,
  id,
  error,
  helpText,
  required = false,
  className,
  ref,
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-1.5 block text-sm font-semibold text-gray-700"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${id}-error` : helpText ? `${id}-help` : undefined
        }
        className={cn(
          'w-full rounded-lg border px-4 py-3 text-base text-gray-900 placeholder:text-gray-400',
          'transition-colors duration-200',
          'focus:border-baring-blue-500 focus:ring-2 focus:ring-baring-blue-500/20 focus:outline-none',
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
            : 'border-gray-300 hover:border-gray-400',
          'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={`${id}-help`} className="mt-1.5 text-sm text-gray-500">
          {helpText}
        </p>
      )}
    </div>
  );
}
