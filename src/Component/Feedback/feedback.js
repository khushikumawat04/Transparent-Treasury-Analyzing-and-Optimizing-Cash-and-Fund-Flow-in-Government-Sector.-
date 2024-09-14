import React, {useEffect, useState} from 'react'
import axios from 'axios';
import{useNavigate} from 'react-router-dom'

import {FaFacebookMessenger} from 'react-icons/fa'
import './feedback.css'


const ChatButton = () => {



  const [isChatButtonVisible, setIsChatButtonVisible] = useState(false);

  const toggleChatButton = () => {
    setIsChatButtonVisible((prevVisible) => !prevVisible);
  };



  const history = useNavigate();
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ')
  const [message, setMessage] = useState(' ')

  async function submit(e){
      e.preventDefault();

      try{
          await axios.post("http://localhost:3000/Signup", {
              name, email, message

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
    <div>
      {/* <button className="chat-btn" onClick={toggleChatButton}>
        Toggle Chat
      </button> */}
       {/* <input id ='show'/> */}
            <lable  className="show-btn-query" onClick={toggleChatButton}>
               <span  ><FaFacebookMessenger/></span>
            </lable>
      {isChatButtonVisible && (
        <div className="wrapper-query">
            <h5>Let's Share Problem</h5>
                <p>Please Write Your Problem</p>
                <form>
                  <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='Your Name'></input>
                  <input type="email"  onChange={(e)=>{setEmail(e.target.value)}} placeholder='Your Email'></input>
                  <input type="text" onChange={(e)=>{setMessage(e.target.value)}}  placeholder='Enter Your Query'></input>
                  <button  className="btn3" onClick={submit}>Submit</button>

                </form>
          {/* Place your chat window content here */}
        </div>
      )}
    </div>
  );
};

export default ChatButton;
