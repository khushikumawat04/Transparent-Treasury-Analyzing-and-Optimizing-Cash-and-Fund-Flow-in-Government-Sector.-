import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LogImg from './img/imgforform.png'


const Login = ({setLoginUser}) => {
    const navigate = useNavigate();
    const[user, setUser]=useState({
        email : "",
        password: ""
    })
    const handlechange = (e) => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const login = () => {
        axios.post("http://localhost:80/login",user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
          
            navigate('/')
        });
    }
  return (
    <>
    <div className="login-container">

        <div className="login-box">
            <div className="login-img">
                <img src={LogImg} alt="" />
            </div>
            <h1>Login</h1>
                    <form className="input-box">
                        <input type="text" placeholder='Email' name='email' value={user.email} onChange={handlechange} autoComplete='off' />
                        <input type="text" placeholder='Password' name='password' value={user.password} onChange={handlechange} autoComplete='off'/>
                    </form>
                    <div className="login-submit-btn">
                        <button onClick={login}>Login</button>
                    </div>
            </div>

        </div>
    </>
  )
}

export default Login