export type HeaderProps = {
  title: string
  username: string
}

export type RoomProps = {
  roomName: string
  id: string
  price: string
  players: [{ username: string; wishes: string }]
}

export type LoginRequest = {
  email: string
  password: string
}

export type SignupRequest = {
  email: string
  password: string
  username: string
}

export type RefreshToken = {
  token: string
  expiration: number
}

export type TokenPair = {
  access_token: string
  refresh_token: RefreshToken
}

export type AuthResponse = {
  access_token: string
  refresh_token: RefreshToken
}
