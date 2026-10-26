import React, { useState } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Check, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  isDark,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const content = `${PORTFOLIO_DATA.personal.fullName}
${PORTFOLIO_DATA.personal.title} - ${PORTFOLIO_DATA.personal.secondaryTitle}
Email: ${PORTFOLIO_DATA.personal.email} | Phone: ${PORTFOLIO_DATA.personal.phone} | Location: ${PORTFOLIO_DATA.personal.location}
LinkedIn: ${PORTFOLIO_DATA.personal.linkedin} | GitHub: ${PORTFOLIO_DATA.personal.github}

SUMMARY:
${PORTFOLIO_DATA.personal.summary}

EDUCATION:
${PORTFOLIO_DATA.education.map(e => `• ${e.degree} - ${e.institution}, ${e.location} (${e.period}) - GPA: ${e.gpa}`).join('\n')}

EXPERIENCE:
${PORTFOLIO_DATA.experience.map(exp => `• ${exp.role} at ${exp.company} (${exp.period}, ${exp.duration})\n  ${exp.highlights.join('\n  ')}`).join('\n\n')}

PROJECTS:
${PORTFOLIO_DATA.projects.map(p => `• ${p.title}: ${p.subtitle}\n  ${p.description}\n  Technologies: ${p.tags.join(', ')}`).join('\n\n')}

SKILLS:
${PORTFOLIO_DATA.skills.map(s => `• ${s.name} (${s.category}): ${s.description}`).join('\n')}`;

    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm">
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] my-auto flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
          isDark
            ? 'bg-neutral-900 border-neutral-800 text-neutral-100'
            : 'bg-white border-neutral-200 text-neutral-900'
        }`}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-neutral-800/80 bg-neutral-950/60 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono font-medium text-neutral-200">
              Rajamahendravarpu_ChandraSekhar_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className={`p-2 rounded-lg border text-xs transition-colors ${
                isDark
                  ? 'border-neutral-800 hover:bg-neutral-800 text-neutral-400 hover:text-white'
                  : 'border-neutral-200 hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900'
              }`}
              title="Copy text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>

            <button
              type="button"
              onClick={onClose}
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? 'border-neutral-800 hover:bg-neutral-800 text-neutral-400 hover:text-white'
                  : 'border-neutral-200 hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900'
              }`}
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-7">
          {/* Header Section */}
          <div className="border-b border-neutral-700/60 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-neutral-100">
              {PORTFOLIO_DATA.personal.fullName}
            </h1>
            <p className="text-sm font-semibold text-emerald-400 mt-1">
              {PORTFOLIO_DATA.personal.title} · {PORTFOLIO_DATA.personal.secondaryTitle}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-neutral-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:underline">{PORTFOLIO_DATA.personal.email}</a>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </span>
              <span aria-hidden="true">·</span>
              <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                LinkedIn
              </a>
              <span aria-hidden="true">·</span>
              <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-neutral-800 pb-1 mb-2">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {PORTFOLIO_DATA.personal.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-neutral-800 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="space-y-0.5 text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-neutral-100">{edu.degree}</span>
                    <span className="font-mono text-neutral-400 text-xs">{edu.period}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-400">
                    <span>{edu.institution}, {edu.location}</span>
                    <span className="font-mono text-emerald-400 font-semibold">CGPA: {edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-neutral-800 pb-1 mb-3">
              Experience
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-neutral-100">{exp.role}</span>
                    <span className="font-mono text-neutral-400 text-xs">{exp.period} ({exp.duration})</span>
                  </div>
                  <p className="text-xs text-cyan-400 font-medium">{exp.company} · {exp.type}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                  <p className="text-[11px] font-mono text-neutral-400">
                    Technologies: {exp.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-neutral-800 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-neutral-100">{proj.title}</span>
                    <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-xs font-mono text-cyan-400 hover:underline">
                      GitHub Repo
                    </a>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{proj.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-400">
                    {proj.features.map((f, fIdx) => (
                      <li key={fIdx}>{f}</li>
                    ))}
                  </ul>
                  <p className="text-[11px] font-mono text-emerald-400">
                    Architecture: {proj.tags.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-neutral-800 pb-1 mb-3">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-semibold text-neutral-200">Languages:</span>
                <p className="text-neutral-400 font-mono text-[11px]">Python, Java, HTML, CSS</p>
              </div>
              <div>
                <span className="font-semibold text-neutral-200">Machine Learning & AI:</span>
                <p className="text-neutral-400 font-mono text-[11px]">Gemini API, NumPy, Pandas</p>
              </div>
              <div>
                <span className="font-semibold text-neutral-200">Web Technologies:</span>
                <p className="text-neutral-400 font-mono text-[11px]">React, Firebase</p>
              </div>
              <div>
                <span className="font-semibold text-neutral-200">Tools & Soft Skills:</span>
                <p className="text-neutral-400 font-mono text-[11px]">Visual Studio Code, Communication, Teamwork, Adaptability, Leadership</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
