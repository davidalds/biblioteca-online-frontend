import { useEffect } from 'react'
import { AxiosResponse } from 'axios'
import { api } from '../api'
import AuthContext from './AuthContext'
import { jwtDecode } from 'jwt-decode'
import { tokenProps } from './type/typeToken'
import { useState } from 'react'

interface IProps {
  children: JSX.Element
}

const DEFAULTTOKEN: tokenProps = {
  email: '',
  first_name: '',
  user_type: '',
  exp: 0,
  iat: 0,
}

const AuthProvider = ({ children }: IProps) => {
  const [tokenDecoded, setTokenDecoded] = useState<tokenProps>(DEFAULTTOKEN)

  const getAccessToken = () => {
    return localStorage.getItem('access_token')
  }

  const isAuthenticated = () => {
    const token = getAccessToken()

    if (token) {
      const { exp } = jwtDecode<tokenProps>(token)

      if (Date.now() <= exp * 1000) {
        return true
      }

      return false
    } else {
      return false
    }
  }

  const singIn = async (email: string, password: string) => {
    try {
      const {
        data: { access_token },
      }: AxiosResponse<{ access_token: string }> = await api.post(
        '/auth/login',
        {
          email,
          password,
        }
      )

      localStorage.setItem('access_token', access_token)
      decodifyToken(access_token)
    } catch (error) {
      throw error
    }
  }

  const signOut = () => {
    localStorage.removeItem('access_token')
    setTokenDecoded(DEFAULTTOKEN)
  }

  const decodifyToken = (access_token: string) => {
    const token = jwtDecode<tokenProps>(access_token)
    setTokenDecoded((prev) => ({ prev, ...token }))
  }

  useEffect(() => {
    if (getAccessToken()) {
      decodifyToken(getAccessToken()!)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        first_name: tokenDecoded.first_name,
        email: tokenDecoded.email,
        user_type: tokenDecoded.user_type,
        signIn: singIn,
        signOut: signOut,
        isAuthenticated: isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
