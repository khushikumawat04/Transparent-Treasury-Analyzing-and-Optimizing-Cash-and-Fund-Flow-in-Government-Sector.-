import React from 'react'
import '../scheme.css'
import Economy from './Economy'
import EconomyData from './EconomyData'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const EconomyScheme = () => {
  return (
    <>
    <div className="tehsil-title-container">
        <Link to="/sector"><span><AiOutlineArrowLeft /></span></Link> 
    </div>
    <div className="scheme-img-container">
      <h3>Sector Schemes </h3>
    </div>
    <div className="scheme-container">
      {EconomyData.map((K) => {
            return(
              <div>
                <Economy K={K}/>
                
                
              </div>
            )
          })}
 </div>
    </>
  )
}

export default EconomyScheme;