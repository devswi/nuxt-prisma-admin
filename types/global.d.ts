interface Role {
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

interface Menu {
  id: string
  title: string
  icon: string
  children: Omit<NavigationItem, 'icon' | 'children'>[]
  url?: string
}

declare global {
  export type {
    User,
    Role,
    Menu,
  }
}
