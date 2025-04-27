import React from "react";
import Slider from "react-infinite-logo-slider";

// Brand logo ni
import Canondale from "../assets/Svg/Cannondale_Bicycle_Corporation-Logo.wine.svg";
import Giant from "../assets/Svg/Giant_Bicycles-Logo.wine (1).svg";
import Sworks from "../assets/Svg/S_work_Logo.svg";
import Trek from "../assets/Svg/Trek-Bicycle.svg";
import Campanolo from "../assets/Svg/campagnolo.svg";
import Suntour from "../assets/Svg/sr-suntour-logo.svg";
import Maxxis from "../assets/Svg/maxxis.svg";
import Oakley from "../assets/Svg/oakley-4.svg";
import Rockshox from "../assets/Svg/rockshox.svg";
import Fox from "../assets/Svg/fox.svg";
import Sram from "../assets/Svg/sram.svg";
import Shimano from "../assets/Svg/shimano-1.svg";

const SliderLogo = () => {
  const logos = [
    Canondale,
    Giant,
    Sworks,
    Trek,
    Campanolo,
    Suntour,
    Maxxis,
    Oakley,
    Rockshox,
    Fox,
    Sram,
    Shimano,
  ];
  return (
    <div>
      <Slider
        duration={40}
        toRight={false}
        blurBorders={true}
        blurBorderColor={"#fff"}
      >
        {logos.map((element, index) => {
          return (
            <Slider.Slide>
              <img src={element} style={{ width: "200px", height: "150px" }} />
            </Slider.Slide>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderLogo;
