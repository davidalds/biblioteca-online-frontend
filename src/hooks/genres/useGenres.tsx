import useSWR from 'swr'
import { api } from '../../api'

interface IProps {
  id: number
  title: string
  description: string
}

const getGenres = (url: string): Promise<IProps[]> =>
  api.get(url).then((res) => res.data)

const useGenres = () => {
  const { data, error } = useSWR('/genres', getGenres)

  return { data, error }
}

export { useGenres }
