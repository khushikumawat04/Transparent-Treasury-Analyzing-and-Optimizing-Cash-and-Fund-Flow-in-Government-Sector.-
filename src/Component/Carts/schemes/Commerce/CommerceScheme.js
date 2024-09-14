import React from 'react'
import '../scheme.css'
import Commerce from './Commerce'
import CommerceData from './CommerceData'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const BiotechnologyScheme = () => {
  return (
    <>
    <div className="tehsil-title-container">
        <Link to="/sector"><span><AiOutlineArrowLeft /></span></Link> 
    </div>
    <div className="scheme-img-container">
      <h3>Sector Schemes </h3>
    </div>
    <div className="scheme-container">
      {CommerceData.map((K) => {
            return(
              <div>
                <Commerce K={K}/>
                
                
              </div>
            )
          })}
 </div>
    </>
  )
}

export default BiotechnologyScheme;