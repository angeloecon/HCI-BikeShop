import React, {useState ,  useRef, useEffect} from "react";
import { Zoom,Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";
import 'swiper/css/zoom';
const Carousel = ({images, logo}) => {

  return (
    <>
    <div className="product-carousel">
      <div className="carousel-logo">
        <img src={logo} alt={logo} />
      </div>
      <Swiper
     
       centeredSlides={true}
       
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        zoom={{
          maxRatio: 3,
          toggle: true,
          panOnMouseMove: true,
        }}
        
        autoplay={{
          delay:2300,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: true,
          reverseDirection: false,
          stopOnLastSlide: false,
        }}
        
        modules={[Autoplay,Pagination,Zoom]}
        
        className="mySwiper"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
              <img src={image} alt="" className="product-image" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    </>
  );
};

export default Carousel;
