import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200/90 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Identity & Academic affiliation */}
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-sm font-bold text-slate-900">{PERSONAL_INFO.fullName}</p>
            <p className="text-xs text-slate-500">
              B.Tech CSE (AI &amp; ML) · First-Year Undergraduate Portfolio
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-slate-500 text-xs">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg border border-slate-200/80 transition-colors"
              aria-label="Back to top of page"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Quiet copyright */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
          <span>&copy; {new Date().getFullYear()} T. Mukesh Reddy. All rights reserved.</span>
          <span>Crafted for academic submissions &amp; engineering showcases</span>
        </div>
      </div>
    </footer>
  );
};
