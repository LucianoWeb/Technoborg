import React from 'react';
import './Future.scss';
import future from '../../assets/future.png'

const Future = () => {
    return (
        <div className="future-container" id="future">
            <div className='future-title'>
                <h4 className='gradient-text'>What's next for TechnoBorg</h4>
                <img src={future} alt="future" />

            </div>

            <div className="future-list">
                <h5>In the very near future we will implement these functions to our cyborg:</h5>
                <ul>
                    <li>
                        Cooking
                    </li>
                    <li>
                        Driving
                    </li>
                    <li>
                        Interacting with animals
                    </li>
                    <li>
                        Lessons of any subject (basics)
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Future