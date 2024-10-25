import React from 'react';
import './founderBlokModal.scss';
import { FaLinkedin } from 'react-icons/fa';
import FounderImg from "../../images/reviews_img.png"
import closeButtonIcon from "../../images/close-button-icon.svg"
interface IBioBodal {
  isOpen: boolean
  onClose: any
}

const FounderBlokModal = ({ isOpen, onClose }: IBioBodal) => {
  if (!isOpen) return null;
  const handleOverlayClick = (e:any) => {
    if (e.target === e.currentTarget) {
      onClose();  // Close the modal if the click is on the overlay
    } 
  };
  return (
    <div className="bio-modal-overlay" onClick={handleOverlayClick}>
      <div className="bio-modal">
        <div className="close-button" onClick={() => { onClose(false) }}>
          <img src={closeButtonIcon} alt=''/>
        </div>
        <div className="bio-content">
          <div className="bio-image">
            <img
              alt="Jason Neubauer"
              src={FounderImg}
            />
          <div className="bio-image-content">
            <h2>JASON NEUBAUER</h2>
            <h4>Founder</h4>
            <a
              href="https://www.linkedin.com/in/jasonneubauer" // Replace with actual LinkedIn link
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} color="#5959d1" />
            </a>
          </div>
          </div>
          <div className="bio-info">
            <h3>BIO</h3>
            <div className="bio-text">
              <p>
                Jason, a serial entrepreneur, parlayed a game show win into product development success,
                showcasing his ingenuity and resourcefulness. His expertise in innovation extends beyond
                product creation, encompassing diverse areas like marketing and navigating partnerships.
              </p>
              <p>
                He's also a pioneer in influencer marketing, fostering relationships with hundreds of
                influencers and shaping the evolution of the field.
              </p>
              <p>
                Through his 15-year journey, Jason has built a vast network and garnered recognition for his
                groundbreaking work and made a deal on Shark Tank.
              </p>
              <p className="highlighted-text">
                He continues to push boundaries and inspire others as an influencer, innovator, and networker
                with Affect Change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderBlokModal;
