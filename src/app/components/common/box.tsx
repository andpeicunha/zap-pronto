import { colorsLookup, sizesLookup, baseClasses } from '@/app/theme/theme'
import type { ComponentProps } from 'react'

type ButtonVariant = keyof typeof colorsLookup
type ButtonSize = keyof typeof sizesLookup

interface ButtonProps extends ComponentProps<'div'> {
	variant: ButtonVariant
	size: ButtonSize
}

export const Box = (props: ButtonProps) => {
	const { variant, size, ...rest } = props
	return (
		<div
			{...rest}
			className='bg-azul-principal-100 m-2 p-2 rounded-md'
		/>
	)
}

Box.defaultProps = {
	variant: 'primary',
	size: 'medium',
}
