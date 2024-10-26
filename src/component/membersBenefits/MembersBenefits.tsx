import React from 'react';
import './MemberBenefits.scss';

const MemberBenefits = () => {
  return (
    <section className="member-benefits">
      <div className="benefits-wrapper block-kontent">
        <div className="benefits-overlay">
          <svg className="benefits-overlay-mobile" width="360" height="722" viewBox="0 0 360 722" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M360 30.6287C360 12.709 344.393 -1.21405 326.589 0.823227L26.5893 35.1526C11.4392 36.8863 -2.59096e-05 49.7092 -2.45765e-05 64.9581L-2.76332e-07 692C1.17214e-06 708.569 13.4315 722 30 722L330 722C346.569 722 360 708.568 360 692L360 30.6287Z" fill="white" fill-opacity="0.4"/>
          </svg>
        </div>
        <div className="benefits-content">
          <h2>MEMBER BENEFITS</h2>
          <div className="benefits-grid">
            <div className="benefits-column">
              <ul>
                <li>Access to all 222 members for co-collaboration</li>
                <li>Your name in the TV series credits</li>
                <li>Exclusive perks for entire Affect Change TV series</li>
              </ul>
            </div>
            <div className="benefits-column">
              <ul>
                <li>Open invitation to attend filming of Affect Change</li>
                <li>Invitation to season 1 premiere party</li>
                <li>Discounted services and products from our community members</li>
                <li>Discounted physical and digital art from Sergey Gordienko</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberBenefits;
