import { forwardRef, type InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    const inputId = props.id || `input-${Math.random().toString(36).substring(7)}`;
    const errorId = error ? `${inputId}-error` : undefined;

    return (
      <div className="stack gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={twMerge(
            'flex h-10 w-full rounded-sm border border-[--color-input] bg-[--color-background] px-3 py-2 text-sm',
            'ring-offset-[--color-background] placeholder:text-[--color-muted-foreground]',
            'focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-[--color-ring]',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-[--color-destructive]',
            className
          )}
          aria-invalid={!!error}
          aria-describedby={errorId}
          {...props}
        />
        {error && (
          <span
            id={errorId}
            role="alert"
            className="text-sm font-medium text-[--color-destructive]"
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
