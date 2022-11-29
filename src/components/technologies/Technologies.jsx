import React from 'react';
import './Technologies.scss';
import { GiPadlock} from "react-icons/gi";


const Technologies = () => {
  return (
    <div className="tech-container" id="tech">
        <h4 className='gradient-text'>The technology we use in our project is 100% safe</h4>
        <div>
        <p>We have created a very safe technology that has no failure. In our last years of development we have never had any type of problem or accident with our cyborg. We promise that this machine will not reveal itself (we love "I, robot" by the way).</p>
        <GiPadlock size={180} color="white" className='icon-tech'/>
        <p>
        In the event of any type of failure or mechanical problem, our agents will be able to solve it remotely. We also have the famous "red button" in case it is necessary, so your safety is guaranteed.
        </p>

        </div>
     
    </div>
  )
}

export default Technologies