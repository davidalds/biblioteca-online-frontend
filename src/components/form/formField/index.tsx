import { FormInput, FormInputMessage, FormLabel, FormTextArea } from '../styles'
import { FieldInputProps } from 'formik'

interface IProps {
  label: string
  fieldError?: string
  fieldProps: FieldInputProps<any>
  type?: 'text' | 'date' | 'number'
  as?: 'input' | 'textarea'
}

const FormField = ({
  label,
  fieldError,
  fieldProps,
  type = 'text',
  as = 'input',
}: IProps) => {
  const renderField = () => {
    if (as === 'input') {
      return <FormInput {...fieldProps} type={type} />
    }

    return <FormTextArea {...fieldProps} />
  }

  return (
    <>
      <FormLabel>{label}</FormLabel>
      {renderField()}
      {fieldError ? <FormInputMessage>{fieldError}</FormInputMessage> : ''}
    </>
  )
}

export default FormField
