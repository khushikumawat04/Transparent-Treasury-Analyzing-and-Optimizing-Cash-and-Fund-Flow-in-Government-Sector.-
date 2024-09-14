import React from 'react'
// import './nextpage.css'
import SectorData from '../../Carts/SectorData';
import '../../Nextpage/tehsil.css';
import {AiOutlineUpload} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'

import { CSVLink } from "react-csv";
import { useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';


const Bhikangaon = () => {
  const [userdata, setUserdata] = useState([]);
  const[searchTerm, setSearchTerm] = useState('');
 
  // const getvillagedata = SectorData.find((state) => state.state_id === "1")
  // .District.find((district) => district.District_id === "1")
  // .tehsil.find((tehsil) => tehsil.tehsil_id === "7").villages;
  const getvillagedata = SectorData.find((state) => state.state_id === "1")
        .District.find((district) => district.District_id === "1")
        .tehsil.find((tehsil) => tehsil.tehsil_id === "3").villages;

    useEffect(() => {
    const getuserdata = async () => {
      const getvillagedata = SectorData.find((state) => state.state_id === "1")
        .District.find((district) => district.District_id === "1")
        .tehsil.find((tehsil) => tehsil.tehsil_id === "3").villages;
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
    <h3>Bhikangaon</h3>
        <svg className='tic-wavs' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fill-opacity="1" d="M0,32L48,64C96,96,192,160,288,160C384,160,480,96,576,106.7C672,117,768,203,864,213.3C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
    <div className="tehsil-text-container">
    <div className='tehsil-sub-text'>
        <h1>total budget</h1>
        <h4>$ 20,00,000</h4>
        <p>Bhikangaon is a village and a nagar parishad in Khargone district in the state of Madhya Pradesh. As of 2001, Bhikangaon had a population of 14,288. Males constitute 52% of the population and females 48%. Bhikangaon has an average literacy rate of 69%, higher than the national average of 59.5% with male literacy of 75% and female literacy of 62%. 15% of the population is under 6 years of age. The Bhikangaon Nagar Panchayat has population of 16,217 of which 8,315 are males while 7,902 are females as per report released by Census India 2011.
        </p>
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
        <div className="box box-2">Village</div>
        <div className="box box-3">Budget</div>
        <div className="box box-4">Population</div>
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
        <div className="sbox box-mini-4">{v.village_population}</div>
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



export default Bhikangaon;