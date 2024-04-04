import { IconType } from 'react-icons'
import { NavLinkContainer } from './styles/navLink'

interface IProps {
  title: string
  Icon: IconType
  to: string
  action?: () => void
}

const NavLinkComponent = ({ title, Icon, to, action }: IProps) => {
  return (
    <NavLinkContainer to={to} onClick={action ? action : () => false}>
      <Icon />
      {title}
    </NavLinkContainer>
  )
}

export default NavLinkComponent
