import type { JwtPayload } from 'jsonwebtoken'
import jwt from 'jsonwebtoken'
import { getUserById } from '../data/user'

export function sign<T extends JwtPayload> (obj: T, secret: string, options?: jwt.SignOptions) {
  return jwt.sign(obj, secret, options)
}

export function decode (token: string) {
  return jwt.decode(token)
}

export function verify<T extends JwtPayload> (
  token: string,
  secret: string,
  options?: jwt.SignOptions,
) {
  return jwt.verify(token, secret, options) as T
}

export function getUserFromEvent (event: any) {
  const config = useRuntimeConfig()
  const cookie = getCookie(event, config.cookieName)
  if (!cookie) { return null }
  const payload = verify(cookie, config.jwtSecret)
  if (!payload) { return null }
  return getUserById(payload.userId)
}
