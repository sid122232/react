import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// hooks are use to reflect the changes made in js in UI
function App() {
 let [counter,setCounter]= useState(15)
 const addValue = ()=>{
  setCounter(counter+1)
 }
 const removeValue=()=>{
  setCounter(counter-1)
 }
 return(
  <>

  <h1>React learning</h1>
  <h2> Counter value is :{counter} </h2>
  <button onClick = {addValue}>ADD</button>
  <button onClick={removeValue}>Remove</button>
  </>
 )
}

export default App
