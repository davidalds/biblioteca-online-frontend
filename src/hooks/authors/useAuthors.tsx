import useSWR from 'swr'
import { api } from '../../api'

interface IProps {
  total: number
  authors: {
    id: number
    first_name: string
    last_name: string
    birth_year: string
    nationality: string
  }[]
}

const getAuthors = (url: string): Promise<IProps> =>
  api.get(url).then((res) => res.data)

const useAuthors = () => {
  const { data, error } = useSWR('/authors?offset=0&limit=100', getAuthors)

  return { data, error }
}

export { useAuthors }
