import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home'
import Genres from './pages/genres'
import Management from './pages/management'
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

const BookDetailComponent = lazy(() => import('./pages/book/index'))

const AuthorsListComponent = lazy(
  () => import('./pages/management/authors/list')
)

const GenresListComponent = lazy(() => import('./pages/management/genres/list'))

const BooksListComponent = lazy(() => import('./pages/management/books/list'))

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
            path: 'genres/list',
            element: <GenresListComponent />,
          },
          {
            path: 'authors/create',
            element: <CreateAuthorsComponent />,
          },
          {
            path: 'authors/list',
            element: <AuthorsListComponent />,
          },
          {
            path: 'books/create',
            element: <CreateBooksComponent />,
          },
          {
            path: 'books/list',
            element: <BooksListComponent />,
          },
        ],
      },
      { path: 'book/:id', element: <BookDetailComponent /> },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
])
