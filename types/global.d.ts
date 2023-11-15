enum Role {
  Admin,
  User
}

interface User {
  id: number
  email: string
  username: string
  nickname: string
  phone: string
  role: Role
}

declare global {
  export { Role }

  export type {
    User
  }
}
