import * as yup from 'yup'

export const createBooksSchema = yup.object().shape({
  title: yup.string().trim().required('Campo Obrigatório'),
  publisher: yup.string().trim().required('Campo Obrigatório'),
  publication_year: yup.date().required('Campo Obrigatório'),
  ISBN: yup
    .string()
    .required('Campo Obrigatório')
    .matches(
      /^\d{3}-\d{2}-\d{3}-\d{4}-\d$/,
      'O valor deve seguir a seguinte formatação: 000-00-000-0000-0'
    ),
  author: yup.object().shape({
    id: yup.string().required('Campo Obrigatório'),
  }),
  genres: yup
    .array()
    .min(1, 'Campo Obrigatório')
    .of(
      yup.object().shape({
        id: yup.string().required('Campo Obrigatório'),
      })
    ),
})
