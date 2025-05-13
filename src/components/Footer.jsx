import React from "react";
import Logo from "../assets/images/logo.png";
import "./Footer.css";

const Footer = () => {
  const title = ["Contact", "About Us"];
  const info = [
    ["09999999", "Davao City", "0123-123-1234"],
    ["Go to About us"],
  ];

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <div className="left-container">
            <img src={Logo} alt="" style={{ height: "6rem" }} />
          </div>
          <div className="right-container">
            {title.map((element, key) => {
              return (
                <div key={key} className="info-container">
                  <h3>{element}</h3>
                  <ul>
                    {info[key].map((item, key) => {
                      return <li key={key}>{item}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="social-media">
          <h3>Follow us</h3>
          <div className="social-icons">
            <a className="social-icon social-icon--facebook" href="https://www.facebook.com/formenteraluis.12" target="_blank">
              <i className="fa-brands fa-facebook-f"></i>
              <div className="tooltip">Facebook</div>
            </a>
            <a className="social-icon social-icon--twitter">
              <i className="fa-brands fa-twitter"></i>
              <div className="tooltip">Twitter</div>
            </a>
            <a className="social-icon social-icon--discord">
              <i className="fa-brands fa-discord"></i>
              <div className="tooltip">Discord</div>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Davao Bike Shop. All Right Reserve.</p>
        <p>This website is purely for educational purposes only.</p>
        <p>School Project by: Gelo & Luis</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
