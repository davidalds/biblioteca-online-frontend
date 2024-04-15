import { css } from 'styled-components'

export const BaseButton = css`
  cursor: pointer;
  padding: 10px;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.azulClaro};
  color: ${(props) => props.theme.branco};
  border: none;
  border-radius: 5px;
  transition: 0.5s;
  &:hover {
    background-color: ${(props) => props.theme.azulEscuro};
  }
`
