import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Form } from './components'
import './app.scss'

const App = () => (
  <div className='wrapper'>
    <div className='container'>
      <Form />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        closeOnClick
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  </div>
)

export default App
