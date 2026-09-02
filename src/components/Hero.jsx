import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Layout, Code2, Award, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Badge — entrance: fade-down */}
            <div className="pb-hero-badge inline-flex items-center px-3.5 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-100/90 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-6">
              Academic Project Support for Indian Students
            </div>

            {/* Main Headline — entrance: fade-up */}
            <h1 className="pb-hero-headline text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-2xl">
              Have a Project Idea? Let&apos;s Build It Together.
            </h1>

            {/* Subtitle — entrance: fade-up */}
            <p className="pb-hero-subtitle mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Tell us what you need. We&apos;ll understand your requirements, discuss the project with you, and help turn your idea into a working academic project.
            </p>

            {/* Action Buttons — entrance: fade-up */}
            <div className="pb-hero-buttons mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/request-project"
                className="pb-btn-arrow inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0F172A] text-white text-base font-medium hover:bg-slate-800 hover:-translate-y-0.5 active:scale-[0.98] transition shadow-sm hover:shadow-md"
              >
                <span>Start Your Project</span>
                <ArrowRight className="pb-arrow-icon w-4 h-4" />
              </Link>
              
              <button
                onClick={scrollToHowItWorks}
                className="inline-flex items-center px-6 py-3.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-base font-medium hover:bg-slate-50 hover:text-slate-900 hover:-translate-y-0.5 transition"
              >
                How It Works
              </button>
            </div>
          </div>

          {/* Right Column: Your Project Journey Card — entrance: fade-left */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="pb-hero-card w-full max-w-md bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition">
              
              {/* Card Title */}
              <div className="text-center mb-6">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  Your Project Journey
                </span>
              </div>

              {/* Steps List */}
              <div className="space-y-3">
                
                {/* Step 1 */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 tracking-wider">
                      STEP 01 <span className="font-semibold text-slate-700 ml-1">IDEA</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                      You bring your concept or standard college prompt
                    </div>
                  </div>
                </div>

                {/* Connector */}
                <div className="flex justify-center -my-1 text-slate-300">
                  <ChevronDown className="w-4 h-4" />
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition">
                  <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center text-white flex-shrink-0">
                    <Layout className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 tracking-wider">
                      STEP 02 <span className="font-semibold text-slate-700 ml-1">PLAN</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                      We design technology stack &amp; architectural plan
                    </div>
                  </div>
                </div>

                {/* Connector */}
                <div className="flex justify-center -my-1 text-slate-300">
                  <ChevronDown className="w-4 h-4" />
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition">
                  <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center text-white flex-shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 tracking-wider">
                      STEP 03 <span className="font-semibold text-slate-700 ml-1">BUILD</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                      We create clean, commented code tailored to your needs
                    </div>
                  </div>
                </div>

                {/* Connector */}
                <div className="flex justify-center -my-1 text-slate-300">
                  <ChevronDown className="w-4 h-4" />
                </div>

                {/* Step 4 */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition">
                  <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center text-white flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 tracking-wider">
                      STEP 04 <span className="font-semibold text-slate-700 ml-1">PROJECT</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                      You receive functional system + documentation
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
