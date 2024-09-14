import React from 'react'
// import './nextpage.css'
import SectorData from "../../Carts/SectorData"
import '../../Nextpage/tehsil.css';
import {AiOutlineUpload} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'

import { CSVLink } from "react-csv";
import { useEffect ,useState } from 'react';
import { Link } from 'react-router-dom'


const Khandwa = () => {
  const [userdata, setUserdata] = useState([]);
  const[searchTerm, setSearchTerm] = useState('');
 
  // const getvillagedata = SectorData.find((state) => state.state_id === "1")
  // .District.find((district) => district.District_id === "1")
  // .tehsil.find((tehsil) => tehsil.tehsil_id === "7").villages;
  const getvillagedata = SectorData.find((state) => state.state_id === "1")
        .District.find((district) => district.District_id === "3")
        .tehsil.find((tehsil) => tehsil.tehsil_id === "1").villages;

    useEffect(() => {
    const getuserdata = async () => {
      const getvillagedata = SectorData.find((state) => state.state_id === "1")
        .District.find((district) => district.District_id === "3")
        .tehsil.find((tehsil) => tehsil.tehsil_id === "1").villages;
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
    <h3>Khandwa</h3>
        <svg className='tic-wavs' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fill-opacity="1" d="M0,32L48,64C96,96,192,160,288,160C384,160,480,96,576,106.7C672,117,768,203,864,213.3C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
    <div className="tehsil-text-container">
    <div className='tehsil-sub-text'>
        <h1>total budget</h1>
        <h4>$ 20,00,000</h4>
        <p>Khandwa district, formerly known as the East Nimar district, is a district of the Madhya Pradesh state in central India. The city of Khandwa is the administrative headquarters of the district. Other notable towns in the district include Mundi, Harsud, Pandhana and Omkareshwar.The district has an area of 6,206 km2 (2,396 sq mi), and a population 1,310,061 (2011 census). Khandwa District lies in the Nimar region, which includes the lower valley of the Narmada River, Kherkhali River, Choti Tawa River, Shiva River. The Narmada forms part of the northern boundary of the district, and the Satpura Range form the southern boundary of the district. Burhanpur District, to the south, lies in the basin of the Tapti River. The pass through the Satpuras connecting Khandwa and Burhanpur is one of the main routes connecting northern and southern India, and the fortress of Asirgarh, which commands the pass, is known as the "Key to the Deccan". Betul and Harda districts lie to the east, Dewas District to the north, and Khargone District to the west.
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



export default Khandwa;