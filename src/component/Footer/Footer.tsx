import React from 'react';
import './footer.scss';
import { FaInstagram, FaCircle } from 'react-icons/fa'; // Example icons

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <h3>Connect With Us</h3>
        <div className="footer-icons">
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          {/* <a href="#" aria-label="X (formerly Twitter)">
            <FaXTwitter />
          </a> */}
          <a href="#" aria-label="Another Platform">
            <FaCircle />
          </a>
        </div>
      </div>
      <div className="footer-menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Community</a>
        <a href="#">FAQ</a>
      </div>
      <div className="footer-bottom">
        <p>© Affect Change</p>
      </div>
    </footer>
  );
};

export default Footer;
