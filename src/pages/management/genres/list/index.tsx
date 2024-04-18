import { useState } from 'react'
import { IconNumList } from '../../../../common/icons'
import MainSection from '../../../../components/mainSection'
import Pagination from '../../../../components/pagination'
import Table from '../../../../components/table'
import { genre } from '../../../../types/genreTypes'
import { ICol } from '../../../../components/table/types'
import { useGenres } from '../../../../hooks/genres/useGenres'
import Alert from '../../../../components/alert'

const GenresListPage = () => {
  const limitPerPage = 10
  const [offset, setOffset] = useState<number>(0)
  const { data: genresData, error: genresError } = useGenres(
    offset * limitPerPage,
    limitPerPage
  )

  const cols: ICol<genre>[] = [
    {
      headerName: 'Título',
      field: 'title',
    },
    {
      headerName: 'Descrição',
      field: 'description',
    },
  ]

  return genresError ? (
    <Alert type={'ERROR'} msg={'Ocorreu um erro ao listar gêneros'} />
  ) : (
    <>
      <MainSection header={'Gêneros'} Icon={IconNumList}>
        <Table<genre>
          cols={cols}
          data={genresData?.genres ? genresData.genres : []}
        />
      </MainSection>
      <Pagination
        totalData={genresData?.total ? genresData.total : 0}
        limitPerPage={limitPerPage}
        changeOffset={setOffset}
      />
    </>
  )
}

export default GenresListPage
