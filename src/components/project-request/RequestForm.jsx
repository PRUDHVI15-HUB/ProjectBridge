import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { getWhatsAppUrl, openWhatsApp } from '../../utils/whatsapp';

export default function RequestForm({ onSubmitSuccess, initialData }) {
  const [formData, setFormData] = useState({
    fullName: initialData?.fullName || '',
    phone: initialData?.phone || '',
    email: initialData?.email || '',
    college: initialData?.college || '',
    branch: initialData?.branch || '',
    customBranch: initialData?.customBranch || '',
    year: initialData?.year || '',
    requirement: initialData?.requirement || '',
    preferredTech: initialData?.preferredTech || '',
    deadline: initialData?.deadline || '',
    additionalNotes: initialData?.additionalNotes || '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const branches = [
    'CSE (Computer Science & Engineering)',
    'IT (Information Technology)',
    'AI & ML / Data Science',
    'ECE (Electronics & Communication)',
    'EEE (Electrical & Electronics)',
    'Mechanical Engineering',
    'Civil Engineering',
    'Other',
  ];

  const years = [
    '1st Year',
    '2nd Year',
    '3rd Year',
    '4th Year (Final Year)',
    'Other / Post-Graduation',
  ];

  const validate = () => {
    const newErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid name.';
    }

    // Phone (Indian 10-digit validation, allowing optional +91, 91, or leading 0)
    const cleanPhone = formData.phone.replace(/[\s\-()]/g, '');
    const phoneRegex = /^(?:(?:\+?91)|0)?[6-9]\d{9}$/;
    if (!cleanPhone) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number.';
    }

    // Email (Optional, but validate if provided)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    // College
    if (!formData.college.trim()) {
      newErrors.college = 'Please enter your college or university name.';
    }

    // Branch
    if (!formData.branch) {
      newErrors.branch = 'Please select your branch.';
    } else if (formData.branch === 'Other' && !formData.customBranch.trim()) {
      newErrors.customBranch = 'Please specify your branch name.';
    }

    // Year
    if (!formData.year) {
      newErrors.year = 'Please select your year of study.';
    }

    // Project Requirement
    if (!formData.requirement.trim()) {
      newErrors.requirement = 'Please tell us about your project requirement.';
    } else if (formData.requirement.trim().length < 10) {
      newErrors.requirement = 'Please provide a few more details so we can understand your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) {
      // Scroll to the first error
      const firstErrorField = document.querySelector('.has-error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    // Generate WhatsApp URL and open
    const waUrl = getWhatsAppUrl(formData);
    openWhatsApp(waUrl);

    // Transition smoothly to the confirmation state
    setTimeout(() => {
      setIsSubmitting(false);
      if (onSubmitSuccess) {
        onSubmitSuccess(formData, waUrl);
      }
    }, 400);
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm overflow-hidden max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-10 space-y-10">
        
        {/* SECTION A — Student Details */}
        <div>
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 mb-6">
            <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold flex items-center justify-center">
              1
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Student Details
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className={errors.fullName ? 'has-error' : ''}>
              <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition ${
                    errors.fullName
                      ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                      : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100'
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-rose-500 font-medium">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className={errors.phone ? 'has-error' : ''}>
              <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="Enter 10-digit mobile number"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition ${
                    errors.phone
                      ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                      : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100'
                  }`}
                />
              </div>
              {errors.phone ? (
                <p className="mt-1.5 text-xs text-rose-500 font-medium">
                  {errors.phone}
                </p>
              ) : (
                <p className="mt-1 text-[11px] text-slate-400">
                  We&apos;ll contact you via WhatsApp / Phone to discuss the details.
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className={`sm:col-span-2 ${errors.email ? 'has-error' : ''}`}>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Email Address
                </label>
                <span className="text-[11px] text-slate-400">Optional</span>
              </div>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="Enter your email address"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition ${
                  errors.email
                    ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                    : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100'
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-rose-500 font-medium">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* SECTION B — Academic Details */}
        <div>
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 mb-6">
            <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold flex items-center justify-center">
              2
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Academic Details
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* College Name */}
            <div className={`sm:col-span-2 ${errors.college ? 'has-error' : ''}`}>
              <label htmlFor="college" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                College / University <span className="text-rose-500">*</span>
              </label>
              <input
                id="college"
                type="text"
                value={formData.college}
                onChange={(e) => handleChange('college', e.target.value)}
                placeholder="Enter your college or university name"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition ${
                  errors.college
                    ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                    : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100'
                }`}
              />
              {errors.college && (
                <p className="mt-1.5 text-xs text-rose-500 font-medium">
                  {errors.college}
                </p>
              )}
            </div>

            {/* Branch */}
            <div className={errors.branch ? 'has-error' : ''}>
              <label htmlFor="branch" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Branch / Department <span className="text-rose-500">*</span>
              </label>
              <select
                id="branch"
                value={formData.branch}
                onChange={(e) => handleChange('branch', e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 transition ${
                  errors.branch
                    ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                    : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100'
                }`}
              >
                <option value="">Select your branch</option>
                {branches.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              {errors.branch && (
                <p className="mt-1.5 text-xs text-rose-500 font-medium">
                  {errors.branch}
                </p>
              )}
            </div>

            {/* Year of Study */}
            <div className={errors.year ? 'has-error' : ''}>
              <label htmlFor="year" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Year of Study <span className="text-rose-500">*</span>
              </label>
              <select
                id="year"
                value={formData.year}
                onChange={(e) => handleChange('year', e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 transition ${
                  errors.year
                    ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                    : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100'
                }`}
              >
                <option value="">Select your year</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
              {errors.year && (
                <p className="mt-1.5 text-xs text-rose-500 font-medium">
                  {errors.year}
                </p>
              )}
            </div>

            {/* Custom Branch input if "Other" selected */}
            {formData.branch === 'Other' && (
              <div className={`sm:col-span-2 ${errors.customBranch ? 'has-error' : ''}`}>
                <label htmlFor="customBranch" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Specify Your Branch <span className="text-rose-500">*</span>
                </label>
                <input
                  id="customBranch"
                  type="text"
                  value={formData.customBranch}
                  onChange={(e) => handleChange('customBranch', e.target.value)}
                  placeholder="e.g. Biomedical Engineering, Chemical Engineering..."
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition ${
                    errors.customBranch
                      ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                      : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100'
                  }`}
                />
                {errors.customBranch && (
                  <p className="mt-1.5 text-xs text-rose-500 font-medium">
                    {errors.customBranch}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* SECTION C — Project Requirement */}
        <div>
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 mb-6">
            <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold flex items-center justify-center">
              3
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Project Requirement
            </h2>
          </div>

          <div className={errors.requirement ? 'has-error' : ''}>
            <label htmlFor="requirement" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Project Requirement / Idea <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="requirement"
              rows={6}
              value={formData.requirement}
              onChange={(e) => handleChange('requirement', e.target.value)}
              placeholder="Tell us about your project idea or requirement...&#10;&#10;You can mention what you want to build, your college requirements, technologies you prefer, deadline, or anything else that may help us understand your project."
              className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 leading-relaxed transition ${
                errors.requirement
                  ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                  : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100 shadow-xs'
              }`}
            ></textarea>
            {errors.requirement ? (
              <p className="mt-1.5 text-xs text-rose-500 font-medium">
                {errors.requirement}
              </p>
            ) : (
              <p className="mt-1.5 text-[11px] text-slate-400">
                You can describe any requirement. Please avoid including passwords or confidential credentials.
              </p>
            )}
          </div>
        </div>

        {/* SECTION D — Optional Project Information */}
        <div>
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 mb-6">
            <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center">
              4
            </span>
            <div className="flex items-center justify-between w-full">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Optional Information
              </h2>
              <span className="text-xs text-slate-400 font-normal">Optional</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Preferred Technology */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="preferredTech" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Preferred Technology
                </label>
                <span className="text-[11px] text-slate-400">Optional</span>
              </div>
              <input
                id="preferredTech"
                type="text"
                value={formData.preferredTech}
                onChange={(e) => handleChange('preferredTech', e.target.value)}
                placeholder="Example: React, Python, Java, Flutter, AI/ML, etc."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition"
              />
            </div>

            {/* Project Deadline */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="deadline" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  When do you need the project?
                </label>
                <span className="text-[11px] text-slate-400">Optional</span>
              </div>
              <input
                id="deadline"
                type="text"
                value={formData.deadline}
                onChange={(e) => handleChange('deadline', e.target.value)}
                placeholder="e.g. Within 2 weeks, by end of month..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition"
              />
            </div>

            {/* Additional Requirements */}
            <div className="sm:col-span-2">
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="additionalNotes" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Additional Requirements
                </label>
                <span className="text-[11px] text-slate-400">Optional</span>
              </div>
              <textarea
                id="additionalNotes"
                rows={3}
                value={formData.additionalNotes}
                onChange={(e) => handleChange('additionalNotes', e.target.value)}
                placeholder="Anything else we should know?"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition"
              ></textarea>
            </div>
          </div>
        </div>

        {/* SECTION E — Submit Area */}
        <div className="pt-4 border-t border-slate-100 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#0F172A] text-white text-base font-semibold hover:bg-slate-800 active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed transition shadow-sm"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <span>Submit Project Request</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="mt-3.5 text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
            By submitting, you agree that ProjectBridge may review your requirement and contact you via WhatsApp. See our{' '}
            <Link to="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link to="/terms" className="text-blue-600 hover:underline">
              Terms &amp; Conditions
            </Link>.
          </p>
        </div>

      </form>
    </div>
  );
}
