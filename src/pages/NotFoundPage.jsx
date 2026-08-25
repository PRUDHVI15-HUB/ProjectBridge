import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileQuestion } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <SEO
        title="Page Not Found — ProjectBridge"
        description="The page you are looking for does not exist or has been moved. Return to ProjectBridge homepage."
      />
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-sm space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
            <FileQuestion className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              404 Error
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Page Not Found
            </h1>
            <p className="text-sm text-slate-500 leading-relaxed">
              The page you are looking for doesn&apos;t exist or may have been moved.
            </p>
          </div>

          <div>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-[#0F172A] text-white text-sm font-semibold hover:bg-slate-800 active:scale-[0.98] transition shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
