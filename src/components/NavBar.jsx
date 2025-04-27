import React, {useEffect, useState} from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Images/Logo.png";
import {animateScroll as scroll} from "react-scroll";
import "./NavBar.css";
import { set } from "react-hook-form";


const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);



const NavBar = () =>{
  
  const location = useLocation();
  console.log("Current loc "+location.pathname);


  const scrollToTop = () => {
    scroll.scrollToTop({
      duration:100,
      smooth: true,
    })
  }

  const isHome = () => {
    if(location.pathname === "/"){
      scrollToTop();
    } 
  }

  const [showNavbar, setShowNav] = useState(false);
  const handleShowNavbar = () => {
    setShowNav(!showNavbar);
  };

  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={Logo} alt="" style={{ width: "115px" }} />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={isHome}>Home</NavLink>
            </li>

            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
