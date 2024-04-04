import {
  CardBookContainer,
  CardBookContent,
  CardBookHeader,
} from './styles/bookCard'

interface IProps {
  to: string
  header: string
  bookImage?: string
}

const BookCard = ({ to, header, bookImage }: IProps) => {
  return (
    <CardBookContainer to={to}>
      <CardBookHeader>{header}</CardBookHeader>
      <CardBookContent imageurl={bookImage ? bookImage : ''} />
    </CardBookContainer>
  )
}

export default BookCard
