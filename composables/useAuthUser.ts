export const useAuthUser = () => {
  return useState<User | null>('user', () => null)
}
