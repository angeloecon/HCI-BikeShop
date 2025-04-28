import React, { useState } from "react";
import ItemModal from '../components/Item'
import "./Cards.css";

const Cards = ({ backTitle, backInfo, imgSource, dataHolder}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleChick = () => { 
    dataHolder({ Pname: backTitle,Pinfo: backInfo, Pimage: imgSource });
  }

  const handleToggleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div
      className="col"
      onTouchStart={handleToggleHover}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`container ${isHovered ? "hover" : ""}`}>
        <div
          className="front"
          style={{ backgroundImage: `url(${imgSource})`, backgroundColor: "white" }}
        ></div>
        <div className="back">
          <div className="inner">
            <h1>{backTitle}</h1>
            <p>{backInfo}</p>
						<button className="card-button" onClick={() => handleChick()}>
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
