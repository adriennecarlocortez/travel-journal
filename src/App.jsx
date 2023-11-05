import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import cardData from './cardData'
import Copyright from './components/Copyright'

function App() {
  const [count, setCount] = useState(0)
  const data = cardData.map(item => 
      <Card id={item.id} {...item} />
    )
  return (
    <>
      <Navbar />
      {data}
      <Copyright />
    </>
  )
}

export default App
