import { IconType } from 'react-icons'
import {
  OptionCardContainer,
  OptionCardIcon,
  OptionCardTitle,
} from './styles/optionCard'

interface IProps {
  CardIcon: IconType
  cardTitle: string
  cardLink: string
}

const OptionCard = ({ CardIcon, cardTitle, cardLink }: IProps) => {
  return (
    <OptionCardContainer to={cardLink}>
      <OptionCardIcon>
        <CardIcon />
      </OptionCardIcon>
      <OptionCardTitle>
        <h3>{cardTitle}</h3>
      </OptionCardTitle>
    </OptionCardContainer>
  )
}

export default OptionCard
