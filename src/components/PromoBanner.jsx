import React from 'react';

export default function PromoBanner({ onOpenBooking }) {
  return (
    <section className="lce-promo-banner-section" id="promo">
      <div className="lce-container lce-promo-content">
        <h2 className="lce-promo-title">
          Get $20 Off<br className="mobile-break" /> on your first order.
        </h2>
        <div className="lce-promo-btn-wrap">
          <button 
            className="lce-btn-cyan lce-promo-btn" 
            onClick={() => onOpenBooking?.('FIRST20')}
          >
            CLAIM $20 OFF
          </button>
        </div>
        <div className="lce-promo-perks">
          <span className="perk-item">&#10003; Valid for all new customers</span>
          <span className="perk-divider">&bull;</span>
          <span className="perk-item">&#10003; Applicable to Wash &amp; Fold and Dry Cleaning</span>
          <span className="perk-divider">&bull;</span>
          <span className="perk-item highlight">&#10003; Use code: <strong>FIRST20</strong></span>
        </div>
      </div>
    </section>
  );
}
