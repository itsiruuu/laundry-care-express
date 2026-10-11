export default function BookingModal() {
  return (
    <div className="modal-backdrop" id="bookingModalBackdrop">
      <div className="booking-modal" id="bookingModal">
        <div className="modal-header">
          <div>
            <h3 style={{fontSize: '1.35rem', fontFamily: '"Outfit", sans-serif'}}>Schedule Express Pickup</h3>
            <p style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>Step-by-step booking in less than 60 seconds</p>
          </div>
          <button className="modal-close-btn" id="btnCloseModal" aria-label="Close Modal">×</button>
        </div>
        <div className="modal-body">
          {/* Wizard Navigation */}
          <div className="wizard-nav">
            <div className="wizard-nav-step active" id="wStep1Nav" onClick={() => window.jumpToWizardStep(1)}>
              <div className="wizard-nav-dot">1</div>
              <span className="wizard-nav-title">Service</span>
            </div>
            <div className="wizard-nav-step" id="wStep2Nav" onClick={() => window.jumpToWizardStep(2)}>
              <div className="wizard-nav-dot">2</div>
              <span className="wizard-nav-title">Schedule</span>
            </div>
            <div className="wizard-nav-step" id="wStep3Nav" onClick={() => window.jumpToWizardStep(3)}>
              <div className="wizard-nav-dot">3</div>
              <span className="wizard-nav-title">Address</span>
            </div>
            <div className="wizard-nav-step" id="wStep4Nav" onClick={() => window.jumpToWizardStep(4)}>
              <div className="wizard-nav-dot">4</div>
              <span className="wizard-nav-title">Confirm</span>
            </div>
          </div>
          {/* Wizard Step 1: Select Service & Options */}
          <div className="wizard-tab active" id="wTab1">
            <h4 style={{marginBottom: '1rem'}}>Select Primary Service:</h4>
            <div className="form-group">
              <select id="modalServiceType" className="form-select">
                <option value="wash-fold">Wash &amp; Fold (Everyday Laundry - $1.95/lb)</option>
                <option value="dry-clean">Dry Cleaning (Formal wear &amp; Suits - from $7.50)</option>
                <option value="iron-press">Launder &amp; Press (Shirts &amp; Pants - $3.25/item)</option>
                <option value="bedding">Bedding &amp; Duvet Sanitization (from $18.00)</option>
                <option value="combo">Complete Combo (Wash &amp; Fold + Dry Cleaning)</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Estimated Number of Bags / Garments:</label>
              <input type="number" id="modalEstimatedBags" className="form-input" min={1} max={20} defaultValue={1} />
            </div>
            <div className="form-group">
              <label className="form-label">Detergent &amp; Wash Preference:</label>
              <select id="modalDetergentSelect" className="form-select">
                <option value="Lavender Fresh">Lavender Fresh Essential Oil</option>
                <option value="Hypoallergenic">Hypoallergenic (Sensitive Skin / Baby Safe)</option>
                <option value="Fragrance-Free">100% Fragrance-Free</option>
                <option value="Sport Active">Sport Active Odor Defense</option>
              </select>
            </div>
          </div>
          {/* Wizard Step 2: Date & Time Window */}
          <div className="wizard-tab" id="wTab2">
            <h4 style={{marginBottom: '1rem'}}>Choose Pickup Window:</h4>
            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Pickup Date:</label>
                <input type="date" id="modalPickupDate" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Preferred Time Window:</label>
                <select id="modalTimeSlot" className="form-select">
                  <option value="Morning (8:00 AM - 10:00 AM)">Morning (8:00 AM - 10:00 AM)</option>
                  <option value="Midday (11:00 AM - 1:00 PM)">Midday (11:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (2:00 PM - 4:00 PM)">Afternoon (2:00 PM - 4:00 PM)</option>
                  <option value="Evening (5:00 PM - 7:00 PM)">Evening (5:00 PM - 7:00 PM)</option>
                  <option value="Night Express (8:00 PM - 10:00 PM)">Night Express (8:00 PM - 10:00 PM)</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Pickup Placement Instructions:</label>
              <select id="modalPlacement" className="form-select">
                <option value="Hand to Me in Person">Hand to Me in Person</option>
                <option value="Leave at Front Door / Porch">Leave at Front Door / Porch (Contactless)</option>
                <option value="Leave with Concierge / Doorman">Leave with Building Concierge / Doorman</option>
                <option value="Back Porch / Gate Code">Back Porch / Side Gate</option>
              </select>
            </div>
          </div>
          {/* Wizard Step 3: Address & Contact Details */}
          <div className="wizard-tab" id="wTab3">
            <h4 style={{marginBottom: '1rem'}}>Your Contact &amp; Delivery Address:</h4>
            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Full Name:</label>
                <input type="text" id="modalFullName" className="form-input" placeholder="e.g. Alex Johnson" required />
              </div>
              <div className="form-group">
                <label className="form-label">Mobile Phone (for SMS updates):</label>
                <input type="tel" id="modalPhone" className="form-input" placeholder="e.g. (555) 234-5678" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Street Address:</label>
              <input type="text" id="modalAddress" className="form-input" placeholder="e.g. 742 Evergreen Terrace, Apt 4B" required />
            </div>
            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">City:</label>
                <input type="text" id="modalCity" className="form-input" placeholder="e.g. New York / San Francisco" required />
              </div>
              <div className="form-group">
                <label className="form-label">Zip Code:</label>
                <input type="text" id="modalZip" className="form-input" placeholder="e.g. 10001" required />
              </div>
            </div>
          </div>
          {/* Wizard Step 4: Review & Confirm */}
          <div className="wizard-tab" id="wTab4">
            <h4 style={{marginBottom: '1rem'}}>Order Review &amp; Confirmation:</h4>
            <div style={{background: 'var(--bg-subtle)', padding: '1.2rem', borderRadius: 'var(--radius-md)', marginBottom: '1.2rem'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                <span style={{fontWeight: 600}}>Service:</span>
                <span id="reviewService">-</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                <span style={{fontWeight: 600}}>Pickup Window:</span>
                <span id="reviewSchedule">-</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                <span style={{fontWeight: 600}}>Address:</span>
                <span id="reviewAddress">-</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                <span style={{fontWeight: 600}}>Detergent Choice:</span>
                <span id="reviewDetergent">-</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '0.8rem', paddingTop: '0.6rem', borderTop: '1px solid var(--border-color)', fontWeight: 700}}>
                <span>Estimated Cost:</span>
                <span style={{color: 'var(--primary)', fontSize: '1.15rem'}} id="reviewEstPrice">$28.50 (Pay upon delivery)</span>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Special Garment Notes or Gate Codes (Optional):</label>
              <textarea id="modalSpecialNotes" className="form-textarea" rows={2} placeholder="e.g., Gate code is #4829, please wash silk shirts in cold water only." defaultValue={""} />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" id="btnWizardPrev" style={{visibility: 'hidden'}} onClick={() => window.navigateWizard(-1)}>← Back</button>
          <button className="btn btn-primary" id="btnWizardNext" onClick={() => window.navigateWizard(1)}>Next Step →</button>
        </div>
      </div>
    </div>
  );
}
