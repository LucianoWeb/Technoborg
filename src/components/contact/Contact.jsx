import React from 'react';
import './Contact.scss';

import Links from './Links';

const Contact = () => {
  return (
    <div className="cont-container" id='contact'>
      <div className='wait-container'>
        <h3 className='gradient-text'>What are you waiting for?</h3>
        <p>Be one of the first to get your techborg and discover what is the "life of the future"</p>
        <div className="input-cont">

          <input type="email" placeholder='Your email adress'/>
          <button>Pre-order</button>
        </div>
      </div>
      <Links/>
    </div>
  )
}

export default Contact