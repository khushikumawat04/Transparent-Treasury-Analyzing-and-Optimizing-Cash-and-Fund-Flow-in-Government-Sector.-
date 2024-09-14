import React, { useState } from "react";
import Graph from "./Graph"; // Assuming you have a separate component for the graph
import "./graph.css";

const GraphForm = () => {
  const [activeButton, setActiveButton] = useState(null);

  // Button click handler
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <>
      <div className="deta-container">
        <div className="data-box">
          <div className="data-buttons">
            {/* Buttons */}
            <button id="data-btn" onClick={() => handleButtonClick(1)}>
              National Dept
            </button>
            <button id="data-btn" onClick={() => handleButtonClick(2)}>
              Tax Revenue
            </button>
            <button id="data-btn" onClick={() => handleButtonClick(3)}>
              GDP
            </button>
            <button id="data-btn" onClick={() => handleButtonClick(4)}>
              Total Population
            </button>

            {/* Add more buttons as needed */}
          </div>

          {/* Render the graph based on the active button */}
          {activeButton ? (
            <Graph buttonId={activeButton} />
          ) : (
            <div>{<Graph />}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default GraphForm;
