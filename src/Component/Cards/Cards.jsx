import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './cards.css'

const Cards = () => {
  const[counterOn,setCounterOn]=useState(false)
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div>
    <div className="cards-container">
        <div className="cards-box">
            
            <div className="cards-text-box">
                <h1>{counterOn && <CountUp start={0} end={248} duration={2} delay={0}/>}</h1>
                <h3>Current Schemes</h3>
            </div>

            <div className="cards-text-box">
            <h1>{counterOn && <CountUp start={0} end={36} duration={2} delay={0}/>}</h1>
                <h3>Total Sectors</h3>
            </div>

            <div className="cards-text-box">
            <h1>{counterOn && <CountUp start={0} end={300} duration={2} delay={0}/>}</h1>
                <h3>Projects</h3>
            </div>

            <div className="cards-text-box last-box">
            <h1>{counterOn && <CountUp start={0} end={670} duration={2} delay={0}/>}</h1>
                <h3>Company</h3>
            </div>

        </div>
    </div>
    </div>
    </ScrollTrigger>
  )
}


export default Cards