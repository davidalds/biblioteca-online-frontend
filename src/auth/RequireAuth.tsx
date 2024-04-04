import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './useAuth'

interface IProps {
  children: JSX.Element
}

const RequireAuth = ({ children }: IProps) => {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.email) {
    return <Navigate to={'/login'} state={{ from: location }} replace={true} />
  }

  return children
}

export default RequireAuth
