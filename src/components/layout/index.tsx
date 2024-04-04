import { Container } from './styles/layout'
import { Outlet } from 'react-router-dom'
import SideBar from '../sidebar'
import { Suspense } from 'react'

const Layout = () => {
  return (
    <Container>
      <SideBar />
      <main>
        <Suspense fallback={<h1>Carregando...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  )
}

export default Layout
