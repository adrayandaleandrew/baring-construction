import type { ComponentPropsWithRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

type SelectOption = string | { label: string; value: string };

interface SelectProps extends ComponentPropsWithRef<'select'> {
  label?: string;
  id?: string;
  options?: SelectOption[];
  placeholder?: string;
  error?: string;
  helpText?: string;
  required?: boolean;
}

export function Select({
  label,
  id,
  options = [],
  placeholder = 'Select an option',
  error,
  helpText,
  required = false,
  className,
  ref,
  ...props
}: SelectProps) {
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
      <div className="relative">
        <select
          id={id}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${id}-error` : helpText ? `${id}-help` : undefined
          }
          className={cn(
            'w-full appearance-none rounded-lg border px-4 py-3 pr-10 text-base text-gray-900',
            'transition-colors duration-200',
            'focus:border-baring-blue-500 focus:ring-2 focus:ring-baring-blue-500/20 focus:outline-none',
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-gray-300 hover:border-gray-400',
            'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
            className
          )}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => {
            const value = typeof option === 'string' ? option : option.value;
            const optionLabel =
              typeof option === 'string' ? option : option.label;
            return (
              <option key={value} value={value}>
                {optionLabel}
              </option>
            );
          })}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
          aria-hidden
        />
      </div>
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
