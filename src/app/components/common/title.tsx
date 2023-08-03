import type { ComponentProps } from 'react'
import classnames from 'classnames';


export const TitleBox = (props: ButtonProps) => {
	const { variant, textSize, ...rest } = props
	return (
		<span
			{...rest}
			className={`bg-grayBluish-light m-2 p-2 rounded-md text-xs`}
		/>
	)
}

TitleBox.defaultProps = {
	textSize: 'base',
}
