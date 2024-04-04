import { Formik, Field } from 'formik'
import { IconAdd } from '../../../../common/icons'
import {
  FormButton,
  FormContainer,
  FormContent,
  FormControl,
  FormInput,
  FormInputMessage,
  FormLabel,
  FormSection,
} from '../../../../components/form/styles'
import MainSection from '../../../../components/mainSection'
import { toast } from 'react-toastify'
import { createBooksSchema } from '../schema/createBooksSchema'
import Select from 'react-select'
import { useAuthors } from '../../../../hooks/authors/useAuthors'
import { useEffect, useState } from 'react'
import { useGenres } from '../../../../hooks/genres/useGenres'
import { api } from '../../../../api'
import { PatternFormat } from 'react-number-format'
import { formBookValues } from '../types/createBooksPageTypes'
import { OptionType } from '../../types/selectType'
import FormField from '../../../../components/form/formField'

const CreateBooksPage = () => {
  const { data: authorsData, error: authorsError } = useAuthors()
  const { data: genresData, error: genresError } = useGenres()

  const [authorsOptions, setAuthorsOptions] = useState<OptionType[]>([])
  const [genresOptions, setGenresOptions] = useState<OptionType[]>([])

  const handleSubmit = async (
    values: formBookValues,
    resetForm: () => void
  ) => {
    try {
      const fetch_obj = {
        ...values,
        publication_year: new Date(values.publication_year),
        author: { id: parseInt(values.author.id) },
        genres: values.genres.map((g) => ({
          id: parseInt(g.id),
        })),
      }

      await api.post('/books', fetch_obj)

      resetForm()
      toast.success('Livro criado com sucesso')
    } catch (error) {
      toast.error('Ocorreu um erro ao criar livro')
    }
  }

  useEffect(() => {
    if (authorsData) {
      const authors_arr = authorsData.authors.map(
        ({ id, first_name, last_name }) => ({
          value: id.toString(),
          label: `${first_name} ${last_name}`,
        })
      )
      setAuthorsOptions(authors_arr)
    }
  }, [authorsData])

  useEffect(() => {
    if (genresData) {
      const genres_arr = genresData.map(({ id, title }) => ({
        value: id.toString(),
        label: `${title}`,
      }))
      setGenresOptions(genres_arr)
    }
  }, [genresData])

  return (
    <>
      <MainSection Icon={IconAdd} header={'Cadastrar Livro'}>
        <FormContainer>
          <Formik
            initialValues={{
              title: '',
              publisher: '',
              publication_year: '',
              ISBN: '',
              author: { id: '' },
              genres: [{ id: '' }],
            }}
            validationSchema={createBooksSchema}
            onSubmit={(values, { resetForm }) =>
              handleSubmit(values, resetForm)
            }
          >
            {({
              handleSubmit,
              getFieldProps,
              errors,
              values,
              setFieldValue,
            }) => (
              <FormContent onSubmit={handleSubmit}>
                <FormControl error={errors.title}>
                  <FormField
                    label={'Título'}
                    fieldProps={getFieldProps('title')}
                    fieldError={errors.title}
                  />
                </FormControl>
                <FormSection>
                  <FormControl error={errors.publisher}>
                    <FormField
                      label={'Editora'}
                      fieldProps={getFieldProps('publisher')}
                      fieldError={errors.publisher}
                    />
                  </FormControl>
                  <FormControl error={errors.publication_year}>
                    <FormField
                      label={'Ano de Publicação'}
                      fieldProps={getFieldProps('publication_year')}
                      fieldError={errors.publication_year}
                      type={'date'}
                    />
                  </FormControl>
                </FormSection>
                <FormControl error={errors.ISBN}>
                  <FormLabel>ISBN</FormLabel>
                  <PatternFormat
                    {...getFieldProps('ISBN')}
                    format="###-##-###-####-#"
                    placeholder="ex: 000-00-000-0000-0"
                    customInput={FormInput}
                  />
                  {errors.ISBN ? (
                    <FormInputMessage>{errors.ISBN}</FormInputMessage>
                  ) : (
                    ''
                  )}
                </FormControl>
                <FormSection>
                  <FormControl error={errors.author}>
                    <FormLabel>Autor</FormLabel>
                    <Field name="author">
                      {({ field }: { field: any }) => (
                        <Select
                          {...field}
                          options={authorsOptions}
                          onChange={(option: OptionType) =>
                            setFieldValue('author', { id: option.value })
                          }
                          value={authorsOptions.find(
                            (option) => option.value === values.author.id
                          )}
                        />
                      )}
                    </Field>
                    {errors.author ? (
                      <FormInputMessage>{errors.author.id}</FormInputMessage>
                    ) : (
                      ''
                    )}
                  </FormControl>
                  <FormControl error={errors.genres}>
                    <FormLabel>Gêneros</FormLabel>
                    <Field name="genres">
                      {({ field }: { field: any }) => (
                        <Select
                          isMulti
                          {...field}
                          options={genresOptions}
                          onChange={(option: OptionType[]) =>
                            setFieldValue(
                              'genres',
                              option.map(({ value }) => ({
                                id: value,
                              }))
                            )
                          }
                          value={genresOptions.map((op) =>
                            values.genres.find((gen) => gen.id === op.value)
                              ? op
                              : null
                          )}
                        />
                      )}
                    </Field>
                    {errors.genres ? (
                      <FormInputMessage>Campo Obrigatório</FormInputMessage>
                    ) : (
                      ''
                    )}
                  </FormControl>
                </FormSection>
                <FormButton>Cadastrar</FormButton>
              </FormContent>
            )}
          </Formik>
        </FormContainer>
      </MainSection>
    </>
  )
}

export default CreateBooksPage
