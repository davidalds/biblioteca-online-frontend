import * as yup from 'yup'

const loginSchema = yup.object({
  email: yup
    .string()
    .required('Campo obrigatório')
    .email('Email deve ser válido'),
  password: yup.string().required('Campo obrigatório'),
})

export { loginSchema }
