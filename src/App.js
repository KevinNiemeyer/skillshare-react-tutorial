import React from 'react'
import './App.css'
import { Button, SecondButton } from './components/Buttons.js'
import Header from './components/Header'


function App () {
  return (
    <div className='App'>
      <Header />
      <Button> Click </Button> <SecondButton> SecondButton </SecondButton>{' '}
    </div>
  )
}

export default App
