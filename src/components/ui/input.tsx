import * as React from 'react'

import ErrorMessage from '@/components/error/errorMessage'
import { cn } from '@/utils'
import { PhoneInput } from 'react-international-phone'

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'error' | 'name'> {
	isPhoneNumber?: boolean
	error: any[]
	name: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, isPhoneNumber = false, error, name, ...props }, ref) => {
		const [phone, setPhone] = React.useState<string>('')

		if (isPhoneNumber) {
			return (
				<>
					<PhoneInput
						defaultCountry="br"
						name={name}
						value={phone}
						onChange={(phone) => setPhone(phone)}
						className={cn(
							'[&_.react-international-phone-input-container:only-of-type]:!w-full [&_.react-international-phone-input:only-of-type]:!w-full [&_.react-international-phone-country-selector-button:only-of-type]:!w-[50px]',
							className,
						)}
					/>
					<ErrorMessage
						error={error}
						name={name}
						className="col-span-full -mt-3 text-right"
					/>
				</>
			)
		}

		return (
			<>
				<input
					name={name}
					type={type}
					className={cn(
						'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
						className,
					)}
					ref={ref}
					{...props}
				/>
				<ErrorMessage
					ref={ref}
					error={error}
					name={name}
					className="col-span-full -mt-3 text-right"
				/>
			</>
		)
	},
)
Input.displayName = 'Input'

export { Input }
