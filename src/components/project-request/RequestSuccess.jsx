import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, RotateCcw, Mail } from 'lucide-react';
import { openEmailClient } from '../../utils/email';

export default function RequestSuccess({ emailUrl, onReset }) {
  const handleReopenEmail = () => {
    if (emailUrl) {
      openEmailClient(emailUrl);
    }
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-xs max-w-2xl mx-auto text-center"
    >
      {/* 1. Success Icon — scale/pop animation */}
      <div className="pb-success-icon w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-6 shadow-xs">
        <CheckCircle className="w-8 h-8" aria-hidden="true" />
      </div>

      {/* 2. Main Heading */}
      <h1 className="pb-success-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
        Request Submitted Successfully!
      </h1>

      {/* 3. Supporting Message */}
      <p className="pb-success-body text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto mb-8">
        Thank you for choosing ProjectBridge. Your project requirements have been submitted. Our team will review your request and get in touch with you soon.
      </p>

      {/* 4. What Happens Next Section */}
      <div className="pb-success-steps mb-8 text-left bg-slate-50/80 border border-slate-200/80 rounded-xl p-5 sm:p-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 text-center sm:text-left">
          What Happens Next?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {/* Step 01 */}
          <div className="bg-white p-4 rounded-lg border border-slate-200/80 shadow-2xs flex flex-col">
            <span className="text-xs font-bold text-indigo-600 mb-1.5">
              01 — We Review
            </span>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our team reviews your project requirements.
            </p>
          </div>

          {/* Step 02 */}
          <div className="bg-white p-4 rounded-lg border border-slate-200/80 shadow-2xs flex flex-col">
            <span className="text-xs font-bold text-indigo-600 mb-1.5">
              02 — We Contact You
            </span>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We&apos;ll get in touch with you to discuss your project.
            </p>
          </div>

          {/* Step 03 */}
          <div className="bg-white p-4 rounded-lg border border-slate-200/80 shadow-2xs flex flex-col">
            <span className="text-xs font-bold text-indigo-600 mb-1.5">
              03 — We Build
            </span>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Once everything is confirmed, we&apos;ll start working on your project.
            </p>
          </div>
        </div>

        {/* 5. Response Expectation Reassurance */}
        <p className="mt-4 text-xs text-slate-500 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
          <span>We&apos;ll contact you using the details you provided.</span>
        </p>
      </div>

      {/* 6. Action Buttons */}
      <div className="pb-success-actions flex flex-col sm:flex-row items-center justify-center gap-3">
        {/* Primary Action */}
        <Link
          to="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0F172A] text-white text-sm font-semibold hover:bg-slate-800 hover:-translate-y-0.5 active:scale-[0.98] transition shadow-xs focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
        >
          <Home className="w-4 h-4" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>

        {/* Secondary Action */}
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:-translate-y-0.5 active:scale-[0.98] transition shadow-2xs focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            <span>Submit Another Request</span>
          </button>
        )}
      </div>

      {/* Optional Email Re-open Fallback */}
      {emailUrl && (
        <div className="mt-6 pt-5 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-500">
            Didn&apos;t see your email app open?{' '}
            <button
              type="button"
              onClick={handleReopenEmail}
              className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
            >
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Open Email Again</span>
            </button>
          </p>
        </div>
      )}
    </div>
  );
}
