import prisma from '@/lib/prisma'

export async function getUser() {
  const users = await prisma.user.findMany()
  console.log('users: ', users)

  return users
}
