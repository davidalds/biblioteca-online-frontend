import { createContext } from 'react'
import { TypeContext } from './type/typeContext'

const AuthContext = createContext<TypeContext>(null!)

export default AuthContext
