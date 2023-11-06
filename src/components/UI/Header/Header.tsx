import { HomeIcon } from '../../../assets/HomeIcon'
import { LogoutIcon } from '../../../assets/LogoutIcon'
import { HeaderProps } from '../../../utils/interfaces'
import './Header.css'
import { Link } from 'react-router-dom'

function Header(props: HeaderProps) {
  return (
    <header>
      <Link to="/list">
        <HomeIcon />
      </Link>
      <h1>{props.title}</h1>
      <p>User: {props.username}</p>
      <Link to="/auth">
        <LogoutIcon />
      </Link>
    </header>
  )
}

export default Header
