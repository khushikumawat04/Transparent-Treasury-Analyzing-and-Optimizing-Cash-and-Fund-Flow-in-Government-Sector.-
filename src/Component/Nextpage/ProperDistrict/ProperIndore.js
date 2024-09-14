import React from 'react'
import SectorData from './KhargoneData';
import './District.css';
// import './DistrictCard.css'
import {AiOutlineUpload} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'

import { CSVLink } from "react-csv";
import { useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';


const ProperIndore = () => {
  const [userdata, setUserdata] = useState([]);
  const[searchTerm, setSearchTerm] = useState('');
 
  // const getvillagedata = SectorData.find((state) => state.state_id === "1")
  // .District.find((district) => district.District_id === "1")
  // .tehsil.find((tehsil) => tehsil.tehsil_id === "7").villages;
  const getvillagedata = SectorData.find((state) => state.state_id === "1")
        .District.find((district) => district.District_id === "1")
        .tehsil.find((tehsil) => tehsil.tehsil_id === "7").villages;

    useEffect(() => {
    const getuserdata = async () => {
      const getvillagedata = SectorData.find((state) => state.state_id === "1")
        .District.find((district) => district.District_id === "1")
        .tehsil.find((tehsil) => tehsil.tehsil_id === "7").villages;
      console.log(getvillagedata);
      setUserdata(getvillagedata);
    };
    getuserdata();
  }, []);

  const [filterData, setFilterData] = useState(getvillagedata);

  
 




  const handleSerch = (e) =>{
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filterData = userdata.filter((item)=>
    item.village_name.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilterData(filterData);
    

  }

 
  return (
  
<div>
<div className="tehsil-title-container">
<Link to="/sector"><span><AiOutlineArrowLeft /></span></Link>
    </div>


    <div className="tehsil-img-container">
    <h3>Indore</h3>
        <svg className='tic-wavs' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fill-opacity="1" d="M0,32L48,64C96,96,192,160,288,160C384,160,480,96,576,106.7C672,117,768,203,864,213.3C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
    <div className="tehsil-text-container">
    <div className='tehsil-sub-text'>
        <h1>total budget</h1>
        <h4>$ 20,00,000</h4>
        <p>Indore was founded in 1715 as a trade market on the Narmada River valley route by local landowners, who erected Indreshwar Temple (1741), from which the name Indore is derived. It became the capital of the Indore princely state of the Maratha Holkars, and it was the headquarters of the British Central India Agency and the summer capital of Madhya Bharat (1948–56) state before its incorporation into Madhya Pradesh. Krishnapura chhatris (cenotaphs) situated on the bank of the Khan River are dedicated to the Holkar rulers of the city.</p>
        <div className="about-link">
              <strong>Visit For More Detail - </strong>
              <Link to="https://indore.nic.in/">https://indore.nic.in/</Link>
            </div>
        </div>
    </div>



    <div className='cbig'>
    <div className="cbox">

        <div className="small">
            <div className="sc-box">
              <h4>Area <br/>  <span>525 Sq.Km.</span></h4>
            </div>
            <div className="sc-box">
              <h4>Population <br/>  <span>3,302,000</span></h4>
            </div>
            <div className="sc-box">
              <h4>Language <br/>  <span>Hindi <br/> English</span></h4>
            </div>
            <div className="sc-box">
              <h4>Villages <br/>  <span>126</span></h4>
            </div>
        </div>

    </div>
    </div>
    
    

    
    {/* Fot table main title box start */}

    <div className='table-container'>
    <div className="tehsil-table">
        <div className="button">
            {/* <button>Export Data <span><AiOutlineUpload/></span></button> */}
           <button><CSVLink
      data={userdata}
      filename="KhargoneVillage"
      style={{color:"white"}}
      // onClick={redirecttologin}
    >
      Export Data
    </CSVLink> <span><AiOutlineUpload/></span></button> 
        </div>
    </div>
      <div className='table-search'>
      <input type="text" placeholder='Search Villages.....' value={searchTerm} onChange={handleSerch}/>
      </div>
    
    <div className="table-box">
    <div className="table-mini-box">
        <div className="box box-1">S.No</div>
        <div className="box box-2">Total</div>
        <div className="box box-3">Hostel</div>
        <div className="box box-4">Sports</div>
    </div>
    
    {/* Fot table main title box end */}


    <div className="table-big2">
{filterData.map((v)=>{
  return(
    <>
    <div className="table-mini-box2">
        <div className="sbox box-mini-1">{v.village_id}</div>
        <div className="sbox box-mini-2">{v.village_name}</div>
        <div className="sbox box-mini-3">{v.village_budget}</div>
        <div className="sbox box-mini-4">Sports</div>
    </div>

    </>
  )
})}
    

    </div>


    
    </div>
    </div>
    </div>
    
  )
}



export default ProperIndore;