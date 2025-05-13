import React, { useEffect, useRef } from "react";
import XC from "../assets/Images/XC.png";
import DH from "../assets/Images/DHImage.png";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("viewport");
          } else {
            entry.target.classList.remove("viewport");
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="why-choose-us-container">
      <div className="why-choose-us">
        <div className="choose-header">
          <h1>Why Choose Us?</h1>
          <h3>Performance. Quality. Passion.</h3>
        </div>

        <div className="choose-content">
          <div
            ref={(el) => (itemsRef.current[0] = el)}
            className="observe-item from-left"
            style={{ transitionDelay: `0s` }}
          >
            <img src={XC} alt="" />
          </div>

          <div className="choose-text">
            {[
              {
                title: "Wide Selection of Bike",
                desc: "We offer a variety of bicycles for all types of terrain.",
              },
              {
                title: "Affordable Prices",
                desc: "We provide high-quality bikes at competitive prices.",
              },
              {
                title: "Expert Staff",
                desc: "Our team is knowledgeable and ready to assist you.",
              },
            ].map(({ title, desc }, i) => (
              <div
                key={i}
                ref={(el) => (itemsRef.current[i + 1] = el)}
                className="observe-item from-right"
                style={{ transitionDelay: `${(i + 1) * 0.2}s` }}
              >
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="choose-content">
          <div className="choose-text">
            {[
              {
                title: "Customer Support",
                desc: "We are here to help you with any questions or concerns.",
              },
              {
                title: "Quality Assurance",
                desc: "We ensure that all our bikes meet high-quality standards.",
              },
              {
                title: "Easy Returns",
                desc: "If you're not satisfied, we offer hassle-free returns.",
              },
            ].map(({ title, desc }, i) => (
              <div
                key={i + 4}
                ref={(el) => (itemsRef.current[i + 4] = el)}
                className="observe-item from-left"
                style={{ transitionDelay: `${(i + 1) * 0.2}s` }}
              >
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div
            ref={(el) => (itemsRef.current[7] = el)}
            className="observe-item from-right"
            style={{ transitionDelay: `0s` }}
          >
            <img src={DH} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
