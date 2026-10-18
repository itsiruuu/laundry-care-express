import React, { useState } from 'react';

const reviewsData = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Verified Customer",
    avatar: "SM",
    stars: 5,
    text: "Laundry Care Express has been an absolute game changer for our busy family. Clothes return neatly folded, smelling fresh, and always delivered within 24 hours. We wouldn't trust anyone else!",
    source: "Google Review"
  },
  {
    id: 2,
    name: "David K.",
    role: "Verified Customer",
    avatar: "DK",
    stars: 5,
    text: "Top notch dry cleaning service! My dress shirts and business suits are pressed to perfection with crisp collars. The pickup and delivery scheduling through their website is so fast and seamless.",
    source: "Google Review"
  },
  {
    id: 3,
    name: "Elena R.",
    role: "Superhost / Vacation Rental",
    avatar: "ER",
    stars: 5,
    text: "We host multiple Airbnb properties and rely on their turnover linen service every week. Linens and towels are impeccably fresh, crisp, and packaged ready for our team. Saved us dozens of hours!",
    source: "Google Review"
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex(prev => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex(prev => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="lce-reviews-section" id="reviews">
      <div className="lce-container">
        <div className="lce-reviews-header">
          <h2 className="lce-reviews-title">
            Popular Features &amp; Reviews From Your Local Laundry Care Express
          </h2>
          <p className="lce-reviews-subtitle">
            See why 10,000+ satisfied customers trust us with their everyday laundry and dry cleaning.
          </p>
        </div>

        <div className="lce-reviews-carousel-wrap">
          <button 
            className="lce-carousel-arrow prev" 
            onClick={prevReview} 
            aria-label="Previous review"
          >
            &#8249;
          </button>

          <div className="lce-reviews-grid">
            {reviewsData.map((review, idx) => (
              <div 
                key={review.id} 
                className={`lce-review-card ${idx === currentIndex ? 'highlight' : ''}`}
              >
                <div className="lce-review-stars">
                  {'★'.repeat(review.stars)}
                </div>
                <p className="lce-review-quote">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="lce-review-author-wrap">
                  <div className="lce-review-author-info">
                    <div className="lce-avatar-circle">{review.avatar}</div>
                    <div>
                      <h4 className="lce-author-name">{review.name}</h4>
                      <span className="lce-author-role">{review.role}</span>
                    </div>
                  </div>
                  <div className="lce-google-badge">
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <span>Google</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="lce-carousel-arrow next" 
            onClick={nextReview} 
            aria-label="Next review"
          >
            &#8250;
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="lce-reviews-dots">
          {reviewsData.map((_, idx) => (
            <button
              key={idx}
              className={`lce-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
