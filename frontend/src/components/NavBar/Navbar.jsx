import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
      <div className="navbar">
        <div className='logo'>
            <img src='https://di-uploads-pod3.dealerinspire.com/porscheoffremont/uploads/2018/09/porsche-logo.jpg' alt='logo' />
        </div>
        <div className='navLinks'>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
        </div>
      </div>
  )
}

export default Navbar