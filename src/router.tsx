import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home'
import Genres from './pages/genres'
import Management from './pages/management'
import BookDetail from './pages/book'
import LoginPage from './pages/login'
import RequireAuth from './auth/RequireAuth'

const CreateBooksComponent = lazy(
  () => import('./pages/management/books/create')
)
const CreateAuthorsComponent = lazy(
  () => import('./pages/management/authors/create')
)

const CreateGenresComponent = lazy(
  () => import('./pages/management/genres/create')
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'genres',
        element: <Genres />,
      },
      {
        path: 'management',
        element: <Management />,
      },
      {
        path: 'management',
        children: [
          {
            path: 'genres/create',
            element: <CreateGenresComponent />,
          },
          {
            path: 'authors/create',
            element: <CreateAuthorsComponent />,
          },
          {
            path: 'books/create',
            element: <CreateBooksComponent />,
          },
        ],
      },
      { path: 'book/:id', element: <BookDetail /> },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
])
