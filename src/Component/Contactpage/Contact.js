import React,{useRef} from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cptmxoa', 'template_za86v7q', form.current, 'mZAHqPYMQVLRNe8K6')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
      <div className="large-box">
            <h1 className="contactheading">Contact Us</h1> 
            <div style={{display: "flex" , justifyContent: "space-evenly" , alignItems: "center"}}>            
            <div className="contactimage"><img src="./img/Get in touch-amico.png" height= "400px"/></div>
            <div className="container">
             <form  ref={form} onSubmit={sendEmail} >
              <div className="form-row">
                <div className="input-data">
                  <input type="text" required/>
                  <label>Name</label>
                </div>
                <div className="input-data">
                <input type="email" required/>
                <label>Email</label>
              </div>
              </div>
              <div className="form-row ">
              <div className="input-data textarea">
              <textarea type="text"  required/>
                <label>Message</label>
              </div>
            </div>
            <div className="form-row submit-btn">
            <div className="input-data">
            <div className="inner"></div>
            <input type="submit" value="submit"/>
            </div>
          </div>
             </form>
             </div>
            </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0a3543"
            fill-opacity="1"
            d="M0,64L48,85.3C96,107,192,149,288,144C384,139,480,85,576,58.7C672,32,768,32,864,53.3C960,75,1056,117,1152,128C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
          </path>
        </svg>
      </div>
    
      </div>
  );
};

export default Contact;
