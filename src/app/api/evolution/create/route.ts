import { handleCreateInstance } from '@/bff/controllers/handlers/evolution/handleCreateInstance'
import { NextResponse } from 'next/server'

export async function GET() {
  const response = await handleCreateInstance()

  return NextResponse.json(response)
}
