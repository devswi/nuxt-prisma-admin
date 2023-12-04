import prisma from './client'

export async function getMenus (roles: Role[]) {
  // get all menu_id from menu_role
  const roleMenus = await prisma.menu_role.findMany({
    where: {
      role_id: {
        in: roles.map(role => role.id),
      },
    },
  })
  const records = await prisma.menu.findMany({
    where: {
      id: {
        in: roleMenus.map(roleMenu => roleMenu.menu_id),
      },
    },
  })
  // format menus to tree
  //
  // 1. find all root menus
  const rootMenus = records.filter(record => !record.parent_id)
  // 2. find all children
  const childrenMenus = records.filter(record => record.parent_id)
  // 3. config root menus
  rootMenus.forEach((root) => {
    return {
      ...root,
      children: childrenMenus.filter(child => child.parent_id === root.id),
    }
  })
  return rootMenus.map((root) => {
    const { parent_id: _, ...rest } = root
    const children = childrenMenus.filter(child => child.parent_id === root.id).map((child) => {
      const { parent_id: _, ...rest } = child
      return rest
    })
    return {
      ...rest,
      children,
    }
  })
}
