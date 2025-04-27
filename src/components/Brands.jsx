
// Trek
import trek_Img1 from "../assets/Images/Trek-Caliber9-1.webp";
import trek_Img2 from "../assets/Images/Trek-Madone-2.webp";
import trek_Img3 from '../assets/Images/Trek-Marlin-7.jpg';

import trek_Carousel_Img1 from "../assets/Images/Trek/Trek-Madone-SL6-Gen8.png";
import trek_Carousel_Img2 from "../assets/Images/Trek/Trek-Marlin-6-G3.png";
import trek_Carousel_Img3 from "../assets/Images/Trek/Trek-Supercaliber-9-9-gen1.png";

import TrekVideo from "../assets/Images/Trek/Trek-Video.mp4";
import TrekSvg from '../assets/Svg/Trek-Bicycle.svg'

// Giant
import giant_Carousel_Img1 from "../assets/Images/Giant/Giant-Anthem-Adv.png";
import giant_Carousel_Img2 from "../assets/Images/Giant/Giant-Propel-Adv-SL.png";
import giant_Carousel_Img3 from "../assets/Images/Giant/Giant-Glory-2-2017.png";
import GiantVideo from "../assets/Images/Giant/Giant-Video.mp4";
import GiantSvg from '../assets/Svg/Giant_Bicycles-Logo.wine (1).svg'

// Specialized
import S_Works_Svg from '../assets/Svg/S_work_Logo.svg'
import s_work_Carousel_Img1 from '../assets/Images/S_works/S-Work-Stumpjumper.png';
import s_work_Carousel_Img2 from '../assets/Images/S_works/S-Work-Epic.png';
import s_work_Carousel_Img3 from '../assets/Images/S_works/S-Work-Tarmac-SL8.png';

// Canondale
import CannondaleSvg from '../assets/Svg/Cannondale_Bicycle_Corporation-Logo.wine.svg'
import canondale_Carousel_Img1 from '../assets/Images/Canondale/C-Habit-4.png';
import canondale_Carousel_Img2 from '../assets/Images/Canondale/C-Scalpel-1-Lefty.png';
import canondale_Carousel_img3 from '../assets/Images/Canondale/C-Super-Six-EVO-LAB71-Team.png';

const Products =  {
  Trek: {
    BrandTitle: "Trek",
    BrandLogo:TrekSvg,
    carouselImages: [trek_Carousel_Img1, trek_Carousel_Img2, trek_Carousel_Img3],
    products: [
      { name: "Trek Caliber", info: "Lorem ipsim dolor, sit amet", image: trek_Img1 },
      { name: "Trek Madone", info: "Lorem ipsim dolor, sit amet", image: trek_Img2 },
      { name: "Trek Marlin", info: "Lorem ipsim dolor, sit amet", image: trek_Img3 },
    ],
    video: TrekVideo,
  }, 
  Giant: {
    BrandTitle: "Giant",
    BrandLogo: GiantSvg,
    carouselImages: [giant_Carousel_Img1, giant_Carousel_Img2, giant_Carousel_Img3], 
    products: [
      { name: "Giant Anthem Adv", info: "Lorem ipsim dolor, sit amet", image:  giant_Carousel_Img1 },
      { name: "Giant Propel Adv SL", info: "Lorem ipsim dolor, sit amet", image: giant_Carousel_Img2 },
      { name: "Giant Propel Adv SL", info: "Lorem ipsim dolor, sit amet", image: giant_Carousel_Img3 }
    ],
    video: GiantVideo,
  },
  Canondale : {
    BrandTitle: "Canondale",
    BrandLogo: CannondaleSvg,
    carouselImages: [canondale_Carousel_Img1, canondale_Carousel_Img2, canondale_Carousel_img3], 
    products: [
      { name: "Canondale Scalpel", info: "Lorem ipsim dolor, sit amet", image: canondale_Carousel_Img1 },
      { name: "Canondale Scalpel", info: "Lorem ipsim dolor, sit amet", image: canondale_Carousel_Img2 },
      { name: "Canondale Scalpel", info: "Lorem ipsim dolor, sit amet", image: canondale_Carousel_img3 }
    ],
    video: GiantVideo,
  },
  Specialized : {
    BrandTitle: "Specialized",
    BrandLogo: S_Works_Svg,
    carouselImages: [s_work_Carousel_Img1, s_work_Carousel_Img2, s_work_Carousel_Img3], 
    products: [
      { name: "Specialized Turbo", info: "Lorem ipsim dolor, sit amet", image:  s_work_Carousel_Img1},
      { name: "Specialized Stumpjumper", info: "Lorem ipsim dolor, sit amet", image: giant_Carousel_Img2 },
      { name: "Specialized Stumpjumper", info: "Lorem ipsim dolor, sit amet", image: giant_Carousel_Img3 }
    ],
    video: GiantVideo,
  }
}

export default Products
