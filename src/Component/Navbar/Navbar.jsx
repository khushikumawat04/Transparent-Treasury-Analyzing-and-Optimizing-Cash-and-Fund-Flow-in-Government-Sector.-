import React from "react";
import "./nav.css";
import Datetime from "./Datetime";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* website title section start  */}
      <div className="title">
        <span>
          <i class="bx bx-envelope"></i>
        </span>
        <Datetime />
        <div id="google_element" className="translator"></div>
      </div>
      {/* website title section end  */}

      {/* website logo sections start  */}


      <div className="main-banner-container">

      <div className="logo-container">
        <div className="logo-sub-box">
          <Link to="/"><span className="logo">Gov.in</span></Link>
          {/* <span className="logo">Gov.in</span> */}
          <img src="./img/logo copy.png" height="70px" width="70px" />
        </div>

        <nav className="nav-container">
          <ul id="menu">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li>
              {" "}
              <Link to="/sector">Department</Link>
            </li>
            <li>
              {" "}
              <Link to="/job">Jobs</Link>
            </li>
            <li>
              {" "}
              <Link to="/successfull">Achievement</Link>
            </li>
            <li>
              {" "}
              <Link to="/vaccancy" className="tubelight-animation">Exams</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="small-nav-container">
          <ul className="small-nav">
            <li>
              <Link to="/">
                <i class="bx bx-home-smile"></i>
              </Link>
            </li>

            <li>
              <Link to="/about">
                <i class="bx bx-book"></i>
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <i class="bx bxs-user"></i>
              </Link>
            </li>

            <li>
              <Link to="/sector">
                <i class="bx bx-donate-heart"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-icons">
          <button className="loginbtn">
            {/* {" "} */}
            <Link to="/login" className="">
              Login
            </Link>
          </button>
        </div>
      </div>

      
      </div>

      {/* website logo sections ens  */}

      {/* Category */}
      {/* Area */}
      {/* profession */}
    </>
  );
};

export default Navbar;
