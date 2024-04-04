import * as yup from 'yup'

export const createAuthorSchema = yup.object().shape({
  first_name: yup.string().trim().required('Campo Obrigatório'),
  last_name: yup.string().trim().required('Campo Obrigatório'),
  birth_year: yup.date().required('Campo Obrigatório'),
  nationality: yup.string().trim().required('Campo Obrigatório'),
})
