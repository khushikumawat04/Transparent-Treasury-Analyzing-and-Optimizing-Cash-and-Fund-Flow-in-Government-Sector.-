import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SuccessfullStory.css';
import { dataDigitalBestSeller } from './SuccessfullStoryData';
import { Link } from 'react-router-dom';
// import imgGirl from './assets/images/defaultImage.jpg';

function SuccessfullStory() {
  // const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="App01">
        
        <h1> State Successness</h1>
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
            
          <div className="successfullstory">
            <div className="sfs-box">
            <div className="card-top01">
               <img src={item.icon} alt=""/>
            </div>
            <div className="card-bottom01">
             <p className="category01">{item.head}</p>
            </div>
            <button className='successstory-btn' >{item.button}</button>
          </div>
          </div>
         
        ))}
      </Slider>
      
     </div>
     
      
   
      
    
  );
}

export default SuccessfullStory;