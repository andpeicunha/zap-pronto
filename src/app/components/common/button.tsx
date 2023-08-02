import { colorsLookup, sizesLookup, baseClasses } from '@/app/theme/theme'
import type { ComponentProps } from 'react'

type ButtonVariant = keyof typeof colorsLookup
type ButtonSize = keyof typeof sizesLookup

interface ButtonProps extends ComponentProps<'button'> {
	variant: ButtonVariant
	size: ButtonSize
}

export const Button = (props: ButtonProps) => {
	const { variant, size, ...rest } = props
	return (
		<button
			{...rest}
			className={`${baseClasses} ${colorsLookup[variant]} ${sizesLookup[size]}`}
		/>
	)
}

Button.defaultProps = {
	variant: 'primary',
	size: 'medium',
}
