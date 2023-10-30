export default defineNuxtPlugin(async () => {
  const { currentUser } = useAuth()
  await currentUser()
})
