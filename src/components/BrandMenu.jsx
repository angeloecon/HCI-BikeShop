import React from "react";
import {Link} from 'react-scroll'
import TrekSVG from "../assets/Svg/Trek-Bicycle.svg";
import GiantSVG from "../assets/Svg/Giant_Bicycles-Logo.wine (1).svg";
import CannondaleSVG from "../assets/Svg/Cannondale_Bicycle_Corporation-Logo.wine.svg";
import SpecializedSVG from "../assets/Svg/S_work_Logo.svg";
import "./BrandMenu.css";
const brands = [[TrekSVG,"trek"], [GiantSVG,"giant"], [CannondaleSVG, "canondale"], [SpecializedSVG,"specialized"]];

const BrandMenu = () => {
  return (
    <div className="brand-menu-container">
      <span className="span-one"></span>
      {brands.map((element, index) => {
        return (
          <div key={index} className="brand-card">
            <Link to={element[1]} smooth={true} duration={100} offset={-50}>
            {/* {console.log(element[1])} */}
              <img className="brand-image-menu"  src={element[0]} alt="" />
            </Link>
          </div>
        );
      })}
      <span className="span-two"></span>
    </div>
  );
};

export default BrandMenu;
