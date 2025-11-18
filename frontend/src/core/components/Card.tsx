import type { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={twMerge(
        'rounded-sm',
        'border',
        'border-[--color-border]',
        'bg-[--color-card]',
        'text-[--color-card-foreground]',
        'shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
