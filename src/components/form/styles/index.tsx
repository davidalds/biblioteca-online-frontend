import styled, { css } from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  box-shadow: 2px 2px 12px ${(props) => props.theme.cinza};
  flex: 1;
  min-height: 100vh;
`
export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 10px;
  gap: 10px;
`

const baseInput = css`
  border: 1px solid ${(props) => props.theme.cinza};
  outline: none;
  padding: 12px 5px;
  font-size: 1.2rem;
  border-radius: 5px;
  &:focus {
    border: 1px solid ${(props) => props.theme.azulClaro};
  }
`

export const FormControl = styled.div.attrs({ className: 'form-control' })<{
  error?: string | any
}>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  ${(props) => {
    if (props.error) {
      return css`
        color: ${(props) => props.theme.vermelho};
        input {
          border: 1px solid ${(props) => props.theme.vermelho};
        }
      `
    }
  }}
`
export const FormLabel = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`

export const FormInputMessage = styled.span`
  color: ${(props) => props.theme.vermelho};
`

export const FormInput = styled.input`
  ${baseInput}
`
export const FormTextArea = styled.textarea`
  ${baseInput}
  resize: vertical;
`

export const FormSection = styled.div`
  display: flex;
  gap: 5px;
  .form-control {
    flex: 1;
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`

export const FormButton = styled.button.attrs({ type: 'submit' })`
  cursor: pointer;
  padding: 10px;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.azulClaro};
  color: ${(props) => props.theme.branco};
  border: none;
  border-radius: 5px;
  transition: 0.5s;
  &:hover {
    background-color: ${(props) => props.theme.azulEscuro};
  }
`
