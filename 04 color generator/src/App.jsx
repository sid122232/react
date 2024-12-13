import { useState } from "react"


function App() {
  const [color, setColor] = useState("red")
  

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
{console.log(color)}
    </div>
    
  )
}

export default App
