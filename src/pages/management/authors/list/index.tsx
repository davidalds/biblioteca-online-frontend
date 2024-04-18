import { IconNumList } from '../../../../common/icons'
import MainSection from '../../../../components/mainSection'
import { useState } from 'react'
import Pagination from '../../../../components/pagination'
import { useAuthors } from '../../../../hooks/authors/useAuthors'
import Alert from '../../../../components/alert'
import Table from '../../../../components/table'
import { ICol } from '../../../../components/table/types'
import { author } from '../../../../types/authorTypes'

const AuthorsListPage = () => {
  const limitPerPage = 10
  const [offset, setOffset] = useState<number>(0)
  const { data: authorsData, error: authorsError } = useAuthors(
    offset * limitPerPage,
    limitPerPage
  )
  const cols: ICol<author>[] = [
    {
      headerName: 'Primeiro Nome',
      field: 'first_name',
    },
    {
      headerName: 'Último Nome',
      field: 'last_name',
    },
    {
      headerName: 'Data de Nascimento',
      field: 'birth_year',
    },
    {
      headerName: 'Nacionalidade',
      field: 'nationality',
    },
  ]

  return authorsError ? (
    <Alert type="ERROR" msg="Ocorreu um erro ao carregar autores" />
  ) : (
    <>
      <MainSection header="Autores" Icon={IconNumList}>
        <Table<author>
          data={authorsData ? authorsData.authors : []}
          cols={cols}
        />
      </MainSection>
      <Pagination
        totalData={authorsData ? authorsData?.total : 0}
        changeOffset={setOffset}
        limitPerPage={limitPerPage}
      />
    </>
  )
}

export default AuthorsListPage
