import React, { useState } from 'react'
import {AiFillCaretUp} from 'react-icons/ai'
import {AiOutlineCaretDown} from 'react-icons/ai'

const GovernaceAndAdministration = ({A}) => {
    const[state,setState]=useState(false);
  return (
    
     <div className="scheme-box">
    <div className="scheme-box-top">
            <h3>{A.schemeName}</h3>
            <div className="scheme-bud">
                {/* <h2>{A.answer}</h2> */}
              {/* <h2>annual Fund Flow</h2> */}
              

            
            </div>
             <div className="arrow">
             {!state?<AiFillCaretUp  onClick={() => setState(true) }/>:<AiOutlineCaretDown onClick={() => setState(false)}/> }
             {/* <span> <AiFillCaretUp /></span> */}
             </div>
           
          </div>
          {state &&
            <div className="scheme-box-bottom">

            <div className="sbb-text">
            <p>{A.discription}</p>
            {/* <p>This Scheme is awarded to full time GATE / G PAT qualified students.
            This Scheme is awarded to full time GATE / G PAT qualified students.
            This Scheme is awarded to full time GATE / G PAT qualified students.
            </p> */}
            </div>

            <div className="ssb-link-box">
              <div className='annual-fund'>
              <h4><span>AnualFund</span><br/>{A.AnualFund}</h4>
              </div>
            <div className="sbb-link1">
              <a href="/"> Scheme Starting <br/> Date</a>
              <p>{A.launchDate}</p>
            </div>
            <div className="sbb-link2">
              <a href="/">VIsit Website <br/> From Here</a>
              {/* <button>Click Me <span> <AiOutlineMan /></span></button> */}
            </div>
            </div>

          </div>
          }
          
          </div>
          
  )
}

export default GovernaceAndAdministration;
