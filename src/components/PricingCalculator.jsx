export default function PricingCalculator() {
  return (
    <section className="section" id="calculator">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-primary">Instant Estimate</div>
          <h2>Interactive Pricing Calculator</h2>
          <p>Select your laundry load and detergent preferences to view an accurate price estimate in real time.</p>
        </div>
        <div className="calc-container" id="calculatorBox">
          <div className="calc-items-section">
            <div className="calc-items-header">
              <h3>Add Your Items / Laundry Bags</h3>
              <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Adjust the quantities below to calculate your estimate.</p>
            </div>
            {/* Item 1: Standard Wash & Fold Bag (approx 15 lbs) */}
            <div className="calc-item-row">
              <div className="calc-item-meta">
                <h4>Wash &amp; Fold Bag (~15 lbs)</h4>
                <span>T-shirts, shorts, socks, underwear, towels</span>
              </div>
              <div className="qty-control">
                <button className="qty-btn" onClick={() => window.updateItemQty('bags', -1)}>−</button>
                <span className="qty-val" id="qty_bags">1</span>
                <button className="qty-btn" onClick={() => window.updateItemQty('bags', 1)}>+</button>
              </div>
            </div>
            {/* Item 2: Dry Clean Suits / Blazers */}
            <div className="calc-item-row">
              <div className="calc-item-meta">
                <h4>Dry Clean Suits / Blazers</h4>
                <span>2-piece suits, formal jackets, wool coats</span>
              </div>
              <div className="qty-control">
                <button className="qty-btn" onClick={() => window.updateItemQty('suits', -1)}>−</button>
                <span className="qty-val" id="qty_suits">0</span>
                <button className="qty-btn" onClick={() => window.updateItemQty('suits', 1)}>+</button>
              </div>
            </div>
            {/* Item 3: Pressed Business Shirts */}
            <div className="calc-item-row">
              <div className="calc-item-meta">
                <h4>Dress Shirts (Launder &amp; Press)</h4>
                <span>Washed, hand-pressed, returned on wooden hanger</span>
              </div>
              <div className="qty-control">
                <button className="qty-btn" onClick={() => window.updateItemQty('shirts', -1)}>−</button>
                <span className="qty-val" id="qty_shirts">3</span>
                <button className="qty-btn" onClick={() => window.updateItemQty('shirts', 1)}>+</button>
              </div>
            </div>
            {/* Item 4: Comforter or Bulky Duvet */}
            <div className="calc-item-row">
              <div className="calc-item-meta">
                <h4>Large Bedding / Comforter</h4>
                <span>Thermal wash, allergen dust-mite sanitization</span>
              </div>
              <div className="qty-control">
                <button className="qty-btn" onClick={() => window.updateItemQty('bedding', -1)}>−</button>
                <span className="qty-val" id="qty_bedding">0</span>
                <button className="qty-btn" onClick={() => window.updateItemQty('bedding', 1)}>+</button>
              </div>
            </div>
            {/* Preferences: Detergent */}
            <div className="pref-group">
              <span className="pref-label">🌱 Choose Detergent Preference:</span>
              <div className="pref-options" id="detergentOptions">
                <button type="button" className="pref-pill active" onClick={(event) => window.setDetergent(event.currentTarget, 'Lavender Fresh')}>Lavender Fresh</button>
                <button type="button" className="pref-pill" onClick={(event) => window.setDetergent(event.currentTarget, 'Hypoallergenic Eco')}>Hypoallergenic (Sensitive Skin)</button>
                <button type="button" className="pref-pill" onClick={(event) => window.setDetergent(event.currentTarget, 'Fragrance-Free')}>Fragrance-Free</button>
                <button type="button" className="pref-pill" onClick={(event) => window.setDetergent(event.currentTarget, 'Sport Active Odor Defense')}>Sport Active Odor-Guard</button>
              </div>
            </div>
            {/* Preferences: Shirt Starch */}
            <div className="pref-group">
              <span className="pref-label">👔 Starch Level for Pressed Items:</span>
              <div className="pref-options" id="starchOptions">
                <button type="button" className="pref-pill active" onClick={(event) => window.setStarch(event.currentTarget, 'No Starch')}>No Starch</button>
                <button type="button" className="pref-pill" onClick={(event) => window.setStarch(event.currentTarget, 'Light')}>Light Starch</button>
                <button type="button" className="pref-pill" onClick={(event) => window.setStarch(event.currentTarget, 'Medium')}>Medium Crisp</button>
              </div>
            </div>
          </div>
          {/* Price Summary & Checkout Action */}
          <div className="calc-summary-card">
            <div>
              <h3 className="summary-title">Estimate Breakdown</h3>
              <div className="summary-line">
                <span>Wash &amp; Fold (~15 lbs bag)</span>
                <span id="sum_bags">$28.50</span>
              </div>
              <div className="summary-line">
                <span>Dry Cleaning Items</span>
                <span id="sum_suits">$0.00</span>
              </div>
              <div className="summary-line">
                <span>Pressed Dress Shirts</span>
                <span id="sum_shirts">$9.75</span>
              </div>
              <div className="summary-line">
                <span>Bulky Bedding</span>
                <span id="sum_bedding">$0.00</span>
              </div>
              <div className="summary-line">
                <span>Doorstep Pickup &amp; Delivery</span>
                <span style={{color: 'var(--success)', fontWeight: 700}}>FREE ($0.00)</span>
              </div>
              <div className="turnaround-badge">
                <span>⚡</span>
                <span>Ready in 24 Hours • Next Day Delivery</span>
              </div>
              <div className="summary-line total">
                <span>Estimated Total:</span>
                <span className="total-amount" id="sum_total">$38.25</span>
              </div>
            </div>
            <button className="btn btn-primary btn-lg" id="btnBookFromCalculator" style={{width: '100%', marginTop: '1.5rem'}}>
              Proceed to Book Pickup →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
