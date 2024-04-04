export type formBookValues = {
  title: string
  publisher: string
  publication_year: string
  ISBN: string
  author: { id: string }
  genres: { id: string }[]
}
