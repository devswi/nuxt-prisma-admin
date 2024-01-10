import bcrypt from 'bcryptjs'

export async function hashPasswoard(password: string) {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

export function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash)
}
