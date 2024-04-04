type userRole = 'ADMNISTRADOR' | 'BIBLIOTECARIO' | 'LEITOR' | ''

export type TypeContext = {
  first_name: string
  email: string
  user_type: userRole
  signIn: (email: string, password: string) => void
  signOut: () => void
  isAuthenticated: () => boolean
}
