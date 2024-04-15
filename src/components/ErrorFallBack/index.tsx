import Alert from '../alert'
import {
  ErrorFallBackButton,
  ErrorFallBackContainer,
} from './styles/errorFallBack'

import { useErrorBoundary } from 'react-error-boundary'

const ErrorFallBack = () => {
  const { resetBoundary } = useErrorBoundary()

  return (
    <ErrorFallBackContainer>
      <Alert msg={'Algo deu errado!'} />
      <ErrorFallBackButton onClick={resetBoundary}>
        Tentar novamente
      </ErrorFallBackButton>
    </ErrorFallBackContainer>
  )
}

export default ErrorFallBack
