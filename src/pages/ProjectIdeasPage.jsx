import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, SlidersHorizontal, ChevronDown, Flame } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ProjectIdeaCard from '../components/project-ideas/ProjectIdeaCard';
import ProjectFilters from '../components/project-ideas/ProjectFilters';
import { projectIdeas } from '../data/projectIdeas';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ── Default filter state ─────────────────────────────────── */
const DEFAULT_FILTERS = {
  branch:     'All Branches',
  year:       'All Years',
  type:       'All Types',
  technology: 'All Technologies',
  difficulty: 'All Levels',
};

/* ── Filter logic ─────────────────────────────────────────── */
function applyFilters(ideas, search, filters) {
  const q = search.toLowerCase().trim();

  return ideas.filter((p) => {
    // Search
    if (q) {
      const haystack = [
        p.title, p.description, p.category, ...p.technologies, ...p.branches,
      ].join(' ').toLowerCase();
      if (!haystack.includes(q)) return false;
    }

    // Branch
    if (filters.branch !== 'All Branches' && !p.branches.includes(filters.branch)) return false;

    // Year
    if (filters.year !== 'All Years' && !p.years.includes(filters.year)) return false;

    // Type — matches exact project type
    if (filters.type !== 'All Types' && p.type !== filters.type) return false;

    // Technology
    if (filters.technology !== 'All Technologies' && !p.technologies.includes(filters.technology)) return false;

    // Difficulty
    if (filters.difficulty !== 'All Levels' && p.difficulty !== filters.difficulty) return false;

    return true;
  });
}

/* ── Count active filters ─────────────────────────────────── */
function countActive(search, filters, isPopular) {
  let n = 0;
  if (isPopular) n++;
  if (search.trim()) n++;
  if (filters.branch     !== 'All Branches')     n++;
  if (filters.year       !== 'All Years')         n++;
  if (filters.type       !== 'All Types')         n++;
  if (filters.technology !== 'All Technologies')  n++;
  if (filters.difficulty !== 'All Levels')        n++;
  return n;
}

export default function ProjectIdeasPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isPopular = searchParams.get('filter') === 'popular';

  const [search, setSearch]   = useState('');
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleTogglePopular = (enable) => {
    const nextParams = new URLSearchParams(searchParams);
    if (enable) {
      nextParams.set('filter', 'popular');
    } else {
      nextParams.delete('filter');
    }
    setSearchParams(nextParams);
  };

  const popularCount = useMemo(
    () => projectIdeas.filter((p) => p.popular).length,
    []
  );

  // If ?filter=popular is in the URL, scope to popular projects
  const ideasPool = useMemo(
    () => (isPopular ? projectIdeas.filter((p) => p.popular) : projectIdeas),
    [isPopular]
  );

  const filtered = useMemo(
    () => applyFilters(ideasPool, search, filters),
    [ideasPool, search, filters]
  );

  const activeCount = countActive(search, filters, isPopular);

  const clearAll = () => {
    setSearch('');
    setFilters(DEFAULT_FILTERS);
    if (searchParams.has('filter')) {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete('filter');
      setSearchParams(nextParams);
    }
  };

  // Scroll-reveal refs
  const heroRef = useScrollReveal(0.1);
  const searchRef = useScrollReveal(0.1);
  const gridRef = useRef(null);

  // Re-reveal cards when filtered list changes
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.pb-reveal');
    cards.forEach((c) => c.classList.remove('pb-revealed'));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      cards.forEach((c) => c.classList.add('pb-revealed'));
      return;
    }
    const timer = setTimeout(() => {
      cards.forEach((c, i) => {
        setTimeout(() => c.classList.add('pb-revealed'), i * 50);
      });
    }, 40);
    return () => clearTimeout(timer);
  }, [filtered]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <SEO
        title={isPopular ? "Popular Software Project Ideas — Projvanta" : "Project Ideas for B.Tech Students — Projvanta"}
        description="Explore 50+ academic software project ideas for CSE, IT, and AI & ML. Filter by branch, year, technology, and difficulty. Find your perfect B.Tech software project."
      />
      <Navbar />

      <main className="grow">

        {/* ── PAGE HERO ─────────────────────────────────────── */}
        <section className="bg-white border-b border-slate-100 pt-12 pb-14">
          <div
            ref={heroRef}
            className="pb-reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100">
              Project Ideas
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {isPopular ? "Browse Popular Project Ideas" : "Find a Project You'll Actually Enjoy Building."}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              {isPopular
                ? "Handpicked popular software projects frequently requested by engineering students. Filter by branch, year, or technology to narrow down your options."
                : "Not sure what to build? Explore practical project ideas based on your branch, year, interests, and technology."}
            </p>
          </div>
        </section>

        {/* ── SEARCH + FILTER TRIGGER (mobile) ─────────────── */}
        <div className="bg-white border-b border-slate-100 sticky top-20 z-40 shadow-sm">
          <div
            ref={searchRef}
            className="pb-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3"
          >
            {/* Search */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                id="idea-search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search project ideas, tech, category..."
                className="w-full pl-9 pr-9 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition"
                aria-label="Search project ideas"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setDrawerOpen((v) => !v)}
              className="lg:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition relative cursor-pointer"
              aria-expanded={drawerOpen}
              aria-controls="mobile-filter-drawer"
              aria-label="Toggle filters"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              {activeCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {activeCount}
                </span>
              )}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${drawerOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {/* Active count label — desktop */}
            <p className="hidden lg:block text-xs text-slate-400 whitespace-nowrap shrink-0">
              {filtered.length} idea{filtered.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Mobile filter drawer */}
          {drawerOpen && (
            <div
              id="mobile-filter-drawer"
              className="lg:hidden bg-white border-t border-slate-100 px-4 sm:px-6 py-5"
            >
              <ProjectFilters
                filters={filters}
                onChange={setFilters}
                onClear={clearAll}
                activeCount={activeCount}
                isPopular={isPopular}
                onTogglePopular={handleTogglePopular}
              />
            </div>
          )}
        </div>

        {/* ── MAIN CONTENT: sidebar + grid ─────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex gap-8">

            {/* Desktop sidebar filters */}
            <aside className="hidden lg:block w-60 shrink-0">
              <div className="sticky top-38 bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs">
                <ProjectFilters
                  filters={filters}
                  onChange={setFilters}
                  onClear={clearAll}
                  activeCount={activeCount}
                  isPopular={isPopular}
                  onTogglePopular={handleTogglePopular}
                />
              </div>
            </aside>

            {/* Cards grid */}
            <div className="flex-1 min-w-0">
              {/* Tab switcher: All Projects vs Popular Options */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-slate-200/80">
                <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200/80 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => handleTogglePopular(false)}
                    className={`px-3.5 py-1.5 rounded-lg transition cursor-pointer ${
                      !isPopular
                        ? 'bg-white text-slate-900 shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    All Projects ({projectIdeas.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTogglePopular(true)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition cursor-pointer ${
                      isPopular
                        ? 'bg-white text-orange-600 shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-400" />
                    <span>Popular ({popularCount})</span>
                  </button>
                </div>

                <div className="text-xs text-slate-500">
                  Showing <strong className="text-slate-900 font-semibold">{filtered.length}</strong> {filtered.length === 1 ? 'project' : 'projects'}
                  {isPopular && <span className="text-orange-600 font-semibold ml-1">· Popular filter active</span>}
                </div>
              </div>

              {/* Popular banner if active */}
              {isPopular && (
                <div className="mb-6 px-4 py-3 rounded-xl bg-orange-50/80 border border-orange-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-orange-500 fill-orange-400 shrink-0" aria-hidden="true" />
                    <span className="text-slate-800 text-xs sm:text-sm font-medium">
                      Showing <strong className="text-slate-900 font-semibold">popular project ideas</strong> requested by students.
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleTogglePopular(false)}
                    className="text-xs text-orange-700 hover:text-orange-900 font-semibold underline underline-offset-2 shrink-0 cursor-pointer"
                  >
                    Show all ({projectIdeas.length})
                  </button>
                </div>
              )}

              {filtered.length > 0 ? (
                <div
                  ref={gridRef}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                  role="list"
                  aria-label="Project ideas"
                >
                  {filtered.map((project) => (
                    <div key={project.id} role="listitem">
                      <ProjectIdeaCard project={project} />
                    </div>
                  ))}
                </div>
              ) : (
                /* Empty state */
                <div className="text-center py-20">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-5">
                    <Search className="w-7 h-7 text-slate-400" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2">No project ideas found</h2>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto mb-6">
                    {isPopular
                      ? "No popular project ideas matched your filter criteria. Try clearing some filters or browsing all projects."
                      : "Try changing your filters or searching for another topic."}
                  </p>
                  <button
                    onClick={clearAll}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0F172A] text-white text-sm font-medium hover:bg-slate-800 transition cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
