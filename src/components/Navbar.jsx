import React, { useState } from 'react';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="lce-navbar" id="topNavbar">
      <div className="lce-nav-container">
        {/* Brand Logo */}
        <a href="#top" className="lce-brand-logo" onClick={closeMenu}>
          <div className="lce-logo-symbol">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4C14 14 8 20 8 27C8 33.6 13.4 39 20 39C26.6 39 32 33.6 32 27C32 20 26 14 20 4Z" fill="url(#dropGrad)" />
              <path d="M15 26C15 22 18 19 21 17C20 21 22 23 23 26C24 29 22 32 19 32C16.8 32 15 29.5 15 26Z" fill="#FFFFFF" fillOpacity="0.8" />
              <defs>
                <linearGradient id="dropGrad" x1="8" y1="4" x2="32" y2="39" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00C4FF" />
                  <stop offset="1" stopColor="#0077CC" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="lce-brand-text">
            <span className="lce-brand-main">Laundry Care</span>
            <span className="lce-brand-sub">EXPRESS</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className={`lce-nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#services" onClick={closeMenu}>PRICING &amp; SERVICES</a></li>
          <li><a href="#how-it-works" onClick={closeMenu}>HOW IT WORKS</a></li>
          <li><a href="#faqs" onClick={closeMenu}>FAQS</a></li>
          <li><a href="#reviews" onClick={closeMenu}>REVIEWS</a></li>
          <li><a href="#locations" onClick={closeMenu}>LOCATIONS</a></li>
          <li><a href="#blog" onClick={closeMenu}>BLOG</a></li>
          
          {/* Mobile only action inside drawer */}
          <li className="mobile-only-action">
            <button className="lce-nav-login-btn" onClick={() => { closeMenu(); onOpenBooking?.('login'); }}>
              LOG IN
            </button>
          </li>
          <li className="mobile-only-action">
            <button className="lce-nav-pickup-btn" onClick={() => { closeMenu(); onOpenBooking?.(); }}>
              SCHEDULE A PICKUP
            </button>
          </li>
        </ul>

        {/* Desktop Right CTA Buttons */}
        <div className="lce-nav-actions">
          <button className="lce-nav-login-btn" onClick={() => onOpenBooking?.('login')}>
            LOG IN
          </button>
          <button className="lce-nav-pickup-btn" onClick={() => onOpenBooking?.()}>
            SCHEDULE A PICKUP
          </button>
          <button 
            className="lce-mobile-toggle" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
}
