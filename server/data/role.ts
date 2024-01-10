import prisma from './client'

export async function getRolesByUserId(userId: string) {
  const records = await prisma.user_role.findMany({
    where: {
      user_id: userId,
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
  return roles
}
