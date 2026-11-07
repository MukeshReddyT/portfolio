import React from 'react';
import { BookOpen, Compass, Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F0F4F8] border-y border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
            <span>Academic Background</span>
            <span aria-hidden="true">·</span>
            <span>First-Year Undergraduate</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            About
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Building rigorous algorithmic logic in Python, learning foundational web architectures, and exploring how modern AI systems can empower practical everyday tools.
          </p>
        </div>

        {/* Narrative & Pillar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Detailed Narrative Card */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200/90 p-7 sm:p-9 shadow-xs space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-700">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Academic Trajectory</h3>
                <p className="text-xs text-slate-500">First-Year B.Tech in CSE (Artificial Intelligence &amp; Machine Learning)</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                As a first-year student pursuing a <strong className="text-slate-800 font-semibold">{PERSONAL_INFO.degree}</strong> specializing in <strong className="text-slate-800 font-semibold">{PERSONAL_INFO.specialization}</strong>, my academic curriculum concentrates on computational mathematics, data structures, and computer science fundamentals.
              </p>
              <p>
                Beyond textbook theory, my philosophy centers on <strong className="text-slate-800 font-semibold">building early and often</strong>. Whether engineering a state machine for banking transactions or writing civic calculation scripts, I enjoy translating requirements into clean, testable logic.
              </p>
              <p>
                My active participation in collegiate hackathons and ideathons has instilled strong collaborative stamina: breaking ambiguous problem statements down, rapidly building working prototypes, and articulating value propositions clearly to evaluation juries.
              </p>
            </div>

            {/* Core Commitments checklist */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Solid Core CS Foundation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hands-on Code Prototyping</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Modern Generative AI Tooling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Collaborative Team Spirit</span>
              </div>
            </div>
          </div>

          {/* Right Column: Focus Pillars */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Pillar 1: Interests */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-700">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Interests &amp; Exploration</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Generative AI applications, intelligent software utilities, modern web architectures, prompt engineering pipelines, and rapid-fire collegiate hackathons.
              </p>
            </div>

            {/* Pillar 2: Learning Goals */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Learning Goals</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deepening Python and algorithm proficiencies, mastering full-stack web development to create accessible client interfaces, and gaining rigorous hands-on depth in deep learning models and data pipelines.
              </p>
            </div>

            {/* Pillar 3: Career Aspirations */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center text-amber-800">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Career Aspirations</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Aspiring to develop into an AI Software Engineer who bridges robust web products with state-of-the-art machine intelligence—crafting high-utility software that solves tangible everyday challenges.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
