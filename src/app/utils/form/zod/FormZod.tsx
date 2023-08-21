import z from 'zod'

const personSchema = z.object({
	firstName: z.string().min(3).max(25).nonempty('Nome é um campo obrigatório'),
	lastName: z.string().min(3).max(25).nonempty('Sobrenome é um campo obrigatório'),
	phone: z.string(),
})

export type RegisterPerson = z.infer<typeof personSchema>
