import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
const[numberAllowed,setNumbers]= useState(false)
const [charactersAllowed,setCharacters]=useState(false)
const [password, setPassword]= useState()
let[length,setLength]=useState(8)
const passwordGenerator = useCallback(()=>{
  let pass = "";
  let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numberAllowed)str+="0123456789"

  if(charactersAllowed)str+="~`!@#$%^&*()-_+={}[]:;'"

  for (let i = 1; i < array.length; index++) {
   const char = Math.floor(Math.random()*str.length+1)
    pass = str.charAt(char)
  }
  setPassword(pass)
},[numberAllowed, charactersAllowed, length, setPassword])

  return (
   <>
         
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-700" 

>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
     <div className="flex-shadow rounded-lg overflow-hidden mb-4">
      <input type='text' placeholder='password' value={password} className='outline-none w-full py-1 px-3 ' readOnly/>
      <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}
      />
      <label>{length}</label>
     </div>
     </div>
     </>
  )
}

export default App
