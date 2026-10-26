import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface EducationProps {
  isDark: boolean;
}

export const Education: React.FC<EducationProps> = ({ isDark }) => {
  return (
    <section id="education" className="py-16 sm:py-24 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-emerald-500 mb-2">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>Academic Background</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display text-neutral-100">
                Education
              </h2>
              <p className={`mt-2 text-sm sm:text-base max-w-xl ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Formal undergraduate and foundational schooling records.
              </p>
            </div>
            <span className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
              Satya Institute of Technology and Management
            </span>
          </div>
        </div>

        {/* Education 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.education.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                isDark ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80 text-xs font-mono mb-4">
                  <span className={item.status === 'In Progress' ? 'text-emerald-400 font-semibold' : 'text-neutral-400'}>
                    {item.status}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-neutral-500">GPA:</span>
                    <span className="text-emerald-400 font-bold tabular-nums">{item.gpa}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{item.period}</span>
                </div>

                <h3 className="text-base font-bold font-display text-neutral-100 mb-1 leading-snug">
                  {item.degree}
                </h3>

                <p className="text-xs font-semibold text-emerald-400/90 mb-2">
                  {item.institution}
                </p>

                <p className="text-[11px] font-mono text-neutral-500 mb-4 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 text-[11px] font-mono text-neutral-400">
                <span>Field: {item.field}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
