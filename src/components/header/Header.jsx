import React from 'react';
import '../header/Header.scss';
import cyborg from '../../assets/cyborg.png';



const Header = () => {

  return (
    <div className="header-container">
      <div className="header">
        <h1 className='gradient-text'> Solutions for the most needed with TechnoBorg</h1>
        <p >The future is getting closer and TechnoBorg is proof of that. After 5 years of studies and development, the first official prototype of domestic help will soon be released on the market:  <span className='gradient-text'>TechBorg Vx</span> . <br /> Leave us your email to make a pre-reservation and be one of the first to get your Cyborg.</p>
        <div className='header-input'>
          <input type="email" placeholder='Your email adress' />
          <button type='button'>Pre-order</button>
        </div>
      </div>
      <div className="header-img">
        <img src={cyborg} alt="cyborg" />
      </div>
    </div>

  )
}

 

export default Header; 