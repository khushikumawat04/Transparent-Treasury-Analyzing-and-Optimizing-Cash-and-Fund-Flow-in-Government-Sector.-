import React, { useState } from "react";
import "./jobexams.css";
import { AiFillBank } from "react-icons/ai";
//import {AiOutlineDoubleLeft} from 'react-icons/ai'
//import {AiOutlineDoubleRight} from 'react-icons/ai'
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "./jobExamsData";
import Slider from "react-slick";
import Police from "./JobImage/police.png";
import Officer from "./JobImage/officer.png";
import Defence from "./JobImage/police-badge.png";
import Bank from "./JobImage/balance.png";
import Teacher from "./JobImage/teacher.png";
import Railway from "./JobImage/train .png";
import Psu from "./JobImage/test .png";
import Ssc from "./JobImage/businesswoman.png";
import { Link } from "react-router-dom";

const JobExams = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,

    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 485,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      // linkDefault: imgGirl,
    }));
  };
  return (
    <>
      {/* code for page first title section  */}
      <div className="jobexam-container">
        <div className="jobexam-box">
          <h1>
            goverment exams
            <hr />
          </h1>
          <p>
          Government exams, also known as competitive exams or civil service exams, are examinations conducted by the government to recruit candidates for various positions in the public sector. These exams are designed to assess the knowledge, skills, aptitude, and suitability of candidates for specific government job roles.

Government exams can be conducted at the national, state, or local level, depending on the jurisdiction. They cover a wide range of fields and sectors, including administrative services, engineering, banking, defense services, teaching, healthcare, and more.
          </p>
        </div>
      </div>

      {/* code for page our slider section*/}
      <div className="page-slider-container">
        <div className="psc-card2">
          <div className="psc-head">
            <h1>
              upcoming exams
              <hr />
            </h1>
          </div>
          <Slider {...settings}>
            {dataDigitalBestSeller.map((item) => (
              <div className="psc-cards">
                <div className="psc-cards-sub">
                {/* <i className="psc-cards-icon2">{item.icon}</i> */}
                <img className="psc-cards-icon2" src={item.image} />
                <h1>{item.head}</h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="page-slider-container">
        <div className="psc-head">
          <h1>
            Explore sector's <hr />
          </h1>
        </div>
        {/* code for page slider section cards */}
        <div className="psc-slider-cards2">
          <div className="psc-cards2-box">
            <div className="psc-cards2-card">
              <i className="psc-cards-icon">
                <img src={Police} />
              </i>
              <h1>UPSC Exams</h1>
            </div>

            <Link to="/spe"><div className="psc-cards2-card">
              <i className="psc-cards-icon">
                <img src={Officer} />
              </i>
              <h1>Sate pSC Exams</h1>
            </div></Link>

            <Link to="/defenceexam"><div className="psc-cards2-card">
              <i className="psc-cards-icon">
                <img src={Defence} />
              </i>
              <h1>Defence Exams</h1>
            </div></Link>

            <Link to="/bankexam"><div className="psc-cards2-card">
              <i className="psc-cards-icon">
                <img src={Bank} />
              </i>
              <h1>Bank Exams</h1>
            </div></Link>

            <Link to="/teachingexam"><div className="psc-cards2-card">
              <i className="psc-cards-icon">
                <img src={Teacher} />
              </i>
              <h1>Teachimg Exams</h1>
            </div></Link>

            <Link to="/railwayexam"><div className="psc-cards2-card">
              <i className="psc-cards-icon">
                <img src={Railway} />
              </i>
              <h1>Railway Exams</h1>
            </div></Link>

            <Link to="/psuexam"><div className="psc-cards2-card">
              <i className="psc-cards-icon">
                <img src={Psu} />
              </i>
              <h1>PSU Exams</h1>
            </div></Link>

            <Link to="/sscexam"><div className="psc-cards2-card">
              <i className="psc-cards-icon">
                <img src={Ssc} />
              </i>
              <h1>SSC Exams</h1>
            </div></Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default JobExams;
