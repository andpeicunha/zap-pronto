import { BoxCore, Button, TitleBox } from '@/app/components/page'
import React from 'react'

function RegisterClients() {
	return (
		<BoxCore variant='bg-azul-principal-light'>
			<TitleBox textSize='sm'>Cadastro de Contatos</TitleBox>
			<Button
				name='Cadastrar Contato'
				type='submit'
				data-testid='button:register-multiples-contacts'
				size='lg'
				bgColor={''}
				textColor={''}
				bgHover={''}
			/>
		</BoxCore>
	)
}

export default RegisterClients
