export interface AuthProps {
  onFormSwitch: (formName: string) => void
}

export interface HeaderProps {
  title: string
  username: string
}

export interface RoomProps {
  roomName: string
  id: string
  price: number
  players: [{ username: string; wishes: string }]
}
