import classnames from 'classnames'
import { ComponentProps } from 'react'

type ButtonVariant = {
	size: 'sm' | 'md' | 'lg'
	bgColor: string
	bgHover: string
	textColor: string
} & ComponentProps<'button'>

export function Button(props: ButtonVariant) {
	const { bgColor, textColor, size, bgHover, ...buttonProps } = props
	return (
		<button
			{...buttonProps}
			className={classnames(
				'bg-${bgColor} text-${textColor} text-${size} py-2 px-4 rounded'
			)}
		>
			{props.name}
		</button>
	)
}
