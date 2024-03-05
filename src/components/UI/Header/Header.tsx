import { useEffect, useState } from 'react'
import { fetchSelfData, signout } from '../../../api/AuthService'
import { HomeIcon } from '../../../assets/HomeIcon'
import { LogoutIcon } from '../../../assets/LogoutIcon'
import { HeaderProps } from '../../../utils/types'
import './Header.css'
import { Link } from 'react-router-dom'

function Header(props: HeaderProps) {
  const [username, setUsername] = useState('')

  useEffect(() => {
    fetchSelfData()
      .then((data) => {
        setUsername(data.username)
      })
      .catch(console.log)
  })

  return (
    <header>
      <Link to='/list'>
        <HomeIcon />
      </Link>
      <h1>{props.title}</h1>
      <p>User: {username}</p>
      <button style={{ background: 'none' }} onClick={() => signout()}>
        <LogoutIcon />
      </button>
    </header>
  )
}

export default Header
