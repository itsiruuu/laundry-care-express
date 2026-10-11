export default function HowItWorks() {
  return (
    <section className="section section-subtle" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-primary">Simple 4-Step Process</div>
          <h2>Effortless Laundry in 4 Steps</h2>
          <p>Book online in under 60 seconds. We take care of everything else from pickup to delivery.</p>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <span className="step-num">01</span>
            <div className="step-icon">📱</div>
            <h3>Schedule Online</h3>
            <p>Pick your preferred pickup date, 1-hour time window, and custom laundry instructions with a few clicks.</p>
          </div>
          <div className="step-card">
            <span className="step-num">02</span>
            <div className="step-icon">🚐</div>
            <h3>Contactless Pickup</h3>
            <p>Our driver arrives at your door with free durable Laundry Care Express bags. Hand over your clothes or leave them on your porch.</p>
          </div>
          <div className="step-card">
            <span className="step-num">03</span>
            <div className="step-icon">✨</div>
            <h3>Eco-Care Cleaning</h3>
            <p>We wash by fabric care label using gentle plant-based detergents, inspect each item, steam-press, and neatly pack.</p>
          </div>
          <div className="step-card">
            <span className="step-num">04</span>
            <div className="step-icon">🚪</div>
            <h3>Fresh At Your Door</h3>
            <p>Receive your fresh, crisp garments in 24 hours. Track driver arrival live on our interactive tracker.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
