import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar/Navbar'
import PriceList from './componets/PriceList/PriceList'
import Deshbors from './componets/Deshbord/Deshbors'

function App() {
  

  return (
    <div className="App">
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Deshbors></Deshbors>
    </div>
  )
}

export default App
