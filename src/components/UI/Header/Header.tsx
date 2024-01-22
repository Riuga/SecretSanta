import { signout } from '../../../api/AuthService'
import { HomeIcon } from '../../../assets/HomeIcon'
import { LogoutIcon } from '../../../assets/LogoutIcon'
import { HeaderProps } from '../../../utils/types'
import './Header.css'
import { Link } from 'react-router-dom'

function Header(props: HeaderProps) {
  return (
    <header>
      <Link to='/list'>
        <HomeIcon />
      </Link>
      <h1>{props.title}</h1>
      <p>User: {props.username}</p>
      <button style={{ background: 'none' }} onClick={() => signout()}>
        <LogoutIcon />
      </button>
    </header>
  )
}

export default Header
