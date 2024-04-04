import { ReactNode } from 'react'
import { Container, MainContent, MainHeader } from './styles/mainSection'
import { IconType } from 'react-icons'

interface IProps {
  Icon: IconType
  header: string
  children: ReactNode
}

const MainSection = ({ Icon, header, children }: IProps) => {
  return (
    <Container>
      <MainHeader>
        <Icon />
        <h2>{header}</h2>
      </MainHeader>
      <MainContent>{children}</MainContent>
    </Container>
  )
}

export default MainSection
