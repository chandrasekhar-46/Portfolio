import React from 'react';
import { Calendar, Briefcase, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface ExperienceProps {
  isDark: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-emerald-500 mb-2">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>Practical Experience</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display text-neutral-100">
                Industry Experience
              </h2>
              <p className={`mt-2 text-sm sm:text-base max-w-xl ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Virtual internships and hands-on laboratory experience applying machine learning to real-world datasets.
              </p>
            </div>
            <span className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
              Indian Servers · 2025
            </span>
          </div>
        </div>

        {/* Experience Items */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                isDark
                  ? 'bg-neutral-900/40 border-neutral-800'
                  : 'bg-white border-neutral-200 shadow-sm'
              }`}
            >
              {/* Top Row: Role, Company, Period */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-neutral-800/80">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 mb-1">
                    <span>{exp.type}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.duration}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-100">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="py-6 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Key Accomplishments:
                </h4>
                <div className="space-y-2">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h5 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Technologies Used:
                  </h5>
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-2.5 py-1 rounded border ${
                          isDark
                            ? 'bg-neutral-950/70 border-neutral-800 text-neutral-300'
                            : 'bg-neutral-100 border-neutral-200 text-neutral-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 px-3 py-1.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Completion</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
