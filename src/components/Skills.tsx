import React, { useState } from 'react';
import { Terminal, Cpu, Users, Search } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterButtons = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming' },
    { id: 'technical', label: 'Technical & AI' },
    { id: 'soft', label: 'Soft & Practical' },
  ];

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'programming':
        return <Terminal className="w-4 h-4 text-sky-700" />;
      case 'technical':
        return <Cpu className="w-4 h-4 text-indigo-700" />;
      case 'soft':
        return <Users className="w-4 h-4 text-teal-700" />;
      default:
        return <Terminal className="w-4 h-4 text-slate-700" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) {
      return null;
    }
    const matchingSkills = cat.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.focus.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.level.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (searchQuery && matchingSkills.length === 0) {
      return null;
    }
    return {
      ...cat,
      skills: searchQuery ? matchingSkills : cat.skills,
    };
  }).filter(Boolean) as typeof SKILL_CATEGORIES;

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F9FAFB] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
              <span>Technical Skills</span>
              <span aria-hidden="true">·</span>
              <span>Core Tooling</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Skills
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Categorized proficiency across foundational coding languages, artificial intelligence principles, version control, and collaborative problem-solving.
            </p>
          </div>

          {/* Interactive Search Field */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, Git)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-300 focus:border-slate-400 transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Filter Bar: Segmented interactive tabs (allowed per frontend-design skill) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl w-fit max-w-full overflow-x-auto mb-10 border border-slate-200/60">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveCategory(btn.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeCategory === btn.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {filteredCategories.length === 0 ? (
            <div className="col-span-3 text-center py-12 bg-white rounded-xl border border-slate-200/70 p-6">
              <p className="text-slate-500 text-sm">No skills found matching &ldquo;{searchQuery}&rdquo;</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 text-xs font-semibold text-sky-700 hover:underline"
              >
                Clear search filter
              </button>
            </div>
          ) : (
            filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                      {getCategoryIcon(category.id)}
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{category.categoryName}</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">{category.description}</p>
                </div>

                {/* Skill Items List */}
                <div className="space-y-4 pt-1">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-lg bg-[#F8FAFC] border border-slate-100/90 hover:border-slate-200 transition-colors space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-800">{skill.name}</span>
                        <span className="text-xs font-medium text-slate-500">{skill.level}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-snug">{skill.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};
