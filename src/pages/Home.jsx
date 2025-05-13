import React from "react";
import Hero from "../components/Hero";
import VideoBanner from "../components/VideoBanner";
import BrandMenu from "../components/BrandMenu";
import Footer from "../components/Footer";
import "./Home.css";
import WhyChooseUs from '../components/WhyChooseUs'

function Home() {
 
  return (
    <div className="home-container">
      <Hero />
      <WhyChooseUs/>
      <BrandMenu />
      <VideoBanner />
      <p></p>
      <Footer />
    </div>
  );
}

export default Home;
