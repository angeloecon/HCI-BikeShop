// Trek
import trek_Img1 from "../assets/Images/Trek-Caliber9-1.webp";
import trek_Img2 from "../assets/Images/Trek-Madone-2.webp";
import trek_Img3 from "../assets/Images/Trek-Marlin-7.jpg";

import trek_Carousel_Img1 from "../assets/Images/Trek/Trek-Madone-SL6-Gen8.png";
import trek_Carousel_Img2 from "../assets/Images/Trek/Trek-Marlin-6-G3.png";
import trek_Carousel_Img3 from "../assets/Images/Trek/Trek-Supercaliber-9-9-gen1.png";

import TrekVideo from "../assets/Images/Trek/Trek-Video.mp4";
import TrekSvg from "../assets/Svg/Trek-Bicycle.svg";

// Giant
import giant_Carousel_Img1 from "../assets/Images/Giant/Giant-Anthem-Adv.png";
import giant_Carousel_Img2 from "../assets/Images/Giant/Giant-Propel-Adv-SL.png";
import giant_Carousel_Img3 from "../assets/Images/Giant/Giant-Glory-2-2017.png";
import GiantVideo from "../assets/Images/Giant/Giant-Video.mp4";
import GiantSvg from "../assets/Svg/Giant_Bicycles-Logo.wine (1).svg";

// Specialized
import S_Works_Svg from "../assets/Svg/S_work_Logo.svg";
import s_work_Carousel_Img1 from "../assets/Images/S_works/S-Work-Stumpjumper.png";
import s_work_Carousel_Img2 from "../assets/Images/S_works/S-Work-Epic.png";
import s_work_Carousel_Img3 from "../assets/Images/S_works/S-Work-Tarmac-SL8.png";
import SworksVideo from "../assets/Images/S_works/S-works-Video.mp4";

// Canondale
import CannondaleSvg from "../assets/Svg/Cannondale_Bicycle_Corporation-Logo.wine.svg";
import canondale_Carousel_Img1 from "../assets/Images/Canondale/C-Habit-4.png";
import canondale_Carousel_Img2 from "../assets/Images/Canondale/C-Scalpel-1-Lefty.png";
import canondale_Carousel_img3 from "../assets/Images/Canondale/C-Super-Six-EVO-LAB71-Team.png";
import CanondaleVideo from "../assets/Images/Canondale/Canondale-Video.mp4";

const Products = {
  Trek: {
    BrandTitle: "Trek",
    BrandLogo: TrekSvg,
    carouselImages: [
      trek_Carousel_Img1,
      trek_Carousel_Img2,
      trek_Carousel_Img3,
    ],
    products: [
      {
        name: "Trek Madone",
        info: "Lorem ipsim dolor, sit amet",
        image: trek_Carousel_Img1,
        price: "99,990.00",
        info: "A road bike known for its combination of speed and comfort. It features a 200 Series Alpha Aluminum frame with KVF (Kammtail Virtual Foil) tube shape, providing aerodynamic efficiency.",
      },
      // name: "", info: "", image: "", price: "",
      {
        name: "Trek Marlin 7",
        info: "Lorem ipsim dolor, sit amet",
        image: trek_Carousel_Img2,
        price: "39,990",
        info:"Is where race-ready mountain biking starts, with a lightweight RockShox fork and upgraded parts—perfect for new riders seeking a fast XC hardtail that competes with higher-end models."
      },
      {
        name: "Trek Supercaliber 9.9 Gen 1",
        info: "Lorem ipsim dolor, sit amet",
        image: trek_Carousel_Img3,
        price: "636,676.63",
        info: "The X-Caliber 9 is the top model in the X-Caliber series—a race-ready cross country bike with a RockShox Recon fork, 1x12 Shimano XT/SLX drivetrain, and wide-range cassette, perfect for fast singletrack riders."
      },
    ],
    video: TrekVideo,
  },
  Giant: {
    BrandTitle: "Giant",
    BrandLogo: GiantSvg,
    carouselImages: [
      giant_Carousel_Img1,
      giant_Carousel_Img2,
      giant_Carousel_Img3,
    ],
    products: [
      {
        name: "Giant Anthem Adv",
        info: "Lorem ipsim dolor, sit amet",
        image: giant_Carousel_Img1,
        price: "431,870.40",
        info: "Built for modern XC racing, this full-composite bike climbs and descends with speed and control, thanks to FlexPoint Pro suspension and race-ready geometry.",
      },
      {
        name: "Giant Propel Adv SL",
        info: "Lorem ipsim dolor, sit amet",
        image: giant_Carousel_Img2,
        price: "404,525.36",
        info: "AeroSystem Shaping, a result of CFD analysis and dynamic wind-tunnel testing, optimizes aerodynamic performance at every yaw angle. The truncated ellipse airfoil tube shapes and Contact SLR Aero cockpit produce outstanding overall aero performance.",
      },
      {
        name: "Giant Glory 2 2017",
        info: "Lorem ipsim dolor, sit amet",
        image: giant_Carousel_Img3,
        price: "251,924.40",
        info: "With 200mm of Maestro travel, a 203mm fork, and three flip chips for full adjustability, this DH bike delivers pro-level control and a customizable ride—plus a mullet setup with the option for full 29-inch wheels.",
      },
    ],
    video: GiantVideo,
  },
  Canondale: {
    BrandTitle: "Canondale",
    BrandLogo: CannondaleSvg,
    carouselImages: [
      canondale_Carousel_Img1,
      canondale_Carousel_Img2,
      canondale_Carousel_img3,
    ],
    products: [
      {
        name: "Canondale Habit",
        info: "Lorem ipsim dolor, sit amet",
        image: canondale_Carousel_Img1,
        price: "110,962.34",
        info: "A trail mountain bike that is primed for grinding climbs, mashing flats, and ripping descents. One for all, and all for fun!",
      },
      {
        name: "Canondale Scalpel 1 Lefty",
        info: "Lorem ipsim dolor, sit amet",
        image: canondale_Carousel_Img2,
        price: "369,367.62",
        info: "With the most advanced XC suspension and geometry, and rowdy-ready spec, the new Scalpel redefines cross-country speed – again.",
      },
      {
        name: "Canondale Super 6 EVO LAB71 Team",
        info: "Lorem ipsim dolor, sit amet",
        image: canondale_Carousel_img3,
        price: "734,631.35",
        info: "Our very best Series 0 carbon construction, 100% team spec, and fanatical attention to detail, all found in the 2025 EF Pro Cycling Team Edition LAB71 SuperSix EVO.",
      },
    ],
    video: CanondaleVideo,
  },
  Specialized: {
    BrandTitle: "Specialized",
    BrandLogo: S_Works_Svg,
    carouselImages: [
      s_work_Carousel_Img1,
      s_work_Carousel_Img2,
      s_work_Carousel_Img3,
    ],
    products: [
      {
        name: "Specialized Stumpjumper",
        info: "Lorem ipsim dolor, sit amet",
        image: s_work_Carousel_Img1,
        price: "613,250",
        info: "Is dressed to impress. SRAM's XX1 Eagle AXS wireless electronic groupset handles shifting duties while FOX Factory suspension delivers a magic carpet-smooth ride.",
      },
      {
        name: "Specialized Epic",
        info: "Lorem ipsim dolor, sit amet",
        image: s_work_Carousel_Img2,
        price: "669,000",
        info: "Mixing hardtail efficiency and full-suspension capability to impressively quick results, has always been defined by obsessive commitment to speed. Well, that and over 100 World Cup wins and podiums too.",
      },
      {
        name: "Specialized Tarmac SL8",
        info: "Lorem ipsim dolor, sit amet",
        image: s_work_Carousel_Img3,
        price: "724,749.44",
        info: "A combination of aerodynamics, lightweight, and ride quality previously thought impossible. After eight generations and over two decades of development, it’s more than the fastest Tarmac ever - it’s the world’s fastest race bike. ",
      },
    ],
    video: SworksVideo,
  },
};

export default Products;
