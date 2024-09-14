import React from 'react'
import './bankexams.css'

import BOIbaroda from "./Bankimage/BankOfBaroda.png";
import Boi from "./Bankimage/Boi.png";
import CanaraBank from "./Bankimage/CanaraBank.png";
import Central_Bank from "./Bankimage/Central_Bank_of_India.png";
import federal from "./Bankimage/federal.png";
import swarajya from "./Bankimage/swarajya.png";
import Pdf from "./Bankimage/pdf.png";
import SBI from "./Bankimage/Sbi.png";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import pdf1 from "./Bank of Baroda SO.pdf";
import BOI from './Bank of India.pdf';
import BOBPO from './About Bank of Baroda PO.pdf';
import CBPO from './Canara Bank PO.pdf';
import CBOI from './Central Bank of India .pdf';


const BankExams = () => {
  return (
<>
<div className="tehsil-title-container">
        <Link to="/vaccancy"><span><AiOutlineArrowLeft /></span></Link> 
    </div>
    {/* page title section  */}
    <div className="bankexams-container">
        <div className="bankexams-box">
        <h1>Banking exams<hr /></h1>
        <p>In India, the bank exams are conducted by various government-owned and private sector banks,
           as well as the Reserve Bank of India (RBI). These exams are used to recruit candidates for 
           various positions such as Probationary Officers (POs), Clerk, and Specialists Officers (SOs).
           The Institute of Banking Personnel Selection (IBPS) is a national level organization that conducts common written examinations for recruitment in several public sector banks and other financial institutions in India. Other banks such as Reserve Bank of India (RBI), SBI, and some other private banks have their own recruitment process.
        </p>
      </div>
    </div>

    <div className="bankexams-cards-section">
        <div className="bankeams-card">
            {/* bankexams cards headding */}
            <div className="bcb-main">
                <h4>Banking Exams</h4>
            </div>
            <div className="bcb-main">
                <h4>Get More Details</h4>
            </div>

            {/* bankexams cards  */}
            <div className="bankexams-card-box bcb-box1">
                <span><img src={BOIbaroda}/></span>
                <h4>Bank Of Baroda PO</h4>
            </div>
            <div className="bankexams-card-box bcb-box1">
                <span><img src={Pdf}/></span>
                <a href={BOBPO}><h4>Documents</h4></a>
            </div>
            <div className="bankexams-card-box bcb-box2">
                <span><img src={BOIbaroda}/></span>
                <h4>Bank Of Baroda SO</h4>
            </div>
            <div className="bankexams-card-box bcb-box2">
                <span><img src={Pdf}/></span>
                <a href={pdf1}><h4>Documents</h4></a>
            </div>
            <div className="bankexams-card-box bcb-box1">
                <span><img src={Boi}/></span>
                <h4>Bank Of India</h4>
            </div>
            <div className="bankexams-card-box bcb-box1">
                <span><img src={Pdf}/></span>
                <a href={BOI}><h4>Documents</h4></a>
            </div>
            <div className="bankexams-card-box bcb-box2">
                <span><img src={CanaraBank}/></span>
                <h4>Canara Bank</h4>
            </div>
            <div className="bankexams-card-box bcb-box2">
                <span><img src={Pdf}/></span>
                <a href={CBPO}><h4>Documents</h4></a>
            </div>
            <div className="bankexams-card-box bcb-box1">
                <span><img src={Central_Bank}/></span>
                <h4>Central Bank Of India</h4>
            </div>
            <div className="bankexams-card-box bcb-box1">
                <span><img src={Pdf}/></span>
                <a href={CBOI}><h4>Documents</h4></a>
            </div>
            <div className="bankexams-card-box bcb-box2">
                <span><img src={swarajya}/></span>
                <h4>Esic</h4>
            </div>
            <div className="bankexams-card-box bcb-box2">
                <span><img src={Pdf}/></span>
                <h4>Documents</h4>
            </div>
            <div className="bankexams-card-box bcb-box1">
                <span><img src={federal}/></span>
                <h4>Federal Bank</h4>
            </div>
            <div className="bankexams-card-box bcb-box1">
                <span><img src={Pdf}/></span>
                <h4>Documents</h4>
            </div>
            <div className="bankexams-card-box bcb-box2">
                <span><img src={SBI}/></span>
                <h4>SBI PO</h4>
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