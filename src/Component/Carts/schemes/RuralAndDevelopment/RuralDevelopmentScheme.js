import React from 'react'
import '../scheme.css'
import {AiFillCaretUp} from 'react-icons/ai'
import {AiOutlineMan} from 'react-icons/ai'
import {AiOutlineCaretDown} from 'react-icons/ai'
import RuralDevelopmentdata from './RuralDevelopmentdata'
import RuralDevelopment from './RuralDevelopment'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const RuralDevelopmentScheme= () => {
  return (
    <>
    <div className="tehsil-title-container">
        <Link to="/sector"><span><AiOutlineArrowLeft /></span></Link> 
    </div>
    <div className="scheme-img-container">
      <h3>Sector Schemes </h3>
    </div>
    <div className="scheme-container">
      {RuralDevelopmentdata.map((A) => {
            return(
              <div>
                {/* <h1>{A.schemeName}</h1> */}
               <RuralDevelopment A={A}/>
              </div>
            )
            })}
       
         
         


        </div>
    
    </>
  )
}

export default RuralDevelopmentScheme;
