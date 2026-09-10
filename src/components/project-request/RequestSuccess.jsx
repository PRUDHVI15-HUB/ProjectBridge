import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send, CheckCircle, Home, RotateCcw, ArrowRight, AlertCircle } from 'lucide-react';
import { openEmailClient } from '../../utils/email';

export default function RequestSuccess({ emailUrl, onReset }) {
  // Two-step flow: 'pending' = email opened but not confirmed sent, 'confirmed' = user says they sent it
  const [emailStatus, setEmailStatus] = useState('pending');

  const handleReopenEmail = () => {
    if (emailUrl) {
      openEmailClient(emailUrl);
    }
  };

  const handleConfirmSent = () => {
    setEmailStatus('confirmed');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ──────────────────────────────────────────────
  // STEP 2: User confirmed they sent the email
  // ──────────────────────────────────────────────
  if (emailStatus === 'confirmed') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-xs max-w-2xl mx-auto text-center"
      >
        {/* Success Icon */}
        <div className="pb-success-icon w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-6 shadow-xs">
          <CheckCircle className="w-8 h-8" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h1 className="pb-success-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          Request Submitted Successfully!
        </h1>

        {/* Message */}
        <p className="pb-success-body text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto mb-8">
          Thank you for choosing Projvanta. Your project request has been sent via email. Our team will review your requirements and get in touch with you soon.
        </p>

        {/* What Happens Next */}
        <div className="pb-success-steps mb-8 text-left bg-slate-50/80 border border-slate-200/80 rounded-xl p-5 sm:p-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 text-center sm:text-left">
            What Happens Next?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="bg-white p-4 rounded-lg border border-slate-200/80 shadow-2xs flex flex-col">
              <span className="text-xs font-bold text-indigo-600 mb-1.5">
                01 — We Review
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our team reviews your project requirements from the email.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200/80 shadow-2xs flex flex-col">
              <span className="text-xs font-bold text-indigo-600 mb-1.5">
                02 — We Contact You
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We&apos;ll get in touch via phone or WhatsApp to discuss your project.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200/80 shadow-2xs flex flex-col">
              <span className="text-xs font-bold text-indigo-600 mb-1.5">
                03 — We Build
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Once confirmed, we&apos;ll start working on your project.
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
            <span>We&apos;ll contact you using the details you provided in the email.</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pb-success-actions flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0F172A] text-white text-sm font-semibold hover:bg-slate-800 hover:-translate-y-0.5 active:scale-[0.98] transition shadow-xs focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>

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
      </div>
    );
  }

  // ──────────────────────────────────────────────
  // STEP 1: Email client opened — waiting for user to confirm they sent it
  // ──────────────────────────────────────────────
  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-xs max-w-2xl mx-auto text-center"
    >
      {/* Email Icon with pulsing ring */}
      <div className="pb-success-icon w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-6 shadow-xs relative">
        <Mail className="w-8 h-8" aria-hidden="true" />
        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-amber-400 border-2 border-white animate-pulse"></span>
      </div>

      {/* Heading */}
      <h1 className="pb-success-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
        Almost Done — Send Your Email!
      </h1>

      {/* Instruction */}
      <p className="pb-success-body text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto mb-6">
        We&apos;ve opened your email app with your project details pre-filled.
        Please review the email and press <strong className="text-slate-800 font-semibold">Send</strong> in your email app to deliver your request to Projvanta.
      </p>

      {/* Steps instruction card */}
      <div className="pb-success-steps mb-8 text-left bg-blue-50/60 border border-blue-100/80 rounded-xl p-5 sm:p-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-4 text-center sm:text-left">
          Complete These Steps
        </h2>

        <div className="space-y-3">
          {/* Step 1 */}
          <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-blue-100/80">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              ✓
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-800">Your email app should be open</p>
              <p className="text-xs text-slate-500 mt-0.5">
                With your project details already filled in.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-amber-200/80 ring-1 ring-amber-100">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-800">Press &quot;Send&quot; in your email app</p>
              <p className="text-xs text-slate-500 mt-0.5">
                Review the email once and hit Send to deliver it to our team.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-slate-200/80">
            <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-800">Come back here and confirm</p>
              <p className="text-xs text-slate-500 mt-0.5">
                Click the button below once you&apos;ve sent the email.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pb-success-actions flex flex-col items-center gap-3">
        {/* Primary: Confirm sent */}
        <button
          type="button"
          onClick={handleConfirmSent}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-emerald-600 text-white text-base font-semibold hover:bg-emerald-700 hover:-translate-y-0.5 active:scale-[0.98] transition shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 cursor-pointer"
        >
          <Send className="w-4.5 h-4.5" aria-hidden="true" />
          <span>I&apos;ve Sent the Email</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>

        {/* Secondary: Re-open email */}
        {emailUrl && (
          <button
            type="button"
            onClick={handleReopenEmail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:-translate-y-0.5 active:scale-[0.98] transition shadow-2xs focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 cursor-pointer"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>Re-open Email App</span>
          </button>
        )}
      </div>

      {/* Helpful note */}
      <div className="mt-6 pt-5 border-t border-slate-100">
        <div className="flex items-start gap-2.5 max-w-md mx-auto text-left">
          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong className="text-slate-700 font-medium">Important:</strong> Your request is not submitted until you send the email from your email app. If the email app didn&apos;t open, click &quot;Re-open Email App&quot; above.
          </p>
        </div>
      </div>

      {/* Edit details link */}
      {onReset && (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={onReset}
            className="text-xs text-slate-500 hover:text-slate-700 hover:underline inline-flex items-center gap-1 cursor-pointer focus:outline-none"
          >
            <RotateCcw className="w-3 h-3" aria-hidden="true" />
            <span>Go back and edit details</span>
          </button>
        </div>
      )}
    </div>
  );
}
