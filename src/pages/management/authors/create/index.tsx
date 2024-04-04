import { Formik } from 'formik'
import { IconAdd } from '../../../../common/icons'
import {
  FormButton,
  FormContainer,
  FormContent,
  FormControl,
  FormSection,
} from '../../../../components/form/styles'
import MainSection from '../../../../components/mainSection'
import { toast } from 'react-toastify'
import { createAuthorSchema } from '../schema/createAuthorsSchema'
import { api } from '../../../../api'
import { formAuthorValues } from '../types/createAuthorsTypes'
import FormField from '../../../../components/form/formField'

const CreateAuthorsPage = () => {
  const handleSubmit = async (
    values: formAuthorValues,
    resetform: () => void
  ) => {
    try {
      const date = new Date(values.birth_year)
      await api.post('/authors', { ...values, birth_year: date })
      resetform()
      toast.success('Autor criado com sucesso')
    } catch (error) {
      toast.error('Ocorreu um erro ao criar autor')
    }
  }

  return (
    <>
      <MainSection Icon={IconAdd} header={'Cadastrar Autor'}>
        <FormContainer>
          <Formik
            initialValues={{
              first_name: '',
              last_name: '',
              birth_year: '',
              nationality: '',
            }}
            validationSchema={createAuthorSchema}
            onSubmit={(values, { resetForm }) =>
              handleSubmit(values, resetForm)
            }
          >
            {({ handleSubmit, getFieldProps, errors }) => (
              <FormContent onSubmit={handleSubmit}>
                <FormSection>
                  <FormControl error={errors.first_name}>
                    <FormField
                      label={'Primeiro Nome'}
                      fieldProps={getFieldProps('first_name')}
                      fieldError={errors.first_name}
                    />
                  </FormControl>
                  <FormControl error={errors.last_name}>
                    <FormField
                      label={'Último nome'}
                      fieldProps={getFieldProps('last_name')}
                      fieldError={errors.last_name}
                    />
                  </FormControl>
                </FormSection>
                <FormControl error={errors.birth_year}>
                  <FormField
                    label={'Data de nascimento'}
                    fieldProps={getFieldProps('birth_year')}
                    fieldError={errors.birth_year}
                    type={'date'}
                  />
                </FormControl>
                <FormControl error={errors.nationality}>
                  <FormField
                    label={'Nacionalidade'}
                    fieldProps={getFieldProps('nationality')}
                    fieldError={errors.nationality}
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

export default CreateAuthorsPage
