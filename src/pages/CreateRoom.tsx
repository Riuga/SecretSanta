import { FormEventHandler, useState } from 'react'
import Header from '../components/UI/Header/Header'
import '../styles/RoomForms.css'

function CreateRoom() {
  const [formInputs, setFormInputs] = useState({
    roomName: '',
    wishes: '',
    price: 0,
  })

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setFormInputs((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <Header title="Create room" username="Riuga" />
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="roomName"
          id="room-name"
          value={formInputs.roomName}
          placeholder="Enter room name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="wishes"
          id="wishes"
          value={formInputs.wishes}
          placeholder="Enter your wishes"
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="price"
          id="price"
          value={formInputs.price}
          placeholder="Enter gift price"
          onChange={handleChange}
        ></input>
        <button type="submit" className='btn'>Create room</button>
      </form>
    </>
  )
}

export default CreateRoom
