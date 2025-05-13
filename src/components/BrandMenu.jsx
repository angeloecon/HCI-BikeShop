import React, {useEffect, useRef} from "react";
import {Link} from 'react-scroll'
import TrekSVG from "../assets/Svg/Trek-Bicycle.svg";
import GiantSVG from "../assets/Svg/Giant_Bicycles-Logo.wine (1).svg";
import CannondaleSVG from "../assets/Svg/Cannondale_Bicycle_Corporation-Logo.wine.svg";
import SpecializedSVG from "../assets/Svg/S_work_Logo.svg";
import "./BrandMenu.css";
const brands = [[TrekSVG,"trek"], [GiantSVG,"giant"], [CannondaleSVG, "canondale"], [SpecializedSVG,"specialized"]];

const BrandMenu = () => {
  const line = useRef([]);
  const images = useRef([]);
  const viewport = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          if(line.current){
            line.current.forEach((element) => {
              element.classList.add("start");
            })
          } else {
            line.current.forEach((element) => {
              element.classList.remove("start");
            })
          }
        }
      })
    },
  {
        root: null,
        threshold: 1,
      })
    if (viewport.current) {
      observer.observe(viewport.current);
    }
  },[])
 

  return (
    <div className="brand-menu-container">
      <h2>Featured Brands</h2>
      <div className="brand-menu" ref={viewport}>
      <span ref={(el) => (line.current[0] = el)} className="span-one"></span>
      {brands.map((element, index) => {
        return (
          <div key={index} ref={(el) => (images.current[index]=el)} className="brand-card">
            <Link to={element[1]} smooth={true} duration={100} offset={-50}>
              <img className="brand-image-menu"  src={element[0]} alt="" />
            </Link>
          </div>
        );
      })}
      <span ref={(el) => (line.current[1] = el)} className="span-two"></span>
    </div>
    </div>
  );
};

export default BrandMenu;
