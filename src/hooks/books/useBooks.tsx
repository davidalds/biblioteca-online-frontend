import useSWR from 'swr'
import { api } from '../../api'

interface IProps {
  total: number
  books: { id: number; title: string }[]
}

const getBooks = (url: string): Promise<IProps> =>
  api.get(url).then((res) => res.data)

const useBooks = (search?: string, offset?: number, limit?: number) => {
  const { data, error } = useSWR(
    search
      ? `/books/search?title=${search}`
      : `/books?offset=${offset ? offset : 0}&limit=${limit ? limit : 10}`,
    getBooks
  )

  return { data, error }
}

export { useBooks }
