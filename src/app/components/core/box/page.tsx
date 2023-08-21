import { colorsLookup, textSize } from '@/app/theme/theme'
import type { ComponentProps } from 'react'

type ButtonVariant = keyof typeof colorsLookup

interface ButtonProps extends ComponentProps<'div'> {
	variant: ButtonVariant
}

export const Box = (props: ButtonProps) => {
	const { variant, ...rest } = props
	return (
		<div
			{...rest}
			className={`bg-slate-300 m-2 p-2 rounded-md flex flex-col`}
		>
			{props.children}
		</div>
	)
}

Box.defaultProps = {
	variant: 'base',
}
