export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand-logo" style={{marginBottom: '0.5rem'}}>
            <div className="brand-icon">
              <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <div className="brand-name">Laundry Care <span>Express</span></div>
          </div>
          <p>Premium eco-friendly laundry and dry cleaning delivered to your door with love, speed, and precision.</p>
          <div style={{fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)'}}>
            📞 Support Hotline: <strong>1-800-CARE-NOW</strong> (24/7)
          </div>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#services">Wash &amp; Fold</a></li>
            <li><a href="#services">Eco Dry Cleaning</a></li>
            <li><a href="#services">Launder &amp; Press</a></li>
            <li><a href="#services">Bedding &amp; Linens</a></li>
            <li><a href="#services">Leather &amp; Suede Spa</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#calculator">Pricing Calculator</a></li>
            <li><a href="#tracker">Order Tracker</a></li>
            <li><a href="#reviews">Customer Stories</a></li>
            <li><a href="#faq">FAQ &amp; Help Center</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Service Hours</h4>
          <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.8rem'}}>
            Pickup &amp; Delivery Available 7 Days a Week:
          </p>
          <p style={{fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem'}}>Monday – Sunday: 7:00 AM – 10:00 PM</p>
          <div className="badge badge-success" style={{marginTop: '0.6rem'}}>🟢 Drivers Currently Active</div>
        </div>
      </div>
      <div className="container footer-bottom">
        <div>© 2026 Laundry Care Express Inc. All rights reserved. Built with pride.</div>
        <div style={{display: 'flex', gap: '1.5rem'}}>
          <a href="#hero">Privacy Policy</a>
          <a href="#hero">Terms of Service</a>
          <a href="#hero">Security</a>
        </div>
      </div>
    </footer>
  );
}
