import React from 'react'
import '../scheme.css'
import HousingData from './HousingData'
import Housing from './Housing'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HousingScheme = () => {
  return (
    <>
    <div className="tehsil-title-container">
        <Link to="/sector"><span><AiOutlineArrowLeft /></span></Link> 
    </div>
    <div className="scheme-img-container">
      <h3>Sector Schemes </h3>
    </div>
    <div className="scheme-container">
      {HousingData.map((K) => {
            return(
              <div>
                <Housing K={K}/>
                
                
              </div>
            )
          })}
 </div>
    </>
  )
}

export default HousingScheme;