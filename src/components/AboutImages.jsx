import { Parallax } from "react-parallax";
import React from "react";
import "./AboutComponents.css";
import SliderLogo from "./SliderLogo";
import Logo from "../assets/Images/Logo.png"

//
import bg1 from "../assets/images/about-bg1.jpg";
import bg2 from "../assets/Images/about-bg2.jpg";
import bg3 from "../assets/Images/about-bg3.jpg";
//

const AboutImages = () => {
  return (
    <div>
      <Parallax
        className="image"
        bgImage={bg1}
        strength={700}
        bgImageStyle={{ objectFit: "cover" }}
        renderLayer={(percentage) => (
          <div style={{ background: `rgba(255, 125, 0, ${percentage * 1})` }} />
        )}
      >
        <div className="content">
          <h1 className={"img-txt"}>about us</h1>
        </div>
      </Parallax>

      <div className="about-info">
        <div className="about-info-image">
          <img src={Logo} alt="" />
        </div>
        <div className="about-text">
          <p>
            Davao Bike Shop was founded in 2000. Our mission is to provide
            high-quality bikes, reliable service, and a welcoming atmosphere for
            cyclists of all levels.
          </p>
          <p>
            We believe in the power of cycling to improve lives and build
            community, and we strive to be your trusted partner on your cycling
            journey.
          </p>
        </div>
      </div>

      <Parallax
        className="image"
        bgImage={bg2}
        strength={700}
        bgImageStyle={{ objectFit: "cover" }}
        renderLayer={(percentage) => (
          <div style={{ background: `rgba(255, 125, 0, ${percentage * 1})` }} />
        )}
      ></Parallax>
      <div className="logo-slider-holder">
        <h2>Powering Your Ride:</h2>
        <SliderLogo />
      </div>
      <Parallax
        className="image"
        bgImage={bg3}
        strength={700}
        bgImageStyle={{ objectFit: "cover" }}
        renderLayer={(percentage) => (
          <div style={{ background: `rgba(255, 125, 0, ${percentage * 1})` }} />
        )}
      ></Parallax>
    </div>
  );
};

export default AboutImages;
