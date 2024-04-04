import styled from 'styled-components'
import { CiSearch } from 'react-icons/ci'

export const InputContainer = styled.div`
  display: flex;
  padding: 6px 0 6px 0;
  box-shadow: 2px 2px 12px gray;
  align-items: center;
`

export const Input = styled.input`
  font-size: 18px;
  flex: 1;
  padding: 10px;
  border: none;
`

export const ButtonSearchBar = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border: none;
  background-color: ${(props) => props.theme.branco};
`

export const SearchIcon = styled(CiSearch)`
  font-size: 20px;
  color: ${(props) => props.theme.azulEscuro};
`
