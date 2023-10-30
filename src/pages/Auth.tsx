import { useState } from 'react'
import '../styles/Auth.css'
import Login from '../components/Login'
import Signup from '../components/Signup'

function Auth() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName: string) => {
    setCurrentForm(formName)
  }

  return (
    <div className="auth">
      {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Signup onFormSwitch={toggleForm} />
      )}
    </div>
  )
}

export default Auth
