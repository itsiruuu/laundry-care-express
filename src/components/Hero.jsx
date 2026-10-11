export default function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge badge-primary">
            <span className="pulse-indicator" /> ⚡ Express 24-Hour Turnaround
          </div>
          <h1 className="hero-title">
            Smart Laundry &amp; Dry Cleaning <br />
            <span className="gradient-text">Picked Up At Your Door</span>
          </h1>
          <p className="hero-description">
            Free pickup and delivery, hypoallergenic organic detergents, and personalized fabric care. 
            Never spend your weekends folding clothes again.
          </p>
          {/* Quick Zip Check Card */}
          <div className="hero-booking-card" id="heroZipCard">
            <label htmlFor="zipInput" style={{display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)'}}>
              📍 Check Free Pickup Availability in Your Area:
            </label>
            <form className="zip-check-form" id="zipCheckForm" onSubmit={(event) => event.preventDefault()}>
              <div className="zip-input-wrap">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <input type="text" id="zipInput" className="zip-input" placeholder="Enter your Zip Code (e.g. 10001, 94103, 1205)" maxLength={6} required />
              </div>
              <button type="submit" className="btn btn-primary" id="btnCheckZip">Check Area</button>
            </form>
            <div id="zipStatusMsg" className="zip-status-msg" style={{display: 'none'}} />
          </div>
          {/* Trust Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <h4>50K+</h4>
              <p>Garments Cleaned</p>
            </div>
            <div className="stat-item">
              <h4>24 hrs</h4>
              <p>Standard Turnaround</p>
            </div>
            <div className="stat-item">
              <h4>4.9 ★</h4>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
        {/* Hero Visual Card */}
        <div className="hero-visual">
          <div className="hero-main-card">
            <div className="visual-banner">
              <div className="visual-banner-content">
                <span className="badge" style={{background: 'rgba(255,255,255,0.25)', color: '#fff', marginBottom: '0.6rem'}}>Special Offer</span>
                <h3>Get 20% OFF Your First Wash</h3>
                <p>Use code <strong>FRESHCARE20</strong> at checkout.</p>
                <div className="visual-feature-bubbles">
                  <div className="feature-pill">🌿 Eco Wash</div>
                  <div className="feature-pill">🚚 Free Delivery</div>
                  <div className="feature-pill">✨ Hand Pressed</div>
                </div>
              </div>
            </div>
            {/* Floating Interactive Driver Live Status */}
            <div className="floating-status-card" id="floatingStatusWidget">
              <div className="status-driver">
                <div className="driver-avatar">JD</div>
                <div className="driver-info">
                  <h5>Driver James D.</h5>
                  <p><span className="pulse-indicator" /> En Route to Pickup • Blue EV Van</p>
                </div>
              </div>
              <button className="btn btn-secondary btn-sm" id="btnOpenSampleTracker" title="Track Live">
                View Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
