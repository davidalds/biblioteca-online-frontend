import { useCallback, useState } from 'react'
import MainSection from '../../components/mainSection'
import SearchBar from '../../components/searchbar'
import BookCard from '../../components/bookCard'
import { useBooks } from '../../hooks/books/useBooks'
import { IconHome } from '../../common/icons'
import Pagination from '../../components/pagination'
import Alert from '../../components/alert'

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const limitPerPage = 6
  const [offset, setOffset] = useState<number>(0)
  const { data, error } = useBooks(
    searchValue,
    offset * limitPerPage,
    limitPerPage
  )

  const resetOffset = () => {
    setOffset(0)
  }

  const handleSearch = useCallback(
    (searchValue: string) => {
      setSearchValue(searchValue)
      resetOffset()
    },
    [setSearchValue]
  )

  const handleOffset = useCallback(
    (offsetValue: number) => {
      setOffset(offsetValue)
    },
    [setOffset]
  )

  return error ? (
    <Alert type={'ERROR'} msg="Ocorreu um erro ao carregar livros" />
  ) : (
    <>
      <SearchBar placeHolder="BUSCAR: título" handleSearch={handleSearch} />
      <MainSection Icon={IconHome} header="Livros">
        {data?.books.length ? (
          data.books.map(({ id, title }) => (
            <BookCard
              header={title}
              to={`book/${id}`}
              key={id}
              bookImage={
                'https://m.media-amazon.com/images/I/91Bx5ilP+EL._AC_UF1000,1000_QL80_.jpg'
              }
            />
          ))
        ) : (
          <></>
        )}
      </MainSection>
      <Pagination
        totalData={data?.total ? data.total : 0}
        limitPerPage={limitPerPage}
        changeOffset={handleOffset}
      />
    </>
  )
}

export default Home
