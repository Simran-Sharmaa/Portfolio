import "./Style/FooterStyle.css";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location ">
              <i class="fa-solid fa-house"></i>
              <p>Kalka,Haryana</p>
            </div>
            <div className="phone ">
              <i class="fa-solid fa-phone"></i>
              <p>9306942863</p>
            </div>
            <div className="email ">
              <i class="fa-solid fa-envelope"></i>
              <p>simransharma1743@gmail.com</p>
            </div>
          </div>
          <div className="right">
            <a target="_blank" href="https://www.instagram.com">
              <i class="fa-brands fa-instagram fa-xl"> </i>
            </a>
            <a target="_blank" href="https://www.linkedin.com">
              <i class="fa-brands fa-linkedin-in fa-xl"></i>
            </a>
            <a target="_blank" href="https://www.twitter.com">
              <i class="fa-brands fa-twitter fa-xl"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com">
              <i class="fa-brands fa-facebook fa-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
