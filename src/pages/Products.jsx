import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../components/Carousel";
import brandProducts from "../components/Brands";
import Footer from "../components/Footer";
import Cards from "../components/Cards";


import "./Product.css";

function Products() {
  const location = useLocation();
  console.log(location.pathname);
  console.log(location.hash);
  console.log(location.search);
  useEffect(() => {
    // const [isOpen, setIsOpen] = useState(false);

    const hash = location.hash;
    console.log(hash)
    console.log(location)
    // 
    if (hash) {
      const targetElement = document.querySelector(hash);
        // if (targetElement) {
        //   targetElement.scrollIntoView({ behavior: 'smooth' });
        // }

      setTimeout(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }
  }, [location.hash]);

  return (
    <div className="product-container">
      {Object.keys(brandProducts).map((brandName, index) => {
        const brandData = brandProducts[brandName];
        const brand = brandName.toLowerCase();

        return (
          <div id={`${brand}-section`} key={brandName}>
            <Carousel images={brandData.carouselImages} logo={brandData.BrandLogo}/>
            
            <img
              className={`${brand}-logo p-logo`}
              src={brandData.BrandLogo}
              alt=""
            />
            <div className="card-wrapper">
              {brandData.products.map((product, index) => (
                <Cards
                  key={index}
                  backTitle={product.name}
                  backInfo={product.info}
                  imgSource={product.image}
                />
              ))}
            </div>
            
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default Products;
