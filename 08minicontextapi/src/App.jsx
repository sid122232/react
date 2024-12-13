import { useState, useEffect,useContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import Button from './components/button'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
const [themeMode,setThemeMode]= useState("light");
 //  As we dont have something in function like darkthememode and lightthememode in context so if we assign method to them here also they will reflect or store that method in context


const  lightTheme=()=>{
setThemeMode("light")
 }

 const  darkTheme=()=>{
  setThemeMode("dark")
 }
 // actually change in theme

useEffect(()=>{
document.querySelector('html').classList.remove("light","dark")
document.querySelector('html').classList.add(themeMode)
},[themeMode])

  return (
    <>
      <ThemeProvider value = {{themeMode,darkTheme, lightTheme}}>
{/* Theme provider procides access of context(global variables) to its child  */}
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* themebtn */}
                        <Button/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                    <Card/>
                       {/* card */}
                    </div>
                </div>
            </div>
      </ThemeProvider>

    </>
  )
}

export default App
