export function useAuthUser() {
  return useState<User | null>('user', () => null)
}
