import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const OptionCardContainer = styled(Link)`
  display: flex;
  width: 250px;
  height: 80px;
  box-shadow: 2px 2px 12px ${(props) => props.theme.cinza};

  @media screen and (max-width: 850px) {
    width: auto;
  }
`

export const OptionCardIcon = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: ${(props) => props.theme.azulClaro};
`

export const OptionCardTitle = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
`
