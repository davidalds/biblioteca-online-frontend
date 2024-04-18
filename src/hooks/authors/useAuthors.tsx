import useSWR from 'swr'
import { api } from '../../api'

interface IDataPromise {
  total: number
  authors: {
    id: number
    first_name: string
    last_name: string
    birth_year: string
    nationality: string
  }[]
}

const getAuthors = (url: string): Promise<IDataPromise> =>
  api.get(url).then((res) => res.data)

const useAuthors = (offset?: number, limit?: number) => {
  const { data, error } = useSWR(
    `/authors?offset=${offset ? offset : 0}&limit=${limit ? limit : 100}`,
    getAuthors
  )

  return { data, error }
}

export { useAuthors }
