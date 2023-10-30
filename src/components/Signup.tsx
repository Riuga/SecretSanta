import { FormEventHandler, useState } from 'react'
import { AuthProps } from '../utils/interfaces'

function Signup(props: AuthProps) {
  const [formInputs, setFormInputs] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setFormInputs((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="auth-form">
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formInputs.email}
          placeholder="email@address.com"
          onChange={handleChange}
        ></input>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formInputs.username}
          placeholder="username"
          onChange={handleChange}
        ></input>
        <label htmlFor="email">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formInputs.password}
          placeholder="********"
          onChange={handleChange}
        ></input>
        <label htmlFor="email">Confirm password: </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirm-password"
          value={formInputs.confirmPassword}
          placeholder="********"
          onChange={handleChange}
        ></input>
        <button type="submit" className='btn'>Sign Up</button>
      </form>
      <button
        className="change-form-btn"
        onClick={() => {
          props.onFormSwitch('login')
        }}
      >
        Have an account? Log In
      </button>
    </div>
  )
}

export default Signup
