import './styles/App.css'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './AppRouter'
import React from 'react'

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={AppRouter} />
    </React.StrictMode>
  )
}

export default App
