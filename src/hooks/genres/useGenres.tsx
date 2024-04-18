import useSWR from 'swr'
import { api } from '../../api'

interface IDataPromise {
  total: number
  genres: {
    id: number
    title: string
    description: string
  }[]
}

const getGenres = (url: string): Promise<IDataPromise> =>
  api.get(url).then((res) => res.data)

const useGenres = (offset?: number, limit?: number) => {
  const { data, error } = useSWR(
    `/genres?offset=${offset ? offset : 0}&limit=${limit ? limit : 100}`,
    getGenres
  )

  return { data, error }
}

export { useGenres }
