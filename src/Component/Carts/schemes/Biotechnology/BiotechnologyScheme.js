import React from 'react'
import '../scheme.css'
import Biotechnology from './Biotechnology'
import Biotechnologydata from './Biotechnologydata'
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
      {Biotechnologydata.map((K) => {
            return(
              <div>
                <Biotechnology K={K}/>
                
                
              </div>
            )
          })}
 </div>
    </>
  )
}

export default BiotechnologyScheme;