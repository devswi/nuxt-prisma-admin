import prisma from './client'

export async function getUserById (id: number) {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  })
}

export async function getUserByUsername (username: string) {
  return await prisma.user.findUnique({
    where: {
      username,
    },
  })
}
