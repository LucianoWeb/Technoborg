import React from 'react';
import './Contact.scss';
import logo from '../../assets/logo.png'

const Contact = () => {
  return (
    <div className="cont-container" id='contact'>
      <div className='wait-container'>
        <h3 className='gradient-text'>What are you waiting for?</h3>
        <p>Be one of the first to get your techborg and discover what is the "life of the future"</p>
        <div className="input-cont">
          <input type="email" />
          <button>Pre-order</button>
        </div>
      </div>
      <div className="links-cont">
        <div className='logo-cont'>
          <img src={logo} alt="logo" />
          <p>38400 Puerto de la Cruz, Santa Cruz de Tenerife, <span className='gradient-text'> &copy; All Rights Reserved</span></p>
        </div>
        <div className="company">
          <h5>Company</h5>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Social Media</a>
        </div>
        <div className="touch">
          <h5>Get in touch</h5>
          <p>38400 Puerto de la Cruz, Santa Cruz de Tenerife</p>
          <p>922 1137 122</p>
          <p>info@technoborg.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact