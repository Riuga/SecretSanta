import { Link } from 'react-router-dom'
import Header from '../components/UI/Header/Header'
import '../styles/RoomsList.css'
import { CreateIcon } from '../assets/CreateIcon'
import { JoinIcon } from '../assets/JoinIcon'
import { useEffect, useState } from 'react'
import { fetchRoomsList } from '../api/GameService'
import RoomsListItem from '../components/RoomsListItem'
import { JSX } from 'react/jsx-runtime'
import { RoomModel } from '../utils/types'

function RoomsList() {
  const [rooms, setRooms] = useState<RoomModel[]>([])
  const avoidInfiniteLoop = true
  const roomsList: JSX.Element[] = []

  useEffect(() => {
    let ignore = false
    setRooms([])
    fetchRoomsList()
      .then((data) => {
        console.log(data)
        if (!ignore) {
          setRooms(data)
        }
      })
      .catch(console.log)

    return () => {
      ignore = true
    }
  }, [avoidInfiniteLoop])

  if (rooms.length > 0) {
    for (const room of rooms) {
      roomsList.push(
        <Link
          className='room-item'
          key={room.room_id}
          to={`/room/${room.room_id}`}
        >
          <RoomsListItem key={room.room_id} room={room} />
        </Link>
      )
    }
  }

  return (
    <>
      <Header title='ROOMS LIST' />
      {roomsList}
      <div className='room-btns'>
        <h2 className='new-room-heading'>New room</h2>
        <Link to={'/create'}>
          <CreateIcon />
        </Link>
        <Link to={'/join'}>
          <JoinIcon />
        </Link>
      </div>
    </>
  )
}

export default RoomsList
