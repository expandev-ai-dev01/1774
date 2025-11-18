import type { HTMLAttributes } from 'react';

export interface LoadingSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'size-4',
  md: 'size-8',
  lg: 'size-12',
};

export const LoadingSpinner = ({ size = 'md', className, ...props }: LoadingSpinnerProps) => {
  return (
    <div className={`center ${className || ''}`} {...props}>
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-[--color-muted] border-t-[--color-primary-500]`}
        role="status"
        aria-label="Carregando"
      >
        <span className="sr-only">Carregando...</span>
      </div>
    </div>
  );
};
