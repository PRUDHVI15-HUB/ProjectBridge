import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CtaSection() {
  const ref = useScrollReveal(0.15);

  return (
    <section className="bg-[#0B1528] py-20 md:py-24 text-center">
      <div
        ref={ref}
        className="pb-reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          Ready to Start Your Project?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Tell us your idea and we&apos;ll handle the architectural layout, codebase creation, and formal documentation.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            to="/request-project"
            className="pb-btn-arrow inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-slate-900 text-sm sm:text-base font-semibold hover:bg-slate-100 hover:-translate-y-0.5 active:scale-[0.98] transition shadow-md hover:shadow-lg"
          >
            <span>Start Your Project</span>
            <ArrowRight className="pb-arrow-icon w-4 h-4 text-slate-900" />
          </Link>
        </div>
      </div>
    </section>
  );
}
