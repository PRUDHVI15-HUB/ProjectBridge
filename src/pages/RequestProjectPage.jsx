import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RequestHero from '../components/project-request/RequestHero';
import RequestForm from '../components/project-request/RequestForm';
import RequestSuccess from '../components/project-request/RequestSuccess';
import SEO from '../components/SEO';

export default function RequestProjectPage() {
  const [formData, setFormData] = useState(null);
  const [isSuccessView, setIsSuccessView] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [isSuccessView]);

  const handleSubmitSuccess = (data, url) => {
    setFormData(data);
    setWhatsAppUrl(url || '');
    setIsSuccessView(true);
  };

  const handleEditDetails = () => {
    setIsSuccessView(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <SEO
        title="Request a Project — ProjectBridge"
        description="Submit your academic project requirements to ProjectBridge. We review your specifications, discuss the tech stack and timeline, and help you build your project."
      />
      <Navbar />

      <main className="flex-grow pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSuccessView && formData ? (
            <div className="pt-12 sm:pt-16">
              <RequestSuccess 
                submittedData={formData} 
                whatsAppUrl={whatsAppUrl} 
                onReset={handleEditDetails} 
              />
            </div>
          ) : (
            <div>
              <RequestHero />
              <RequestForm 
                onSubmitSuccess={handleSubmitSuccess} 
                initialData={formData} 
              />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
