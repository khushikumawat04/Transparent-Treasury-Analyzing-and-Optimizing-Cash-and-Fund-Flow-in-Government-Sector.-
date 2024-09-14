import React from 'react'
import '../scheme.css'
import FinanceData from './FinanceData' 
import Finance from './Finance'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const FinanceSchemes = () => {
  return (
    <>
    <div className="tehsil-title-container">
        <Link to="/sector"><span><AiOutlineArrowLeft /></span></Link> 
    </div>
    <div className="scheme-img-container">
      <h3>Sector Schemes </h3>
    </div>
    <div className="scheme-container">
      {FinanceData.map((A) => {
            return(
              <div>
                <Finance A={A}/>

        
              </div>
            )
          })}
       
          {/* {Listdata.map((A) => {
            return(
              <div>
                <List A={A}/>
              </div>
            )
          })} */}
          {/* <div className="scheme-box-top">
            <h3>Pg Scholarship Scheme</h3>
            <div className="scheme-bud">
              <h2>annual Fund Flow</h2>
              <h4>$20,00,000</h4>
            </div>
            <div className="arrow">
             <span> <AiFillCaretUp /></span>
            </div>
          </div> */}
{/* 
          <div className="scheme-box-bottom">

            <div className="sbb-text">
            <p>This Scheme is awarded to full time GATE / G PAT qualified students.</p>
            </div>

            <div className="ssb-link-box">
            <div className="sbb-link1">
              <a href="/"> Scheme Starting <br/> Date</a>
              <p>1st September 2022</p>
            </div>
            <div className="sbb-link2">
              <a href="/">VIsit Website <br/> From Here</a>
              <button>Click Me <span> <AiOutlineMan /></span></button>
            </div>
            </div>

          </div> */}


        </div>
    
    </>
  )
}

export default FinanceSchemes;