import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardBookContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 300px;
`

export const CardBookHeader = styled.div`
  display: flex;
  justify-content: end;
  flex-direction: column;
  padding: 2px;
  text-align: center;
  flex: 1;
  font-size: 12px;
  font-weight: bold;
`

export const CardBookContent = styled.div<{ imageurl: string }>`
  flex: 4;
  background-color: ${(props) => props.theme.cinza};
  background-image: url(${(props) => props.imageurl});
  background-position: center;
  background-size: cover;
`
