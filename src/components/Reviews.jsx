export default function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-primary">Verified Reviews</div>
          <h2>What Our 20,000+ Customers Say</h2>
          <p>Rated 4.9 out of 5 stars across Google, Yelp, and Trustpilot.</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div>
              <div className="stars">★★★★★</div>
              <p className="test-quote">
                "As a working mom of two, Laundry Care Express literally gave me back 6 hours every weekend. My clothes smell like fresh meadow and the folding is hotel-grade perfection."
              </p>
            </div>
            <div className="user-meta">
              <div className="user-avatar-initial">ER</div>
              <div>
                <div className="user-name">Elena Rodriguez</div>
                <div className="user-role">Marketing Director • 14 Orders</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div>
              <div className="stars">★★★★★</div>
              <p className="test-quote">
                "Their Launder &amp; Press service for my dress shirts is flawless. Collars are crisp, no broken buttons, and delivered right on time. Highly recommend to anyone in business!"
              </p>
            </div>
            <div className="user-meta">
              <div className="user-avatar-initial">MK</div>
              <div>
                <div className="user-name">Marcus King</div>
                <div className="user-role">Management Consultant • Weekly Client</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div>
              <div className="stars">★★★★★</div>
              <p className="test-quote">
                "I sent my heavy king goose-down comforter and a wool trench coat. Both returned looking brand new with zero harsh chemical smell. The live tracker is super cool too!"
              </p>
            </div>
            <div className="user-meta">
              <div className="user-avatar-initial">SL</div>
              <div>
                <div className="user-name">Sophia Lin</div>
                <div className="user-role">Architect • 8 Orders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
