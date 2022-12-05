import React from 'react';
import './WhatIs.scss';
import { AiOutlineWechat } from "react-icons/ai";
import { GiStrong } from "react-icons/gi";
import { GiVacuumCleaner } from "react-icons/gi";
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
const WhatIs = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo('#title-gsap', {
        x:-500,
        opacity:0
       
    }, {
        x:0,
        duration: 3,
        opacity:1,
        scrollTrigger: {
        trigger: ('#title-gsap'),
        start: +500
    }
   
    })
    gsap.fromTo('#logo-gsap', {
      x:-300,
      opacity:0
     
  }, {
    opacity:1,
      x:0,
      scale:1.5,
      duration: 3,
      scrollTrigger: {
      trigger: ('#logo-gsap'),
      start: +700
  }
  })
    
}, [])
  return (
    <div className="what-container" id='whatis'>
      <div className="what-texts1">
        <h4>What is TechnoBorg</h4>
        <p>TechnoBorg is a company that was created to make life easier for humans. After more than 5 years of experience we have created our final product (although we will go further). Currently it has many functions, but in the near future our cyborg will be the perfect companion for any family.</p>
      </div>
      <h2 id='title-gsap' className='gradient-text'>Help your loved ones. Make your life easier</h2>
      <div className="what-texts2">
        <div>
          <AiOutlineWechat id="logo-gsap" size={40} color="white" />
          <h4>Psichology</h4>
          <p>TechBorg Vx is prepared to do psychological help for the elderly. He can keep interesting conversations with his advanced system. They won't feel alone never more. </p>
        </div>
        <div>
          <GiStrong size={40} id="logo-gsap" color="white" />
          <h4>Mobility Aid</h4>
          <p>Help your loved ones with mobility problems (disabled or elderly). Techborg Vx assists people to help them stand up, support themselves while walking in any direction they want.</p>
        </div>
        <div>
          <GiVacuumCleaner id="logo-gsap" size={40} color="white" />
          <h4>Easier Life</h4>
          <p>Do you have a very stressful life and do not have time for household chores? TechnBorg Vx is capable of vacuuming and scrubbing the floors of all rooms in your home or office. Make your life easier</p>
        </div>
      </div>

    </div>
  )
}

export default WhatIs