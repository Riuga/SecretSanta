import { FormEventHandler, useState } from 'react'
import Header from '../components/UI/Header/Header'
import { joinRoomRequest } from '../api/GameService.ts'
import '../styles/RoomForms.css'

function JoinRoom() {
  const [formInputs, setFormInputs] = useState({
    room_id: '',
    wishlist: '',
  })

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    joinRoomRequest(formInputs)
      .then((data) => {
        console.log(data)
        window.location.href = '/list'
      })
      .catch(console.log)
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setFormInputs((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <Header title='JOIN ROOM' />
      <form className='create-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='room_id'
          id='room_id'
          value={formInputs.room_id}
          placeholder='Enter room ID'
          onChange={handleChange}
        ></input>
        <input
          type='text'
          name='wishlist'
          id='wishlist'
          value={formInputs.wishlist}
          placeholder='Enter your wishes'
          onChange={handleChange}
        ></input>
        <button type='submit' className='btn'>
          Join room
        </button>
      </form>
    </>
  )
}

export default JoinRoom
