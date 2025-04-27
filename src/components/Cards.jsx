import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({ backTitle, backInfo, imgSource }) => {
  const [isHovered, setIsHovered] = useState(false);

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
          style={{ backgroundImage: `url(${imgSource})` }}
        ></div>
        <div className="back">
          <div className="inner">
            <h1>{backTitle}</h1>
            <p>{backInfo}</p>
						<Link className="card-button">
							Reserve
						</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
