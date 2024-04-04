import { useContext } from 'react'
import AuthContext from './AuthContext'
import { TypeContext } from './type/typeContext'

const useAuth = () => useContext<TypeContext>(AuthContext)

export { useAuth }
