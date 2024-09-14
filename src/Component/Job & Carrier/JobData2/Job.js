import React,{useState} from 'react';
import './Job.css';
import Jobdata from './Jobdata';
// import {AiFillHome} from 'react-icons/ai'
import JobList from './JobList';
import Bank from "./img/bank.png";
import Information from './img/Information.png'
import UPSC from './img/uppsc.png'
import defence from './img/shield.png'
import railway from './img/railway.png'
import police from './img/police.png'
import judicial from './img/judicial.png'
import ssc from './img/SSC.png'



const Job = () => {

  const [item, setItem] =useState(Jobdata);
  const [jobTitle,setJobTitle] = useState("All Government Jobs");
  const filterResult = (jobItem) => {
    const jobCard = Jobdata.filter((job)=>{
      return job.category===jobItem;
    })
    setItem(jobCard);
  }
  
  return (

    <>
    <div className="jobdata-container">
     <div className="jobdata-title">
          <h1>{jobTitle} <hr/></h1>
        </div>
        <div className="jobdata-box">
          {/* jobdata buttons */}
          <div className="jobdata-buttons">

            <div className='buttons01'>
          
            <div className="button-box" >
              <span>
                <img src={ssc} alt='' />
              </span>
              <div className="button-text" onClick={()=>{filterResult("SSC")
               setJobTitle("SSC Jobs")}} >
                <h2>SSC Jobs</h2>
                {/* <p>Explor</p> */}
              </div>
            </div>

            

            <div className="button-box">
              <span>
               <img src={UPSC} alt=''/>
              </span>
              <div className="button-text" onClick={()=>{filterResult("PSC")
               setJobTitle("State PSC Jobs")}} >
                <h2>State PSC Jobs</h2>
                {/* <p>Explor</p> */}
              </div>
            </div>

            <div className="button-box">
              <span>
                <img src={Information }alt='' />
              </span>
              <div className="button-text" onClick={()=>{filterResult("IT")
               setJobTitle("Technical Jobs")}}>
                <h2>Technical Jobs</h2>
                {/* <p>Explor</p> */}
              </div>
            </div>

            <div className="button-box">
              <span>
                <img src={UPSC} alt='' />
              </span>
              <div className="button-text" onClick={()=>{filterResult("upsc")
               setJobTitle("UPSC Jobs")}} >
                <h2>UPSC Jobs</h2>
                {/* <p>Explor</p> */}
              </div>
            </div>


            <div className="button-box">
              <span>
                <img src={defence} alt=''/>
              </span>
              <div className="button-text" onClick={()=>{filterResult("Defence")
               setJobTitle("Defence Jobs")}} >
                <h2>Defence Jobs</h2>
                {/* <p>Explor</p> */}
              </div>
            </div>

            <div className="button-box">
              <span>
                <img src={Bank} alt=''/>
              </span>
              <div className="button-text" onClick={()=>{filterResult("Bank")
               setJobTitle("Bank Jobs")}} >
                <h2>Bank Jobs</h2>
                {/* <p>Explor</p> */}
              </div>
            </div>

            <div className="button-box">
              <span>
               <img src={railway} alt='' />
              </span>
              <div className="button-text" onClick={()=>{filterResult("Railway")
               setJobTitle("Railway Jobs")}}>
                <h2>Railway Jobs</h2>
                {/* <p>Explor</p> */}
              </div>
            </div>

            <div className="button-box">
              <span>
               <img src={police} alt='' />
              </span>
              <div className="button-text" onClick={()=>{filterResult("Police")
               setJobTitle("Police Jobs")}}>
                <h2>Police Jobs</h2>
                {/* <p>Explor</p> */}
              </div>
            </div>

            <div className="button-box">
              <span>
                <img src={judicial} alt='' />
              </span>
              <div className="button-text" onClick={()=>{filterResult("Judicial")
               setJobTitle("Judicial Jobs")}}>
                <h2>Judicial Jobs</h2>
                {/* <p>Explor</p> */}
              </div>
            </div>

            </div>
          </div>
          
    <div className="jobdata-text">
      
        {
          item.map((val)=>{
            return(
              <JobList val={val}/>
            )
          })
        }
      
      </div>
      </div>
      </div>
      </>
    
  )
}

export default Job;