import React, { useState } from 'react';
import { ArrowRight, FileText, Github, Linkedin, Copy, Check, Mail, Phone, MapPin, GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface HeroProps {
  isDark: boolean;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isDark, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Column */}
          <div className="lg:col-span-7 space-y-5">
            {/* Academic Subtitle */}
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 uppercase tracking-wider">
              <span>B.Tech in Artificial Intelligence & Data Science</span>
              <span aria-hidden="true">·</span>
              <span className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>SITAM (2023–2027)</span>
            </div>

            {/* Decreased Name font size with clean, refined font-sans */}
            <div className="space-y-1.5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans tracking-tight text-neutral-100">
                {PORTFOLIO_DATA.personal.fullName}
              </h1>

              {/* Tagline */}
              <p className="text-base sm:text-lg md:text-xl font-normal text-emerald-400">
                Architecting practical AI and Modern Web Systems
              </p>
            </div>

            {/* Summary */}
            <p className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
              isDark ? 'text-neutral-300' : 'text-neutral-700'
            }`}>
              {PORTFOLIO_DATA.personal.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenResume}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all flex items-center gap-2 shadow-sm active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>

              <a
                href="#projects"
                className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg border transition-all flex items-center gap-2 cursor-pointer ${
                  isDark
                    ? 'border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200'
                    : 'border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800'
                }`}
              >
                <span>Featured Project</span>
                <ArrowRight className="w-4 h-4 text-emerald-500" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className={`px-3.5 py-2.5 rounded-lg border text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                  isDark
                    ? 'border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-700'
                    : 'border-neutral-200 bg-neutral-100 text-neutral-700 hover:border-neutral-300'
                }`}
                title="Copy developer email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Links */}
            <div className={`pt-3 border-t flex flex-wrap items-center gap-4 text-xs font-mono ${
              isDark ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-600'
            }`}>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Developer Snapshot Card (No python snippet, no verified profile badge) */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-2xl p-6 sm:p-7 border transition-all space-y-5 ${
                isDark
                  ? 'bg-neutral-900/50 border-neutral-800 shadow-lg'
                  : 'bg-white border-neutral-200 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between border-b pb-4 border-neutral-800/80">
                <div>
                  <h3 className="text-base font-semibold text-neutral-100 font-sans">
                    {PORTFOLIO_DATA.personal.fullName}
                  </h3>
                  <p className="text-xs text-emerald-400 font-mono mt-0.5">
                    {PORTFOLIO_DATA.personal.title}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold font-sans">
                  {PORTFOLIO_DATA.personal.initials}
                </div>
              </div>

              {/* Information Rows */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-400 block text-[11px] font-mono">Undergraduate Institution</span>
                    <span className="text-neutral-200 font-medium">Satya Institute of Technology and Management (SITAM)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-400 block text-[11px] font-mono">Industry Internship</span>
                    <span className="text-neutral-200 font-medium">Indian Servers (Virtual AI & Cyber Security Intern, 2025)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-400 block text-[11px] font-mono">Featured Application</span>
                    <span className="text-neutral-200 font-medium">AgriVision AI (Smart Agriculture Platform with Gemini API)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-400 block text-[11px] font-mono">Location & Availability</span>
                    <span className="text-neutral-200 font-medium">India · Open for SDE & AI Internships</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Class of 2027</span>
                <a
                  href="#contact"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium flex items-center gap-1"
                >
                  Contact directly &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
