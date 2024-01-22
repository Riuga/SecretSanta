import { AuthResponse, LoginRequest, SignupRequest } from '../utils/types.ts'
import { client } from './axios-client.ts'
import {
  clearAccessToken,
  clearRefreshToken,
  setAccessToken,
  setRefreshToken,
} from './token-storage.ts'

const sendLoginRequest = async (
  request: LoginRequest
): Promise<AuthResponse> => {
  const res = await client.post('/api/v1/auth/email/login', request)
  return res.data
}

const sendSignupRequest = async (
  request: SignupRequest
): Promise<AuthResponse> => {
  const res = await client.post('/api/v1/auth/email/register', request)
  return res.data
}

export const login = async (request: LoginRequest) => {
  sendLoginRequest(request)
    .then((data) => {
      setAccessToken(data.access_token)
      setRefreshToken(data.refresh_token)
      console.log(data)
      window.location.href = '/list'
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export const signup = async (request: SignupRequest) => {
  sendSignupRequest(request)
    .then((data) => {
      setAccessToken(data.access_token)
      setRefreshToken(data.refresh_token)
      window.location.href = '/login'
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export const signout = (navigate = true) => {
  clearAccessToken()
  clearRefreshToken()
  console.log('sign out')
  if (navigate) window.location.href = '/login'
}
