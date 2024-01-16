import { FormEventHandler, useState } from 'react'
import { login } from '../api/AuthService'
import { Link } from 'react-router-dom'
import '../styles/Auth.css'

function Login() {
  const [formInputs, setFormInputs] = useState({
    email: '',
    password: '',
  })

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    console.log('login')
    login(formInputs)
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setFormInputs((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className='auth-form'>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>E-mail: </label>
        <input
          type='email'
          name='email'
          id='email'
          value={formInputs.email}
          placeholder='email@address.com'
          onChange={handleChange}
        ></input>
        <label htmlFor='password'>Password: </label>
        <input
          type='password'
          name='password'
          id='password'
          value={formInputs.password}
          placeholder='********'
          onChange={handleChange}
        ></input>
        <button type='submit' className='btn'>
          Log In
        </button>
      </form>
      <Link to='/signup' className='change-form-btn btn'>
        Sign Up
      </Link>
    </div>
  )
}

export default Login
