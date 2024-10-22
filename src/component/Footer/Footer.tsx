import React from 'react';
import './footer.scss';
import socImg1 from "../../images/social-img-1.svg"
import socImg2 from "../../images/social-img-2.svg"
import socImg3 from "../../images/social-img-3.svg"

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <h3>Connect With Us</h3>
        <div className="footer-icons">
          <a href="#" aria-label="Instagram">
            <img src={socImg1} alt='socImg1'/>
          </a>
          <a href="#" aria-label="X (formerly Twitter)">
          <img src={socImg2} alt='socImg1'/>

          </a>
          <a href="#" aria-label="Another Platform">
          <img src={socImg3} alt='socImg1'/>

          </a>
        </div>
      </div>
      <div className="footer-menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Community</a>
        <a href="#">FAQ</a>
      </div>
      <div className='footer-line'/>
      <div className="footer-bottom">
        <p>© Affect Change</p>
      </div>
    </footer>
  );
};

export default Footer;
