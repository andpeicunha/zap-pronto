import { handleListUsersStatus } from '@/bff/controllers/handlers/user/handleUserStatus'
import { NextResponse } from 'next/server'

export async function GET() {
  const response = await handleListUsersStatus()

  return NextResponse.json(response)
}
