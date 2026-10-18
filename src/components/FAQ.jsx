import React, { useState } from 'react';

const faqItems = [
  {
    question: "How does pickup and delivery work?",
    answer: "Simply schedule a pickup online or via our mobile app, choose your preferred time window, and place your clothes in any bag (or your Laundry Care Express bag). Our driver will pick it up, transport it to our dedicated facility, and return it fresh, clean, and folded."
  },
  {
    question: "Do I need to be home for pickup and delivery?",
    answer: "No, you do not need to be home! You can leave your laundry bags on your porch, with your building concierge, or at a designated safe spot. Just add driver instructions when placing your order, and we will send photo confirmations upon pickup and drop-off."
  },
  {
    question: "What is your typical turnaround time?",
    answer: "Our standard turnaround time is next-day (within 24 to 48 hours). If you need your laundry back even faster, same-day express service is available in select areas."
  },
  {
    question: "How do I separate my laundry?",
    answer: "Please separate items that require Wash & Fold from items that need Dry Cleaning into distinct bags. For Wash & Fold, our specialists automatically sort your clothes by lights and darks and wash them according to manufacturer care labels."
  },
  {
    question: "What happens if an item is damaged or missing?",
    answer: "Every garment is tagged and tracked digitally throughout our process. In the rare event of an issue, our 100% Satisfaction Guarantee and garment reimbursement policy ensures your items are repaired, replaced, or credited promptly."
  },
  {
    question: "What detergent and cleaning products do you use?",
    answer: "We use premium eco-friendly, biodegradable detergents. We also proudly offer 100% hypoallergenic, fragrance-free Free & Clear options upon request at no extra charge."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(prev => (prev === idx ? -1 : idx));
  };

  return (
    <section className="lce-faq-section" id="faqs">
      <div className="lce-container lce-faq-grid">
        
        {/* Left Column: Heading */}
        <div className="lce-faq-intro">
          <h2 className="lce-faq-title">
            Frequently Asked<br />Questions
          </h2>
          <p className="lce-faq-desc">
            Have questions about how our service works? Find answers to our most common questions here, or contact our customer support team 7 days a week.
          </p>
          <div className="lce-faq-support-box">
            <span className="support-badge">&#128172; Need assistance?</span>
            <p>Our friendly care team is ready to assist you anytime.</p>
            <a href="tel:8005550199" className="lce-faq-phone-link">Call (800) 555-0199</a>
          </div>
        </div>

        {/* Right Column: Interactive Accordion */}
        <div className="lce-faq-list">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`lce-faq-item ${isOpen ? 'active' : ''}`}
              >
                <button 
                  className="lce-faq-question-btn" 
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="question-text">{item.question}</span>
                  <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="lce-faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
