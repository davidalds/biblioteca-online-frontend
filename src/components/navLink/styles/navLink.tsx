import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavLinkContainer = styled(Link)`
  display: flex;
  gap: 10px;
  padding: 12px;
  border-bottom: 1px solid ${(props) => props.theme.azulClaro};
  font-size: 16px;
  color: ${(props) => props.theme.branco};
  text-decoration: none;
  transition: 0.5s;
  &:hover {
    background-color: ${(props) => props.theme.azulClaro};
  }

  @media screen and (max-width: 850px) {
    justify-content: center;
  }
`
