export default function Features() {
  return (
    <section className="section section-subtle" id="features">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-primary">The Express Difference</div>
          <h2>Why Customers Love Laundry Care Express</h2>
          <p>We blend modern technology, fabric science, and hospitality-grade service.</p>
        </div>
        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-box-icon">🏷️</div>
            <h3>RFID Garment Tracking</h3>
            <p>Every single item is tagged and tracked digitally upon intake. Zero lost socks, zero garment mix-ups.</p>
          </div>
          <div className="feature-box">
            <div className="feature-box-icon">🌱</div>
            <h3>100% Eco-Safe &amp; Organic</h3>
            <p>We only use plant-derived biodegradable soaps, allergen-free conditioners, and zero petrochemical solvents.</p>
          </div>
          <div className="feature-box">
            <div className="feature-box-icon">🛡️</div>
            <h3>$1,000 Garment Guarantee</h3>
            <p>Peace of mind guarantee. If an item is ever damaged or compromised, we replace or reimburse immediately.</p>
          </div>
          <div className="feature-box">
            <div className="feature-box-icon">⚡</div>
            <h3>Emergency Same-Day Wash</h3>
            <p>Need your suit cleaned before tonight's gala? Opt for 8-hour emergency rush service at checkout.</p>
          </div>
          <div className="feature-box">
            <div className="feature-box-icon">🎒</div>
            <h3>Complimentary Laundry Bags</h3>
            <p>Receive your personalized, heavy-duty water-resistant laundry bags with your first pickup order.</p>
          </div>
          <div className="feature-box">
            <div className="feature-box-icon">🔔</div>
            <h3>SMS Status Alerts</h3>
            <p>Real-time SMS when your driver is 10 minutes away, when clothes enter wash, and photo confirmation of delivery.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
