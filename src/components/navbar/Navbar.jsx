
import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_links">
          <img src={logo} alt="logo" />
          <a href="/home">Home</a>
          <a href="/home">What is TechnoBorg?</a>
          <a href="#">Utilities</a>
          <a href="#">Our Future</a>
          <a href="#">Contact</a>
        </div>
      </div>
  )
}

export default Navbar