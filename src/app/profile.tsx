import { getServerSession } from 'next-auth'
import { nextAuthOptions } from './api/auth/[...nextauth]/config'

export default async function Home() {
  const session = await getServerSession(nextAuthOptions)
  console.log(session)

  return (
    <section>
      <div>
        <h1>PROFILE: Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
      </div>
    </section>
  )
}
