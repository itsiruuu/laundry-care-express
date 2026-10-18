import React from 'react';

export default function Comparison({ onOpenBooking }) {
  return (
    <section className="lce-comparison-section" id="how-it-works">
      <div className="lce-container lce-comparison-grid">
        
        {/* Left Side: Pitch & Guarantee */}
        <div className="lce-comparison-info">
          <h2 className="lce-comparison-title">Laundry With A Difference</h2>
          <p className="lce-comparison-desc">
            We aren't a third-party marketplace or a generic gig app. We own and operate our 
            state-of-the-art facilities with background-checked, professionally trained laundry specialists.
          </p>

          <div className="lce-guarantee-card">
            <div className="lce-guarantee-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <div className="lce-guarantee-text">
              <strong>100% Satisfaction Guarantee</strong>
              <p>We treat your laundry with the highest care, or we re-wash it for free.</p>
            </div>
          </div>

          <div className="lce-comparison-btn-wrap">
            <button className="lce-btn-cyan" onClick={() => onOpenBooking?.()}>
              SCHEDULE A PICKUP
            </button>
          </div>
        </div>

        {/* Right Side: Comparison Table Card */}
        <div className="lce-comparison-table-wrap">
          <div className="lce-comparison-card">
            <div className="lce-table-responsive">
              <table className="lce-comparison-table">
                <thead>
                  <tr>
                    <th className="feature-col">Features</th>
                    <th className="lce-col">
                      <div className="lce-col-badge">
                        <span className="logo-sparkle">&#10024;</span>
                        <span>Laundry Care</span>
                        <small>EXPRESS</small>
                      </div>
                    </th>
                    <th className="other-col">
                      <div className="other-col-header">
                        <span>Traditional</span>
                        <small>Laundromat</small>
                      </div>
                    </th>
                    <th className="other-col">
                      <div className="other-col-header">
                        <span>Gig-Economy</span>
                        <small>Apps</small>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="feat-title">Free Doorstep Pickup &amp; Delivery</td>
                    <td className="lce-check"><span className="icon-check">&#10004;</span></td>
                    <td className="other-cross"><span className="icon-cross">&#10008;</span></td>
                    <td className="other-warn"><span className="icon-warn">&#9888;</span></td>
                  </tr>
                  <tr>
                    <td className="feat-title">Dedicated Facility &amp; Trained Staff</td>
                    <td className="lce-check"><span className="icon-check">&#10004;</span></td>
                    <td className="other-cross"><span className="icon-cross">&#10008;</span></td>
                    <td className="other-warn"><span className="icon-warn">&#9888;</span></td>
                  </tr>
                  <tr>
                    <td className="feat-title">Eco-Friendly Detergents &amp; Ozone</td>
                    <td className="lce-check"><span className="icon-check">&#10004;</span></td>
                    <td className="other-cross"><span className="icon-cross">&#10008;</span></td>
                    <td className="other-cross"><span className="icon-cross">&#10008;</span></td>
                  </tr>
                  <tr>
                    <td className="feat-title">24&ndash;48 Hour Turnaround Standard</td>
                    <td className="lce-check"><span className="icon-check">&#10004;</span></td>
                    <td className="other-cross"><span className="icon-cross">&#10008;</span></td>
                    <td className="other-warn"><span className="icon-warn">&#9888;</span></td>
                  </tr>
                  <tr>
                    <td className="feat-title">Transparent Flat Pricing (No Hidden Fees)</td>
                    <td className="lce-check"><span className="icon-check">&#10004;</span></td>
                    <td className="other-cross"><span className="icon-cross">&#10008;</span></td>
                    <td className="other-cross"><span className="icon-cross">&#10008;</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="lce-comparison-footnote">
              <span className="icon-warn">&#9888;</span> Results based on standard regional service comparisons.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
