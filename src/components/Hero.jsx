import React from 'react';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="lce-hero-section" id="hero">
      <div className="lce-hero-container">
        {/* Left Column: Heading, Subtitle, CTA, App Badges */}
        <div className="lce-hero-content">
          <h1 className="lce-hero-title">
            Experience You Trust,
            <span className="lce-hero-title-highlight">Laundry You Love.</span>
          </h1>
          <p className="lce-hero-subtitle">
            Taking care of your everyday laundry needs from residential to commercial.
          </p>

          <div className="lce-hero-cta-wrap">
            <button 
              className="lce-btn-cyan lce-hero-btn" 
              onClick={() => onOpenBooking?.()}
            >
              SCHEDULE A PICKUP
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* App Badges */}
          <div className="lce-app-badges">
            <a href="#download-app" className="lce-badge-link" aria-label="Download on Google Play">
              <div className="lce-badge-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.6 1.8c-.3.3-.4.8-.4 1.4v17.6c0 .6.1 1.1.4 1.4l.1.1 9.8-9.8v-.2L3.7 1.7l-.1.1zM17.4 16.3l-3.9-3.9v-.4l3.9-3.9.1.1 4.6 2.6c1.3.7 1.3 1.9 0 2.6l-4.7 3zM13.5 12l-9.7 9.7c.4.4 1.1.5 1.8.1l11.1-6.3-3.2-3.5zm0-0.4l3.2-3.5L5.6 1.8c-.7-.4-1.4-.3-1.8.1l9.7 9.7z"/>
                </svg>
                <div className="lce-badge-text">
                  <span>GET IT ON</span>
                  <strong>Google Play</strong>
                </div>
              </div>
            </a>

            <a href="#download-app" className="lce-badge-link" aria-label="Download on the App Store">
              <div className="lce-badge-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.72-.93 2.73 1 .08 2.02-.48 2.63-1.23z"/>
                </svg>
                <div className="lce-badge-text">
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Specialist Image */}
        <div className="lce-hero-image-wrap">
          <div className="lce-hero-image-frame">
            <img 
              src="/images/hero-specialist.jpg" 
              alt="Laundry Care Express Specialist holding folded fresh laundry" 
              className="lce-hero-img"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Floating 5-Feature Bar Overlapping the Bottom */}
      <div className="lce-feature-bar-wrap">
        <div className="lce-feature-bar">
          <div className="lce-feat-item">
            <div className="lce-feat-icon purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span className="lce-feat-label">Next-Day Turnaround</span>
          </div>

          <div className="lce-feat-item">
            <div className="lce-feat-icon blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <span className="lce-feat-label">Contactless Pickup</span>
          </div>

          <div className="lce-feat-item">
            <div className="lce-feat-icon green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <span className="lce-feat-label">Eco-Friendly Cleaning</span>
          </div>

          <div className="lce-feat-item">
            <div className="lce-feat-icon cyan">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="20" y1="12" x2="20" y2="3" />
                <line x1="1" y1="14" x2="7" y2="14" />
                <line x1="9" y1="8" x2="15" y2="8" />
                <line x1="17" y1="16" x2="23" y2="16" />
              </svg>
            </div>
            <span className="lce-feat-label">Custom Wash Preferences</span>
          </div>

          <div className="lce-feat-item">
            <div className="lce-feat-icon gold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <span className="lce-feat-label">Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
