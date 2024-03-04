import { useEffect, useRef, useState } from 'react'
import TrashIcon from '../assets/TrashIcon'
import Header from './UI/Header/Header'
import { RoomDetailsModel, RoomProps } from '../utils/types'
import {
  acceptUserRequest,
  deleteRoomRequest,
  fetchRoomDetails,
  kickUserRequest,
  setGameStateRequest,
} from '../api/GameService'
import { isExists } from '../utils/functions'
import { getSelfId } from '../api/AuthService'
import UsersListItem from './UsersListItem'

function Room(props: RoomProps) {
  const [room, setRoom] = useState<RoomDetailsModel>()

  const isGameStarted = useRef(false)
  const isAdmin = useRef(false)
  const selfUserID = useRef<string>()

  const fetchDetails = () => {
    fetchRoomDetails(props.id)
      .then((data) => {
        isGameStarted.current = isExists(data.recipient)
        getSelfId().then((id) => {
          selfUserID.current = id
          console.log(`Self id set to: ${selfUserID.current}`)
          if (id === data.owner_id) {
            isAdmin.current = true
          }
        })
        setRoom(data)
      })
      .catch(console.log)
  }

  useEffect(() => fetchDetails())

  const checkSelfId = (id: string) => id !== selfUserID.current

  const acceptUser = (id: string) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    acceptUserRequest(room?.room_id!, id)
      .then(() => {
        fetchDetails()
      })
      .catch(console.log)
  }

  const kickUser = (id: string) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    kickUserRequest(room?.room_id!, id)
      .then(() => {
        fetchDetails()
      })
      .catch(console.log)
  }

  const deleteRoom = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    deleteRoomRequest(room?.room_id!)
      .then(() => {
        window.location.href = '/list'
      })
      .catch(console.log)
  }

  const getRecipient = (): string | null =>
    room?.users.find((user) => user.user_id === room.recipient)?.username ??
    null

  const changeGameState = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    setGameStateRequest(room?.room_id!, !isGameStarted.current)
      .then(() => {
        fetchDetails()
      })
      .catch(() =>
        alert("Not enough players or you have participants who aren't accepted")
      )
  }

  const gameButton = {
    text: isGameStarted.current ? 'Stop game' : 'Start game',
    className: isGameStarted.current ? 'red' : 'green',
  }

  const userList = []
  if (room !== undefined) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    for (const user of room?.users) {
      userList.push(
        <UsersListItem
          key={user.user_id}
          user={user}
          hasAcceptButton={isAdmin && user.accepted!}
          hasKickButton={isAdmin && user.accepted && checkSelfId(user.user_id)}
          accept={() => acceptUser(user.user_id)}
          decline={() => kickUser(user.user_id)}
          kick={() => kickUser(user.user_id)}
        />
      )
    }
  }

  return (
    <>
      <Header title='' />
      <div>
        <h2>{room?.room_name || 'Room'}</h2>
        <button onClick={deleteRoom}>
          <TrashIcon />
        </button>
      </div>
      <p>Room ID: {props.id}</p>
      <p>Price: {room?.max_price}</p>
      {getRecipient() && <p>Send a gift to: {getRecipient()}</p>}
      {isAdmin.current && (
        <button className={gameButton.className} onClick={changeGameState}>
          {gameButton.text}
        </button>
      )}
      <h3>Players: </h3>
      {userList}
    </>
  )
}

export default Room
