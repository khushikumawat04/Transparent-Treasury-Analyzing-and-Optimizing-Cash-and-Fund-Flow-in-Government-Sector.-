import React,{useState,useRef} from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom"
import './login.css'

const Signin = () => {
  const navigate = useNavigate();
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })
    const LoginSignupContainerRef = useRef(null);
    const handleChange = e => {
         const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const navigateToRegister = () => {
       window.location.href='/login';
      }
    async function register (e) {
        e.preventDefault();

        const { name, email, password, reEnterPassword } = user
        try{
            if( name && email && password && (password === reEnterPassword)){
                await axios.post("http://localhost:80/register", user)
                .then( res => {
                    alert(res.data.message)
                    // navigate("/login")
                    LoginSignupContainerRef.current.classList.toggle("active");
                })
            } else {
                alert("invlid input")
            }
        } catch(e){
            console.log(e);
        }    
    }
  return (
    <>
    <div className="login-container" >

        <div className="login-box" ref={LoginSignupContainerRef}>
        
            
            <h1>Registration</h1>
                    <form className="input-box">
                    <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange } required></input>
                    <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange } required></input>
                    <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange } required></input>
                    <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange } required></input>
                    </form>
                    <div className="login-submit-btn">
                        <button onClick={register}>Register</button>
                    </div>
            </div>

        </div>
    </>
  )
}

export default Signin;