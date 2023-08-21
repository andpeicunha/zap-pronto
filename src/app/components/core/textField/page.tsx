import { useForm } from 'react-hook-form'
type TextFieldProps = {
	name: string
	label: string
	register?: any
	required?: boolean
	error?: string
}

function TextField({ name, label, register, required, error }: TextFieldProps) {
	const {
		watch,
		formState: { errors },
	} = useForm()

	return (
		<>
			<label>{label}</label>
			<input {...register(name, { required })} />
			{errors.name && <p>{error}</p>}
		</>
	)
}

export default TextField
