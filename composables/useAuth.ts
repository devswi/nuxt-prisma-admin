export const useAuth = () => {
  const authUser = useAuthUser()

  const setUser = (user: User | null) => {
    authUser.value = user
  }

  const setCookie = (cookie: any) => {
    cookie.value = cookie
  }

  const login = async (username: string, password: string, rememberMe: boolean) => {
    const res = await $fetch<{ user: User}>('/auth/login', {
      method: 'POST',
      body: {
        username,
        password,
        rememberMe,
      },
    })

    setUser(res.user)
  }

  const logout = async () => {
    await $fetch('/auth/logout', {
      method: 'POST',
    })
    setUser(null)
  }

  /**
   * @description Get the current user from the server
   */
  const currentUser = async () => {
    if (!authUser.value) {
      try {
        const data = await $fetch<{ user: User}>('/auth/current', {
          headers: useRequestHeaders(['cookie']) as HeadersInit,
        })
        setUser(data.user)
      } catch (error) {
        setCookie(null)
      }
    }
    return authUser
  }

  return {
    login,
    logout,
    currentUser,
  }
}
