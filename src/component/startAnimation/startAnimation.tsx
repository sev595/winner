import './startAnimation.scss';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import startAnimationA from "../../images/start-animation-A.svg";
import startAnimationB from "../../images/start-animation-g.svg";
import startAnimationText from "../../images/start-animation-text.svg";

const StartAnimation = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      // onCompletex: () => setAnimationComplete(true), // Disable component after animation
    });
  
    // Rotate animation for both letters
    timeline
      .to('.start-animation-a', { rotate: 0, duration: 1.5, ease: 'power2.out' }, 0)
      .to('.start-animation-g', { rotate: 0, duration: 1.5, ease: 'power2.out' }, 0)
  
      // Slide text from left to right using scaleX
      .to('.start-animation-text-content img', { scaleX: 1, duration: 3, ease: 'power2.out' }, 1.5)
  
      // Zoom in effect for the images
      .to('.start-animation-logo-content', { scale: 100, duration: 1, ease: 'power2.out' }, 2.5)

      
      .to('.start-animation-text-content', {  opacity: 0, duration: 1, ease: 'power2.out' }, 2.5)
  
      // Fade out the whole component after zoom
      .to('.start-animation-container', { opacity: 0,zIndex:-1, duration: 1, ease: 'power2.out' }, 3.5);
  }, []);
  ;


  return (
    <section className="start-animation-container">
      <div className="start-animation-logo-content">
        <div className="letteral start-animation-a">
          <img src={startAnimationA} alt="Animation A" />
        </div>
        <div className="letteral start-animation-g">
          <img src={startAnimationB} alt="Animation G" />
        </div>
      </div>
      <div className="start-animation-text-content">
        <img src={startAnimationText} alt="Animation Text" />
      </div>
    </section>
  );
}

export default StartAnimation;
