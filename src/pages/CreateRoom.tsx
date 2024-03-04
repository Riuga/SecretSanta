import { FormEventHandler, useState } from 'react'
import Header from '../components/UI/Header/Header'
import { createRoomRequest } from '../api/GameService.ts'
import '../styles/RoomForms.css'

function CreateRoom() {
  const [formInputs, setFormInputs] = useState({
    room_name: '',
    playable_owner: true,
    wishlist: undefined,
    max_price: undefined,
  })

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    createRoomRequest(formInputs)
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
      <Header title='CREATE ROOM' />
      <form className='create-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='room_name'
          id='room-name'
          value={formInputs.room_name}
          placeholder='Enter room name'
          onChange={handleChange}
        ></input>
        <input
          type='text'
          name='wishlist'
          id='wishes'
          value={formInputs.wishlist}
          placeholder='Enter your wishes'
          onChange={handleChange}
        ></input>
        <input
          type='number'
          name='max_price'
          id='price'
          value={formInputs.max_price}
          placeholder='Enter gift price (optional)'
          onChange={handleChange}
        ></input>
        <button type='submit' className='btn'>
          Create room
        </button>
      </form>
    </>
  )
}

export default CreateRoom
