import NavLinkComponent from '../navLink'
import { Nav } from './styles/nav'
import { useContext } from 'react'
import AuthContext from '../../auth/AuthContext'
import { IconExit, IconHome, IconList, IconUsers } from '../../common/icons'

const NavComponent = () => {
  const auth = useContext(AuthContext)

  return (
    <Nav>
      <NavLinkComponent title="Home" Icon={IconHome} to="/" />
      <NavLinkComponent title="Gêneros" Icon={IconList} to="genres" />
      {(auth.user_type === 'ADMNISTRADOR' ||
        auth.user_type === 'BIBLIOTECARIO') && (
        <NavLinkComponent title="Gestão" Icon={IconUsers} to="management" />
      )}
      <NavLinkComponent
        title="Sair"
        Icon={IconExit}
        to="/login"
        action={auth.signOut}
      />
    </Nav>
  )
}

export default NavComponent
