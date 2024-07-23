import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/config'
import { Dashboard } from '@/app/main/dashboard'
import { getServerSession } from 'next-auth/next'
import Home from './home/home'

export default async function Page() {
	const session = await getServerSession(nextAuthOptions)

	if (!session) {
		return <Home />
	}

	return <Dashboard />
}
