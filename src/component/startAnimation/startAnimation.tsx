import './startAnimation.scss';
import { useEffect, useState } from 'react';
import startAnimationA from "../../images/start-animation-A.svg";
import startAnimationB from "../../images/start-animation-g.svg";
import startAnimationText from "../../images/start-animation-text.svg";

const StartAnimation = () => {



  return (
    <section className="start-animation-container">
      <div className='start-animation-logo-content'>
        <div className={`letteral start-animation-a`}>
          <img src={startAnimationA} alt='' />
        </div>
        <div className={`letteral start-animation-g`}>
          <img src={startAnimationB} alt='' />
        </div>
      </div>
      <div className='start-animation-text-content'>
      <img src={startAnimationText} alt='' />
        
      </div>
    </section>
  )
}

export default StartAnimation;
  