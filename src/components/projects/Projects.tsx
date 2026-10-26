import React, { useState } from 'react';
import { ArrowRight, Github, CheckCircle2, Sparkles, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  isDark: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (proj: Project) => {
    setSelectedProject(proj);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 uppercase tracking-wider mb-2">
              <span>03</span>
              <span aria-hidden="true">·</span>
              <span>Featured Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display text-neutral-100">
              Featured Projects
            </h2>
            <p className={`mt-2 text-sm sm:text-base ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Production-grade applications combining machine learning models, cloud databases, and modern web interfaces.
            </p>
          </div>

          <span className="text-xs font-mono text-neutral-400">
            1 Curated Production Project
          </span>
        </div>

        {/* Featured Project Showcase Card */}
        {PORTFOLIO_DATA.projects.map((project) => (
          <div
            key={project.id}
            className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
              isDark
                ? 'bg-neutral-900/60 border-neutral-800 hover:border-emerald-500/40'
                : 'bg-white border-neutral-200 shadow-lg hover:shadow-xl hover:border-emerald-500/50'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Visual Preview */}
              <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] bg-neutral-950 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Contrast gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/30 opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Label pill */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-xs font-mono text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Gemini API Powered</span>
                </div>

                {/* Inspect button overlay */}
                <button
                  type="button"
                  onClick={() => handleOpenProject(project)}
                  className="absolute bottom-4 right-4 px-3.5 py-2 rounded-lg bg-neutral-900/90 text-white backdrop-blur-md border border-neutral-700 text-xs font-semibold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-all hover:bg-emerald-600 hover:border-emerald-500"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Interactive Deep Dive</span>
                </button>
              </div>

              {/* Details & Engineered Capabilities */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 mb-2">
                    <span>Full-Stack AI Application</span>
                    <span aria-hidden="true">·</span>
                    <span>AgriTech</span>
                  </div>

                  <h3 className="text-2xl font-bold font-display tracking-tight text-neutral-100 mb-1 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className={`text-xs sm:text-sm font-medium mb-3 ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}>
                    {project.subtitle}
                  </p>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Core Features */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Core Features:
                    </h4>
                    <div className="space-y-1.5">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Badges */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 text-xs font-mono rounded-md border ${
                            isDark
                              ? 'bg-neutral-950/70 border-neutral-800 text-neutral-300'
                              : 'bg-neutral-100 border-neutral-200 text-neutral-800'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-neutral-800/60 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => handleOpenProject(project)}
                    className="px-4 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-500 active:scale-95 transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <span>View Project & Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3.5 py-2.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors ${
                      isDark
                        ? 'border-neutral-700 bg-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-700'
                        : 'border-neutral-300 bg-neutral-50 text-neutral-800 hover:bg-neutral-100'
                    }`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isDark={isDark}
      />
    </section>
  );
};
