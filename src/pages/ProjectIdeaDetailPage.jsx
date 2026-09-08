import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, CheckCircle, Zap, GraduationCap,
  Users, TrendingUp, Lightbulb,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import RequestSuccess from '../components/project-request/RequestSuccess';
import { projectIdeas } from '../data/projectIdeas';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getProjectIdeaEmailUrl, openEmailClient } from '../utils/email';

/** Difficulty badge styles */
const difficultyStyles = {
  Beginner:     'bg-emerald-50 text-emerald-700 border-emerald-100',
  Intermediate: 'bg-amber-50   text-amber-700   border-amber-100',
  Advanced:     'bg-rose-50    text-rose-700     border-rose-100',
};

export default function ProjectIdeaDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailUrl, setEmailUrl] = useState('');

  const project = projectIdeas.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId, isSubmitted]);

  const handleRequestProject = () => {
    if (project) {
      const url = getProjectIdeaEmailUrl(project);
      setEmailUrl(url);
      openEmailClient(url);
      setTimeout(() => {
        setIsSubmitted(true);
      }, 400);
    }
  };

  const heroRef    = useScrollReveal(0.1);
  const metaRef    = useScrollReveal(0.1);
  const featRef    = useScrollReveal(0.1);
  const futureRef  = useScrollReveal(0.1);
  const ctaRef     = useScrollReveal(0.1);

  // 404 handling
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
        <Navbar />
        <main className="grow flex items-center justify-center px-4">
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

  const {
    title, description, overview, category, branches, years,
    techDetails, difficulty, type, features, futureImprovements, suitableFor,
  } = project;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <SEO
        title={isSubmitted ? "Request Submitted — ProjectBridge" : `${title} — Project Ideas | ProjectBridge`}
        description={description}
      />
      <Navbar />

      <main className="grow">
        {isSubmitted ? (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <RequestSuccess
              emailUrl={emailUrl}
              onReset={() => {
                setIsSubmitted(false);
              }}
            />
          </div>
        ) : (
          <>
            {/* ── BACK NAV ────────────────────────────────────── */}
            <div className="bg-white border-b border-slate-100">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <button
                  onClick={() => navigate(-1)}
                  className="pb-btn-arrow inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition font-medium group cursor-pointer"
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
                  <span className="text-xs font-medium text-slate-500 px-3 py-1 rounded-full bg-slate-100">
                    {type}
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${difficultyStyles[difficulty] || ''}`}>
                    {difficulty}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4">
                  {title}
                </h1>

                {/* Short description */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                  {description}
                </p>
              </div>
            </section>

            {/* ── METADATA STRIP ───────────────────────────────── */}
            <section className="bg-slate-50 border-b border-slate-200/80 py-6">
              <div
                ref={metaRef}
                className="pb-reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {/* Branches */}
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Target Branches
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {branches.join(', ')}
                      </span>
                    </div>
                  </div>

                  {/* Years */}
                  <div className="flex items-start gap-2.5">
                    <Users className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Suitable For
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {years.join(', ')}
                      </span>
                    </div>
                  </div>

                  {/* Level */}
                  <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                    <TrendingUp className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Complexity
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {difficulty} · {type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── OVERVIEW ─────────────────────────────────────── */}
            <section className="py-10 border-b border-slate-100 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Project Overview
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {overview}
                </p>
                {suitableFor && (
                  <div className="mt-4 p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs sm:text-sm text-indigo-800">
                    <strong className="font-semibold">Ideal candidate:</strong> {suitableFor}
                  </div>
                )}
              </div>
            </section>

            {/* ── TECH STACK ───────────────────────────────────── */}
            <section className="py-10 border-b border-slate-100 bg-[#F8FAFC]">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {techDetails.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200/90 text-slate-700 text-sm font-semibold shadow-xs"
                    >
                      <Zap className="w-3.5 h-3.5 text-indigo-500" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* ── CORE FEATURES ────────────────────────────────── */}
            <section className="py-10 border-b border-slate-100 bg-white">
              <div
                ref={featRef}
                className="pb-reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
                  What You&apos;ll Build &amp; Learn
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/70"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-normal">{feat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── FUTURE IMPROVEMENTS ──────────────────────────── */}
            <section className="py-10 border-b border-slate-100 bg-[#F8FAFC]">
              <div
                ref={futureRef}
                className="pb-reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
                  Suggested Future Extensions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {futureImprovements.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-4 bg-white rounded-xl border border-slate-200/80"
                    >
                      <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
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
                    aria-label={`Request ${title} via Email`}
                  >
                    <span>Request This Project</span>
                    <ArrowRight className="pb-arrow-icon w-4 h-4" />
                  </button>

                  <p className="mt-4 text-xs text-slate-400">
                    Opens your email client with this project&apos;s details pre-filled so you can connect with our team.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
