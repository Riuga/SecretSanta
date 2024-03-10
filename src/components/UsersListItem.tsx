import { useRef } from 'react'
import { ULItemProps } from '../utils/types'
import { isExists } from '../utils/functions'

function UsersListItem(props: ULItemProps) {
  const hasWishes = useRef(props.user.wishlist?.length ?? 0 > 0)

  return (
    <div className='player'>
      <div className='user-info'>
        <h3>{props.user.username}</h3>
        {hasWishes && <p>Wishes: {props.user.wishlist}</p>}
        {isExists(props.user.accepted) && (
          <p className={props.user.accepted ? 'green' : 'yellow'}>
            {props.user.accepted ? 'In game' : 'Waiting for acceptance'}
          </p>
        )}
      </div>
      {!props.isAdmin && (
        <div className='user-btns'>
          {props.hasAcceptButton && (
            <button className='room-action-btn green' onClick={props.accept}>
              Accept
            </button>
          )}
          {props.hasAcceptButton && (
            <button className='room-action-btn red' onClick={props.decline}>
              Decline
            </button>
          )}
          {!props.hasAcceptButton && props.hasKickButton && (
            <button className='room-action-btn red' onClick={props.kick}>
              Kick
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default UsersListItem
