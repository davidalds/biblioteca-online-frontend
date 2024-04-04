import { useCallback, useState } from 'react'
import MainSection from '../../components/mainSection'
import SearchBar from '../../components/searchbar'
import BookCard from '../../components/bookCard'
import { useBooks } from '../../hooks/books/useBooks'
import { IconHome } from '../../common/icons'
import Pagination from '../../components/pagination'

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const limit = 4
  const [offset, setOffset] = useState<number>(0)
  const { data, error } = useBooks('', offset * limit, limit)

  const handleButton = () => {
    if (!searchValue) return
    window.alert(searchValue)
  }

  const handleOffset = useCallback((offsetValue: number) => {
    setOffset(offsetValue)
  }, [])

  return (
    <>
      <SearchBar
        placeHolder="BUSCAR: título"
        searchValue={searchValue}
        onChange={setSearchValue}
        handleButton={handleButton}
      />
      <MainSection Icon={IconHome} header="Livros">
        {data?.books.map(({ id, title }) => (
          <BookCard header={title} to={`book/${id}`} key={id} />
        ))}
      </MainSection>
      {data && (
        <Pagination
          offset={offset + 1}
          total={data.total}
          limit={limit}
          changeOffset={handleOffset}
        />
      )}
    </>
  )
}

export default Home
