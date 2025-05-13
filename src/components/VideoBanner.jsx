import React, { useRef, useEffect } from "react";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import Brands from "./Brands";
import "./VideoBanner.css";

const VideoBanner = () => {
  return (
    <div className="video-banner-container">
      {Object.keys(Brands).map((brandName) => {
        const brandID = brandName.toLowerCase();
        const brandData = Brands[brandName];
        const videoRef = useRef(null);

        useEffect(() => {
          const videoElement = videoRef.current;
          if (!videoElement) {
            return;
          }
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                  videoElement.pause();
                } else {
                  if (videoElement.paused) {
                    videoElement.play();
                  }
                }
              });
            },
            {
              root: null,
              threshold: 0.3,
            }
          );
          observer.observe(videoElement);
          return () => {
            observer.unobserve(videoElement);
          };
        }, []);
        return (
          <Element key={brandName} name={brandID}>
            <div className="video-banner">
              <img className="brand-logo" src={brandData.BrandLogo} alt="" />
              <div className="video-container">
                <video
                  ref={videoRef}
                  src={brandData.video}
                  autoPlay
                  loop
                  muted
                  className="video-background"
                />
                <div className="banner-content">
                  <Link
                    to={`/products#${brandID}-section`}
                    className="see-more-button"
                  >
                    See {brandData.BrandTitle} products
                  </Link>
                </div>
              </div>
            </div>
          </Element>
        );
      })}
    </div>
  );
};

export default VideoBanner;
