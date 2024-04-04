type userRole = 'ADMNISTRADOR' | 'BIBLIOTECARIO' | 'LEITOR' | ''

export type tokenProps = {
  email: string
  exp: number
  first_name: string
  iat: number
  user_type: userRole
}
