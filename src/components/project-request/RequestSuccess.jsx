import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Home, RotateCcw } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';

export default function RequestSuccess({ submittedData, whatsAppUrl, onReset }) {
  const handleReopenWhatsApp = () => {
    if (whatsAppUrl) {
      openWhatsApp(whatsAppUrl);
    }
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-sm max-w-2xl mx-auto text-center">
      {/* WhatsApp Action Icon */}
      <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-6 shadow-xs">
        <MessageSquare className="w-8 h-8" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
        Almost There!
      </h2>

      {/* Reassurance & Next Steps */}
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto mb-8">
        Your project details are ready in WhatsApp. Send the message there to complete your request. We&apos;ll review your requirement and contact you to discuss the details.
      </p>

      {/* Summary Card */}
      {submittedData && (
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 mb-8 text-left space-y-3 text-xs sm:text-sm">
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-500 font-medium">Name:</span>
            <span className="text-slate-900 font-semibold">{submittedData.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-500 font-medium">Phone:</span>
            <span className="text-slate-900 font-semibold">{submittedData.phone}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-500 font-medium">College:</span>
            <span className="text-slate-900 font-semibold">{submittedData.college}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-500 font-medium">Branch & Year:</span>
            <span className="text-slate-900 font-semibold">
              {submittedData.branch === 'Other' ? submittedData.customBranch : submittedData.branch} ({submittedData.year})
            </span>
          </div>
          {submittedData.preferredTech && (
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-500 font-medium">Preferred Tech:</span>
              <span className="text-slate-900 font-semibold">{submittedData.preferredTech}</span>
            </div>
          )}
          {submittedData.deadline && (
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-500 font-medium">Deadline:</span>
              <span className="text-slate-900 font-semibold">{submittedData.deadline}</span>
            </div>
          )}
          <div className="pt-1">
            <span className="text-slate-500 font-medium block mb-1">Requirement:</span>
            <p className="text-slate-800 text-xs bg-white p-3 rounded-lg border border-slate-200/60 line-clamp-3">
              {submittedData.requirement}
            </p>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        {whatsAppUrl && (
          <button
            onClick={handleReopenWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 active:scale-[0.98] transition shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Open WhatsApp Again</span>
          </button>
        )}

        <Link
          to="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0F172A] text-white text-sm font-medium hover:bg-slate-800 active:scale-[0.98] transition shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        
        {onReset && (
          <button
            onClick={onReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Edit Details</span>
          </button>
        )}
      </div>
    </div>
  );
}
