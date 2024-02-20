import React from 'react'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Banner from './components/Banner/Banner'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
    </div>
  )
}

export default App