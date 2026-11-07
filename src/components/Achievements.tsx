import React from 'react';
import { Trophy, Lightbulb, Award, BookOpen, Calendar, ArrowUpRight } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Hackathon':
        return <Trophy className="w-4 h-4 text-amber-700" />;
      case 'Ideathon':
        return <Lightbulb className="w-4 h-4 text-indigo-700" />;
      case 'Certification':
        return <Award className="w-4 h-4 text-emerald-700" />;
      default:
        return <BookOpen className="w-4 h-4 text-sky-700" />;
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 bg-[#F9FAFB] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
            <span>Milestones &amp; Growth</span>
            <span aria-hidden="true">·</span>
            <span>Sprint Achievements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Achievements
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Active involvement in rapid collegiate engineering competitions, coursework tracks, and practical technology explorations.
          </p>
        </div>

        {/* 2-Column Grid: Hackathons & Ideathons vs Certifications & Learning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: Hackathons & Ideathons Spotlight */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-7 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Hackathons &amp; Ideathons</h3>
                  <p className="text-xs text-slate-500">Rapid Engineering Sprints &amp; Pitches</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Competitive collegiate hackathons serve as my proving ground for fast-paced software development. Collaborating closely with team members under 24- to 36-hour sprint windows, I focus on transforming high-level ideas into functional code and crisp technical demos.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-100/90 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">Rapid Prototyping &amp; MVP Architecture</span>
                    <span className="text-slate-400 font-mono">2024–Present</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed modular logic flows, integrated data storage mockups, and coordinated Git branch merges during time-constrained team sprints.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-100/90 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">Ideation Pitches &amp; Technical Defense</span>
                    <span className="text-slate-400 font-mono">Campus Innovation Cell</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Formulated clear problem definitions, architectural diagrams, and user journey stories to pitch technical solutions to faculty juries and industry mentors.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom summary badge */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Sprint Focus</span>
              <span className="font-medium text-slate-800">Agile Prototyping · Team Collaboration</span>
            </div>
          </div>

          {/* Column 2: Continuous Learning & Coursework */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-7 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center text-sky-700">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Certifications &amp; Continuous Learning</h3>
                  <p className="text-xs text-slate-500">Structured Academic &amp; Self-Directed Tracks</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Complementing formal university degree studies with continuous independent coursework across algorithmic programming, modern web practices, and foundational AI/LLM concepts.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-100/90 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">Python Mastery &amp; Data Structures</span>
                    <span className="text-slate-400 font-mono">Active Track</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Deepened understanding of computational complexity, list/dictionary comprehensions, OOP encapsulation, and file/data serialization.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-100/90 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">Generative AI &amp; Prompt Engineering</span>
                    <span className="text-slate-400 font-mono">Hands-on Workshops</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Exploring few-shot prompt formulation, structured output elicitation, and integrating language models into responsive software interfaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom summary badge */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Commitment</span>
              <span className="font-medium text-slate-800">Continuous Learning · Quality Code</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
