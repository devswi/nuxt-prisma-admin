/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client'
import { hashPasswoard } from '../utils/encryption'

const prisma = new PrismaClient()

const roleData = {
  name: 'ADMIN',
}

const menus = [
  {
    title: 'Dashboard',
    url: '/admin',
    icon: 'i-heroicons-squares-2x2-solid',
  },
  {
    title: 'Authority',
    icon: 'i-heroicons-cube-solid',
    children: [
      {
        title: 'User',
        url: '/admin/users',
      },
      {
        title: 'Role',
        url: '/admin/roles',
      },
      {
        title: 'Menu',
        url: '/admin/menus',
      },
    ],
  },
]

const userData = {
  username: 'admin',
  password: 'adminadmin',
}

async function main() {
  console.log('Start seeding...')
  console.log('Seeding roles...')
  const role = await prisma.role.create({
    data: {
      ...roleData,
    },
  })
  console.log(`Created role with id: ${role.id}`)

  console.log('Seeding users...')
  const { password: pwd, ...rest } = userData
  const password = await hashPasswoard(pwd)
  const user = await prisma.user.create({
    data: {
      ...rest,
      password,
    },
  })
  console.log(`Created user with id: ${user.id}`)

  // set user roles
  console.log('Set user roles...')
  await prisma.user_role.create({
    data: {
      user_id: user.id,
      role_id: role.id,
    },
  })

  // insert menus
  console.log('Insert menus...')
  for (const menu of menus) {
    const { children, ...other } = menu
    const m = await prisma.menu.create({
      data: {
        ...other,
      },
    })
    await prisma.menu_role.create({
      data: {
        menu_id: m.id,
        role_id: role.id,
      },
    })
    if (children) {
      for (const child of children) {
        const c = await prisma.menu.create({
          data: {
            ...child,
            parent_id: m.id,
          },
        })
        await prisma.menu_role.create({
          data: {
            menu_id: c.id,
            role_id: role.id,
          },
        })
      }
    }
  }
  console.log('Menus inserted.')

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
