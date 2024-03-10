import { Link } from 'react-router-dom'
import '../styles/Root.css'

function Root() {
  return (
    <div className='root-page'>
      <h1 className='red'>Welcome!</h1>
      <h2>Merry Christmas and Happy New Year!</h2>
      <p>Wanna play Secret Santa with your friends?</p>
      <Link to='/signup'>Join</Link>
    </div>
  )
}

export default Root
