import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { nextAuthOptions } from '../auth/[...nextauth]/config'

export async function GET() {
  const session = await getServerSession(nextAuthOptions)

  return NextResponse.json({
    authenticated: !!session,
    session,
  })
}
