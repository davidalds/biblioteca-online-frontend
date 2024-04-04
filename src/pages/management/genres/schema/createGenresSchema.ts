import * as yup from 'yup'

const createGenresSchema = yup.object().shape({
  title: yup.string().trim().required('Campo obrigatório'),
  description: yup.string().trim(),
})

export { createGenresSchema }
