import useSWR from 'swr'
import { api } from '../../api'
import { book } from '../../types/bookTypes'

type dataBook = {
  id: number
} & book

interface IDataPromise {
  total: number
  books: dataBook[]
}

const getBooks = (url: string): Promise<IDataPromise> =>
  api.get(url).then((res) => res.data)

const useBooks = (search?: string, offset?: number, limit?: number) => {
  const { data, error } = useSWR(
    search
      ? `/books/search?title=${search}&author=&ISBN=&status=&offset=${offset ? offset : 0}&limit=${limit ? limit : 10}`
      : `/books?offset=${offset ? offset : 0}&limit=${limit ? limit : 10}`,
    getBooks
  )

  return { data, error }
}

export { useBooks }
