import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ErrorPage from './pages/ErrorPage'
import Root from './pages/Root'
import RoomsList from './pages/RoomsList'
import JoinRoom from './pages/JoinRoom'
import CreateRoom from './pages/CreateRoom'
import RequireAuth from './components/RequireAuth'

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/list',
    element: <RequireAuth />,
    children: [
      {
        path: '/list',
        element: <RoomsList />,
      },
    ],
  },
  {
    path: '/join',
    element: <RequireAuth />,
    children: [
      {
        path: '/join',
        element: <JoinRoom />,
      },
    ],
  },
  {
    path: '/create',
    element: <RequireAuth />,
    children: [
      {
        path: '/create',
        element: <CreateRoom />,
      },
    ],
  },
])

export default AppRouter
