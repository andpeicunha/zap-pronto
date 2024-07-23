import z from 'zod'

import { customErrorMap } from './customError'
z.setErrorMap(customErrorMap)

export const personSchema = z.object({
	name: z.string().min(3).max(25),
	email: z.string().email(),
})
