import React from 'react';
import './Future.scss';
import future from '../../assets/future.png';
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Future = () => {
 
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.gsap-li1', {
            y: -40,
            opacity: 0
        }, {
            opacity: 1,
            duration: 1.5,
            y:0,
            scrollTrigger: {
                trigger: ('.gsap-li1'),
                start: +1500
            }
        }),
        gsap.fromTo('.gsap-li2', {
            y: -40,
            opacity: 0
        }, {
            opacity: 1,
            duration: 1.5,
            delay:1,
            y:0,
            scrollTrigger: {
                trigger: ('.gsap-li2'),
                start: +1500
            }
        })
        gsap.fromTo('.gsap-li3', {
            y: -40,
            opacity: 0
        }, {
            opacity: 1,
            duration: 1.5,
            delay:1.5,
            y:0,
            scrollTrigger: {
                trigger: ('.gsap-li3'),
                start: +1500
            }
        })
        gsap.fromTo('.gsap-li4', {
            y: -40,
            opacity: 0
        }, {
            opacity: 1,
            duration: 1.5,
            delay:2,
            y:0,
            scrollTrigger: {
                trigger: ('.gsap-li4'),
                start: +1500
            }
        })
        
    }, [])


    return (
        <div className="future-container" id="future">
            <div className='future-title'>
                <h4 className='gradient-text'>What's next for TechnoBorg</h4>
                <img src={future} alt="future" />

            </div>

            <div className="future-list">
                <h5>In the very near future we will implement these functions to our cyborg:</h5>
                <ul>
                    <li className='gsap-li1'>
                        Cooking
                    </li>
                    <li className='gsap-li2'>
                        Driving
                    </li>
                    <li className='gsap-li3'>
                        Interacting with animals
                    </li>
                    <li className='gsap-li4'>
                        Lessons of any subject (basics)
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Future