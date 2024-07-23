import { cn } from '@/utils'
import { type VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const variants = cva('text-primary font-lato mb-4', {
	variants: {
		type: {
			h1: ['text-5xl'],
			h2: ['text-3xl'],
			h3: ['text-xl'],
			regular: ['text-sm'],
		},
	},
	defaultVariants: {
		type: 'h1',
	},
})

export interface TitleProps
	extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'type'>,
		VariantProps<typeof variants> {}

export const Text: React.FC<TitleProps> = ({ className, type, ...props }) => (
	<span className={cn(variants({ type }), className)} {...props} />
)
