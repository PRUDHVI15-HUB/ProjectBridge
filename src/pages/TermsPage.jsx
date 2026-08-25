import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileCheck2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { SUPPORT_EMAIL, SUPPORT_PHONE_DISPLAY } from '../config/constants';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <SEO
        title="Terms & Conditions — ProjectBridge"
        description="Review the terms and conditions, requirement evaluation process, and academic guidelines for using ProjectBridge services."
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

          {/* Terms Card */}
          <article className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-12 shadow-sm text-slate-700 leading-relaxed space-y-8">
            
            {/* Header */}
            <div className="border-b border-slate-100 pb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Service Guidelines</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Terms &amp; Conditions
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                Last updated: August 24, 2026
              </p>
            </div>

            {/* Section 1: Introduction */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm sm:text-base">
                Welcome to ProjectBridge (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By accessing our website or submitting a project requirement through our platform, you agree to comply with and be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </section>

            {/* Section 2: Service Description */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                2. Nature of Our Services
              </h2>
              <p className="text-sm sm:text-base">
                ProjectBridge provides technical guidance, architectural planning, custom codebase development, system documentation, and viva preparation mentorship for engineering and B.Tech students. All services are tailored to individual project specifications submitted by the student.
              </p>
            </section>

            {/* Section 3: Requirement Review & Acceptance */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                3. Requirement Submission &amp; Acceptance
              </h2>
              <p className="text-sm sm:text-base">
                Submitting a project request on our website does not create a binding agreement or guarantee automatic project acceptance.
              </p>
              <p className="text-sm sm:text-base">
                Upon receiving your requirement via WhatsApp, our engineering team reviews technical feasibility, required tech-stacks, and timeline constraints. We will contact you to clarify requirements and formally agree upon scope, milestones, and deliverables before commencing work.
              </p>
            </section>

            {/* Section 4: Pricing & Payment Policy */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                4. Pricing &amp; Quotations
              </h2>
              <p className="text-sm sm:text-base">
                ProjectBridge does not employ fixed package pricing because academic project complexities vary widely. Custom pricing is estimated and communicated transparently after the project requirements, technology stack, and deadlines have been discussed and agreed upon with the student.
              </p>
            </section>

            {/* Section 5: Academic Integrity & Student Responsibility */}
            <section className="space-y-3 bg-slate-50 border border-slate-200/80 rounded-xl p-5 sm:p-6">
              <h2 className="text-lg font-bold text-slate-900">
                5. Academic Integrity &amp; Student Responsibility
              </h2>
              <p className="text-sm sm:text-base text-slate-700">
                ProjectBridge operates as an educational and technical mentorship resource designed to assist students in understanding modern software architecture, engineering standards, and clean code practices.
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-600 pl-2">
                <li>Students remain solely responsible for understanding the architecture, code logic, and functioning of their project.</li>
                <li>Students are responsible for complying with their institution&apos;s academic honor code, syllabus rules, and project submission guidelines.</li>
                <li>ProjectBridge does not make claims or guarantees regarding specific academic grades, examination scores, viva marks, university approvals, or job placements.</li>
              </ul>
            </section>

            {/* Section 6: Project Scope & Deliverables */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                6. Scope &amp; Revisions
              </h2>
              <p className="text-sm sm:text-base">
                Deliverables (including source code, documentation, and deployment support) are provided based on the mutually agreed project specification. Significant modifications requested after project scope approval may require mutual agreement on timeline adjustments.
              </p>
            </section>

            {/* Section 7: Third-Party Platforms */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                7. Third-Party Messaging Platforms
              </h2>
              <p className="text-sm sm:text-base">
                Our service utilizes WhatsApp click-to-chat to connect students with engineering mentors. Your use of WhatsApp is subject to WhatsApp&apos;s Terms of Service. ProjectBridge is not responsible for connectivity issues, carrier charges, or outages on third-party communication platforms.
              </p>
            </section>

            {/* Section 8: Disclaimer & Limitation of Liability */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                8. Disclaimer
              </h2>
              <p className="text-sm sm:text-base">
                To the fullest extent permitted by applicable law, ProjectBridge provides all technical assistance and code samples on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express or implied.
              </p>
            </section>

            {/* Section 9: Contact */}
            <section className="space-y-3 border-t border-slate-100 pt-6">
              <h2 className="text-xl font-bold text-slate-900">
                9. Questions &amp; Support
              </h2>
              <p className="text-sm sm:text-base">
                For questions regarding these Terms &amp; Conditions, please reach out to:
              </p>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-xs sm:text-sm space-y-1">
                <div><strong className="text-slate-800">Email:</strong> <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 hover:underline">{SUPPORT_EMAIL}</a></div>
                <div><strong className="text-slate-800">Phone / WhatsApp:</strong> <a href={`tel:+919603347698`} className="text-blue-600 hover:underline">{SUPPORT_PHONE_DISPLAY}</a></div>
              </div>
            </section>

          </article>

        </div>
      </main>

      <Footer />
    </div>
  );
}
