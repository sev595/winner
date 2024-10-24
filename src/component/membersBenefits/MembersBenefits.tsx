import React from 'react';
import './MemberBenefits.scss';

const MemberBenefits = () => {
  return (
    <section className="member-benefits">
      <div className="benefits-overlay"></div>
      <div className="benefits-content block-kontent">
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
    </section>
  );
};

export default MemberBenefits;
