import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RequestHero from '../components/project-request/RequestHero';
import RequestForm from '../components/project-request/RequestForm';
import SEO from '../components/SEO';

export default function RequestProjectPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <SEO
        title="Request a Project — ProjectBridge"
        description="Submit your academic project requirements to ProjectBridge. We review your specifications, discuss the tech stack and timeline, and help you build your project."
      />
      <Navbar />

      <main className="flex-grow pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RequestHero />
          <RequestForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
