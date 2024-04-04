import styled from 'styled-components'
import logo from '../../../assets/logo.jpg'

export const Head = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.cinza};
  background-image: url(${logo});
  background-size: cover;
  background-position: center;
  flex: 1;

  @media screen and (max-width: 850px) {
    display: none;
  }
`
