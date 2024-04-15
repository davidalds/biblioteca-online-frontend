import { useState } from 'react'
import {
  ButtonSearchBar,
  Input,
  InputContainer,
  SearchIcon,
} from './styles/searchbar'

interface IProps {
  placeHolder: string
  handleSearch: (searchValue: string) => void
}

const SearchBar = ({ placeHolder, handleSearch }: IProps) => {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleClickSearch = () => {
    handleSearch(searchValue)
  }

  return (
    <InputContainer>
      <ButtonSearchBar onClick={handleClickSearch}>
        <SearchIcon />
      </ButtonSearchBar>
      <Input
        placeholder={placeHolder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </InputContainer>
  )
}

export default SearchBar
