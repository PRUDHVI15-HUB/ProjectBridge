import React from 'react';
import { X, SlidersHorizontal } from 'lucide-react';
import { BRANCHES, YEARS, TYPES, TECHNOLOGIES, DIFFICULTIES } from '../../data/projectIdeas';

/**
 * ProjectFilters
 *
 * Renders filter dropdowns/pill groups for branch, year, type, technology, difficulty.
 * On mobile the filters live inside a collapsible drawer triggered by parent.
 */
export default function ProjectFilters({ filters, onChange, onClear, activeCount }) {
  const { branch, year, type, technology, difficulty } = filters;

  const handleChange = (key, value) => onChange({ ...filters, [key]: value });

  const selectClass =
    'w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition cursor-pointer hover:border-slate-300';

  return (
    <div>
      {/* Header row with title + clear */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-slate-500" aria-hidden="true" />
          <span className="text-sm font-semibold text-slate-700">Filters</span>
          {activeCount > 0 && (
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold">
              {activeCount}
            </span>
          )}
        </div>
        {activeCount > 0 && (
          <button
            onClick={onClear}
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-rose-600 transition font-medium"
            aria-label="Clear all filters"
          >
            <X className="w-3.5 h-3.5" />
            Clear all
          </button>
        )}
      </div>

      {/* Filter controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">

        {/* Branch */}
        <div>
          <label htmlFor="filter-branch" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Branch
          </label>
          <select
            id="filter-branch"
            value={branch}
            onChange={(e) => handleChange('branch', e.target.value)}
            className={selectClass}
          >
            {BRANCHES.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Year */}
        <div>
          <label htmlFor="filter-year" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Year of Study
          </label>
          <select
            id="filter-year"
            value={year}
            onChange={(e) => handleChange('year', e.target.value)}
            className={selectClass}
          >
            {YEARS.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="filter-type" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Project Type
          </label>
          <select
            id="filter-type"
            value={type}
            onChange={(e) => handleChange('type', e.target.value)}
            className={selectClass}
          >
            {TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Technology */}
        <div>
          <label htmlFor="filter-tech" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Technology
          </label>
          <select
            id="filter-tech"
            value={technology}
            onChange={(e) => handleChange('technology', e.target.value)}
            className={selectClass}
          >
            {TECHNOLOGIES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <label htmlFor="filter-difficulty" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Difficulty
          </label>
          <select
            id="filter-difficulty"
            value={difficulty}
            onChange={(e) => handleChange('difficulty', e.target.value)}
            className={selectClass}
          >
            {DIFFICULTIES.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
}
