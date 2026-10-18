import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Comparison from '../components/Comparison.jsx';
import Reviews from '../components/Reviews.jsx';
import Advantage from '../components/Advantage.jsx';
import SpecialOffers from '../components/SpecialOffers.jsx';
import PromoBanner from '../components/PromoBanner.jsx';
import FAQ from '../components/FAQ.jsx';
import Footer from '../components/Footer.jsx';
import BookingModal from '../components/BookingModal.jsx';
import ToastContainer from '../components/ToastContainer.jsx';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingMode, setBookingMode] = useState('pickup');
  const [toastMessage, setToastMessage] = useState(null);

  const handleOpenBooking = (mode = 'pickup') => {
    setBookingMode(mode);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  const handleBookingSuccess = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  return (
    <div className="lce-landing-page">
      <Navbar onOpenBooking={handleOpenBooking} />
      <main id="main-content">
        <Hero onOpenBooking={handleOpenBooking} />
        <Services onOpenBooking={handleOpenBooking} />
        <Comparison onOpenBooking={handleOpenBooking} />
        <Reviews />
        <Advantage onOpenBooking={handleOpenBooking} />
        <SpecialOffers onOpenBooking={handleOpenBooking} />
        <PromoBanner onOpenBooking={handleOpenBooking} />
        <FAQ />
      </main>
      <Footer onOpenBooking={handleOpenBooking} />

      <BookingModal 
        isOpen={bookingOpen} 
        initialMode={bookingMode} 
        onClose={handleCloseBooking} 
        onBookingSuccess={handleBookingSuccess} 
      />

      <ToastContainer 
        toast={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
}
