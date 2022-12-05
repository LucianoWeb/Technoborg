import React from 'react';
import logo from '../../assets/logo.png';
import './Links.scss';

const Links = () => {
  return (
    <div className="links-cont">
        <div className='logo-cont'>
          <img src={logo} alt="logo" />
          <p>Technoborg 2022<span className='gradient-text'> &copy; All Rights Reserved</span></p>
        </div>
        <div className="company">
          <h5>Company</h5>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Social Media</a>
        </div>
        <div className="company">
          <h5>Get in touch</h5>
          <p>38400 Puerto de la Cruz, Santa Cruz de Tenerife</p>
          <p>922 1137 122</p>
          <p>info@technoborg.com</p>
        </div>
      </div>
  )
}

export default Links