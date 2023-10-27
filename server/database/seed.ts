import { PrismaClient } from '@prisma/client'
import { hashPasswoard } from '../utils/encryption'

const prisma = new PrismaClient()

const userData = [
  {
    username: 'admin',
    role: 0,
    password: 'adminadmin',
  },
  {
    username: 'test',
    password: 'testtest',
  },
]

async function main () {
  console.log('Start seeding ...')
  for (const u of userData) {
    const { password: pwd, ...rest } = u
    const password = await hashPasswoard(pwd)
    const user = await prisma.user.create({
      data: {
        ...rest,
        password,
      },
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
