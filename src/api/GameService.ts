import {
  JoinRoomRequest,
  RoomCreationRequest,
  RoomDetailsModel,
  RoomModel,
} from '../utils/types'
import { client } from './axios-client'

export const fetchRoomsList = async (): Promise<RoomModel[]> => {
  const res = await client.get<RoomModel[]>('/api/v1/user/rooms')
  return res.data
}

export const fetchRoomDetails = async (
  id: string
): Promise<RoomDetailsModel> => {
  const res = await client.get<RoomDetailsModel>('/api/v1/game/info', {
    params: {
      id,
    },
  })
  return res.data
}

export const createRoomRequest = async (
  data: RoomCreationRequest
): Promise<{ status: number; message: string }> => {
  const res = await client.post('/api/v1/room', data)
  return { status: res.status, message: res.data }
}

export const joinRoomRequest = async (
  data: JoinRoomRequest
): Promise<{ status: number; message: string }> => {
  const res = await client.post('/api/v1/game/join', data)
  return { status: res.status, message: res.data }
}

export const acceptUserRequest = async (
  roomId: string,
  userId: string
): Promise<{ status: number; message: string }> => {
  const res = await client.post('/api/v1/game/accept', {
    room_id: roomId,
    user_id: userId,
  })
  return { status: res.status, message: res.data }
}

export const kickUserRequest = async (
  room_id: string,
  user_id: string
): Promise<{ status: number; message: string }> => {
  const res = await client.post('/api/v1/game/kick', {
    room_id,
    user_id,
  })
  return { status: res.status, message: res.data }
}

export const deleteRoomRequest = async (
  id: string
): Promise<{ status: number; message: string }> => {
  const res = await client.delete('/api/v1/room', {
    params: {
      id,
    },
  })
  return { status: res.status, message: res.data }
}

export const setGameStateRequest = async (
  id: string,
  state: boolean
): Promise<string> => {
  return await client.post(`/api/v1/game/${state ? 'start' : 'stop'}`, null, {
    params: {
      id,
    },
  })
}
