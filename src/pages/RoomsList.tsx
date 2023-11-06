import { Link } from 'react-router-dom'
import Header from '../components/UI/Header/Header'
import '../styles/RoomsList.css'

function RoomsList() {
  return (
    <>
      <Header title="ROOMS LIST" username="" />
      <div className="buttons">
        <Link to={'/create'} className="btn">
          Create room
        </Link>
        <Link to={'/join'} className="btn">
          Join room
        </Link>
      </div>
    </>
  )
}

export default RoomsList
