import { cn } from '@/utils'
import React from 'react'

type ErrorMessageProps = {
	error?: { for: string; message: string }[]
	name: string
	className?: string
}

const ErrorMessage = React.forwardRef<HTMLSpanElement, ErrorMessageProps>(
	({ error, name, className }, ref?) => {
		const errorMessage = error?.find((err) => err.for === name)?.message
		return errorMessage ? (
			<span ref={ref} className={cn('text-red-700', className)}>
				{errorMessage}
			</span>
		) : null
	},
)

ErrorMessage.displayName = 'ErrorMessage'

export default ErrorMessage
