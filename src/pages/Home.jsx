import React from "react";
import Banner from "../assets/Images/Banner.png";
import Logo from "../assets/Images/logo.png";
import VideoBanner from "../components/VideoBanner";

import BrandMenu from "../components/BrandMenu";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div
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
      </div>
      <BrandMenu />
      <VideoBanner />
      <p></p>
      <Footer />
    </div>
  );
}

export default Home;
