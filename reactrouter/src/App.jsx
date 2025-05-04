import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home/Home'
import Header from './Component/Header/Header'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Header /> <Home /> </>
    }
  ])
  

  return (
    <>
    <Header />
      <RouterProvider router={router}>
        {router}
      </RouterProvider>
    </>
  )
}

export default App
