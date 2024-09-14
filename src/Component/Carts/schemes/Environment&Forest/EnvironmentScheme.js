import React from 'react'
import '../scheme.css'
import EnvironmentData from './EnvironmentData'
import Environment from './Environment'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const EnvironmentScheme = () => {
  return (
    <>
    <div className="tehsil-title-container">
        <Link to="/sector"><span><AiOutlineArrowLeft /></span></Link> 
    </div>
    <div className="scheme-img-container">
      <h3>Sector Schemes </h3>
    </div>
    <div className="scheme-container">
      {EnvironmentData.map((K) => {
            return(
              <div>
                
                <Environment K={K}/>
                
                
              </div>
            )
          })}
 </div>
    </>
  )
}

export default EnvironmentScheme;