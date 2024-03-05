import { RLItemProps } from '../utils/types'

function RoomsListItem(props: RLItemProps) {
  const gameData = {
    text: props.room.accepted
      ? props.room.game_started
        ? 'Игра началась'
        : 'Ожидаем игроков'
      : 'Подтверждение',
    className: props.room.accepted
      ? props.room.game_started
        ? 'green'
        : 'red'
      : 'yellow',
  }

  return (
    <div>
      <div>
        <h2>{props.room.room_name}</h2>
        <h3>Amount of participants: {props.room.members_count}</h3>
      </div>
      <div className={gameData.className}>{gameData.text}</div>
    </div>
  )
}

export default RoomsListItem
