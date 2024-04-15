import styled, { css } from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 2px 2px 12px ${(props) => props.theme.cinza};
  height: 45px;
  gap: 5px;
  align-items: center;
`

export const PaginationItens = styled.div`
  display: flex;
  width: 200px;
  gap: 5px;
  height: 30px;
`

export const PaginationItem = styled.div<{ isactualpage?: 'true' | 'false' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.isactualpage === 'true'
      ? props.theme.branco
      : props.theme.azulEscuro};
  background-color: ${(props) =>
    props.isactualpage === 'true' ? props.theme.azulClaro : props.theme.branco};
  cursor: pointer;
  flex: 1;
  border: 1px solid ${(props) => props.theme.azulEscuro};
  border-radius: 5px;
  user-select: none;
`

export const PaginationButton = styled.div<{ disabled: boolean }>`
  display: flex;
  border: 1px solid ${(props) => props.theme.azulEscuro};
  background-color: ${(props) => props.theme.branco};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.azulEscuro};
  height: 30px;
  width: 50px;
  border-radius: 5px;

  ${(props) => {
    if (props.disabled) {
      return css`
        opacity: 0.5;
        cursor: not-allowed;
      `
    }
  }}
`
