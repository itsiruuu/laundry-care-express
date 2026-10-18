import React from 'react';

export default function Advantage({ onOpenBooking }) {
  return (
    <section className="lce-advantage-section" id="advantage">
      <div className="lce-container">
        <div className="lce-advantage-header">
          <h2 className="lce-advantage-title">The Laundry Care Express Advantage</h2>
          <p className="lce-advantage-subtitle">
            From gentle washing to crisp folds, our state-of-the-art facilities ensure pristine results every time.
          </p>
        </div>

        <div className="lce-advantage-cards-grid">
          {/* Card 1: Free & Clear Options */}
          <div className="lce-adv-card">
            <div className="lce-adv-card-media">
              <img 
                src="/images/eco-detergent.jpg" 
                alt="Organic hypoallergenic detergent" 
                className="lce-adv-img"
                loading="lazy"
              />
            </div>
            <div className="lce-adv-card-body">
              <div className="lce-adv-icon-badge purple">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <h3 className="lce-adv-card-title">Free &amp; Clear Options</h3>
              <p className="lce-adv-card-text">
                Hypoallergenic, fragrance-free detergents available upon request at no extra charge. Gentle on sensitive skin and safe for the planet.
              </p>
            </div>
          </div>

          {/* Card 2: Convenient Delivery */}
          <div className="lce-adv-card">
            <div className="lce-adv-card-media">
              <img 
                src="/images/delivery-van.jpg" 
                alt="Laundry Care Express delivery van" 
                className="lce-adv-img"
                loading="lazy"
              />
            </div>
            <div className="lce-adv-card-body">
              <div className="lce-adv-icon-badge blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <h3 className="lce-adv-card-title">Convenient Delivery</h3>
              <p className="lce-adv-card-text">
                Real-time updates, scheduled arrival windows, and contactless delivery straight to your door or concierge desk.
              </p>
            </div>
          </div>
        </div>

        <div className="lce-advantage-cta">
          <button className="lce-btn-white-pill" onClick={() => onOpenBooking?.()}>
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
}
