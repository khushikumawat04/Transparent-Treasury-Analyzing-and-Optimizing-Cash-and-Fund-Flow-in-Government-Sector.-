import React from 'react'
import './defenceexams.css'


import Pdf from "./Defenceimage/pdf.png";
import Iaf from "./Defenceimage/iaf_logo.png";
import CDS from "./Defenceimage/cds.png";
import APPolice from './Defenceimage/Appolice(emblem).png';
import Gujratpolice from "./Defenceimage/Gujarat_Police_Logo.png";
import Delhipolice from "./Defenceimage/delhi police.png";
import Indiancoast from "./Defenceimage/Indian-Coast-Guard.png";
import Karnatakapolice from "./Defenceimage/Seal_of_Karnataka.png";
import Jharkhandpolice from "./Defenceimage/Jharkhand_Police_Logo_.png";
import Assampolice from "./Defenceimage/Assam_Police.png";
import Biharpolice from "./Defenceimage/bihar.png";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import AFCAT from './AFCAT .pdf';
import AP from './Assam Police .pdf';
import CDSP from './CDS .pdf';
import APP from './Arunachal Pradesh Police .pdf';

const BankExams = () => {
  return (
<>
<div className="tehsil-title-container">
        <Link to="/vaccancy"><span><AiOutlineArrowLeft /></span></Link> 
    </div>
    {/* page title section  */}
    <div className="bankexams-container">
        <div className="bankexams-box">
        <h1>Defence Exams<hr /></h1>
        <p>Defence examination are the exams conducted to recruit the candidates for the services related to
           Indian Army, Indian Navy and Indian Air Force. You can get various opportunities in a particular field.
           The Combined Defence Services Examination (abbreviated as CDS Exam) is conducted by the Union Public 
           Service Commission for recruitment of Commissioned Officers in the Indian Military Academy, Officers 
           Training Academy, Indian Naval Academy and Indian Air Force Academy. The Notification for the 
           examination is usually released in the months of December and May, and the examinations are 
           conducted in April and September respectively. Only unmarried graduates are eligible to sit for 
           the exam. Examination is conducted twice a year. Successful candidates are admitted into the 
           respective Academies after an interview conducted by the Services Selection Board (SSB).
        </p>
      </div>
    </div>

    <div className="bankexams-cards-section">

        <div className="bankeams-card">
            {/* bankexams cards headding */}
            <div className="bcb-main">
                <h4>Defence Exams</h4>
            </div>
            <div className="bcb-main">
                <h4>Get More Details</h4>
            </div>

            {/* bankexams cards  */}
            <div className="bankexams-card-box bcb-box1">
                <span><img src={Iaf}/></span>
                <h4>AFCAT</h4>
            </div>
            <div className="bankexams-card-box bcb-box1">
                <span><img src={Pdf}/></span>
                <a href={AFCAT}><h4>Documents</h4></a>
            </div>
            <div className="bankexams-card-box bcb-box2">
                <span><img src={CDS}/></span>
                <h4>CDS</h4>
            </div>
            <div className="bankexams-card-box bcb-box2">
                <span><img src={Pdf}/></span>
                <a href={CDSP}><h4>Documents</h4></a>
            </div>
            <div className="bankexams-card-box bcb-box1">
                <span><img src={APPolice}/></span>
                <h4>Arunachal Pradesh Police Recruitment</h4>
            </div>
            <div className="bankexams-card-box bcb-box1">
                <span><img src={Pdf}/></span>
                <a href={APP}><h4>Documents</h4></a>
            </div>
            <div className="bankexams-card-box bcb-box2">
                <span><img src={Gujratpolice}/></span>
                <h4>Gujrat Police Recruitment</h4>
            </div>
            <div className="bankexams-card-box bcb-box2">
                <span><img src={Pdf}/></span>
                <h4>Documents</h4>
            </div>
            <div className="bankexams-card-box bcb-box1">
                <span><img src={Delhipolice}/></span>
                <h4>Delhi Police Recruitment</h4>
            </div>
            <div className="bankexams-card-box bcb-box1">
                <span><img src={Pdf}/></span>
                <h4>Documents</h4>
            </div>
            <div className="bankexams-card-box bcb-box2">
                <span><img src={Indiancoast}/></span>
                <h4>Indian Coast Guard</h4>
            </div>
            <div className="bankexams-card-box bcb-box2">
                <span><img src={Pdf}/></span>
                <h4>Documents</h4>
            </div>
            <div className="bankexams-card-box bcb-box1">
                <span><img src={Karnatakapolice}/></span>
                <h4>Karnataka Police Recruitment</h4>
            </div>
            <div className="bankexams-card-box bcb-box1">
                <span><img src={Pdf}/></span>
                <h4>Documents</h4>
            </div>
            <div className="bankexams-card-box bcb-box2">
                <span><img src={Jharkhandpolice}/></span>
                <h4>Jharkhand Police Recruitment</h4>
            </div>
            <div className="bankexams-card-box bcb-box2">
                <span><img src={Pdf}/></span>
                <h4>Documents</h4>
            </div>

            <div className="bankexams-card-box bcb-box1">
                <span><img src={Assampolice}/></span>
                <h4>Asssam Police Recruitment </h4>
            </div>
            <div className="bankexams-card-box bcb-box1">
                <span><img src={Pdf}/></span>
                <a href={AP}><h4>Documents</h4></a>
            </div>

            <div className="bankexams-card-box bcb-box2">
                <span><img src={Biharpolice}/></span>
                <h4>Bihar Police Recruitment</h4>
            </div>
            <div className="bankexams-card-box bcb-box2">
                <span><img src={Pdf}/></span>
                <h4>Documents</h4>
            </div>

        </div>

    </div>

    </>
  )
}

export default BankExams