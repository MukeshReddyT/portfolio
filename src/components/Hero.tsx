import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, FileText, Sparkles, Code2, GraduationCap, Trophy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle pastel ambient background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 opacity-70"
        style={{
          background: 'radial-gradient(circle at 15% 20%, rgba(224, 231, 255, 0.45) 0%, transparent 40%), radial-gradient(circle at 85% 65%, rgba(220, 238, 242, 0.5) 0%, transparent 45%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Information Container */}
        <div className="space-y-6">
          
          {/* Clean unboxed kicker with Home and Undergraduate Portfolio (Class of 2028 removed) */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-500 uppercase">
            <span className="text-slate-900 font-bold">Home</span>
            <span aria-hidden="true">·</span>
            <span>Undergraduate Portfolio</span>
          </div>

          {/* Headline & Title */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              T. Mukesh Reddy
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700">
              Aspiring AI Engineer <span className="text-slate-300 font-normal">|</span> B.Tech CSE (AI &amp; ML) Student
            </p>
          </div>

          {/* Impactful professional intro */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl">
            I am a first-year undergraduate student diving deep into Computer Science foundations, Artificial Intelligence, and Generative AI frameworks. Driven by hands-on curiosity, I actively participate in hackathons and ideathons to build practical software utilities and intelligent tools that bridge algorithmic concepts with everyday usability.
          </p>

          {/* Primary and Secondary CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-xs group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200/90 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-all shadow-xs"
            >
              Contact Me
            </a>

            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 rounded-xl transition-colors"
              title="View Academic Resume"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              <span>Resume</span>
            </button>
          </div>

          {/* Direct Social & Contact Channels */}
          <div className="pt-5 border-t border-slate-200/80 flex flex-wrap items-center gap-5 text-sm text-slate-600">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Connect:
            </span>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors font-medium"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-300">·</span>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors font-medium text-sky-700 hover:text-sky-800"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-300">·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>

        </div>

        {/* 4 Clean Foundational Cards */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-slate-800">
          <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs space-y-1.5">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
              <GraduationCap className="w-4 h-4 text-slate-600" />
              <span>Academic Track</span>
            </div>
            <p className="text-base font-semibold text-slate-900">B.Tech AI &amp; ML</p>
            <p className="text-xs text-slate-500">First-Year Core Foundations</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs space-y-1.5">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
              <Sparkles className="w-4 h-4 text-slate-600" />
              <span>Emerging Focus</span>
            </div>
            <p className="text-base font-semibold text-slate-900">Generative AI</p>
            <p className="text-xs text-slate-500">Prompting &amp; LLM Tooling</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs space-y-1.5">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
              <Code2 className="w-4 h-4 text-slate-600" />
              <span>Core Language</span>
            </div>
            <p className="text-base font-semibold text-slate-900">Python &amp; Web</p>
            <p className="text-xs text-slate-500">Algorithmic Problem Solving</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs space-y-1.5">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
              <Trophy className="w-4 h-4 text-slate-600" />
              <span>Collaborative Drive</span>
            </div>
            <p className="text-base font-semibold text-slate-900">Hackathon Sprints</p>
            <p className="text-xs text-slate-500">Rapid Idea-to-Code Execution</p>
          </div>
        </div>

      </div>
    </section>
  );
};
