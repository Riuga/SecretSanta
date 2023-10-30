import { FormEventHandler, useState } from 'react'
import Header from '../components/UI/Header/Header'
import '../styles/RoomForms.css'

function JoinRoom() {
  const [formInputs, setFormInputs] = useState({
    id: '',
    wishes: '',
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
      <Header title="Join room" username="" />
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          id="id"
          value={formInputs.id}
          placeholder="Enter room ID"
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
        <button type="submit" className='btn'>Join room</button>
      </form>
    </>
  )
}

export default JoinRoom
