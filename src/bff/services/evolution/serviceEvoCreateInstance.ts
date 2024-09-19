import { postEvoCreateInstance } from '@/bff/integrations/evolution/postCreateInstance'

export async function servicesEvoCreateInstance() {
  const response = await postEvoCreateInstance()

  return response
}
