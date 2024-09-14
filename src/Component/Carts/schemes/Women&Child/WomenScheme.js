import React from 'react'
import '../scheme.css'
import WomenData from './WomenData'
import Women from './Women'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const WomenScheme = () => {
  return (
    <>
    <div className="tehsil-title-container">
        <Link to="/sector"><span><AiOutlineArrowLeft /></span></Link> 
    </div>
    <div className="scheme-img-container">
      <h3>Sector Schemes </h3>
    </div>
    <div className="scheme-container">
      {WomenData.map((K) => {
            return(
              <div>
                <Women K={K}/>
                
                
              </div>
            )
          })}
 </div>
    </>
  )
}

export default WomenScheme;