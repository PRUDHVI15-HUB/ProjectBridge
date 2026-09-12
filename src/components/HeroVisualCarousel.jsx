import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, Layout, Code2, Award, ChevronDown, Play, Sparkles } from 'lucide-react';

const SLIDE_DURATION = 10000; // 10 seconds per visual

export default function HeroVisualCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [isInViewport, setIsInViewport] = useState(true);

  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // 1. Intersection Observer: Pause carousel & video if Hero scrolls out of viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 2. Timer: Automatically cycle every 10 seconds when visible
  useEffect(() => {
    if (!isInViewport) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [currentSlide, isInViewport]);

  // 3. Video Playback Management on slide changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (currentSlide === 0 && isInViewport) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setAutoplayBlocked(false);
          })
          .catch(() => {
            // Browser blocked autoplay — poster frame is displayed gracefully
            setAutoplayBlocked(true);
          });
      }
    } else {
      video.pause();
    }
  }, [currentSlide, isInViewport]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setIsVideoPlaying(true);
          setAutoplayBlocked(false);
        })
        .catch(() => {});
    }
  };

  return (
    <div
      ref={containerRef}
      className="pb-hero-card w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition relative overflow-hidden flex flex-col justify-between"
      style={{ minHeight: '468px' }}
      aria-roledescription="carousel"
      aria-label="Projvanta overview and project journey"
    >
      {/* ─────────────────────────────────────────────────────────────
          SLIDE 0: Video Showcase
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`pb-carousel-fade flex flex-col justify-between h-full p-6 sm:p-7 ${
          currentSlide === 0
            ? 'opacity-100 scale-100 relative z-10'
            : 'opacity-0 scale-[0.98] absolute inset-0 z-0 pointer-events-none'
        }`}
        aria-hidden={currentSlide !== 0}
      >
        <div>
          {/* Card Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Project Showcase
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-indigo-700 bg-indigo-50/90 border border-indigo-100 px-2.5 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3 text-indigo-500" />
              0:10 Preview
            </span>
          </div>

          {/* Video Player Container */}
          <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-200/90 shadow-xs aspect-video group">
            <video
              ref={videoRef}
              src="/projvanta-hero-video.mp4"
              poster="/projvanta-hero-poster.jpg"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
              className="w-full h-full object-cover"
              aria-label="Projvanta academic project overview video"
            />

            {/* Fallback button if browser blocked autoplay */}
            {autoplayBlocked && !isVideoPlaying && (
              <button
                type="button"
                onClick={handleManualPlay}
                className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[2px] transition hover:bg-black/45 cursor-pointer"
                aria-label="Play video"
              >
                <div className="w-12 h-12 rounded-full bg-white/95 text-indigo-600 flex items-center justify-center shadow-lg transform hover:scale-105 transition">
                  <Play className="w-5 h-5 ml-0.5 fill-indigo-600" />
                </div>
              </button>
            )}
          </div>

          {/* Video Description & Highlights */}
          <div className="mt-4 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">Need a B.Tech Academic Project?</span>
              <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                Muted • Auto-plays
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              We turn your requirements into working software with custom architecture, code, and documentation.
            </p>
          </div>

          {/* Value Badges */}
          <div className="mt-3.5 grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-slate-50/80 border border-slate-100 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></span>
              <span className="text-xs text-slate-700 font-medium truncate">Clean Custom Code</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50/80 border border-slate-100 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></span>
              <span className="text-xs text-slate-700 font-medium truncate">Viva Guidance</span>
            </div>
          </div>
        </div>

        {/* Carousel Indicator / Progress */}
        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => goToSlide(0)}
              className="relative h-2 rounded-full overflow-hidden bg-slate-200 transition-all cursor-pointer w-10"
              aria-label="Slide 1: Video Preview"
            >
              {currentSlide === 0 && (
                <div key={currentSlide} className="h-full bg-indigo-600 rounded-full pb-progress-active" />
              )}
            </button>
            <button
              type="button"
              onClick={() => goToSlide(1)}
              className="relative h-2 rounded-full overflow-hidden bg-slate-200 transition-all cursor-pointer w-7"
              aria-label="Slide 2: Project Journey"
            />
          </div>
          <span className="text-[11px] text-slate-400 font-medium">
            1 of 2 • Video Preview
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 1: Your Project Journey (Existing 4-Step Card)
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`pb-carousel-fade flex flex-col justify-between h-full p-6 sm:p-7 ${
          currentSlide === 1
            ? 'opacity-100 scale-100 relative z-10'
            : 'opacity-0 scale-[0.98] absolute inset-0 z-0 pointer-events-none'
        }`}
        aria-hidden={currentSlide !== 1}
      >
        <div>
          {/* Card Header */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Your Project Journey
            </span>
            <span className="text-[11px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
              4 Stages
            </span>
          </div>

          {/* Steps List */}
          <div className="space-y-2.5">
            {/* Step 1 */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                <Lightbulb className="w-4 h-4" />
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
            <div className="flex justify-center -my-1.5 text-slate-300">
              <ChevronDown className="w-3.5 h-3.5" />
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition">
              <div className="w-9 h-9 rounded-lg bg-[#0F172A] flex items-center justify-center text-white shrink-0">
                <Layout className="w-4 h-4" />
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
            <div className="flex justify-center -my-1.5 text-slate-300">
              <ChevronDown className="w-3.5 h-3.5" />
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition">
              <div className="w-9 h-9 rounded-lg bg-[#0F172A] flex items-center justify-center text-white shrink-0">
                <Code2 className="w-4 h-4" />
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
            <div className="flex justify-center -my-1.5 text-slate-300">
              <ChevronDown className="w-3.5 h-3.5" />
            </div>

            {/* Step 4 */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition">
              <div className="w-9 h-9 rounded-lg bg-[#0F172A] flex items-center justify-center text-white shrink-0">
                <Award className="w-4 h-4" />
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

        {/* Carousel Indicator / Progress */}
        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => goToSlide(0)}
              className="relative h-2 rounded-full overflow-hidden bg-slate-200 transition-all cursor-pointer w-7"
              aria-label="Slide 1: Video Preview"
            />
            <button
              type="button"
              onClick={() => goToSlide(1)}
              className="relative h-2 rounded-full overflow-hidden bg-slate-200 transition-all cursor-pointer w-10"
              aria-label="Slide 2: Project Journey"
            >
              {currentSlide === 1 && (
                <div key={currentSlide} className="h-full bg-indigo-600 rounded-full pb-progress-active" />
              )}
            </button>
          </div>
          <span className="text-[11px] text-slate-400 font-medium">
            2 of 2 • Project Journey
          </span>
        </div>
      </div>
    </div>
  );
}
