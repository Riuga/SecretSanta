import TrashIcon from '../assets/TrashIcon'
import { RoomProps } from '../utils/types'

function Room(props: RoomProps) {
  return (
    <>
      <div>
        <h2>{props.roomName}</h2>
        <TrashIcon />
      </div>
      <p>Room ID: {props.id}</p>
      <p>Price: {props.price}</p>
      <button>Start game</button>
      <h3>Players: </h3>
    </>
  )
}

export default Room
