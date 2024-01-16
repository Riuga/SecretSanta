import { getAccessToken, getRefreshToken } from '../api/token-storage'

export const isExists = <T>(value: T | null | undefined): value is T =>
  value !== undefined && value !== null

export const isSignedIn = (): boolean =>
  isExists(getAccessToken()) || isExists(getRefreshToken())
