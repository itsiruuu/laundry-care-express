export default function Services() {
  return (
    <section className="section section-subtle" id="services">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-primary">Our Premium Services</div>
          <h2>Every Garment Treated With Expert Care</h2>
          <p>From everyday tees to high-end designer suits, our fabric specialists provide tailored care for each material type.</p>
        </div>
        <div className="services-grid" id="servicesGrid">
          {/* Service 1: Wash & Fold */}
          <div className="service-card" data-service="wash-fold">
            <div className="service-icon-wrap icon-blue">
              🧺
            </div>
            <h3>Wash &amp; Fold</h3>
            <p>Everyday clothes, towels, and gym wear sorted by color, washed in organic detergent, dried &amp; crisply folded.</p>
            <div className="service-price-tag">
              <span className="price-val">$1.95</span>
              <span className="price-unit">/ lb (Min 10 lbs)</span>
            </div>
          </div>
          {/* Service 2: Dry Cleaning */}
          <div className="service-card" data-service="dry-clean">
            <div className="service-icon-wrap icon-cyan">
              👔
            </div>
            <h3>Dry Cleaning</h3>
            <p>Suits, silk blazers, delicate blouses, and luxury coats cleaned with zero-perchloroethylene green solvents.</p>
            <div className="service-price-tag">
              <span className="price-val">$7.50</span>
              <span className="price-unit">/ garment from</span>
            </div>
          </div>
          {/* Service 3: Launder & Press */}
          <div className="service-card" data-service="iron-press">
            <div className="service-icon-wrap icon-purple">
              ♨️
            </div>
            <h3>Launder &amp; Press</h3>
            <p>Hand-finished steam ironed business shirts, slacks, and formal trousers returned crisp on premium hangers.</p>
            <div className="service-price-tag">
              <span className="price-val">$3.25</span>
              <span className="price-unit">/ shirt on hanger</span>
            </div>
          </div>
          {/* Service 4: Bedding & Bulky Items */}
          <div className="service-card" data-service="bedding">
            <div className="service-icon-wrap icon-emerald">
              🛏️
            </div>
            <h3>Bedding &amp; Comforters</h3>
            <p>Deep thermal ozone sanitization for king/queen duvets, heavy blankets, pillows, and luxury drapery.</p>
            <div className="service-price-tag">
              <span className="price-val">$18.00</span>
              <span className="price-unit">/ piece from</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
