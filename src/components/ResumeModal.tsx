import React from 'react';
import { X, Printer, Download, Mail, Github, Linkedin, ExternalLink, GraduationCap, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200 bg-[#F9FAFB]">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <GraduationCap className="w-4 h-4 text-slate-600" />
            <span>Academic Resume · T. Mukesh Reddy</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-8 sm:p-10 overflow-y-auto space-y-7 text-slate-800 bg-white selection:bg-slate-100">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {PERSONAL_INFO.fullName}
              </h1>
              <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md w-fit">
                Undergraduate · Year 1
              </span>
            </div>
            
            <p className="text-sm font-semibold text-slate-700">
              {PERSONAL_INFO.role} <span className="text-slate-400 font-normal">|</span> {PERSONAL_INFO.degree} in {PERSONAL_INFO.specialization}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 pt-1">
              <span className="flex items-center gap-1 font-mono">{PERSONAL_INFO.email}</span>
              <span>·</span>
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="text-slate-700 hover:underline">
                GitHub: MukeshReddyT
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="text-slate-700 hover:underline">
                LinkedIn: t-mukesh-reddy
              </a>
              <span>·</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Education</h2>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-slate-900">
                  {PERSONAL_INFO.degree} in {PERSONAL_INFO.specialization}
                </span>
                <span className="text-xs text-slate-500 font-mono">2024 – 2028</span>
              </div>
              <p className="text-xs text-slate-600">
                Focus on Core Computer Science, Computational Mathematics, Python Algorithms, and Machine Learning Systems.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Technical Skills &amp; Competencies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                <p className="font-bold text-slate-800">Programming Languages</p>
                <p className="text-slate-600">Python, JavaScript, HTML5, CSS3</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                <p className="font-bold text-slate-800">Technical &amp; AI</p>
                <p className="text-slate-600">Web Dev Basics, Generative AI Foundations, Prompt Engineering, Git &amp; GitHub</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                <p className="font-bold text-slate-800">Soft Skills</p>
                <p className="text-slate-600">Algorithmic Problem Solving, Hackathon Ideation &amp; Pitching, Teamwork</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Academic Projects</h2>
            <div className="space-y-3.5">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">{proj.title}</span>
                    <span className="text-slate-500 font-mono">{proj.techStack.join(' · ')}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Hackathons */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Competitions &amp; Hackathons</h2>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">Collegiate Hackathons &amp; Prototyping Sprints</span>
                <span className="text-slate-500 font-mono">2024 – Present</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Collaborated in cross-functional student teams during intensive 24 to 36-hour sprint sessions, delivering functional minimum viable products and pitching technical architecture to evaluation juries.
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-100 bg-[#F9FAFB] flex items-center justify-between text-xs text-slate-500">
          <span>Prepared for Academic &amp; Internship Evaluations</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
