export default function FAQ() {
  return (
    <section className="section section-subtle" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-primary">Have Questions?</div>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our services, pickup hours, and special care handling.</p>
        </div>
        <div className="faq-list" id="faqAccordion">
          <div className="faq-item open">
            <button className="faq-question">
              <span>Do I need to weigh or separate my clothes beforehand?</span>
              <span className="faq-chevron">▼</span>
            </button>
            <div className="faq-answer">
              No! You don't need to weigh or separate anything. Just place your garments into any disposable bag (or your Laundry Care Express bag). Our team sorts lights from darks, weighs the bags with calibrated legal-for-trade scales, and inspects all pockets.
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question">
              <span>Do I have to be home for pickup and delivery?</span>
              <span className="faq-chevron">▼</span>
            </button>
            <div className="faq-answer">
              Not at all. You can select "Contactless Doorstep Pickup" and leave your bag by your front door, with your building concierge, or on your porch. Our driver takes a photo upon pickup and sends an instant SMS confirmation.
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question">
              <span>What detergent do you use? Can I request hypoallergenic soap?</span>
              <span className="faq-chevron">▼</span>
            </button>
            <div className="faq-answer">
              We use premium eco-certified plant-based detergents. During scheduling, you can customize your preference to Hypoallergenic (great for eczema and babies), Lavender Meadow, or completely Fragrance-Free with zero additives.
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question">
              <span>How fast will my clothes be delivered back?</span>
              <span className="faq-chevron">▼</span>
            </button>
            <div className="faq-answer">
              Our standard turnaround is 24 hours. For example, if we pick up Monday morning, your clothes will be returned fresh and folded on Tuesday. Same-day 8-hour rush delivery is also available for urgent orders.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
