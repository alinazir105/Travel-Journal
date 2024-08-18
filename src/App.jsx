import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'
function App() {
  const travelCards = data.map(function(card){
    return <Card key={card.id} card={card}/>
  })
  return (
    <div>
      <Navbar />
      <div className='card-container'>
        {travelCards}
      </div>
    </div>
  )
}

export default App
