import React, { useState } from 'react';
import './FAQBlok.scss';

const FAQBlok = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  const faqs = [
    {
      question: "WHAT IS THE PURPOSE TO HAVE A COMMUNITY IN AFFECT CHANGE?",
      answer: "Select individuals are invited to join a diverse community to exponentially raise their potential impact with a broader community."
    },
    {
      question: "WHY HAVE A TELEVISION SERIES 'AFFECT CHANGE'?",
      answer: "The television series highlights the impact of members within the community, showcasing their stories and efforts to create meaningful change."
    },
    {
      question: "WHAT ROLE DOES THE MOVEMENT AND COMMUNITY HAVE IN AFFECT CHANGE?",
      answer: "The movement and community play a crucial role in fostering collaboration, sharing knowledge, and supporting initiatives for positive impact."
    }
  ];

  return (
    <section className="faq-section">
    <div className='anumation-blok'>
      
    </div>
      <h2>FAQ</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQBlok;
