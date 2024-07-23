'use client'

import { Button, Dialog, Input, Label } from '@/components/ui'
import {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { useStore } from '@/store/useStore'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import 'react-international-phone/style.css'
import { z } from 'zod'

function ModalFormRegisterNumber({
	children,
	id,
}: { children: React.ReactNode; id: string }) {
	const isModalVisible = useStore((state) => state.isModalVisible)
	const { data } = useSession()

	const [errors, setErrors] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const [firstName, setFirstName] = useState<string>('')
	// const [phone, setPhone] = useState<string>('');
	const phone = data?.user?.email

	const onSubmit = async (e: any) => {
		e.preventDefault()
		setIsLoading(true)

		try {
			const mySchema = z.object({
				firstName: z
					.string()
					.min(3, { message: 'O nome precisa ter pelo menos 2 letras' }),
				phone: z
					.string()
					.min(11, { message: 'Verifique seu número de telefone' }),
			})

			const response = mySchema.safeParse({
				firstName: firstName,
				phone: phone,
			})

			if (!response.success) {
				let errArr: any[] = []
				const { errors: err } = response.error
				for (var i = 0; i < err.length; i++) {
					errArr.push({ for: err[i].path[0], message: err[i].message })
				}
				setErrors(errArr)
				throw err
			}
			setErrors([])
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<Dialog open={isModalVisible}>
				<DialogTrigger asChild>{children}</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]" id={id}>
					<DialogHeader>
						<DialogTitle>Registrar Telefone</DialogTitle>
						<DialogDescription>
							Cadastre o mesmo número de telefone que você já usa pra falar com
							seus clientes.
						</DialogDescription>
					</DialogHeader>
					<form className="grid gap-4 py-4" onSubmit={onSubmit}>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="name" className="text-right">
								Nome
							</Label>
							<Input
								name="firstName"
								className="col-span-3"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								required
								autoComplete="off"
								error={errors}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="username" className="text-right">
								WhatsApp
							</Label>
							<Input
								isPhoneNumber
								name="phone"
								className="col-span-3"
								required
								autoComplete="off"
								error={errors}
							/>
						</div>
						<DialogFooter>
							<Button
								type="submit"
								variant={'highlight'}
								size={'sm'}
								disabled={isLoading}
							>
								{isLoading ? 'Registrando...' : 'Iniciar Registro'}
							</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default ModalFormRegisterNumber
