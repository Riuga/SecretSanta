import { Navigate, Outlet } from 'react-router-dom'
import { isSignedIn } from '../utils/functions'

function RequireAuth() {
  console.log(isSignedIn())

  return isSignedIn() ? <Outlet /> : <Navigate to='/login' />
}

export default RequireAuth
