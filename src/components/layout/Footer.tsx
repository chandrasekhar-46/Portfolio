import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t transition-colors ${
        isDark
          ? 'bg-neutral-950 border-neutral-800 text-neutral-400'
          : 'bg-white border-neutral-200 text-neutral-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-neutral-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-2">
            <span className="text-base sm:text-lg font-bold font-sans text-neutral-100 tracking-tight block">
              {PORTFOLIO_DATA.personal.fullName}
            </span>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              AI & Data Science undergraduate at Satya Institute of Technology and Management (SITAM), Vizianagaram. Specializing in Python, React, Machine Learning, and Generative AI.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 block">
              Navigation
            </span>
            <div className="flex flex-col space-y-1.5 text-xs font-mono">
              <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills & Toolkit</a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors">Featured Projects</a>
              <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
              <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 block">
              Direct Contact
            </span>
            <div className="flex flex-col space-y-1.5 text-xs font-mono">
              <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-emerald-400 transition-colors truncate">
                {PORTFOLIO_DATA.personal.email}
              </a>
              <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="hover:text-emerald-400 transition-colors">
                {PORTFOLIO_DATA.personal.phone}
              </a>
              <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                LinkedIn Profile
              </a>
              <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.fullName}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-colors"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
