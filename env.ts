import { parseEnv } from 'znv'
import { z } from 'zod'

export const {
	NEXTAUTH_SECRET,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	POSTGRES_DATABASE,
	POSTGRES_HOST,
	POSTGRES_PASSWORD,
	POSTGRES_PRISMA_URL,
	POSTGRES_URL,
	POSTGRES_URL_NON_POOLING,
	POSTGRES_URL_NO_SSL,
	POSTGRES_USER,
} = parseEnv(process.env, {
	NEXTAUTH_SECRET: z.string().min(1),
	GOOGLE_CLIENT_ID: z.string().min(1),
	GOOGLE_CLIENT_SECRET: z.string().min(1),
	POSTGRES_DATABASE: z.string().min(1),
	POSTGRES_HOST: z.string().min(1),
	POSTGRES_PASSWORD: z.string().min(1),
	POSTGRES_PRISMA_URL: z.string().min(1),
	POSTGRES_URL: z.string().min(1),
	POSTGRES_URL_NON_POOLING: z.string().min(1),
	POSTGRES_URL_NO_SSL: z.string().min(1),
	POSTGRES_USER: z.string().min(1),
})
