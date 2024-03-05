import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ErrorPage from './pages/ErrorPage'
import Root from './pages/Root'
import RoomsList from './pages/RoomsList'
import JoinRoom from './pages/JoinRoom'
import CreateRoom from './pages/CreateRoom'
import RequireAuth from './components/RequireAuth'
import Room from './components/Room'

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
        path: '',
        element: <RoomsList />,
      },
    ],
  },
  {
    path: '/join',
    element: <RequireAuth />,
    children: [
      {
        path: '',
        element: <JoinRoom />,
      },
    ],
  },
  {
    path: '/create',
    element: <RequireAuth />,
    children: [
      {
        path: '',
        element: <CreateRoom />,
      },
    ],
  },
  {
    path: '/room/:roomID',
    element: <RequireAuth />,
    children: [
      {
        path: '',
        element: <Room />,
      },
    ],
  },
])

export default AppRouter
