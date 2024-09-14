import React from "react";
// import "./cards.css";
import "./servpop.css";
import {ImCross } from "react-icons/im";
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

const Agriculturepopup = (props) => {
  const {register,formState: {error},handleSubmit,}= useForm();
  const navigate = useNavigate();
  const handlevillage = ()=>{
    if(props.districtid==="1" && props.tehsilid==="7"){
      props.setVillagetable("Khargone");
    }
    if(props.districtid==="1" && props.tehsilid==="1"){
      
      props.setVillagetable("Barwaha");
    }
    if(props.districtid==="1" && props.tehsilid==="2"){
      
      props.setVillagetable("Bhagwanpura");
    }
    if(props.districtid==="1" && props.tehsilid==="3"){
     
      props.setVillagetable("Bhikangaon");
    }
    if(props.districtid==="1" && props.tehsilid==="4"){
    
      props.setVillagetable("Gogaon");
    }
    if(props.districtid==="1" && props.tehsilid==="5"){
   
      props.setVillagetable("Jhiranya");
    }
    if(props.districtid==="1" && props.tehsilid==="6"){
     
      props.setVillagetable("Kasrawad");
    }
    if(props.districtid==="1" && props.tehsilid==="8"){
    
      props.setVillagetable("Maheshwar");
    }
    if(props.districtid==="1" && props.tehsilid==="9"){
     
      props.setVillagetable("Segaon");
    }
    if(props.districtid==="2" && props.tehsilid==="1"){
     console.log("barwani")
      props.setVillagetable("Anjad");
    }

    navigate("/village");
  }
  const handleparticulardistrict = () =>{
    if(props.districtid === "1"){
      props.setParticulardistrict("ProperKhargone");
    }
    if(props.districtid === "2"){
      props.setParticulardistrict("ProperBarwani")
    }
    navigate('/particulardistrict');
  }
  return (
    <>
      <div
        className="model-wrapper"
        // onClick={() => props.setShowmodel1(false)}
      ></div>
      <div className="sector-popup-container">
        <div className="sector-poput-box">
          <div className="sector-text">
            <div className="state-text-title">
             {props.popuptext.map((A) => {
              return(
                <>
                <div className="cimcros">
                  <sapn onClick = {() => props.setShowmodel2(false)}>
                    <ImCross />
                  </sapn>
                </div>
                <div className="state-press">
                  <a href="/" className="mplogo">
                    <img src={A.image2} />
                  </a>
                  <h3>{A.statename}</h3>
                </div>

                <div className="sector-aboutinfo">
                  <p>
                 {A.Discription}
                  </p>
                </div>
                <div className="sector-map">
                  <a href="/">
                    <img src={A.image} alt={A.alt} />
                  </a>
                </div>
              </>
              )
             })}
              
            </div>
          </div>

          <div className="sector-form">
            <div className="bimcros">
              <sapn onClick={() => props.setShowmodel2(false)}>
                <ImCross />
              </sapn>
            </div>
            <div className="sector-budget">
              {/* {props.popuptext.map((B) => { */}
              {props.popuptext.map((A) => {
                return(
                  <>
                  <h3>Total Budget</h3>
                  <h4>{A.Agriculture_budgetNo}</h4>
                </>
                )
              })}
             
            </div>

            <div className="sector-input-box">
              <form onSubmit={handleSubmit(handleparticulardistrict)}>
                <div className="input-dist">
                  <label htmlFor="">Select District</label>
                  <select className="round" id="section_input" name="district" onChange={(e) => props.handledistrict(e)} {...{required:true}}>
                    <option value="" disabled selected hidden>Select District</option>
                    {/* {props.district.map((d) => { */}
                    {props.district.map((D) => {
                      return(
                         <option value={D.District_id}>{D.District_name}</option>
                    
                      )
                    })}
                   
                  </select>
                </div>
                <div className="input-form-btn">
                  <button type="submit" className="sector-poput-btn">
                    View Data
                  </button>
                  
                </div>

                </form>
                <hr />

                 <form onSubmit={handleSubmit(handlevillage)}>
                <div className="input2-box">
                {/* <form> */}
                <div className="input-dist2">
                 
                  <label htmlFor="">Select District</label>
                  <select id="section_input"   onChange={(e)=>props.handledistrict(e)} name="district" {...{required:true}}>
                    <option value="" disabled selected hidden>Select District</option>
                    {
                      props.district.map((d)=>{
                        return(
                          <option value={d.District_id}>{d.District_name}</option>
                        )
                      })
                    }

                  </select>
                </div>
                <div className="input-dist2">
                  <label htmlFor="">Select Tehsil</label>
                  <select id="section_input"   name="tehsil" {...{required:true}} onChange={(e)=>props.handletehsil(e)}>
                    <option value="" disabled selected hidden>
                      Select Tehsil
                    </option>
                    {props.tehsil.map((T)=>{
                      return(
                        <option value={T.tehsil_id}>{T.tehsil_name}</option>
                      )
                    })}
                   
                   
                  </select>
                </div>
                
              </div>

                <div className="input-form-btn">
                  <button type="submit" className="sector-poput-btn">
                    View Data
                  </button>
                </div>
                </form>
              
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Agriculturepopup;