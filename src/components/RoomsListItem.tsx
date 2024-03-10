import { RLItemProps } from '../utils/types'

function RoomsListItem(props: RLItemProps) {
  const gameData = {
    text: props.room.accepted
      ? props.room.game_started
        ? 'Game started'
        : 'Waiting for players'
      : 'Confirmation',
    className: props.room.accepted
      ? props.room.game_started
        ? 'green'
        : 'red'
      : 'yellow',
  }

  return (
    <div>
      <div>
        <h2 className='room-name'>{props.room.room_name}</h2>
        <p>Participants: {props.room.members_count}</p>
      </div>
      <div className={gameData.className}>{gameData.text}</div>
    </div>
  )
}

export default RoomsListItem
