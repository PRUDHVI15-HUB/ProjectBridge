import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import IdeaSection from '../components/IdeaSection';
import ServicesSection from '../components/ServicesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import WhatYouGetSection from '../components/WhatYouGetSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="ProjectBridge — Academic Project Support for B.Tech Students"
        description="Empowering Indian B.Tech engineering students to design, develop, and present custom academic projects. Share your requirements and turn your idea into a working system."
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <IdeaSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhatYouGetSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
