import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { SUPPORT_EMAIL, SUPPORT_PHONE_DISPLAY, SUPPORT_PHONE_RAW } from '../config/constants';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <SEO
        title="Privacy Policy — ProjectBridge"
        description="Learn how ProjectBridge handles student requirements, contact information, and WhatsApp project submissions with complete transparency."
      />
      <Navbar />

      <main className="flex-grow py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          {/* Legal Document Card */}
          <article className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-12 shadow-sm text-slate-700 leading-relaxed space-y-8">
            
            {/* Header */}
            <div className="border-b border-slate-100 pb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Privacy & Transparency</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Privacy Policy
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                Last updated: August 24, 2026
              </p>
            </div>

            {/* Section 1: Overview */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                1. Overview & Commitment
              </h2>
              <p className="text-sm sm:text-base">
                ProjectBridge (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) provides project-related assistance and engineering mentorship for Indian B.Tech and college students. We respect your privacy and are committed to being completely transparent about how your information is handled when you use our website.
              </p>
            </section>

            {/* Section 2: Information We Collect */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                2. Information You Voluntarily Provide
              </h2>
              <p className="text-sm sm:text-base">
                When you choose to request project support through our website, you may voluntarily submit the following details:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base pl-2 text-slate-600">
                <li><strong className="text-slate-800">Student Contact Details:</strong> Full name, phone/WhatsApp number, and optional email address.</li>
                <li><strong className="text-slate-800">Academic Background:</strong> College or university name, engineering branch/department, and year of study.</li>
                <li><strong className="text-slate-800">Project Requirements:</strong> Your project idea, problem statement, preferred technologies, required timeline/deadline, and any special guidelines.</li>
              </ul>
            </section>

            {/* Section 3: How Information is Used */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                3. How We Use Your Information
              </h2>
              <p className="text-sm sm:text-base">
                The information you submit is used solely to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base pl-2 text-slate-600">
                <li>Review the feasibility and technical scope of your academic project requirement.</li>
                <li>Contact you via phone, WhatsApp, or email to discuss project details, architecture, timelines, and pricing.</li>
                <li>Deliver agreed-upon engineering mentorship, codebase, and documentation support.</li>
              </ul>
              <p className="text-sm sm:text-base">
                We do not use your information for unrelated marketing, advertising networks, automated profiling, or AI training databases.
              </p>
            </section>

            {/* Section 4: WhatsApp Integration Disclosure */}
            <section className="space-y-3 bg-blue-50/50 border border-blue-100 rounded-xl p-5 sm:p-6">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                4. WhatsApp Submission Disclosure
              </h2>
              <p className="text-sm sm:text-base text-slate-700">
                When you click <em>&quot;Submit Project Request&quot;</em> on our website, your entered details are formatted into a structured WhatsApp message and you are directed to the WhatsApp application or WhatsApp Web.
              </p>
              <p className="text-sm sm:text-base text-slate-700">
                <strong>Please note:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-600 pl-2">
                <li>The message is sent directly by you from your WhatsApp account.</li>
                <li>The website does not automatically transmit your form data to an external server behind the scenes.</li>
                <li>WhatsApp is a third-party messaging platform governed by Meta&apos;s own privacy policies and terms of service.</li>
              </ul>
            </section>

            {/* Section 5: Architecture & Storage */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                5. Architecture & Data Storage
              </h2>
              <p className="text-sm sm:text-base">
                ProjectBridge V1 operates as a frontend-only platform. We do not store your submitted form data in a public cloud database on this website. Communications and details voluntarily shared through WhatsApp are retained directly within WhatsApp conversations and by the ProjectBridge team for ongoing project support and follow-up.
              </p>
            </section>

            {/* Section 6: Data Sharing & Sale */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                6. Data Sharing & Third Parties
              </h2>
              <p className="text-sm sm:text-base">
                We do not sell, rent, or trade student personal information to third-party brokers, advertisers, or recruitment agencies. Information is accessed only by our engineering mentors to assess and deliver your project.
              </p>
            </section>

            {/* Section 7: Sensitive Information Warning */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                7. Sensitive Information Warning
              </h2>
              <p className="text-sm sm:text-base">
                Please do not include passwords, payment credentials, Aadhaar/government identification numbers, or confidential proprietary credentials in your project description. Provide only the academic context required to understand your project.
              </p>
            </section>

            {/* Section 8: Target Audience */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                8. Student Audience
              </h2>
              <p className="text-sm sm:text-base">
                ProjectBridge is intended for college and university students working on engineering and technical academic projects. If you are below the age required by applicable law to provide personal data, please use this service with the guidance of a parent, guardian, or faculty mentor.
              </p>
            </section>

            {/* Section 9: Contact Us */}
            <section className="space-y-3 border-t border-slate-100 pt-6">
              <h2 className="text-xl font-bold text-slate-900">
                9. Questions & Contact
              </h2>
              <p className="text-sm sm:text-base">
                If you have questions or concerns regarding this Privacy Policy or your project information, please contact us:
              </p>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-xs sm:text-sm space-y-1">
                <div><strong className="text-slate-800">Email:</strong> <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 hover:underline">{SUPPORT_EMAIL}</a></div>
                <div><strong className="text-slate-800">Phone / WhatsApp:</strong> <a href={`tel:+${SUPPORT_PHONE_RAW}`} className="text-blue-600 hover:underline">{SUPPORT_PHONE_DISPLAY}</a></div>
              </div>
            </section>

          </article>

        </div>
      </main>

      <Footer />
    </div>
  );
}
