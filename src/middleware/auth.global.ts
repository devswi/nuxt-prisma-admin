export default defineNuxtRouteMiddleware((to) => {
  if (to.name !== 'login') {
    // if not login, redirect to login page
    // else continue
    return navigateTo({ name: 'login' })
  }
})
