import React from 'react';

export default function SpecialOffers({ onOpenBooking }) {
  return (
    <section className="lce-offers-section" id="offers">
      <div className="lce-container">
        <div className="lce-offers-header">
          <h2 className="lce-offers-title">Give the Gift of Fresh, Clean Laundry</h2>
          <p className="lce-offers-subtitle">
            Treat friends, family, or employees to effortless laundry services. Perfect for new parents, busy professionals, and college students.
          </p>
        </div>

        <div className="lce-offers-grid">
          {/* Card 1: Gift Cards */}
          <div className="lce-offer-card">
            <div className="lce-offer-img-wrap">
              <img 
                src="/images/gift-cards.jpg" 
                alt="Laundry Care Express Gift Card box" 
                className="lce-offer-img"
                loading="lazy"
              />
            </div>
            <div className="lce-offer-body">
              <h3 className="lce-offer-card-title">Gift Cards</h3>
              <p className="lce-offer-card-desc">
                Flexible amounts for any occasion. Instant digital delivery with a personalized message.
              </p>
              <button 
                className="lce-offer-btn" 
                onClick={() => onOpenBooking?.('gift-card')}
              >
                Buy Gift Card
              </button>
            </div>
          </div>

          {/* Card 2: Student Bundles */}
          <div className="lce-offer-card">
            <div className="lce-offer-img-wrap">
              <img 
                src="/images/student-bundles.jpg" 
                alt="Student laundry packages" 
                className="lce-offer-img"
                loading="lazy"
              />
            </div>
            <div className="lce-offer-body">
              <h3 className="lce-offer-card-title">Student Bundles</h3>
              <p className="lce-offer-card-desc">
                Semester-long laundry plans so students can focus on what matters most during school.
              </p>
              <button 
                className="lce-offer-btn" 
                onClick={() => onOpenBooking?.('student-plan')}
              >
                View Student Plans
              </button>
            </div>
          </div>

          {/* Card 3: Corporate Perks */}
          <div className="lce-offer-card">
            <div className="lce-offer-img-wrap">
              <img 
                src="/images/corporate-perks.jpg" 
                alt="Corporate employee laundry benefit" 
                className="lce-offer-img"
                loading="lazy"
              />
            </div>
            <div className="lce-offer-body">
              <h3 className="lce-offer-card-title">Corporate Perks</h3>
              <p className="lce-offer-card-desc">
                Offer laundry &amp; dry cleaning benefits to your employees to boost workplace satisfaction.
              </p>
              <button 
                className="lce-offer-btn" 
                onClick={() => onOpenBooking?.('corporate')}
              >
                Corporate Inquiries
              </button>
            </div>
          </div>
        </div>

        <div className="lce-offers-bottom-cta">
          <button className="lce-btn-cyan" onClick={() => onOpenBooking?.()}>
            SEE ALL OFFERS
          </button>
        </div>
      </div>
    </section>
  );
}
