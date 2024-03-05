export type HeaderProps = {
  title: string
}

export type ULItemProps = {
  user: UserRoomInfo
  hasAcceptButton: boolean
  hasKickButton: boolean
  accept: () => void | undefined
  decline: () => void | undefined
  kick: () => void | undefined
}

export type RoomProps = { id: string }

export type RLItemProps = {
  room: RoomModel
}

// Auth

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

export type UserData = {
  user_id: string
  username: string
  email: string
  avatar: string
  address?: string
}

// Rooms

export type RoomModel = {
  room_name: string
  room_id: string
  members_count: string
  game_started: boolean
  accepted: boolean
}

export type RoomDetailsModel = {
  room_id: string
  room_name: string
  owner_id: string
  max_price?: number
  recipient: string
  users: UserRoomInfo[]
}

export type UserRoomInfo = {
  user_id: string
  username: string
  address?: string
  wishlist?: string
  avatar: string
  accepted: false
}

export type RoomCreationRequest = {
  room_name: string
  wishlist?: string
  max_price?: number
}

export type JoinRoomRequest = {
  room_id: string
  wishlist?: string
}
