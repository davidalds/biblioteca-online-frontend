import { Formik } from 'formik'
import { IconAdd } from '../../../../common/icons'
import {
  FormButton,
  FormContainer,
  FormContent,
  FormControl,
} from '../../../../components/form/styles'
import MainSection from '../../../../components/mainSection'
import { createGenresSchema } from '../schema/createGenresSchema'
import { toast } from 'react-toastify'
import { api } from '../../../../api'
import { formGenreValues } from '../types/createGenresTypes'
import FormField from '../../../../components/form/formField'

const CreateGenresPage = () => {
  const handleSubmit = async (
    values: formGenreValues,
    resetForm: () => void
  ) => {
    try {
      await api.post('/genres', { ...values })
      resetForm()
      toast.success('Gênero criado com sucesso')
    } catch (error) {
      toast.error('Ocorreu um erro ao criar gênero')
    }
  }

  return (
    <>
      <MainSection Icon={IconAdd} header={'Cadastrar Gênero'}>
        <FormContainer>
          <Formik
            initialValues={{
              title: '',
              description: '',
            }}
            validationSchema={createGenresSchema}
            onSubmit={(values, { resetForm }) =>
              handleSubmit(values, resetForm)
            }
          >
            {({ handleSubmit, getFieldProps, errors }) => (
              <FormContent onSubmit={handleSubmit}>
                <FormControl error={errors.title}>
                  <FormField
                    label={'Título'}
                    fieldProps={getFieldProps('title')}
                    fieldError={errors.title}
                  />
                </FormControl>
                <FormControl error={errors.description}>
                  <FormField
                    label={'Descrição'}
                    fieldProps={getFieldProps('description')}
                    fieldError={errors.description}
                    as={'textarea'}
                  />
                </FormControl>
                <FormButton>Cadastrar</FormButton>
              </FormContent>
            )}
          </Formik>
        </FormContainer>
      </MainSection>
    </>
  )
}

export default CreateGenresPage
