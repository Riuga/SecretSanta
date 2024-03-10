import { useEffect, useRef, useState } from 'react'
import TrashIcon from '../assets/TrashIcon'
import Header from './UI/Header/Header'
import { RoomDetailsModel } from '../utils/types'
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
import { useParams } from 'react-router-dom'
import '../styles/Room.css'
import CopyIcon from '../assets/CopyIcon'

function Room() {
  const [room, setRoom] = useState<RoomDetailsModel>()
  const { roomID } = useParams()
  const isGameStarted = useRef(false)
  const isAdmin = useRef(false)
  const selfUserID = useRef<string>()
  const avoidInfiniteLoop = true

  const fetchDetails = () => {
    if (roomID !== undefined) {
      fetchRoomDetails(roomID)
        .then((data) => {
          isGameStarted.current = isExists(data.recipient)
          getSelfId()
            .then((id) => {
              selfUserID.current = id
              console.log(`Self id set to: ${selfUserID.current}`)
              if (id === data.owner_id) {
                isAdmin.current = true
              }
            })
            .then(() => {
              setRoom(data)
            })
        })
        .catch(console.log)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchDetails(), [avoidInfiniteLoop])

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
          isAdmin={user.user_id === room.owner_id}
          hasAcceptButton={isAdmin.current && !user.accepted}
          hasKickButton={
            isAdmin.current && user.accepted && checkSelfId(user.user_id)
          }
          accept={() => acceptUser(user.user_id)}
          decline={() => kickUser(user.user_id)}
          kick={() => kickUser(user.user_id)}
        />
      )
    }
  }

  return (
    <>
      <Header title={`Room`} />
      <div className='room-info'>
        <div className='room-header'>
          <h2>{room?.room_name || 'Room'}</h2>
          {isAdmin.current && (
            <button onClick={deleteRoom}>
              <TrashIcon />
            </button>
          )}
        </div>
        <p className='room-id'>
          <b>Room ID:</b> {`\xa0${roomID}`}{' '}
          <button
            onClick={() => {
              navigator.clipboard.writeText(`${roomID}`)
            }}
          >
            <CopyIcon />
          </button>
        </p>
        <p>
          <b>Price: </b> {room?.max_price}
        </p>
        {getRecipient() && <p>Send a gift to: {getRecipient()}</p>}
        {isAdmin.current && (
          <button
            className={`${gameButton.className} room-action-btn`}
            onClick={changeGameState}
          >
            {gameButton.text}
          </button>
        )}
      </div>
      <div className='players'>
        <h3>Players: </h3>
        {userList}
      </div>
    </>
  )
}

export default Room
