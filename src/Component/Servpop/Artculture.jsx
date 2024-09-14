import React from "react";
// import "./cards.css";
import "./servpop.css";
import {ImCross } from "react-icons/im";
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
// import Mpmap from "../images/mpmap.png";
// import Mplogo from "../images/mplogo.png";
// import mpmap from "../images/mpmap.png";



const Artculture = (props) => {
  const {register,formState: {error},handleSubmit,}= useForm();
  const navigate = useNavigate();
  const handlevillage = ()=>{
    if(props.stateid ==="1" && props.districtid==="1" && props.tehsilid==="7"){
      props.setVillagetable("Khargone");
    }
    if(props.stateid ==="1" && props.districtid==="1" && props.tehsilid==="1"){
      
      props.setVillagetable("Barwaha");
    }
    if(props.stateid ==="1" && props.districtid==="1" && props.tehsilid==="2"){
      
      props.setVillagetable("Bhagwanpura");
    }
    if(props.stateid ==="1" && props.districtid==="1" && props.tehsilid==="3"){
     
      props.setVillagetable("Bhikangaon");
    }
    if(props.stateid ==="1" && props.districtid==="1" && props.tehsilid==="4"){
    
      props.setVillagetable("Gogaon");
    }
    if( props.stateid ==="1" && props.districtid==="1" && props.tehsilid==="5"){
   
      props.setVillagetable("Jhiranya");
    }
    if(props.stateid ==="1" && props.districtid==="1" && props.tehsilid==="6"){
     
      props.setVillagetable("Kasrawad");
    }
    if( props.stateid ==="1" && props.districtid==="1" && props.tehsilid==="8"){
    
      props.setVillagetable("Maheshwar");
    }
    if(props.stateid ==="1" && props.districtid==="1" && props.tehsilid==="9"){
     
      props.setVillagetable("Segaon");
    } 
      if(props.stateid ==="1" && props.districtid==="2" && props.tehsilid==="1"){
     
        props.setVillagetable("B_Anjad");
    }
    if( props.stateid ==="1" && props.districtid==="2" && props.tehsilid==="2"){
     
      props.setVillagetable("B_Thikri");
  }
  if( props.stateid ==="1" && props.districtid==="2" && props.tehsilid==="3"){
     
    props.setVillagetable("B_Rajpur");
}
if( props.stateid ==="1" && props.districtid==="2" && props.tehsilid==="4"){
     
  props.setVillagetable("B_Sendhwa");
}
if( props.stateid ==="1" && props.districtid==="2" && props.tehsilid==="5"){
     
  props.setVillagetable("B_Niwali");
}
if( props.stateid ==="1" && props.districtid==="2" && props.tehsilid==="6"){
     
  props.setVillagetable("B_Pansemal");
}
if( props.stateid ==="1" && props.districtid==="2" && props.tehsilid==="7"){
     
  props.setVillagetable("B_Varla");
}
if( props.stateid ==="1" && props.districtid==="2" && props.tehsilid==="8"){
     
  props.setVillagetable("B_Barwani");
}
if(props.stateid ==="1" && props.districtid==="2" && props.tehsilid==="9"){
     
  props.setVillagetable("B_Pati");
}
if(props.stateid ==="1" && props.districtid==="5" && props.tehsilid==="1"){
     
  props.setVillagetable("A_Alirajpur");
}
if(props.stateid ==="1" && props.districtid==="5" && props.tehsilid==="2"){
     
  props.setVillagetable("A_Bhavra");
}
if(props.stateid ==="1" && props.districtid==="5" && props.tehsilid==="3"){
     
  props.setVillagetable("A_Jobat");
}
if(props.stateid ==="1" && props.districtid==="3" && props.tehsilid==="1"){
     
  props.setVillagetable("kh_Khandawa");
}
if(props.stateid ==="1" && props.districtid==="3" && props.tehsilid==="2"){
     
  props.setVillagetable("kh_Pandhana");
}
if(props.stateid ==="1" && props.districtid==="3" && props.tehsilid==="3"){
     
  props.setVillagetable("kh_Punasa");
}
if(props.stateid ==="1" && props.districtid==="3" && props.tehsilid==="4"){
     
  props.setVillagetable("kh_Harsud");
}

if(props.stateid ==="1" && props.districtid==="3" && props.tehsilid==="5"){
     
  props.setVillagetable("kh_Khalwa");
}
if(props.stateid ==="1" && props.districtid==="4" && props.tehsilid==="1"){
     
  props.setVillagetable("D_Badnawar");
}
if(props.stateid ==="1" && props.districtid==="4" && props.tehsilid==="2"){
     
  props.setVillagetable("D_Dahi");
}
if( props.stateid ==="1" && props.districtid==="4" && props.tehsilid==="3"){
     
  props.setVillagetable("D_Dhar");
}
if(props.stateid ==="1" && props.districtid==="4" && props.tehsilid==="4"){
     
  props.setVillagetable("D_Dharampuri");
}
if( props.stateid ==="1" && props.districtid==="4" && props.tehsilid==="5"){
     
  props.setVillagetable("D_Gandhwani");
}
if( props.stateid ==="1" && props.districtid==="4" && props.tehsilid==="6"){
     
  props.setVillagetable("D_Kukshi");
}
if(props.stateid ==="1" && props.districtid==="4" && props.tehsilid==="7"){
     
  props.setVillagetable("D_Manawar");
}
if(props.stateid ==="1" && props.districtid==="4" && props.tehsilid==="8"){
     
  props.setVillagetable("D_Sadarpur");
}


// Maharastra
if(props.stateid ==="2" && props.districtid==="2" && props.tehsilid==="1"){
     
  props.setVillagetable("MD_Akola");
}
if(props.stateid ==="2" && props.districtid==="2" && props.tehsilid==="2"){
     
  props.setVillagetable("MD_Balapur");
}
if(props.stateid ==="2" && props.districtid==="2" && props.tehsilid==="3"){
     
  props.setVillagetable("MD_Patur");
}
if(props.stateid ==="2" && props.districtid==="2" && props.tehsilid==="4"){
     
  props.setVillagetable("MD_Barshitakali");
}
if(props.stateid ==="2" && props.districtid==="2" && props.tehsilid==="5"){
     
  props.setVillagetable("MD_Murtizapur");
}
if(props.stateid ==="2" && props.districtid==="2" && props.tehsilid==="6"){
     
  props.setVillagetable("MD_Akot");
}
if(props.stateid ==="2" && props.districtid==="2" && props.tehsilid==="7"){
     
  props.setVillagetable("MD_Telhara");
}





if(props.stateid ==="2" && props.districtid==="1" && props.tehsilid==="1"){
     
  props.setVillagetable("MD_Nagar");
}
if(props.stateid ==="2" && props.districtid==="1" && props.tehsilid==="2"){
     
  props.setVillagetable("MD_Newasa");
}
if(props.stateid ==="2" && props.districtid==="1" && props.tehsilid==="3"){
     
  props.setVillagetable("MD_Karjat");
}
if(props.stateid ==="2" && props.districtid==="1" && props.tehsilid==="4"){
     
  props.setVillagetable("MD_Jamkhed");
}
if(props.stateid ==="2" && props.districtid==="1" && props.tehsilid==="5"){
     
  props.setVillagetable("MD_Pathardi");
}
if(props.stateid ==="2" && props.districtid==="1" && props.tehsilid==="6"){
     
  props.setVillagetable("MD_Shevgaon");
}
if(props.stateid ==="2" && props.districtid==="1" && props.tehsilid==="7"){
     
  props.setVillagetable("MD_Shrigonda");
}
if(props.stateid ==="2" && props.districtid==="1" && props.tehsilid==="8"){
     
  props.setVillagetable("MD_Parner");
}
if(props.stateid ==="2" && props.districtid==="1" && props.tehsilid==="9"){
     
  props.setVillagetable("MD_Sangamner");
}
if(props.stateid ==="2" && props.districtid==="1" && props.tehsilid==="10"){
     
  props.setVillagetable("MD_Akole");
}
if(props.stateid ==="2" && props.districtid==="1" && props.tehsilid==="11"){
     
  props.setVillagetable("MD_Rahata");
}
if(props.stateid ==="2" && props.districtid==="1" && props.tehsilid==="12"){
     
  props.setVillagetable("MD_Kopargaon");
}
if(props.stateid ==="2" && props.districtid==="1" && props.tehsilid==="13"){
     
  props.setVillagetable("MD_Shrirampur");
}
if(props.stateid ==="2" && props.districtid==="1" && props.tehsilid==="14"){
     
  props.setVillagetable("MD_Rahuri");
}





if(props.stateid ==="2" && props.districtid==="3" && props.tehsilid==="1"){
     
  props.setVillagetable("MD_Achalpur");
}
if(props.stateid ==="2" && props.districtid==="3" && props.tehsilid==="2"){
     
  props.setVillagetable("MD_Amravati");
}
if(props.stateid ==="2" && props.districtid==="3" && props.tehsilid==="3"){
     
  props.setVillagetable("MD_AnjangaonSurji");
}
if(props.stateid ==="2" && props.districtid==="3" && props.tehsilid==="4"){
     
  props.setVillagetable("MD_Bhatkuli");
}
if(props.stateid ==="2" && props.districtid==="3" && props.tehsilid==="5"){
     
  props.setVillagetable("MD_ChandurRailway");
}
if(props.stateid ==="2" && props.districtid==="3" && props.tehsilid==="6"){
     
  props.setVillagetable("MD_Chandurbazar");
}
if(props.stateid ==="2" && props.districtid==="3" && props.tehsilid==="7"){
     
  props.setVillagetable("MD_Chikhaldara");
}
if(props.stateid ==="2" && props.districtid==="3" && props.tehsilid==="8"){
     
  props.setVillagetable("MD_Daryapur");
}
if(props.stateid ==="2" && props.districtid==="3" && props.tehsilid==="9"){
     
  props.setVillagetable("MD_DhamangaonRailway");
}
if(props.stateid ==="2" && props.districtid==="3" && props.tehsilid==="10"){
     
  props.setVillagetable("MD_Dharni");
}
if(props.stateid ==="2" && props.districtid==="3" && props.tehsilid==="11"){
     
  props.setVillagetable("MD_Morshi");
}
if(props.stateid ==="2" && props.districtid==="3" && props.tehsilid==="12"){
     
  props.setVillagetable("MD_NandgaonKhandeshwar");
}
if(props.stateid ==="2" && props.districtid==="3" && props.tehsilid==="13"){
     
  props.setVillagetable("MD_Teosa");
}
if(props.stateid ==="2" && props.districtid==="3" && props.tehsilid==="14"){
     
  props.setVillagetable("MD_Warud");
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
    if(props.districtid === "3"){
      props.setParticulardistrict("ProperKhandwa")
    }
    if(props.districtid === "4"){
      props.setParticulardistrict("ProperDhar")
    }
    if(props.districtid === "5"){
      props.setParticulardistrict("ProperAlirajpur")
    }
    if(props.stateid==="2" && props.districtid==="1"){
      props.setParticulardistrict("ProperAhemdnagar")
    }
    if(props.stateid==="2" && props.districtid==="2"){
      props.setParticulardistrict("ProperAkola")
    }
    if(props.stateid==="2" && props.districtid==="3"){
      props.setParticulardistrict("ProperAmravati")
    }
    if(props.stateid==="2" && props.districtid==="4"){
      props.setParticulardistrict("ProperAurangabad")
    }
    if(props.stateid==="2" && props.districtid==="5"){
      props.setParticulardistrict("ProperBeed")
    }

    navigate('/particulardistrict');
  }
  return (
    <>
      <div
        className="model-wrapper"
        onClick={() => props.setShowmodel(false)}
      ></div>
      <div className="sector-popup-container">
        <div className="sector-poput-box">
          <div className="sector-text">
            <div className="state-text-title">
             {props.popuptext.map((B) => {
              return(
                <>
                <div className="cimcros">
                  <sapn onClick = {() => props.setShowmodel1(false)}>
                    <ImCross />
                  </sapn>
                </div>
                <div className="state-press">
                  <a href="/" className="mplogo">
                    <img src={B.image2} />
                  </a>
                  <h3>{B.statename}</h3>
                </div>

                <div className="sector-aboutinfo">
                  <p>
                 {B.Discription}
                  </p>
                </div>
                <div className="sector-map">
                  <a href="/">
                    <img src={B.image} alt={B.alt} />
                  </a>
                </div>
              </>
              )
             })}
              
            </div>
          </div>

          <div className="sector-form">
            <div className="bimcros">
              <sapn onClick={() => props.setShowmodel1(false)}>
                <ImCross />
              </sapn>
            </div>
            <div className="sector-budget">
              {/* {props.popuptext.map((B) => { */}
              {props.popuptext.map((B) => {
                return(
                  <>
                  <h3>Total Budget</h3>
                  <h4>{B.Art_and_culture_budgetNo}</h4>
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

export default Artculture;