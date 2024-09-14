import React from 'react'
import '../scheme.css'
import {AiFillCaretUp} from 'react-icons/ai'
import {AiOutlineMan} from 'react-icons/ai'
import {AiOutlineCaretDown} from 'react-icons/ai'
import HealthAndFamilydata from './HealthAndFamilydata'
import HealthAndFamily from './HealthAndFamily'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HealthAndFamilyScheme= () => {
  return (
    <>
    <div className="tehsil-title-container">
        <Link to="/sector"><span><AiOutlineArrowLeft /></span></Link> 
    </div>
    <div className="scheme-img-container">
      <h3>Sector Schemes </h3>
    </div>
    <div className="scheme-container">
      {HealthAndFamilydata.map((A) => {
            return(
              <div>
                {/* <h1>{A.schemeName}</h1> */}
               <HealthAndFamily A={A}/>
              </div>
            )
            })}
       
         
         


        </div>
    
    </>
  )
}

export default HealthAndFamilyScheme;
