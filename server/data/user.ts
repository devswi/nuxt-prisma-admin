import prisma from './client'
import { getRolesByUserId } from './role'

export async function getUserById (id: string) {
  const roles = await getRolesByUserId(id)
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })
  return {
    ...user,
    roles,
  }
}

export async function getUserByUsername (username: string) {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })
  if (!user) { return null }
  const { id } = user
  const roles = await getRolesByUserId(id)
  return {
    ...user,
    roles,
  }
}
