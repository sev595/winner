import logo from "../../images/logo.svg";
import logo1 from "../../images/logo-1.png";
import logo2 from "../../images/logo-2.png";
import logo3 from "../../images/logo-3.png";
import './faqAnimationBlok.scss'
const FAQAnimationBlok = () => {
  return (
    <div>
      <h2 className="title">Our Supporters</h2>
      <div className="animation-blok">
        <div className="carousel">
          <div className="item">
            <img src={logo} alt="Logo" />
          </div>
          <div className="item">
            <img src={logo1} alt="Logo 1" />
          </div>
          <div className="item">
            <img src={logo2} alt="Logo 2" />
          </div>
          <div className="item">
            <img src={logo3} alt="Logo 3" />
          </div>
          <div className="item">
            <img src={logo1} alt="Logo 1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAnimationBlok;
