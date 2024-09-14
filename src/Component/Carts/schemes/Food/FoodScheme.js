import React from 'react'
import '../scheme.css'
import FoodData from './FoodData'
import Food from './Food'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const FoodScheme = () => {
  return (
    <>
    <div className="tehsil-title-container">
        <Link to="/sector"><span><AiOutlineArrowLeft /></span></Link> 
    </div>
    <div className="scheme-img-container">
      <h3>Sector Schemes </h3>
    </div>
    <div className="scheme-container">
      {FoodData.map((K) => {
            return(
              <div>
                
                <Food K={K}/>
                
                
              </div>
            )
          })}
 </div>
    </>
  )
}

export default FoodScheme;