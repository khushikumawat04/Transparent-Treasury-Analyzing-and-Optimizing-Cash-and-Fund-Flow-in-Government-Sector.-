import React, { useState } from "react";
import './jobBtn.css'
import age from "./img/age.png";
import time from './img/time.png';
import expired from './img/expired.png'
import post from './img/postno.png'
// import {AiFillHome} from 'react-icons/ai'

const JobList = ({ val }) => {
  const [state, setState] = useState(false);
  return (
    <>
      {/* 
      <div className="jobdata-text"> */}
      <div className="jodata-text-box1">
        <h1>{val.Job}</h1>
        <h4>{val.qualification}</h4>
        <div className="jobdata-small-text">
          <h5>{val.qualification2}</h5>
          {/* <a href="/">View Less..</a> */}
          {/* {!state?<i class='bx bxs-chevron-down' onClick={() =>setState(true)}></i>:<i class='bx bxs-chevron-up' onClick={() =>setState(false)}></i> } */}
          {!state ? (
            <p onClick={() => setState(true)}>View More</p>
          ) : (
            <p onClick={() => setState(false)}>View Less</p>
          )}
        </div>

        {state && (
          <div className="jodata-text-box2">
            <div className="box2-headdin">{/* <h2>{val.answer}</h2> */}</div>
            <div className="box2-text-data">

              <div className="data-carts">
                <div className="data-carts-box">
                  <span><img src={post} alt=""/></span>
                  <h4>{val.postno}</h4>
                </div>
                <div className="data-carts-box">
                  <span><img src={age} alt="" /></span>
                  <h4>{val.age}</h4>
                </div>
                <div className="data-carts-box">
                  <span><img src={expired} alt="" /></span>
                  <h4>{val.date}</h4>
                </div>
                <div className="data-carts-box">
                  <span><img src={time} alt="" /></span>
                  <h4>{val.ago}</h4>
                </div>
                
              </div>

              <div className="data-text">
                <h1>{val.post}</h1>
                <p>{val.content}</p>
                {/* <a href={val.link}>For more Detail..</a> */}
                <p>{val.link}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* </div> */}
    </>
  );
};

export default JobList;

/*{
   <div className='mapfun'>
<div className='fun'>
   <h4>{val.question} <span>{val.schemebudget}</span></h4>
   {!state?<i class='bx bxs-chevron-down' onClick={() =>setState(true)}></i>:<i class='bx bxs-chevron-up' onClick={() =>setState(false)}></i> }
<div>
{state &&<p>{val.answer}</p>}
</div>
} */
