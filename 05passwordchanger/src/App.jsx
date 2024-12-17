import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
 const [length,setLength] = useState(8);
 const [numberAllowed,setNumberAllowed] = useState(false)
 const [charAllowed, setCharAllowed] = useState(false)
 const [Password, setPassword] = useState()

 // useRef hook
 const passwordRef = useRef(null)

 const passwordGenrater = useCallback(()=>{

  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(numberAllowed) str += "0123456789"
   if(charAllowed) str += "!@#$%^&*(){}:?><~+_*/"
   for (let i = 1; i < length; i++){
   let char = Math.floor(Math.random() * str.length + 1)
   pass += str.charAt(char)
   console.log(pass);
   

   }
 setPassword(pass)

 },[length,numberAllowed,charAllowed])

 const opypasswordonclikboard = useCallback( () => {
  passwordRef.current?.select()
  passwordRef.current?.setselectionRange(0,100)
  window.navigator.clipboard.writeText(Password)

 }, [Password])

 useEffect(() => {
  passwordGenrater()
 } , [length,numberAllowed,charAllowed,setPassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3 '> Password Genrater</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={Password} className='outline-none  w-full py-1 px-3 pb-5 mb-4 bg-white' placeholder="password" readOnly ref={passwordRef}/>
          <button onClick={opypasswordonclikboard} className='outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range" min={8} max={100} value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}} />
            <label>length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }} />
            <label htmlFor='numberInput'>Number</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id='characterInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }} />
            <label htmlFor='characterInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}


export default App
