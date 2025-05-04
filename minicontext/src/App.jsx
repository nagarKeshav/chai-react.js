import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './context/UserContext'

import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {


  return (
    <UserContextProvider>
     <h1> react in night </h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
