import React, { useState } from 'react';
import { ExternalLink, Github, Play, CheckCircle2, Terminal, Code2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { VoterDemoModal } from './ProjectModals/VoterDemoModal';
import { AtmDemoModal } from './ProjectModals/AtmDemoModal';
import { GradeCalculatorModal } from './ProjectModals/GradeCalculatorModal';

export const Projects: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'voter' | 'atm' | 'grade' | null>(null);

  const handleOpenDemo = (project: Project) => {
    setActiveModal(project.demoType);
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F0F4F8] border-y border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
              <span>Selected Works</span>
              <span aria-hidden="true">·</span>
              <span>Software &amp; Logic Utilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Projects
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Real functional tools built with Python and web stacks, showcasing computational algorithms, state machine designs, and academic logic. Test any project directly in the browser!
            </p>
          </div>

          <a
            href="https://github.com/MukeshReddyT"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-all shadow-xs w-fit"
          >
            <Github className="w-4 h-4" />
            <span>Explore GitHub Repositories</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Projects 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200/90 p-7 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all group"
            >
              <div className="space-y-4">
                
                {/* Top index and category metadata (zero-pill: clean text with dot separator) */}
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-slate-400">0{index + 1}.</span>
                    <span>{project.category}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Interactive Simulation Ready</span>
                </div>

                {/* Title and tagline */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 leading-snug">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack: Clean unboxed metadata with dot separators */}
                <div className="pt-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-1.5">
                    Technologies &amp; Architecture
                  </span>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-700 font-mono">
                    {project.techStack.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="hover:text-slate-900">{tech}</span>
                        {idx < project.techStack.length - 1 && (
                          <span className="text-slate-300 select-none" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Highlights List */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Buttons: Live Interactive Tester + GitHub Link */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => handleOpenDemo(project)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors shadow-2xs group-hover:bg-slate-950"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Live Demo</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors shrink-0"
                  title="View on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modals */}
      <VoterDemoModal
        isOpen={activeModal === 'voter'}
        onClose={() => setActiveModal(null)}
      />
      <AtmDemoModal
        isOpen={activeModal === 'atm'}
        onClose={() => setActiveModal(null)}
      />
      <GradeCalculatorModal
        isOpen={activeModal === 'grade'}
        onClose={() => setActiveModal(null)}
      />
    </section>
  );
};
