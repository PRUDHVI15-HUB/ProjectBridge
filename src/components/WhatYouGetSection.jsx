import React from 'react';
import { Terminal, Code2, FileText, GraduationCap, Globe } from 'lucide-react';

export default function WhatYouGetSection() {
  const items = [
    {
      title: 'Working Project',
      description: 'A robust, fully functional application built perfectly to parameters.',
      icon: Terminal,
    },
    {
      title: 'Source Code',
      description: 'Well structured, clean code with detailed inline comments for easy understanding.',
      icon: Code2,
    },
    {
      title: 'Documentation',
      description: 'Syllabus compliant system design reports, database architecture, and usage guides.',
      icon: FileText,
    },
    {
      title: 'Viva Preparation',
      description: 'We explain how the codebase functions so you can present confidently.',
      icon: GraduationCap,
    },
    {
      title: 'Deployment Support',
      description: 'Complete support to host and demonstrate your project on a live URL.',
      icon: Globe,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            What You Get
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
            Everything you need to successfully fulfill and present your academic project requirements.
          </p>
        </div>

        {/* 5 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/80 rounded-xl p-6 hover:border-slate-300 hover:shadow-sm transition flex flex-col justify-start text-left"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
