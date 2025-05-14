import React, { useState } from "react";
import ItemModal from '../components/Item'
import "./Cards.css";

const Cards = ({  dataHolder, product}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleChick = () => { 
    dataHolder(product);
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
          style={{ backgroundImage: `url(${product.image})`, backgroundColor: "white" }}
        ></div>
        <div className="back">
          <div className="inner">
            <h1>{product.name}</h1>
            
						<button className="card-button" onClick={() => handleChick()}>
              See details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;