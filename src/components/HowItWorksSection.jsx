import React from 'react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Tell Us',
      description: 'You share your basic project idea or requirements.',
    },
    {
      number: '02',
      title: 'We Talk',
      description: 'We discuss the project tech-stack, timeline, and simple pricing with you.',
    },
    {
      number: '03',
      title: 'We Build',
      description: 'Our experienced engineering team builds your project from scratch.',
    },
    {
      number: '04',
      title: 'You Receive',
      description: 'You get the working codebase alongside complete documentation.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
            An stress-free collaborative approach designed for busy B.Tech students.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              
              {/* Number Badge */}
              <div className="w-11 h-11 rounded-full bg-slate-100/90 border border-slate-200/80 flex items-center justify-center text-slate-900 font-bold text-sm mb-5 shadow-xs">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
