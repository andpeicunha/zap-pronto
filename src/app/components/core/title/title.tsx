import classnames from 'classnames'
import type { ComponentProps } from 'react'

export const TitleBox = (props: any) => {
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
