import { StrictMode } from 'react'
import { createBrowserRouter ,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import User from './Component/User/User.jsx'  
import Github from './Component/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//   path: '/',
//   element: <Layout />,
//   children: [
//     {
//       path: "",
//       element: <Home />
//     },
//     {
//       path: "about",
//       element: <About />
//     },
//     {
//       path: "/Contact",
//       element: <Contact />

//     }
//   ]
// }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
   
  </StrictMode>
)
