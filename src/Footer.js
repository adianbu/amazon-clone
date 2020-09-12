import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__row1">
        <a href="#header">Back to top</a>
      </div>
      <div className="footer__row2">
        <div className="footer__logo">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Logo"
          />
        </div>
        <div className="footer__column1">
          <h3>Get to Know Us</h3>
          <h6>About Us </h6>
          <h6> Careers</h6>
          <h6>Amazon Cares</h6>
          <h6>Gift a Smile</h6>
        </div>
        <div className="footer__column2">
          <h3>Connect with Us</h3>
          <a href="https://www.facebook.com/profile.php?id=100010013417802">
            Facebook
          </a>
          <a href="https://twitter.com/AdithyaAnbu">Twitter</a>
          <a href="https://www.instagram.com/adithyaanbu/?hl=en">Instagram</a>
        </div>
        <div className="footer__column1">
          <h3>COVID-19 and Amazon</h3>
          <h6>Your Account </h6>
          <h6>Returns Centre</h6>
          <h6>100% Purchase Protection</h6>
          <h6>Help</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
