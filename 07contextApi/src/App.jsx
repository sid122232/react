import { useState } from 'react'
import reactLogo from './assets/react.svg'
import UserContextProvider from './context/userContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
 <Login/>
 <Profile/>
    </UserContextProvider>
  )
}

export default App
