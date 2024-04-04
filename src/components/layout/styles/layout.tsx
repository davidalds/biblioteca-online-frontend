import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${(props) => props.theme.azulEscuro};

  main {
    flex: 5;
    background-color: ${(props) => props.theme.branco};
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`
