import React from 'react'
import '../scheme.css'
import WaterData from './WaterData'
import Water from './Water'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const WaterScheme = () => {
  return (
    <>
    <div className="tehsil-title-container">
        <Link to="/sector"><span><AiOutlineArrowLeft /></span></Link> 
    </div>
    <div className="scheme-img-container">
      <h3>Sector Schemes </h3>
    </div>
    <div className="scheme-container">
      {WaterData.map((K) => {
            return(
              <div>
                <Water K={K}/>
                
                
              </div>
            )
          })}
 </div>
    </>
  )
}

export default WaterScheme;