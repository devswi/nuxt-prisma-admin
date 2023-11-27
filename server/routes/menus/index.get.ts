import { getMenus } from '~/server/data/menus'

export default defineEventHandler(async (event) => {
  const user = event.context.user as User
  if (!user) {
    return []
  }
  const menus = await getMenus(user.roles)
  return {
    objects: menus,
  }
})
