import React, {useEffect, useRef} from "react";
import Banner from "../assets/Images/Banner.png";
import Logo from "../assets/Images/logo.png";
import VideoBanner from "../components/VideoBanner";

import BrandMenu from "../components/BrandMenu";
import Footer from "../components/Footer";
import "./Home.css";


import Model from "../components/Model";
function Home() {
  // const resize = () =>{
  //   return window.innerHeight;
  // }

  const heightSize = useRef(window.innerHeight);
  
  useEffect(() => {
    window.addEventListener("resize", ()=> {
      console.log(window.innerHeight);
      heightSize.current = window.innerHeight;
    });

  }, []);
  return (
    <div className="home-container">
      
      <div className="home-banner" style={{height: `${heightSize.current}px`}}>
        <div className="home-banner-3d">
          <Model />
        </div>
        <div className="home-banner-text">
          <h1>Your Ride Starts Here.</h1>
        </div>
      </div>
      {/* <div
        className="banner-image"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="banner-logo">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="home-text">
        <h1>Welcome to our Bike Store</h1>
        <p>We sell high grade bikes for you.</p>
      </div> */}
      <BrandMenu />
      <VideoBanner />
      <p></p>
      <Footer />
    </div>
  );
}

export default Home;
