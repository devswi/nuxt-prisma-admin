interface  Role {
  id: string
  name: 'ADMIN' | 'USER'
  description?: string
}

interface User {
  id: string
  email: string
  username: string
  nickname: string
  phone: string
  roles: Role[]
}

declare global {
  export { Role }

  export type {
    User,
    Role
  }
}
