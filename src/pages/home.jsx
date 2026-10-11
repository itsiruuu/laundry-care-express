import { useEffect } from 'react';
import { initializeApp } from '../app.js';
import BookingModal from '../components/BookingModal.jsx';
import FAQ from '../components/FAQ.jsx';
import Features from '../components/Features.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Navbar from '../components/Navbar.jsx';
import OrderTracker from '../components/OrderTracker.jsx';
import PricingCalculator from '../components/PricingCalculator.jsx';
import Reviews from '../components/Reviews.jsx';
import Services from '../components/Services.jsx';
import ToastContainer from '../components/ToastContainer.jsx';

export default function Home() {
  useEffect(() => {
    initializeApp();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <PricingCalculator />
      <HowItWorks />
      <OrderTracker />
      <Features />
      <Reviews />
      <FAQ />
      <BookingModal />
      <ToastContainer />
      <Footer />
    </>
  );
}
