import React from 'react';
import { Code2, Smartphone, Cpu, Cloud, Database, GraduationCap } from 'lucide-react';
import { useScrollReveal, useScrollRevealGroup } from '../hooks/useScrollReveal';

export default function ServicesSection() {
  const headerRef = useScrollReveal(0.15);
  const gridRef = useScrollRevealGroup('.pb-reveal', 0.06);

  const services = [
    { title: 'Web Projects',          icon: Code2         },
    { title: 'Mobile Apps',           icon: Smartphone    },
    { title: 'AI & Machine Learning', icon: Cpu           },
    { title: 'Cloud & DevOps',        icon: Cloud         },
    { title: 'Database Projects',     icon: Database      },
    { title: 'Mini & Major Projects', icon: GraduationCap },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div ref={headerRef} className="pb-reveal text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
            HOW WE HELP
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
            What We Can Help You Build
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
            No project is too complex. Our experienced mentors guide you through coding and architectural design.
          </p>
        </div>

        {/* 3×2 Grid — staggered reveal */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="pb-reveal bg-white border border-slate-200/90 rounded-xl p-8 hover:border-indigo-300 hover:shadow-md transition card-hover flex flex-col justify-between h-44 sm:h-48 group cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-50/80 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition duration-200">
                  <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
