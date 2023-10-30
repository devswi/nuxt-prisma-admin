export default defineEventHandler((event) => {
  const user = event.context.user as User
  if (!user) {
    return {
      user: null,
    }
  }
  return {
    user,
  }
})
