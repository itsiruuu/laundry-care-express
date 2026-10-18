import React from 'react';

export default function Services({ onOpenBooking }) {
  return (
    <section className="lce-services-section" id="services">
      <div className="lce-container">

        {/* 1. Wash & Fold Laundry */}
        <div className="lce-service-row">
          <div className="lce-service-info">
            <div className="lce-service-icon-badge purple">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M7 15h0M2 9.5h20" />
                <circle cx="12" cy="14" r="3" />
              </svg>
            </div>
            <h2 className="lce-service-title">Wash &amp; Fold Laundry</h2>
            <p className="lce-service-desc">
              Drop off your clothes or let us pick them up. Fresh, folded, and ready to put away.
            </p>
            <div className="lce-service-btn-group">
              <button 
                className="lce-btn-cyan" 
                onClick={() => onOpenBooking?.('wash-fold')}
              >
                SCHEDULE A PICKUP
              </button>
            </div>
            <a href="#wash-fold-details" className="lce-service-link purple-link" onClick={(e) => { e.preventDefault(); onOpenBooking?.('wash-fold'); }}>
              Wash &amp; Fold Pricing &amp; Details &rarr;
            </a>
          </div>

          <div className="lce-service-card-wrap">
            <div className="lce-card-outer">
              <div className="lce-card-img-holder">
                <img 
                  src="/images/wash-fold-team.jpg" 
                  alt="Staff folding purple laundry bags in facility" 
                  className="lce-card-img"
                  loading="lazy"
                />
              </div>
              <div className="lce-card-body">
                <div className="lce-card-header-icon purple">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                  <span>Wash &amp; Fold Laundry</span>
                </div>
                <ul className="lce-check-list">
                  <li><span className="check-bullet">&bull;</span> Everyday clothing &amp; casual wear</li>
                  <li><span className="check-bullet">&bull;</span> Towels, linens &amp; beddings</li>
                  <li><span className="check-bullet">&bull;</span> Separated by color &amp; fabric type</li>
                  <li><span className="check-bullet">&bull;</span> Detergent &amp; softener options available</li>
                </ul>
                <div className="lce-card-footer">
                  <button className="lce-btn-outline" onClick={() => onOpenBooking?.('wash-fold')}>
                    Full Price List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Dry Cleaning */}
        <div className="lce-service-row">
          <div className="lce-service-info">
            <div className="lce-service-icon-badge pink">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3c0 1.5.8 2.6 1.8 3L2 15a2 2 0 0 0 .8 2.8l.2.1h18a2 2 0 0 0 1-3.7L13.2 8c1-.4 1.8-1.5 1.8-3a3 3 0 0 0-3-3z" />
              </svg>
            </div>
            <h2 className="lce-service-title">Dry Cleaning</h2>
            <p className="lce-service-desc">
              Expert care for your delicate fabrics, suits, dresses, and special garments.
            </p>
            <div className="lce-service-btn-group">
              <button 
                className="lce-btn-cyan" 
                onClick={() => onOpenBooking?.('dry-cleaning')}
              >
                SCHEDULE A PICKUP
              </button>
            </div>
            <a href="#dry-cleaning-details" className="lce-service-link pink-link" onClick={(e) => { e.preventDefault(); onOpenBooking?.('dry-cleaning'); }}>
              Dry Cleaning Pricing &amp; Details &rarr;
            </a>
          </div>

          <div className="lce-service-card-wrap">
            <div className="lce-card-outer">
              <div className="lce-card-img-holder">
                <img 
                  src="/images/dry-cleaning-sunlight.jpg" 
                  alt="Woman hanging fresh clean shirts on clothesline in sunlight" 
                  className="lce-card-img"
                  loading="lazy"
                />
              </div>
              <div className="lce-card-body">
                <div className="lce-card-header-icon pink">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a3 3 0 0 0-3 3c0 1.5.8 2.6 1.8 3L2 15a2 2 0 0 0 .8 2.8l.2.1h18a2 2 0 0 0 1-3.7L13.2 8c1-.4 1.8-1.5 1.8-3a3 3 0 0 0-3-3z" />
                  </svg>
                  <span>Dry Cleaning</span>
                </div>
                <ul className="lce-check-list">
                  <li><span className="check-bullet">&bull;</span> Suits, blazers &amp; formalwear</li>
                  <li><span className="check-bullet">&bull;</span> Delicate silk, wool &amp; cashmere</li>
                  <li><span className="check-bullet">&bull;</span> Stain removal &amp; fabric conditioning</li>
                </ul>

                {/* Price Table */}
                <div className="lce-mini-price-table">
                  <div className="price-row">
                    <span className="item-name">Two-Piece Suit</span>
                    <span className="dots-leader"></span>
                    <span className="item-price">$15.99</span>
                  </div>
                  <div className="price-row">
                    <span className="item-name">Dress Shirt</span>
                    <span className="dots-leader"></span>
                    <span className="item-price">$4.50</span>
                  </div>
                  <div className="price-row">
                    <span className="item-name">Blouse</span>
                    <span className="dots-leader"></span>
                    <span className="item-price">$8.25</span>
                  </div>
                  <div className="price-row">
                    <span className="item-name">Winter Coat</span>
                    <span className="dots-leader"></span>
                    <span className="item-price">$19.50</span>
                  </div>
                  <div className="price-row">
                    <span className="item-name">Pants / Slacks</span>
                    <span className="dots-leader"></span>
                    <span className="item-price">$7.75</span>
                  </div>
                </div>

                <div className="lce-card-footer">
                  <button className="lce-btn-outline" onClick={() => onOpenBooking?.('dry-cleaning')}>
                    Full Price List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Commercial Laundry Services */}
        <div className="lce-service-row">
          <div className="lce-service-info">
            <div className="lce-service-icon-badge purple">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h2 className="lce-service-title">Commercial Laundry Services</h2>
            <p className="lce-service-desc">
              Custom laundry solutions for hotels, restaurants, gyms, spas, and Airbnb hosts.
            </p>
            <div className="lce-service-btn-group">
              <button 
                className="lce-btn-cyan" 
                onClick={() => onOpenBooking?.('commercial')}
              >
                SCHEDULE A PICKUP
              </button>
            </div>
            <a href="#commercial-details" className="lce-service-link purple-link" onClick={(e) => { e.preventDefault(); onOpenBooking?.('commercial'); }}>
              Commercial Solutions &amp; Quotes &rarr;
            </a>
          </div>

          <div className="lce-service-card-wrap">
            <div className="lce-card-outer">
              <div className="lce-card-img-holder">
                <img 
                  src="/images/commercial-workers.jpg" 
                  alt="Commercial laundry staff inspecting garments in facility" 
                  className="lce-card-img"
                  loading="lazy"
                />
              </div>
              <div className="lce-card-body">
                <div className="lce-card-header-icon purple">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>Commercial Laundry Services</span>
                </div>
                <ul className="lce-check-list">
                  <li><span className="check-bullet">&bull;</span> Bulk towel &amp; linen cleaning</li>
                  <li><span className="check-bullet">&bull;</span> Uniforms &amp; workwear sanitization</li>
                  <li><span className="check-bullet">&bull;</span> Flexible pickup schedules &amp; billing</li>
                </ul>

                {/* Price Table */}
                <div className="lce-mini-price-table">
                  <div className="price-row">
                    <span className="item-name">Linen &amp; Towel Service (per lb)</span>
                    <span className="dots-leader"></span>
                    <span className="item-price">$1.25</span>
                  </div>
                  <div className="price-row">
                    <span className="item-name">Uniforms &amp; Scrubs</span>
                    <span className="dots-leader"></span>
                    <span className="item-price">$4.00</span>
                  </div>
                  <div className="price-row">
                    <span className="item-name">Tablecloths &amp; Napkins</span>
                    <span className="dots-leader"></span>
                    <span className="item-price">$2.50</span>
                  </div>
                  <div className="price-row">
                    <span className="item-name">Lab Coats</span>
                    <span className="dots-leader"></span>
                    <span className="item-price">$5.00</span>
                  </div>
                  <div className="price-row">
                    <span className="item-name">Bed Sheets (Full/Queen)</span>
                    <span className="dots-leader"></span>
                    <span className="item-price">$3.50</span>
                  </div>
                </div>

                <div className="lce-card-footer">
                  <button className="lce-btn-outline" onClick={() => onOpenBooking?.('commercial')}>
                    Get A Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Airbnb & Vacation Rentals */}
        <div className="lce-service-row">
          <div className="lce-service-info">
            <div className="lce-service-icon-badge cyan">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h2 className="lce-service-title">Airbnb &amp; Vacation Rentals</h2>
            <p className="lce-service-desc">
              Quick, reliable linen turnover so your next guest arrives to five-star freshness.
            </p>
            <div className="lce-service-btn-group">
              <button 
                className="lce-btn-cyan" 
                onClick={() => onOpenBooking?.('airbnb')}
              >
                SCHEDULE A PICKUP
              </button>
            </div>
            <a href="#airbnb-details" className="lce-service-link cyan-link" onClick={(e) => { e.preventDefault(); onOpenBooking?.('airbnb'); }}>
              Vacation Rental Laundry Services &rarr;
            </a>
          </div>

          <div className="lce-service-card-wrap">
            <div className="lce-card-outer">
              <div className="lce-card-img-holder">
                <img 
                  src="/images/hotel-linen-team.jpg" 
                  alt="Hotel staff holding clean folded luxury linen packages" 
                  className="lce-card-img"
                  loading="lazy"
                />
              </div>
              <div className="lce-card-body">
                <div className="lce-card-header-icon cyan">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                  <span>Airbnb &amp; Vacation Rentals</span>
                </div>
                <ul className="lce-check-list">
                  <li><span className="check-bullet">&bull;</span> Same-day turnover options available</li>
                  <li><span className="check-bullet">&bull;</span> Sheets, duvet covers &amp; pillowcases</li>
                  <li><span className="check-bullet">&bull;</span> Bath towels, hand towels &amp; bath mats</li>
                  <li><span className="check-bullet">&bull;</span> Packaged ready for your turnover team</li>
                </ul>
                <div className="lce-card-footer">
                  <button className="lce-btn-outline" onClick={() => onOpenBooking?.('airbnb')}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
