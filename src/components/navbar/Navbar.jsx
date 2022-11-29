
import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.scss';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';



const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar_links">
        <img src={logo} alt="logo" />
        <a href="#home">Home</a>
        <a href="#whatis">What is TechnoBorg?</a>
        <a href="#future">Future</a>
        <a href="#future">Our Future</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="navbar-responsive" id='home'>

          {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            :
            <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='navbar-responsive-container scale-up-center'>
              <a href="/home">Home</a>
              <a href="/home">What is TechnoBorg?</a>
              <a href="#">Utilities</a>
              <a href="#">Our Future</a>
              <a href="#">Contact</a>
            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar