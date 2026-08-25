import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function IdeaSection() {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#EBF3FF] py-16 md:py-20 border-y border-blue-100/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Don&apos;t Know What Project to Build?
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          That&apos;s okay. You don&apos;t need a polished concept yet. Tell us your academic year and topics that interest you, and we&apos;ll help you select a viable project that satisfies your university guidelines.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/request-project"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0F172A] text-white text-sm font-medium hover:bg-slate-800 active:scale-[0.98] transition shadow-sm"
          >
            <span>Find a Project Idea</span>
            <Search className="w-4 h-4" />
          </Link>

          <button
            onClick={scrollToServices}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 hover:text-slate-900 transition shadow-sm"
          >
            Browse Popular Options
          </button>
        </div>

      </div>
    </section>
  );
}
