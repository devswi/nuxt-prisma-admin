import prisma from './client'

export async function getUserById (id: string) {
  const records = await prisma.user_role.findMany({
    where: {
      user_id: id,
    },
  })
  // fetch roles
  const roles = await prisma.role.findMany({
    where: {
      id: {
        in: records.map(record => record.role_id),
      },
    },
  })
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
  return await prisma.user.findUnique({
    where: {
      username,
    },
  })
}
