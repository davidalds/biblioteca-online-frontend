import {
  ButtonSearchBar,
  Input,
  InputContainer,
  SearchIcon,
} from './styles/searchbar'

interface IProps {
  placeHolder: string
  searchValue: string
  onChange: (e: string) => void
  handleButton: () => void
}

const SearchBar = ({
  placeHolder,
  searchValue,
  onChange,
  handleButton,
}: IProps) => {
  return (
    <InputContainer>
      <ButtonSearchBar onClick={handleButton}>
        <SearchIcon />
      </ButtonSearchBar>
      <Input
        placeholder={placeHolder}
        value={searchValue}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputContainer>
  )
}

export default SearchBar
