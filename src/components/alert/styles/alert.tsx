import styled, { css } from 'styled-components'
import { alertTypes } from '../types'

export const AlertContainer = styled.div`
  display: flex;
  gap: 12px;
  box-shadow: 2px 2px 12px ${(props) => props.theme.cinza};
  background-color: ${(props) => props.theme.branco};
  min-height: 100px;
`

export const AlertIconContainer = styled.div<{ type: alertTypes }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 2rem;
  ${({ type }) => {
    switch (type) {
      case 'ERROR':
        return css`
          background-color: ${(props) => props.theme.vermelho};
          color: ${(props) => props.theme.branco};
        `
      case 'WARNING':
        return css`
          background-color: ${(props) => props.theme.amarelo};
        `
      case 'INFO':
        return css`
          background-color: ${(props) => props.theme.azulClaro};
          color: ${(props) => props.theme.branco};
        `
    }
  }}
`

export const AlertContent = styled.div`
  display: flex;
  align-items: center;
  flex: 10;
  font-size: 1.2rem;
  color: ${(props) => props.theme.cinza};
`
