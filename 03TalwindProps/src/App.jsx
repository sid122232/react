import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Components from './components.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-red-400 font'>Talwind CSS</h1>
    <Components img = 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' description = 'Algebra is the branch of mathematics that studies certain abstract systems, known as algebraic structures, and the manipulation of statements within these systems. Elementary algebra generalizes arithmetic by using variables in addition to numbers. It covers methods of transforming equations to solve them by isolating variables. Linear algebra examines systems of several linear equations and techniques to determine for which values all equations in a system are true at the same time. Abstract algebra investigates algebraic structures, which consist of a set of objects together with operations defined on that set. It distinguishes algebraic structures, such as groups, rings, and fields, based on their number of operations and the laws they follow. Algebraic methods were first studied in ancient times to solve specific problems. As algebra evolved, it became increasingly abstract and generalized, leading to many applications in other branches of mathematics and the empirical sciences.' author ='SID' title='FULL STACK DEVELOPER'/>

    <div>
    <Components img = 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' description = "Mercedes-Benz Group AG (formerly Daimler-Benz, DaimlerChrysler and Daimler) is a German multinational automotive company headquartered in Stuttgart, Baden-Württemberg, Germany. It is one of the world's leading car manufacturers  Daimler-Benz was formed with the merger of Benz  Cie the world's oldest car company,[4] and Daimler Motoren Gesellschaft in 1926. The company was renamed DaimlerChrysler upon the acquisition of the American automobile manufacturer, Chrysler Corporation in 1998, it was renamed to Daimler upon the divestment of Chrysler in 2007. In 2021, Daimler was the second-largest German automaker and the sixth-largest worldwide by production. In February 2022, Daimler was renamed Mercedes-Benz Group as part of a transaction that spun-off its commercial vehicle segment as an independent company, Daimler Truck."  author ='SID' title="FULL STACK DEVELOPER"/>

    </div>
    </>
  )
}

export default App
