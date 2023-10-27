import { getUserByUsername } from '~/server/data/user'
import { sign } from '~/server/utils/jwt'

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    username: string
    password: string
    rememberMe: boolean
  }>(event)

  const { username, password, rememberMe } = body

  if (!username || !password) {
    return createError({
      statusCode: 400,
      message: 'Username and password are required',
    })
  }

  const user = await getUserByUsername(username)
  if (!user) {
    return createError({
      statusCode: 401,
      message: 'Bad credentials',
    })
  }

  const verified = await verifyPassword(password, user.password)
  if (!verified) {
    return createError({
      statusCode: 401,
      message: 'Incorrect password',
    })
  }

  const config = useRuntimeConfig()
  const token = sign({ userId: user.id }, config.jwtSecret)

  setCookie(event, config.cookieName, token, {
    httpOnly: true, // If you don't need the cookie to be accessible from browser
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    expires: rememberMe
      ? new Date(Date.now() + config.cookieRememberMeExpires)
      : new Date(Date.now() + config.cookieExpires),
  })

  const { password: _password, ...rest } = user

  return {
    user: rest,
  }
})
