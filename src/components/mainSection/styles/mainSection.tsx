import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 2px 2px 12px gray;
  padding: 5px;
  flex: 1;
`

export const MainHeader = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  color: ${(props) => props.theme.azulClaro};
  border-bottom: 1px solid ${(props) => props.theme.cinza};
`

export const MainContent = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`
