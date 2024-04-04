import styled from 'styled-components'

export const SubSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 0 10px 0;
  flex: 1;
`

export const SubSectionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${(props) => props.theme.azulClaro};
`

export const SubSectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid black;
`

export const SubSectionContent = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`
