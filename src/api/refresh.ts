import { client } from './axios-client'
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from './token-storage'
import type { TokenPair } from '../utils/types'
import { signout } from './AuthService'
import { isExists } from '../utils/functions'

const refreshTokenPair = async (refresh: string): Promise<TokenPair> => {
  const res = await client.post('/api/v1/auth/refresh', {
    refresh_token: refresh,
  })
  return res.data
}

export const useRefresh = () => {
  return async () => {
    const accessToken = getAccessToken()
    const refreshToken = getRefreshToken()

    if (isExists(accessToken) && isExists(refreshToken)) return

    if (!isExists(accessToken) && isExists(refreshToken)) {
      try {
        console.log('Refreshing tokens')
        const tokenPair = await refreshTokenPair(refreshToken.token)
        if (isExists(tokenPair)) {
          setAccessToken(tokenPair.access_token)
          setRefreshToken(tokenPair.refresh_token)
        } else {
          signout()
        }
      } catch (e) {
        console.log(e)
        signout()
      }
    } else {
      signout()
    }
  }
}
