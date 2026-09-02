import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Zap, Star } from 'lucide-react';

/** Difficulty badge color mapping */
const difficultyStyles = {
  Beginner:     'bg-emerald-50 text-emerald-700 border-emerald-100',
  Intermediate: 'bg-amber-50   text-amber-700   border-amber-100',
  Advanced:     'bg-rose-50    text-rose-700     border-rose-100',
};

/** Project type badge style */
const typeStyles = {
  'Mini Project':  'bg-slate-100 text-slate-600',
  'Major Project': 'bg-indigo-50 text-indigo-700',
  'Minor Project': 'bg-slate-100 text-slate-600',
};

export default function ProjectIdeaCard({ project }) {
  const {
    id,
    title,
    description,
    category,
    years,
    technologies,
    difficulty,
    type,
    popular,
  } = project;

  return (
    <article className="pb-reveal group bg-white border border-slate-200/90 rounded-xl p-6 card-hover flex flex-col justify-between gap-4 relative overflow-hidden">

      {/* Popular badge */}
      {popular && (
        <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-wider">
          <Star className="w-2.5 h-2.5 fill-indigo-400" aria-hidden="true" />
          Popular
        </span>
      )}

      {/* Top section */}
      <div>
        {/* Category label */}
        <p className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest mb-2">
          {category}
        </p>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-indigo-700 transition-colors duration-200 pr-16">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Meta tags */}
      <div className="space-y-3">
        {/* Year & type */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
            <GraduationCap className="w-3 h-3" aria-hidden="true" />
            {years.join(' / ')}
          </span>
          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${typeStyles[type] || typeStyles['Mini Project']}`}>
            {type}
          </span>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5" role="list" aria-label="Technologies">
          {technologies.map((tech) => (
            <span
              key={tech}
              role="listitem"
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium"
            >
              <Zap className="w-2.5 h-2.5 text-slate-400" aria-hidden="true" />
              {tech}
            </span>
          ))}
        </div>

        {/* Difficulty + CTA row */}
        <div className="flex items-center justify-between pt-1 border-t border-slate-100">
          <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border ${difficultyStyles[difficulty] || ''}`}>
            {difficulty}
          </span>

          <Link
            to={`/project-ideas/${id}`}
            className="pb-btn-arrow inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-150"
            aria-label={`View details for ${title}`}
          >
            <span>View Details</span>
            <ArrowRight className="pb-arrow-icon w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
