import React, { useState } from 'react'
import './LoginSignupContainer.css'
import Login from './Login'
import Signin from './Signin'


const LoginSignupContainer = ({setLoginUser}) => {


  const[isSignup,setIsSignup]=useState(true)
  const[isSliderMoved,setIsSliderMoved]=useState(false)
  const[isFormSectionMoved,setIsFormSectionMoved]=useState(false)

  const handleLoginClick =() => {
    setIsSignup(false)
    setIsSliderMoved(false)
    setIsFormSectionMoved(false)
  }

  const handleSignupClick =() => {
    setIsSignup(true)
    setIsSliderMoved(true)
    setIsFormSectionMoved(true)
  }

  return (
    <div>
      <div className="pd-box">
          <div className='login-container1'>
          <div className={`slider01 ${isSliderMoved ? "moveslider" : ""}`}></div>
            <div className="btn">
                <button className='login' onClick={handleLoginClick}>Login</button>
                <button className='signup' onClick={handleSignupClick}>Register</button>
            </div>
            <div className={`form-section ${isFormSectionMoved ? "form-section-move" : ""} `}>
            <div className='login-box1'>
              <Login setLoginUser={setLoginUser}/>
            </div>
            <div className="signup-box1">
              <Signin/>
            </div>
            </div>
          </div>  
    </div>
    </div>
  )
}

export default LoginSignupContainer;