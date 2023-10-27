export const useAuth = () => {
  const authUser = useAuthUser()

  const setUser = (user: User) => {
    authUser.value = user
  }

  const login = async (username: string, password: string, rememberMe: boolean) => {
    const res = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        username,
        password,
        rememberMe,
      },
    }) as { user: User }

    setUser(res.user)
  }

  return {
    login,
  }
}
