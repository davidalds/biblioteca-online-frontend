import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useAuth } from '../../auth/useAuth'
import { loginSchema } from './schema/loginSchema'

const LoginPage = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      if (!values.email || !values.password) {
        return
      }

      await auth.signIn(values.email, values.password)

      navigate('/', { replace: true })
      toast.success('Login realizado com sucesso')
    } catch (error) {
      toast.error('Ocorreu um erro ao fazer login')
    }
  }

  return auth.isAuthenticated() ? (
    <Navigate to={'/'} replace={true} />
  ) : (
    <>
      <h1>Login Page</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
          <Field name="password" type="password" />
          <ErrorMessage name="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}

export default LoginPage
