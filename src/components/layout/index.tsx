import { Container } from './styles/layout'
import { Outlet } from 'react-router-dom'
import SideBar from '../sidebar'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Alert from '../alert'
import ErrorFallBack from '../ErrorFallBack'

const Layout = () => {
  return (
    <Container>
      <SideBar />
      <main>
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
          <Suspense fallback={<h1>Carregando...</h1>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
    </Container>
  )
}

export default Layout
