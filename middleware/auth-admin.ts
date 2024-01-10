export default defineNuxtRouteMiddleware(() => {
  const isAdmin = useAdmin()
  if (!isAdmin.value)
    return navigateTo({ name: 'login' })
})
