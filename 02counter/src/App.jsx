import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


let [counter, setcounter] = useState(15)

  const addvalue = () => {
    setcounter(counter+1)
    if(counter === 20){
     setcounter(counter)

    }
    

    
  }

  const removevalue = () => {
  
    setcounter(counter - 1)

    if(counter === 0){
      setcounter(counter)
    }
    
  }


  return (
    <>
    <h1>chai our react</h1>
    <h2>counter value : {counter}</h2>

    <button onClick={addvalue}>add value</button>
    <br />
    <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
