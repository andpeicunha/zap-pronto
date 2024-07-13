import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const variants = cva('text-gray-900 font-font-system font-extrabold leading-none tracking-tight', {
  variants: {
    type: {
      h1: ['mb-4 text-4xl'],
      h2: ['mb-4 text-2xl'],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
    },
  },
  defaultVariants: {
    type: 'h1',
    size: 'medium',
  },
});

export interface TitleProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'type'>,
    VariantProps<typeof variants> {}

export const Title: React.FC<TitleProps> = ({ className, type, size, ...props }) => (
  <span className={variants({ type, size, className })} {...props} />
);
