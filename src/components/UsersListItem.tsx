import { useRef } from 'react'
import { ULItemProps } from '../utils/types'
import { isExists } from '../utils/functions'

function UsersListItem(props: ULItemProps) {
  const hasWishes = useRef(props.user.wishlist?.length ?? 0 > 0)

  return (
    <>
      <div className='user-info'>
        <h1>{props.user.username}</h1>
        {hasWishes && <h2>Wishes: {props.user.wishlist}</h2>}
        {isExists(props.user.accepted) && (
          <h2>{props.user.accepted ? 'In game' : 'Waiting for acceptance'}</h2>
        )}
      </div>
      <div className='user-btns'>
        {props.hasAcceptButton && (
          <button onClick={props.accept}>Accept</button>
        )}
        {props.hasAcceptButton && (
          <button onClick={props.decline}>Decline</button>
        )}
        {props.hasAcceptButton! && props.hasKickButton && (
          <button onClick={props.kick}>Kick</button>
        )}
      </div>
    </>
  )
}

export default UsersListItem
