import React from 'react';

export default function RequestHero() {
  return (
    <div className="text-center max-w-3xl mx-auto pt-8 pb-10 sm:pt-12 sm:pb-12 px-4">
      {/* Small badge */}
      <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-indigo-50/90 border border-indigo-100/90 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-5">
        Request Your Project
      </div>

      {/* Main heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
        Tell Us What You Need.
      </h1>

      {/* Supporting text */}
      <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
        Have a project idea or a requirement from your college? Tell us about it. We&apos;ll understand your requirements, discuss the details with you, and take the project forward from there.
      </p>
    </div>
  );
}
