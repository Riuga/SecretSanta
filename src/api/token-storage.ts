import Cookies from 'universal-cookie'
import type { JwtPayload } from 'jwt-decode'
import { jwtDecode } from 'jwt-decode'
import type { RefreshToken } from '../utils/types'

const cookies = new Cookies()

export const setAccessToken = (token: string) => {
  let exp = jwtDecode<JwtPayload>(token).exp ?? Date.now() + 2400
  exp = exp * 1000
  cookies.set('access_token', token, {
    expires: new Date(exp),
  })
}

export const getAccessToken = (): string | null => {
  return cookies.get('access_token') ?? null
}

export const setRefreshToken = (token: RefreshToken) => {
  cookies.set('refresh_token', token, {
    expires: new Date(token.expiration),
  })
}

export const getRefreshToken = (): RefreshToken | null => {
  return cookies.get('refresh_token') ?? null
}

export const clearRefreshToken = () => cookies.remove('refresh_token')

export const clearAccessToken = () => cookies.remove('access_token')
