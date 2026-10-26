import React, { useState } from 'react';
import {
  Code,
  Terminal,
  Globe,
  Database,
  Cpu,
  Sparkles,
  Wrench,
  Users,
  Award
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface SkillsProps {
  isDark: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'web', label: 'Web Technologies' },
    { id: 'ai', label: 'Machine Learning & AI' },
    { id: 'tools', label: 'Developer Tools' },
    { id: 'soft', label: 'Core Competencies' },
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === selectedCategory);

  const getSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'python':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'java':
        return <Code className="w-5 h-5 text-orange-400" />;
      case 'html':
      case 'css':
        return <Globe className="w-5 h-5 text-sky-400" />;
      case 'react':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'firebase':
        return <Database className="w-5 h-5 text-amber-500" />;
      case 'gemini api':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case 'numpy':
      case 'pandas':
        return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'visual studio code':
        return <Wrench className="w-5 h-5 text-blue-500" />;
      case 'communication':
      case 'teamwork':
        return <Users className="w-5 h-5 text-emerald-400" />;
      case 'adaptability':
      case 'leadership':
        return <Award className="w-5 h-5 text-amber-400" />;
      default:
        return <Code className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'languages':
        return 'Language';
      case 'web':
        return 'Web & Cloud';
      case 'ai':
        return 'AI & Data';
      case 'tools':
        return 'Environment';
      case 'soft':
        return 'Professional';
      default:
        return 'Technology';
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-emerald-500 mb-2">
            <span>02</span>
            <span aria-hidden="true">·</span>
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display text-neutral-100">
            Skills & Toolkit
          </h2>
          <p className={`mt-2 text-sm sm:text-base max-w-xl ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Technologies, libraries, and core engineering abilities documented directly in my academic journey and practical project work.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl border mb-10 bg-neutral-900/40 border-neutral-800/80 max-w-full overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap active:scale-95 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={`p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                isDark
                  ? 'bg-neutral-900/40 border-neutral-800/80 hover:border-neutral-700'
                  : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800/80 flex items-center justify-center">
                      {getSkillIcon(skill.name)}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base font-display text-neutral-100">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {getCategoryLabel(skill.category)}
                  </span>
                </div>

                <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
