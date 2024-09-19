import { servicesEvoCreateInstance } from '@/bff/services/evolution/serviceEvoCreateInstance'
import { NextResponse } from 'next/server'

export const handleCreateInstance = async () => {
  try {
    const body = await servicesEvoCreateInstance()
    return NextResponse.json(body)
  } catch (err) {
    throw err
  }
}
