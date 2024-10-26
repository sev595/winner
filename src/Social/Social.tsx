import './social.scss';

import socImg1 from "../images/soc-icon-1.svg"
import socImg2 from "../images/soc-icon-2.svg"
import socImg3 from "../images/soc-icon-3.svg"


const Social = () => {
  return (
    <section className="social-container">
      <div className='social-content'>
        <img src={socImg1} alt='' />
        <img src={socImg2} alt='' />
        <img src={socImg3} alt='' />
      </div>

    </section>
  );
}

export default Social;
