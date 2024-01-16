import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ErrorPage from './pages/ErrorPage'
// import CreateRoom from '../pages/CreateRoom'
// import JoinRoom from '../pages/JoinRoom'
// import RoomsList from '../pages/RoomsList'

// const AppRouter = () => {
//   return (
//     <Routes>
//       <Route Component={Auth} path='/' />
//       <Route Component={CreateRoom} path='/create' />
//       <Route Component={JoinRoom} path='/join' />
//       <Route Component={RoomsList} path='/list' />
//     </Routes>
//   )
// }

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <></>,
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
  {},
])

export default AppRouter
