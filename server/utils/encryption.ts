import { hash, genSalt, compare } from 'bcryptjs'

export async function hashPasswoard (password: string) {
  const salt = await genSalt(10)
  return await hash(password, salt)
}

export function verifyPassword (password: string, hash: string) {
  return compare(password, hash)
}
