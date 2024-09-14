import React, { useState } from 'react'
import {AiFillCaretUp} from 'react-icons/ai'
import {AiOutlineCaretDown} from 'react-icons/ai'

const Women = ({K}) => {
    const[state,setState]=useState(false);
  return (
    
     <div className="scheme-box">
                <div className="scheme-box-top">
                <h3>{K.schemeName}</h3>
                <div className="scheme-bud">
                </div>


             <div className="arrow">
             {!state?<AiFillCaretUp  onClick={() => setState(true) }/>:<AiOutlineCaretDown onClick={() => setState(false)}/> }
             </div>
           
          </div>
          {state &&
            <div className="scheme-box-bottom">

            <div className="sbb-text">
            <p>{K.discription}</p>
            </div>

            <div className="ssb-link-box">
              <div className='annual-fund'>
              <h4><span>AnualFund</span><br/>{K.AnualFund}</h4>
              </div>
            <div className="sbb-link1">
              <a href="/"> Scheme Starting <br/> Date</a>
              <p>{K.launchDate}</p>
            </div>
            <div className="sbb-link2">
              <a href="/">VIsit Website <br/> From Here</a>
            </div>
            </div>

          </div>
          }
          
          </div>
          
  )
}

export default Women;