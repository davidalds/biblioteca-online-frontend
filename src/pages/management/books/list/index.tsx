import { useState } from 'react'
import { IconNumList } from '../../../../common/icons'
import MainSection from '../../../../components/mainSection'
import { useBooks } from '../../../../hooks/books/useBooks'
import Alert from '../../../../components/alert'
import { ICol } from '../../../../components/table/types'
import { book } from '../../../../types/bookTypes'
import Table from '../../../../components/table'
import Pagination from '../../../../components/pagination'

const BooksListPage = () => {
  const limitPerPage = 10
  const [offset, setOffset] = useState<number>(0)
  const { data: booksData, error: booksError } = useBooks(
    '',
    offset * limitPerPage,
    limitPerPage
  )
  const cols: ICol<book>[] = [
    {
      headerName: 'Título',
      field: 'title',
    },
    {
      headerName: 'ISBN',
      field: 'ISBN',
    },
    {
      headerName: 'Ano de Publicação',
      field: 'publication_year',
    },
    {
      headerName: 'Editora',
      field: 'publisher',
    },
    { headerName: 'Status', field: 'status' },
  ]

  return booksError ? (
    <Alert type="ERROR" msg={'Ocorreu um erro ao listar livros'} />
  ) : (
    <>
      <MainSection header={'Livros'} Icon={IconNumList}>
        <Table cols={cols} data={booksData?.books ? booksData.books : []} />
      </MainSection>
      <Pagination
        totalData={booksData?.total ? booksData.total : 0}
        changeOffset={setOffset}
        limitPerPage={limitPerPage}
      />
    </>
  )
}

export default BooksListPage
