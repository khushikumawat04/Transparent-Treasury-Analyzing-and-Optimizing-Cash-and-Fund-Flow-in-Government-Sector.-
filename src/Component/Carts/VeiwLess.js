import React, { useState } from "react";
// import './Viewmore.css'
import "./cart.css";
import SectorData from "./SectorData";
import Artculture from "../Servpop/Artculture";
import { Link } from "react-router-dom";
import Agriculturepopup from "../Servpop/Agriculturepopup";
import Educationpopup from "../Servpop/Educationpopup";
// import Economicpopup from "../Servpop/Economicpopup";
// import Healthpopup from "../Servpop/Healthpopup";
// import Homeaffairpopup from "../Servpop/Homeaffairpopup";
// import Ruralpopup from "../Servpop/Ruralpopup";
// import Sciencepopup from "../Servpop/Sciencepopup";
// import Transportpopup from "../Servpop/Transportpopup";
// import Waterresourcepopup from "../Servpop/Waterresourcepopup";
// import Watersanitationpopup from "../Servpop/Watersanitationpopup";
// import Womenpopup from "../Servpop/Womenpopup";
// import Women from "./schemes/Women&Child/Women";


const ViewLess = (props) => {
  const [isExpanded, setExpanded] = useState(false);

 
  const [showmodel1, setShowmodel1] = useState(false);
  const [showmodel2, setShowmodel2] = useState(false);
  const [showmodel3, setShowmodel3] = useState(false);
  const [showmodel4, setShowmodel4] = useState(false);
  const [showmodel5, setShowmodel5] = useState(false);
  const [showmodel6, setShowmodel6] = useState(false);
  const [showmodel7, setShowmodel7] = useState(false);
  const [showmodel8, setShowmodel8] = useState(false);
  const [showmodel9, setShowmodel9] = useState(false);
  const [showmodel10, setShowmodel10] = useState(false);
  const [showmodel11, setShowmodel11] = useState(false);
  const [showmodel12, setShowmodel12] = useState(false);
  
  
  const [district, setDistrict] = useState([]);
  const [tehsil, setTehsil] = useState([]);
  const [popuptext, setPopuptext] = useState([]);

  const [districtid, setDistrictid] = useState("");
  const [tehsilid, setTehsilid] = useState("");
  const [stateid, setStateid] = useState("");

  // For satate
  const handledata1 = (e) => {
    // for popups
    const getstateid = e.target.value;
    setStateid(getstateid);
    const popupDetail = SectorData.find(
      (detail) => detail.state_id === getstateid
    ).budget;
    setPopuptext(popupDetail);
    console.log(popupDetail);

    console.log(getstateid);
    const districtdata = SectorData.find(
      (district) => district.state_id === getstateid
    ).District;
    console.log(districtdata);
    setDistrict(districtdata);

    setShowmodel1(true);
    
  };
  const handledata2 = (e) => {
    // for popups
    const getstateid = e.target.value;
    const popupDetail = SectorData.find(
      (detail) => detail.state_id === getstateid
    ).budget;
    setPopuptext(popupDetail);
    console.log(popupDetail);

    console.log(getstateid);
    const districtdata = SectorData.find(
      (district) => district.state_id === getstateid
    ).District;
    console.log(districtdata);
    setDistrict(districtdata);

    setShowmodel2(true);
    
  };
  const handledata3 = (e) => {
    // for popups
    const getstateid = e.target.value;
    const popupDetail = SectorData.find(
      (detail) => detail.state_id === getstateid
    ).budget;
    setPopuptext(popupDetail);
    console.log(popupDetail);

    console.log(getstateid);
    const districtdata = SectorData.find(
      (district) => district.state_id === getstateid
    ).District;
    console.log(districtdata);
    setDistrict(districtdata);

    setShowmodel3(true);
    
  };
  const handledata4 = (e) => {
    // for popups
    const getstateid = e.target.value;
    const popupDetail = SectorData.find(
      (detail) => detail.state_id === getstateid
    ).budget;
    setPopuptext(popupDetail);
    console.log(popupDetail);

    console.log(getstateid);
    const districtdata = SectorData.find(
      (district) => district.state_id === getstateid
    ).District;
    console.log(districtdata);
    setDistrict(districtdata);

    setShowmodel4(true);
    
  };
  const handledata5 = (e) => {
    // for popups
    const getstateid = e.target.value;
    const popupDetail = SectorData.find(
      (detail) => detail.state_id === getstateid
    ).budget;
    setPopuptext(popupDetail);
    console.log(popupDetail);

    console.log(getstateid);
    const districtdata = SectorData.find(
      (district) => district.state_id === getstateid
    ).District;
    console.log(districtdata);
    setDistrict(districtdata);

    setShowmodel5(true);
    
  };
  const handledata6 = (e) => {
    // for popups
    const getstateid = e.target.value;
    const popupDetail = SectorData.find(
      (detail) => detail.state_id === getstateid
    ).budget;
    setPopuptext(popupDetail);
    console.log(popupDetail);

    console.log(getstateid);
    const districtdata = SectorData.find(
      (district) => district.state_id === getstateid
    ).District;
    console.log(districtdata);
    setDistrict(districtdata);

    setShowmodel6(true);
    
  };
  const handledata7 = (e) => {
    // for popups
    const getstateid = e.target.value;
    const popupDetail = SectorData.find(
      (detail) => detail.state_id === getstateid
    ).budget;
    setPopuptext(popupDetail);
    console.log(popupDetail);

    console.log(getstateid);
    const districtdata = SectorData.find(
      (district) => district.state_id === getstateid
    ).District;
    console.log(districtdata);
    setDistrict(districtdata);

    setShowmodel7(true);
    
  };
  const handledata8 = (e) => {
    // for popups
    const getstateid = e.target.value;
    const popupDetail = SectorData.find(
      (detail) => detail.state_id === getstateid
    ).budget;
    setPopuptext(popupDetail);
    console.log(popupDetail);

    console.log(getstateid);
    const districtdata = SectorData.find(
      (district) => district.state_id === getstateid
    ).District;
    console.log(districtdata);
    setDistrict(districtdata);

    setShowmodel8(true);
    
  };
  const handledata9 = (e) => {
    // for popups
    const getstateid = e.target.value;
    const popupDetail = SectorData.find(
      (detail) => detail.state_id === getstateid
    ).budget;
    setPopuptext(popupDetail);
    console.log(popupDetail);

    console.log(getstateid);
    const districtdata = SectorData.find(
      (district) => district.state_id === getstateid
    ).District;
    console.log(districtdata);
    setDistrict(districtdata);

    setShowmodel9(true);
    
  };
  const handledata10 = (e) => {
    // for popups
    const getstateid = e.target.value;
    const popupDetail = SectorData.find(
      (detail) => detail.state_id === getstateid
    ).budget;
    setPopuptext(popupDetail);
    console.log(popupDetail);

    console.log(getstateid);
    const districtdata = SectorData.find(
      (district) => district.state_id === getstateid
    ).District;
    console.log(districtdata);
    setDistrict(districtdata);

    setShowmodel10(true);
    
  };
  const handledata11 = (e) => {
    // for popups
    const getstateid = e.target.value;
    const popupDetail = SectorData.find(
      (detail) => detail.state_id === getstateid
    ).budget;
    setPopuptext(popupDetail);
    console.log(popupDetail);

    console.log(getstateid);
    const districtdata = SectorData.find(
      (district) => district.state_id === getstateid
    ).District;
    console.log(districtdata);
    setDistrict(districtdata);

    setShowmodel11(true);
    
  };
  const handledata12= (e) => {
    // for popups
    const getstateid = e.target.value;
    const popupDetail = SectorData.find(
      (detail) => detail.state_id === getstateid
    ).budget;
    setPopuptext(popupDetail);
    console.log(popupDetail);

    console.log(getstateid);
    const districtdata = SectorData.find(
      (district) => district.state_id === getstateid
    ).District;
    console.log(districtdata);
    setDistrict(districtdata);

    setShowmodel12(true);
    
  };

  // For District
  const handledistrict = (e) => {
    const getdistrictid = e.target.value;
    const tehsildata = district.find(
      (tehsil) => tehsil.District_id === getdistrictid
    ).tehsil;
    setTehsil(tehsildata);
    setDistrictid(getdistrictid);
    console.log(tehsildata);
    console.log(getdistrictid)
  };
  const handletehsil = (e) => {
    const gettehsilid = e.target.value;
    setTehsilid(gettehsilid);
    console.log(gettehsilid)
  };

  const toggleExpansion = () => {
    setExpanded(!isExpanded);
  };

  const content = isExpanded ? (
    <div className="cart-container view-more">
      <h1>Our Sector</h1>
      {/* <p>Full content goes here.</p> */}
      
      <div className="cart-sumcont">
   {/* card 1 */}
   <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/art and culture.png" />
          </a>
          <h3 className="blue-text">Art and Culture</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">3,009.05 Cr</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata1(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            
            <button className="blue-btn">
              <Link className="link" to="/Art&culture">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 2 */}

        <div className="cart-box">
          <a href="/">
            {/* <i class="bx bx-home"></i>
             */}
            <img src="./ICONS/Agriculture.png" />
          </a>
          <h3>Agriculture And Farmer Welfare</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>1,15,489.37 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state " onChange={(e) => handledata2(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button className="blue-btn">
              <Link className="link" to="/Agriculture">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 3 */}

        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/education.png" />
          </a>
          <h3 className="blue-text">Education</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">1,04,278 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state blue-state" onChange={(e) => handledata3(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/education" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 4 */}
        <div className="cart-box">
          <a href="/">
            {/* <i class="bx bx-home"></i>
             */}
            <img src="./ICONS/Economy.png" />
          </a>
          <h3>Economy</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>6,000 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata4(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Economy" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card5  */}
        <div className="cart-box">
          <a href="/">
            {/* <i class="bx bx-home"></i>
             */}
            <img src="./ICONS/Health and family welfare.png" />
          </a>
          <h3>Health And Family Welfare</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>83,000 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata5(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Health" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 6 */}
        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/rural development.png" />
          </a>
          <h3 className="blue-text">Rural Development</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">20,154,000</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state blue-state" onChange={(e) => handledata6(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Rural" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card7 */}
        <div className="cart-box">
          <a href="/">
            {/* <i class="bx bx-home"></i>
             */}
            <img src="./ICONS/walking.png" />
          </a>
          <h3>Women And Child Development</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>20,105 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata7(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Women" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card8 */}
        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/Science and technology.png" />
          </a>
          <h3 className="blue-text">Science And Technology</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">6,002.2 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state blue-state" onChange={(e) => handledata8(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Science" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>
        {/* card9 */}
        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/water resources.png" />
          </a>
          <h3 className="blue-text">water Resources</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">19,047.00 Cr.</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata9(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Water" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card10 */}
        <div className="cart-box">
          <a href="/">
            {/* <i class="bx bx-home"></i>
             */}
            <img src="./ICONS/transport.png" />
          </a>
          <h3>Transport</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>20,154,000</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata10(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Transport" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card11 */}
        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/water AND sanitation.png" />
          </a>
          <h3 className="blue-text">Water And Sanitation</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">66,221 Cr.</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata11(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/WaterSanitaion" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card12 */}
        <div className="cart-box">
          <a href="/">
            <img src="./ICONS/enforcement.png" />
          </a>
          <h3>home Affair and Enforcement</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>7,620.40 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata12(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/HomeAffair" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 13 */}

        <div className="cart-box">
          <a href="/">
            <img src="./ICONS/Animal husbandry.png" />
          </a>
          <h3>Animal Husbandary</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>6576.62 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata1(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button className="blue-btn">
              <Link className="link" to="/Animal">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 14 */}

        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/housing and urban affairs.png" />
          </a>
          <h3 className="blue-text">Housing And Urban Affairs</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">76,718.47 Cr.</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata1(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/HousingUrban" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 15 */}

        <div className="cart-box">
          <a href="/">
            <img src="./ICONS/biotechnology.png" />
          </a>
          <h3>Biotechnology</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>14,217 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata1(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Bio" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 16 */}

        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/Youth and Sports.png" />
          </a>
          <h3 className="blue-text">Youth And Sports</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">2,673.35 Cr.</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata1(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Youth" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 17 */}

        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/food.png" />
          </a>
          <h3 className="blue-text">Food</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">2,941.99 Cr.</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata1(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Food" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 18 */}

        <div className="cart-box">
          <a href="/">
            <img src="./ICONS/finance.png" />
          </a>
          <h3>Finance</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>7,174.77 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata1(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Finance" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 19 */}

        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/governance and administration.png" />
          </a>
          <h3 className="blue-text">Governance and Adminstration</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">100 Cr.</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata1(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Governance" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 20 */}

        <div className="cart-box">
          <a href="/">
            <img src="./ICONS/flood control.png" />
          </a>
          <h3>Irrigation and Flood Controls</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>20,154,000</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata1(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Irrigation" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 21 */}

        <div className="cart-box">
          <a href="/">
            <img src="./ICONS/Police.png" />
          </a>
          <h3>Police</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>1,29,627.52</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata1(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Police" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 22 */}

        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/power and energy.png" />
          </a>
          <h3 className="blue-text">Power And Energy</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">32,343.89 Cr.</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata1(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Power" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 23 */}

        <div className="cart-box">
          <a href="/">
            <img src="./ICONS/parliament.png" />
          </a>
          <h3>Parliament of India</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>800 Cr. , 430 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata1(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Parliament" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 24 */}

        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/commerce.png" />
          </a>
          <h3 className="blue-text">Commerce</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">6,073.00 Cr.</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata1(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Commerce" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 25 */}

        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/labour.png" />
          </a>
          <h3 className="blue-text">Labour And Employment</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">13,221.73 Cr.</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata1(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Labour" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 26 */}

        <div className="cart-box">
          <a href="/">
            {/* <i class="bx bx-home"></i>
             */}
            <img src="./ICONS/defence.png" />
          </a>
          <h3>Defence</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>5,25,000 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata1(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Defence" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 27 */}

        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/industries.png" />
          </a>
          <h3 className="blue-text">industries</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">8,348.00 Cr.</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata1(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Industry" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 28 */}

        <div className="cart-box">
          <a href="/">
            <img src="./ICONS/information and communication.png" />
          </a>
          <h3>Information & communications</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>95,547.8 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata1(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button >Scheme</button>
          </div>
        </div>

        {/* card 29 */}

        <div className="cart-box">
          <a href="/">
            <img src="./ICONS/infrastructure.png" />
          </a>
          <h3>Infrastructure</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>1,70,000 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata1(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Infrastructure" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 30 */}

        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/environment and forest.png" />
          </a>
          <h3 className="blue-text">Environment And Forest</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">3,285.00 Cr.</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata1(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Environment" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 31 */}

        <div className="cart-box">
          <a href="/">
            <img src="./ICONS/statistics.png" />
          </a>
          <h3>Statistics</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>5,398.08 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata1(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Statistics" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 32 */}

        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/judiciary.png" />
          </a>
          <h3 className="blue-text">Law of Justice</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">3,593.48 Cr.</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata1(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/LawOfJustice" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 33 */}

        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/information and broadcasting.png" />
          </a>
          <h3 className="blue-text">Information And Broadcasting</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">3,980.77 Cr.</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata1(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/InformationAndBroadcasting" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 34 */}

        <div className="cart-box">
          <a href="/">
            <img src="./ICONS/Social Development.png" />
          </a>
          <h3>Social Development</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>20,154,000</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata1(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Social" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 35 */}

        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/mining.png" />
          </a>
          <h3 className="blue-text">Mining</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">1,566.82 Cr.</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata1(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Mining" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 36 */}

        <div className="cart-box">
          <a href="/">
            <img src="./ICONS/travel and tourism.png" />
          </a>
          <h3>Travel and Tourism</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>2,405.27 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata1(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Travel" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="cart-container view-less">
      {/* <p>Truncatd content goes here.</p> */}
      <h1>Our Sector</h1>
      
      <div className="cart-sumcont">
        {/* card 1 */}
        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/art and culture.png" />
          </a>
          <h3 className="blue-text">Art and Culture</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">3,009.05 Cr</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata1(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button className="blue-btn">
              <Link className="link" to="/Art&culture">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 2 */}

        <div className="cart-box">
          <a href="/">
            {/* <i class="bx bx-home"></i>
             */}
            <img src="./ICONS/Agriculture.png" />
          </a>
          <h3>Agriculture And Farmer Welfare</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>1,15,489.37 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata2(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button className="blue-btn">
              <Link className="link" to="/Agriculture">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 3 */}

        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/education.png" />
          </a>
          <h3 className="blue-text">Education</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">1,04,278 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state blue-state" onChange={(e) => handledata3(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/education" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 4 */}
        <div className="cart-box">
          <a href="/">
            {/* <i class="bx bx-home"></i>
             */}
            <img src="./ICONS/Economy.png" />
          </a>
          <h3>Economy</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>6,000 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata4(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Economy" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card5  */}
        <div className="cart-box">
          <a href="/">
            {/* <i class="bx bx-home"></i>
             */}
            <img src="./ICONS/Health and family welfare.png" />
          </a>
          <h3>Health And Family Welfare</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>83,000 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata5(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Health" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card 6 */}
        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/rural development.png" />
          </a>
          <h3 className="blue-text">Rural Development</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">20,154,000</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state blue-state" onChange={(e) => handledata6(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Rural" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card7 */}
        <div className="cart-box">
          <a href="/">
            {/* <i class="bx bx-home"></i>
             */}
            <img src="./ICONS/walking.png" />
          </a>
          <h3>Women And Child Development</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>20,105 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata7(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Women" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card8 */}
        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/Science and technology.png" />
          </a>
          <h3 className="blue-text">Science And Technology</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">6,002.2 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state blue-state" onChange={(e) => handledata8(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Science" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>
        {/* card9 */}
        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/water resources.png" />
          </a>
          <h3 className="blue-text">water Resources</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">19,047.00 Cr.</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata9(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Water" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card10 */}
        <div className="cart-box">
          <a href="/">
            {/* <i class="bx bx-home"></i>
             */}
            <img src="./ICONS/transport.png" />
          </a>
          <h3>Transport</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>20,154,000</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata10(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/Transport" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card11 */}
        <div className="cart-box blue">
          <a href="/">
            {/* <i class="bx bx-home"></i> */}
            <img src="./ICONS/water AND sanitation.png" />
          </a>
          <h3 className="blue-text">Water And Sanitation</h3>
          <div className="budg-box">
            <h3 className="blue-budg">Budgut</h3>
            <h2 className="blue-no">66,221 Cr.</h2>
          </div>
          <div className="form-box blue-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select
                className="form-state blue-state"
                onChange={(e) => handledata11(e)}
              >
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/WaterSanitaion" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>

        {/* card12 */}
        <div className="cart-box">
          <a href="/">
            <img src="./ICONS/enforcement.png" />
          </a>
          <h3>home Affair and Enforcement</h3>
          <div className="budg-box">
            <h3>Budgut</h3>
            <h2>7,620.40 Cr.</h2>
          </div>
          <div className="form-box">
            <div className="form-state-box">
            <h5>Select For Budget</h5>
              <select className="form-state" onChange={(e) => handledata12(e)}>
                <option value="" disabled selected hidden>
                  Select state
                </option>
                {SectorData.map((item) => {
                  return (
                    <option value={item.state_id}>{item.state_name}</option>
                  );
                })}
              </select>
            </div>
            <button>
              <Link to="/HomeAffair" className="link">
                Scheme
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="card">
      {content}

      <div className="cart-btn">
        <button onClick={toggleExpansion}>
          {isExpanded ? "View Less" : "View More"}
        </button>
      </div>
      <div>
        {showmodel1 && (
          <Artculture
            setShowmodel1={setShowmodel1}
            stateid={stateid}
            district={district}
            tehsil={tehsil}
            districtid={districtid}
            tehsilid={tehsilid}
            handledistrict={handledistrict}
            handletehsil={handletehsil}
            popuptext={popuptext}
            setVillagetable={props.setVillagetable}
            setParticulardistrict={props.setParticulardistrict}
          />
        )}
        {showmodel2 && (
          <Agriculturepopup
            setShowmodel2={setShowmodel2}
            district={district}
            tehsil={tehsil}
            districtid={districtid}
            tehsilid={tehsilid}
            handledistrict={handledistrict}
            handletehsil={handletehsil}
            popuptext={popuptext}
            setVillagetable={props.setVillagetable}
            setParticulardistrict={props.setParticulardistrict}
          />
        )}
        {showmodel3 && (
          <Educationpopup
            setShowmodel3={setShowmodel3}
            district={district}
            tehsil={tehsil}
            districtid={districtid}
            tehsilid={tehsilid}
            handledistrict={handledistrict}
            handletehsil={handletehsil}
            popuptext={popuptext}
            setVillagetable={props.setVillagetable}
            setParticulardistrict={props.setParticulardistrict}
          />
        )}
        {/* {showmodel4 && (
          <Economicpopup
            setShowmodel4={setShowmodel4}
            district={district}
            tehsil={tehsil}
            districtid={districtid}
            tehsilid={tehsilid}
            handledistrict={handledistrict}
            handletehsil={handletehsil}
            popuptext={popuptext}
            setVillagetable={props.setVillagetable}
            setParticulardistrict={props.setParticulardistrict}
          />
        )}
        {showmodel5 && (
          <Healthpopup
            setShowmodel5={setShowmodel5}
            district={district}
            tehsil={tehsil}
            districtid={districtid}
            tehsilid={tehsilid}
            handledistrict={handledistrict}
            handletehsil={handletehsil}
            popuptext={popuptext}
            setVillagetable={props.setVillagetable}
            setParticulardistrict={props.setParticulardistrict}
          />
        )}
        {showmodel6 && (
          <Homeaffairpopup
            setShowmodel6={setShowmodel6}
            district={district}
            tehsil={tehsil}
            districtid={districtid}
            tehsilid={tehsilid}
            handledistrict={handledistrict}
            handletehsil={handletehsil}
            popuptext={popuptext}
            setVillagetable={props.setVillagetable}
            setParticulardistrict={props.setParticulardistrict}
          />
        )}
        {showmodel7 && (
          <Ruralpopup
            setShowmodel7={setShowmodel7}
            district={district}
            tehsil={tehsil}
            districtid={districtid}
            tehsilid={tehsilid}
            handledistrict={handledistrict}
            handletehsil={handletehsil}
            popuptext={popuptext}
            setVillagetable={props.setVillagetable}
            setParticulardistrict={props.setParticulardistrict}
          />
        )}
        {showmodel8 && (
          <Sciencepopup
            setShowmodel8={setShowmodel8}
            district={district}
            tehsil={tehsil}
            districtid={districtid}
            tehsilid={tehsilid}
            handledistrict={handledistrict}
            handletehsil={handletehsil}
            popuptext={popuptext}
            setVillagetable={props.setVillagetable}
            setParticulardistrict={props.setParticulardistrict}
          />
        )}
        {showmodel9 && (
          <Transportpopup
            setShowmodel9={setShowmodel9}
            district={district}
            tehsil={tehsil}
            districtid={districtid}
            tehsilid={tehsilid}
            handledistrict={handledistrict}
            handletehsil={handletehsil}
            popuptext={popuptext}
            setVillagetable={props.setVillagetable}
            setParticulardistrict={props.setParticulardistrict}
          />
        )}
        {showmodel10 && (
          <Waterresourcepopup
            setShowmodel10={setShowmodel10}
            district={district}
            tehsil={tehsil}
            districtid={districtid}
            tehsilid={tehsilid}
            handledistrict={handledistrict}
            handletehsil={handletehsil}
            popuptext={popuptext}
            setVillagetable={props.setVillagetable}
            setParticulardistrict={props.setParticulardistrict}
          />
        )}
        {showmodel11 && (
          <Watersanitationpopup
            setShowmodel11={setShowmodel11}
            district={district}
            tehsil={tehsil}
            districtid={districtid}
            tehsilid={tehsilid}
            handledistrict={handledistrict}
            handletehsil={handletehsil}
            popuptext={popuptext}
            setVillagetable={props.setVillagetable}
            setParticulardistrict={props.setParticulardistrict}
          />
        )}
        {showmodel12 && (
          <Womenpopup
            setShowmodel12={setShowmodel12}
            district={district}
            tehsil={tehsil}
            districtid={districtid}
            tehsilid={tehsilid}
            handledistrict={handledistrict}
            handletehsil={handletehsil}
            popuptext={popuptext}
            setVillagetable={props.setVillagetable}
            setParticulardistrict={props.setParticulardistrict}
          />
        )} */}
      </div>
    </div>
  );
};

export default ViewLess;
