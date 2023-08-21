import { BoxCore, Button, TextField, TitleBox } from '@/app/components/core/page'
import { RegisterPerson } from '@/app/utils/form/zod/FormZod'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

function RegisterClients() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<RegisterPerson>()

	const onSubmit = (data: any) => console.log(data)

	return (
		<BoxCore variant='bg-gray-bluish-dark'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TitleBox textSize='sm'>Cadastro de Contatos</TitleBox>

				<TextField
					name='firstName'
					required
					register={register}
					label='Nome'
					error='Texto Erro'
				/>
				<TextField
					required
					register={register}
					label='Sobrenome'
					name='lastName'
				/>
				<TextField
					required
					register={register}
					label='Whatsapp'
					name='phone'
				/>

				<Button
					name='Cadastrar Contato'
					type='submit'
					data-testid='button:register-multiples-contacts'
					size='lg'
					bgColor={''}
					textColor={''}
					bgHover={''}
				/>
			</form>
		</BoxCore>
	)
}

export default RegisterClients
