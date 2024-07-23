import { VariantProps, cva } from 'class-variance-authority'

export const cardHeaderVariants = cva(
	'flex flex-col rounded-t-lg  space-y-2 px-6 py-3',
	{
		variants: {
			variant: {
				primary: 'bg-primary text-white',
				secondary: 'bg-secondary text-white',
				transparent: 'bg-none text-primary',
			},
		},
		defaultVariants: {
			variant: 'primary',
		},
	},
)

export interface CardProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardHeaderVariants> {
	asChild?: boolean
}
