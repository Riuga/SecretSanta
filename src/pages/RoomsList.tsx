import { Link } from 'react-router-dom'
import Header from '../components/UI/Header/Header'
import '../styles/RoomsList.css'
import { CreateIcon } from '../assets/CreateIcon'
import { JoinIcon } from '../assets/JoinIcon'

function RoomsList() {
  return (
    <>
      <Header title='ROOMS LIST' />
      <div>
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
