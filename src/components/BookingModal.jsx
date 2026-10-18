import React, { useState, useEffect } from 'react';

export default function BookingModal({ isOpen, initialMode, onClose, onBookingSuccess }) {
  const [mode, setMode] = useState('pickup'); // 'pickup' | 'login'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    zip: '',
    serviceType: 'wash-fold',
    pickupDate: '',
    pickupTime: 'morning',
    notes: '',
    promoCode: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialMode === 'login') {
      setMode('login');
    } else {
      setMode('pickup');
      if (initialMode === 'FIRST20') {
        setFormData(prev => ({ ...prev, promoCode: 'FIRST20' }));
      } else if (['wash-fold', 'dry-cleaning', 'commercial', 'airbnb'].includes(initialMode)) {
        setFormData(prev => ({ ...prev, serviceType: initialMode }));
      }
    }
    // Set default pickup date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, pickupDate: dateStr }));
    setIsSubmitted(false);
  }, [isOpen, initialMode]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onBookingSuccess) {
        onBookingSuccess(mode === 'login' ? 'Logged in successfully!' : 'Pickup scheduled successfully! We sent confirmation details to your email.');
      }
    }, 700);
  };

  return (
    <div className="lce-modal-overlay" onClick={onClose}>
      <div className="lce-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="lce-modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        {isSubmitted ? (
          <div className="lce-modal-success">
            <div className="lce-success-icon-wrap">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3>{mode === 'login' ? 'Welcome Back!' : 'Pickup Confirmed!'}</h3>
            <p>
              {mode === 'login' 
                ? 'You have logged in to your Laundry Care Express account.' 
                : `Thank you, ${formData.name || 'valued customer'}! Our driver will arrive on ${formData.pickupDate} (${formData.pickupTime === 'morning' ? '8:00 AM - 12:00 PM' : '1:00 PM - 5:00 PM'}).`}
            </p>
            {formData.promoCode && (
              <div className="lce-applied-promo-tag">
                🏷️ Promo code <strong>{formData.promoCode}</strong> applied ($20 OFF)!
              </div>
            )}
            <button className="lce-btn-cyan full-width" onClick={onClose}>
              Done
            </button>
          </div>
        ) : mode === 'login' ? (
          <div className="lce-modal-login-form">
            <div className="lce-modal-header">
              <h3>Log In to Your Account</h3>
              <p>Manage pickups, update preferences, and view order receipts.</p>
            </div>
            <form onSubmit={handleSubmit} className="lce-modal-form">
              <div className="lce-form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="name@example.com" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                />
              </div>
              <div className="lce-form-group">
                <label>Password</label>
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Enter your password" 
                  required 
                />
              </div>
              <button type="submit" className="lce-btn-cyan full-width" disabled={isSubmitting}>
                {isSubmitting ? 'Logging In...' : 'LOG IN'}
              </button>
              <div className="lce-modal-switch">
                <span>New customer? </span>
                <button type="button" className="link-btn" onClick={() => setMode('pickup')}>
                  Schedule a Pickup
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="lce-modal-pickup-form">
            <div className="lce-modal-header">
              <h3>Schedule a Pickup</h3>
              <p>Doorstep pickup &amp; delivery with guaranteed next-day turnaround.</p>
            </div>

            <form onSubmit={handleSubmit} className="lce-modal-form">
              <div className="lce-form-row">
                <div className="lce-form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="e.g. Jessica Miller" 
                    required 
                    value={formData.name} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="lce-form-group">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="(555) 000-0000" 
                    required 
                    value={formData.phone} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="lce-form-row">
                <div className="lce-form-group">
                  <label>Street Address *</label>
                  <input 
                    type="text" 
                    name="address" 
                    placeholder="123 Main St, Apt 4B" 
                    required 
                    value={formData.address} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="lce-form-group zip-group">
                  <label>Zip Code *</label>
                  <input 
                    type="text" 
                    name="zip" 
                    placeholder="94103" 
                    maxLength={5} 
                    required 
                    value={formData.zip} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="lce-form-row">
                <div className="lce-form-group">
                  <label>Primary Service</label>
                  <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
                    <option value="wash-fold">Wash &amp; Fold Laundry</option>
                    <option value="dry-cleaning">Dry Cleaning</option>
                    <option value="commercial">Commercial Laundry</option>
                    <option value="airbnb">Airbnb &amp; Vacation Rentals</option>
                  </select>
                </div>
                <div className="lce-form-group">
                  <label>Pickup Date</label>
                  <input 
                    type="date" 
                    name="pickupDate" 
                    required 
                    value={formData.pickupDate} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="lce-form-row">
                <div className="lce-form-group">
                  <label>Preferred Window</label>
                  <select name="pickupTime" value={formData.pickupTime} onChange={handleChange}>
                    <option value="morning">Morning (8:00 AM &ndash; 12:00 PM)</option>
                    <option value="afternoon">Afternoon (1:00 PM &ndash; 5:00 PM)</option>
                    <option value="evening">Evening (5:00 PM &ndash; 8:00 PM)</option>
                  </select>
                </div>
                <div className="lce-form-group">
                  <label>Promo Code</label>
                  <input 
                    type="text" 
                    name="promoCode" 
                    placeholder="e.g. FIRST20" 
                    value={formData.promoCode} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="lce-form-group">
                <label>Special Instructions / Gate Code (Optional)</label>
                <input 
                  type="text" 
                  name="notes" 
                  placeholder="e.g. Leave bags on front porch, hypoallergenic detergent please" 
                  value={formData.notes} 
                  onChange={handleChange} 
                />
              </div>

              <button type="submit" className="lce-btn-cyan full-width" disabled={isSubmitting}>
                {isSubmitting ? 'Confirming Dispatch...' : 'CONFIRM & SCHEDULE PICKUP'}
              </button>

              <p className="lce-modal-secure-note">
                🔒 Free cancellation anytime before driver dispatch. 100% Satisfaction Guarantee.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
