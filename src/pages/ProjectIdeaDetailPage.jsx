import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, CheckCircle, Zap, GraduationCap,
  Users, TrendingUp, Lightbulb,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { projectIdeas } from '../data/projectIdeas';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getProjectIdeaWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

/** Difficulty badge styles */
const difficultyStyles = {
  Beginner:     'bg-emerald-50 text-emerald-700 border-emerald-100',
  Intermediate: 'bg-amber-50   text-amber-700   border-amber-100',
  Advanced:     'bg-rose-50    text-rose-700     border-rose-100',
};

export default function ProjectIdeaDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projectIdeas.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  const handleRequestProject = () => {
    if (project) {
      const url = getProjectIdeaWhatsAppUrl(project);
      openWhatsApp(url);
    }
  };

  // 404 handling
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
        <Navbar />
        <main className="flex-grow flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">Project Not Found</h1>
            <p className="text-slate-500 mb-6">We couldn&apos;t find that project idea. It may have been moved or removed.</p>
            <Link
              to="/project-ideas"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0F172A] text-white text-sm font-medium hover:bg-slate-800 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Project Ideas
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const heroRef    = useScrollReveal(0.1);
  const metaRef    = useScrollReveal(0.1);
  const featRef    = useScrollReveal(0.1);
  const futureRef  = useScrollReveal(0.1);
  const ctaRef     = useScrollReveal(0.1);

  const {
    title, description, overview, category, branches, years,
    techDetails, difficulty, type, features, futureImprovements, suitableFor,
  } = project;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <SEO
        title={`${title} — Project Ideas | ProjectBridge`}
        description={description}
      />
      <Navbar />

      <main className="flex-grow">

        {/* ── BACK NAV ────────────────────────────────────── */}
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={() => navigate(-1)}
              className="pb-btn-arrow inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition font-medium group"
              aria-label="Go back to project ideas"
            >
              <ArrowLeft className="pb-arrow-icon w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Project Ideas</span>
            </button>
          </div>
        </div>

        {/* ── DETAIL HERO ──────────────────────────────────── */}
        <section className="bg-white pt-10 pb-12 border-b border-slate-100">
          <div
            ref={heroRef}
            className="pb-reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            {/* Category & type pills */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100">
                {category}
              </span>
              <span className="text-xs font-semibold text-slate-600 px-3 py-1 rounded-full bg-slate-100">
                {type}
              </span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${difficultyStyles[difficulty] || ''}`}>
                {difficulty}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              {overview}
            </p>
          </div>
        </section>

        {/* ── META GRID ────────────────────────────────────── */}
        <section className="py-10 border-b border-slate-100 bg-white">
          <div
            ref={metaRef}
            className="pb-reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {/* Suitable for */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-indigo-600" />
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Suitable For</h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{suitableFor}</p>
            </div>

            {/* Branches */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Branches</h2>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {branches.map((b) => (
                  <span key={b} className="text-xs font-medium px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                    {b}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {years.map((y) => (
                  <span key={y} className="text-xs font-medium px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700">
                    {y}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-indigo-600" />
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Technologies</h2>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {techDetails.map((t) => (
                  <span key={t} className="text-xs font-medium px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────── */}
        <section className="py-10 border-b border-slate-100">
          <div
            ref={featRef}
            className="pb-reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-bold text-slate-900">Core Features</h2>
            </div>
            <ul className="space-y-3">
              {features.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200/80"
                >
                  <span className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-slate-700">{feat}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FUTURE IMPROVEMENTS ──────────────────────────── */}
        <section className="py-10 border-b border-slate-100">
          <div
            ref={futureRef}
            className="pb-reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-bold text-slate-900">Possible Future Improvements</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {futureImprovements.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-4 bg-white rounded-xl border border-slate-200/80"
                >
                  <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-14">
          <div
            ref={ctaRef}
            className="pb-reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="bg-[#0B1528] rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Interested in This Project?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                Share your requirements with us. We&apos;ll discuss the technology stack, timeline, and help you build and understand this project from scratch.
              </p>
              <button
                onClick={handleRequestProject}
                className="pb-btn-arrow inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 text-base font-bold hover:bg-slate-100 hover:-translate-y-0.5 active:scale-[0.98] transition shadow-lg hover:shadow-xl cursor-pointer"
                aria-label={`Request ${title} on WhatsApp`}
              >
                <span>Request This Project</span>
                <ArrowRight className="pb-arrow-icon w-4 h-4" />
              </button>
              <p className="mt-4 text-xs text-slate-400">
                Opens WhatsApp directly with this project&apos;s details pre-filled so you can connect with our mentors.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
