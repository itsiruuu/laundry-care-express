export default function Navbar() {
  return (
    <nav className="navbar" id="mainNavbar">
      <div className="container nav-container">
        <a href="#hero" className="brand-logo" id="brandLogo">
          <div className="brand-icon">
            {/* Sparkle & Water droplet SVG */}
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              <path d="M12 9v4" />
              <path d="M10 11h4" />
            </svg>
          </div>
          <div className="brand-name">Laundry Care <span>Express</span></div>
        </a>
        <ul className="nav-links" id="navLinksList">
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#calculator" className="nav-link">Pricing Calculator</a></li>
          <li><a href="#how-it-works" className="nav-link">How It Works</a></li>
          <li><a href="#tracker" className="nav-link">Live Tracker</a></li>
          <li><a href="#reviews" className="nav-link">Reviews</a></li>
          <li><a href="#faq" className="nav-link">FAQ</a></li>
        </ul>
        <div className="nav-actions">
          {/* Dark / Light Theme Toggle */}
          <button className="theme-toggle-btn" id="themeToggleBtn" aria-label="Toggle Dark/Light Mode" title="Toggle Theme">
            <svg id="themeIconSun" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display: 'none'}}>
              <circle cx={12} cy={12} r={5} />
              <line x1={12} y1={1} x2={12} y2={3} />
              <line x1={12} y1={21} x2={12} y2={23} />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1={1} y1={12} x2={3} y2={12} />
              <line x1={21} y1={12} x2={23} y2={12} />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg id="themeIconMoon" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
          <button className="btn btn-primary" id="btnOpenBookingNav">
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
              <line x1={16} y1={2} x2={16} y2={6} />
              <line x1={8} y1={2} x2={8} y2={6} />
              <line x1={3} y1={10} x2={21} y2={10} />
            </svg>
            Schedule Pickup
          </button>
          <button className="mobile-menu-btn" id="mobileMenuToggle" aria-label="Open Navigation Menu">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
