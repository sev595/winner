import React from 'react';
import './contactUs.scss';
import Footer from '../Footer/Footer';

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className='contact-us-section-content block-kontent'>
        <div className="contact-left">
          <h4>CONTACT US</h4>
          <h2>REACH OUT TO MAKE AN IMPACT</h2>
        </div>
        <div className="contact-right">
          <h3>LET'S CONNECT</h3>
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Surname" required />
            <input type="tel" placeholder="Phone number" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Contact Us</button>
          </form>
        </div>
      </div>
      <Footer/>

    </section>
  );
};

export default ContactUs;
