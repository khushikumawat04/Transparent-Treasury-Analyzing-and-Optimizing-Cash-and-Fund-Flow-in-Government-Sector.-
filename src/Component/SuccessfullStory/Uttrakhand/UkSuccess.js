import React,{useState} from "react";
import "./UkSuccess.css";
import './UttrakhandData.css';
import UttrakhandData from "./UttrakhandData";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from "react-router-dom";

const UkSuccess = () => {
  const itemPerPage = 1;
  const totalPages = Math.ceil(UttrakhandData.length / itemPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = UttrakhandData.slice(indexOfFirstItem, indexOfLastItem);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <div className="tehsil-title-container">
        <Link to="/successfull"><span><AiOutlineArrowLeft /></span></Link> 
    </div>
      <div className="body01">
        <div className="container-01">
		     


          {currentItems.map((item) => (<>
            <h2>{item.title}</h2>
            <div className="neumorphic-card">
              <div className="imgBox">
                <i className="fa fa-pencil-ruler"></i>
              </div>
              <div className="contentBox">
                <h3 style={{ color: "#2dcd7c" }}>
                  {item.heading}
                </h3>
                <p>{item.content1}</p>
                  <div>
                    <img className="Prize" src={item.image} />
                  </div>
                  <p>{item.content2}</p>
                  <div>
                    <img className="Prize" src={item.image1} />
                  </div>
                  <p>{item.content3}</p>
              </div>
            </div>
            </>
          ))}
        

      <div className="pagination-container">
        <button
          className="pagination-button"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className="pagination-button"
            onClick={() => goToPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="pagination-button"
          onClick={goToNextPage}
          disabled={indexOfLastItem >= UttrakhandData.length}
        >
          Next
        </button>
      </div>
    </div>
	</div>
  </>
  );
};

export default UkSuccess;
