import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import {UserContextProvider} from './Context/Context'

function App() {

  return (
    <>
    <UserContextProvider >
      <Button text={"Hello"}/>
    </UserContextProvider>
    </>
  )
}

export default App
