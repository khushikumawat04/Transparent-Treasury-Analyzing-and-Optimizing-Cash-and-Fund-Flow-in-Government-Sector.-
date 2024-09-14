import React from 'react'
import '../scheme.css'
import {AiFillCaretUp} from 'react-icons/ai'
import {AiOutlineMan} from 'react-icons/ai'
import {AiOutlineCaretDown} from 'react-icons/ai'
import Transportdata from './Transportdata'
import Transport from './Transport'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const TransportScheme= () => {
  return (
    <>
    <div className="tehsil-title-container">
        <Link to="/sector"><span><AiOutlineArrowLeft /></span></Link> 
    </div>
    <div className="scheme-img-container">
      <h3>Sector Schemes </h3>
    </div>
    <div className="scheme-container">
      {Transportdata.map((A) => {
            return(
              <div>
                {/* <h1>{A.schemeName}</h1> */}
               <Transport A={A}/>
              </div>
            )
            })}
       
         
         


        </div>
    
    </>
  )
}

export default TransportScheme;
