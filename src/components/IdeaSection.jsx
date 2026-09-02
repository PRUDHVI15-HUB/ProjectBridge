import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Flame } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function IdeaSection() {
  const ref = useScrollReveal(0.15);

  return (
    <section className="bg-[#EBF3FF] py-16 md:py-20 border-y border-blue-100/60">
      <div
        ref={ref}
        className="pb-reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
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

          {/* Button 1: navigates to /project-ideas */}
          <Link
            to="/project-ideas"
            className="pb-btn-arrow inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0F172A] text-white text-sm font-medium hover:bg-slate-800 hover:-translate-y-0.5 active:scale-[0.98] transition shadow-sm hover:shadow-md"
          >
            <span>Find a Project Idea</span>
            <Search className="pb-arrow-icon w-4 h-4" />
          </Link>

          {/* Button 2: navigates to /project-ideas?filter=popular */}
          <Link
            to="/project-ideas?filter=popular"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 hover:text-slate-900 hover:-translate-y-0.5 transition shadow-sm"
          >
            <Flame className="w-4 h-4 text-orange-500" aria-hidden="true" />
            <span>Browse Popular Options</span>
          </Link>

        </div>
      </div>
    </section>
  );
}
