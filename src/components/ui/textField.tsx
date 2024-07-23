import { type DetailedHTMLProps, type InputHTMLAttributes } from 'react'
import {
	type FieldErrors,
	type FieldValues,
	type Path,
	type UseFormRegister,
} from 'react-hook-form'

interface InputProps<FormData extends FieldValues>
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label: string
	name: Path<FormData>
	register: UseFormRegister<FormData>
	errors: FieldErrors<FormData>
}

export const Input = <FormData extends FieldValues>({
	label,
	name,
	errors,
	register,
	...rest
}: InputProps<FormData>) => {
	const error = errors?.[name]?.message as string | undefined

	return (
		<>
			<label
				className="mb-2 block text-sm font-bold text-zinc-700"
				htmlFor={rest.id}
			>
				{label}
			</label>
			<input
				type="text"
				className={`appearance-none rounded-md border border-zinc-300 px-3 py-2 leading-tight shadow-sm focus:border-zinc-500 focus:outline-none
        ${error ? 'border-red-500' : 'border-zinc-300'}`}
				{...rest}
				{...register(name)}
			/>
			{error && <span className="text-xs text-red-500">{error}</span>}
		</>
	)
}
