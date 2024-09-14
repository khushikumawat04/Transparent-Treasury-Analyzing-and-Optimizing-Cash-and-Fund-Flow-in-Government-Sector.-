import React, {useEffect, useState} from 'react'
import axios from 'axios';
import{Link, useNavigate} from 'react-router-dom'



function Signup(){
    const history = useNavigate();
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:3000/Signup", {
                email, password

            })
            .then(res =>{
                if(res.data=="exist"){
                    alert("User already exist");

                }
                
                else if(res.data=="notexist"){
                    history("/",{state:{id:email}})
                    
                }
            })
            .catch(e=>{
                alert("Wrong details");
                console.log(e);
            })

        } catch(e){
            console.log(e);

        }
    }
  return (
    <div className='login'>
        <h2>Feedback  Page</h2>
        <form action='POST' className='loginbox'>
            <h4>Name</h4>
            <input type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Your name..' name="" id=""/>
            <h4>Your Feedback</h4>
            <input type='text' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Write here' name="" id=""/>
            
      
        </form>
        <button  className="btn3" onClick={submit}>Submit</button>
        <br/>
        
      
    </div>
  )
}

export default Signup;
