import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RequestHero from '../components/project-request/RequestHero';
import RequestForm from '../components/project-request/RequestForm';
import RequestSuccess from '../components/project-request/RequestSuccess';
import SEO from '../components/SEO';

export default function RequestProjectPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmailUrl, setSubmittedEmailUrl] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [isSubmitted]);

  const handleSubmitSuccess = (_formData, emailUrl) => {
    setSubmittedEmailUrl(emailUrl || '');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedEmailUrl('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <SEO
        title={isSubmitted ? "Request Submitted — Projvanta" : "Request a Project — Projvanta"}
        description="Submit your academic project requirements to Projvanta. We review your specifications, discuss the tech stack and timeline, and help you build your project."
      />
      <Navbar />

      <main className="grow pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <div className="pt-10 sm:pt-14">
              <RequestSuccess
                emailUrl={submittedEmailUrl}
                onReset={handleReset}
              />
            </div>
          ) : (
            <>
              <RequestHero />
              <RequestForm onSubmitSuccess={handleSubmitSuccess} />
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
