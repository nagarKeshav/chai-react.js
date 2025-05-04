import { useState, useContext} from "react"
import React  from 'react'
import UserContext from "../context/UserContext"




function Login() {
const [userName, setUserName] = useState('')
const [password,setPassword] = useState('')
const {setUser} = useContext(UserContext)


const handleSubmit = (e) => {
    e.preventDefault()
    setUser({userName,password})
    }

  return (
    <div>
      <h2>login page</h2>
      <input type="text" placeholder="enter user name"  value={userName} onChange={(e) => setUserName(e.target.value)}/> 
      <input type="text" placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
      <button onClick={handleSubmit}>login</button>
    </div>
  )
}

export default Login
