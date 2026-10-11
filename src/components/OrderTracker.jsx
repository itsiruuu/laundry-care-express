export default function OrderTracker() {
  return (
    <section className="section" id="tracker">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-primary">Real-Time Transparency</div>
          <h2>Live Order Tracker</h2>
          <p>Follow your clothes through every stage of our care facility and track your driver's arrival live.</p>
        </div>
        <div className="tracker-box" id="trackerBox">
          <div className="tracker-header">
            <div className="tracker-id-badge">
              <span style={{fontSize: '1.4rem'}}>📦</span>
              <div>
                <span style={{fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700}}>Order ID:</span>
                <div className="order-code" id="trackerOrderCode">#LCE-89241</div>
              </div>
            </div>
            <div style={{display: 'flex', gap: '0.6rem', alignItems: 'center'}}>
              <input type="text" id="trackingSearchInput" className="form-input" placeholder="Search Order ID..." style={{width: 180, padding: '0.5rem 0.8rem', fontSize: '0.85rem'}} defaultValue="LCE-89241" />
              <button className="btn btn-secondary btn-sm" id="btnSimulateNextStep">Simulate Next Step ▶</button>
              <button className="btn btn-secondary btn-sm" id="btnResetSimulation">↺ Reset</button>
            </div>
          </div>
          {/* Progress Timeline */}
          <div className="tracker-progress-wrap">
            <div className="tracker-progress-bar">
              <div className="tracker-progress-fill" id="trackerProgressFill" style={{width: '50%'}} />
            </div>
            <div className="tracker-steps" id="trackerStepsContainer">
              <div className="tracker-step completed" data-step={1}>
                <div className="step-dot">✓</div>
                <span className="step-label">Order Placed</span>
                <span className="step-time">09:15 AM</span>
              </div>
              <div className="tracker-step completed" data-step={2}>
                <div className="step-dot">✓</div>
                <span className="step-label">Picked Up</span>
                <span className="step-time">10:30 AM</span>
              </div>
              <div className="tracker-step active" data-step={3}>
                <div className="step-dot">🫧</div>
                <span className="step-label">Washing &amp; Care</span>
                <span className="step-time">In Progress</span>
              </div>
              <div className="tracker-step" data-step={4}>
                <div className="step-dot">♨️</div>
                <span className="step-label">Press &amp; Pack</span>
                <span className="step-time">Estimated 04:00 PM</span>
              </div>
              <div className="tracker-step" data-step={5}>
                <div className="step-dot">🚚</div>
                <span className="step-label">Out for Delivery</span>
                <span className="step-time">Estimated 06:30 PM</span>
              </div>
            </div>
          </div>
          {/* Driver & Facility Card */}
          <div className="driver-dispatch-card">
            <div className="dispatch-left">
              <div className="van-icon-wrap">🚚</div>
              <div className="dispatch-details">
                <h4 id="dispatchTitle">Facility: CleanCare Downtown Hub</h4>
                <p id="dispatchSubtitle">Currently in ozone wash cycle with Hypoallergenic lavender detergent. Supervised by Lead Specialist Sarah K.</p>
              </div>
            </div>
            <div className="dispatch-eta">
              <div className="eta-pill" id="dispatchEtaPill">Estimated Ready: Today 6:30 PM</div>
              <p style={{fontSize: '0.8rem', color: 'var(--text-muted)'}} id="dispatchSubtext">Delivery Driver: James D. (Electric Van #04)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
