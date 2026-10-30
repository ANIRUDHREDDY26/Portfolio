import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { 
  Code2, 
  BrainCircuit, 
  Cloud, 
  Shield, 
  Database, 
  Wrench, 
  Lightbulb, 
  Sparkles,
  Check,
  Search
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { name: 'All', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { name: 'Programming', icon: <Code2 className="w-3.5 h-3.5" /> },
    { name: 'AI & Machine Learning', icon: <BrainCircuit className="w-3.5 h-3.5" /> },
    { name: 'Cloud Computing', icon: <Cloud className="w-3.5 h-3.5" /> },
    { name: 'Tools & Frameworks', icon: <Wrench className="w-3.5 h-3.5" /> },
    { name: 'Databases', icon: <Database className="w-3.5 h-3.5" /> },
    { name: 'Cybersecurity & IoT', icon: <Shield className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Programming':
        return {
          icon: <Code2 className="w-4 h-4 text-sky-400" />,
          border: 'hover:border-sky-500/40',
          badge: 'bg-sky-500/10 text-sky-300',
          dot: 'bg-sky-400'
        };
      case 'AI & Machine Learning':
        return {
          icon: <BrainCircuit className="w-4 h-4 text-purple-400" />,
          border: 'hover:border-purple-500/40',
          badge: 'bg-purple-500/10 text-purple-300',
          dot: 'bg-purple-400'
        };
      case 'Cloud Computing':
        return {
          icon: <Cloud className="w-4 h-4 text-cyan-400" />,
          border: 'hover:border-cyan-500/40',
          badge: 'bg-cyan-500/10 text-cyan-300',
          dot: 'bg-cyan-400'
        };
      case 'Cybersecurity & IoT':
        return {
          icon: <Shield className="w-4 h-4 text-emerald-400" />,
          border: 'hover:border-emerald-500/40',
          badge: 'bg-emerald-500/10 text-emerald-300',
          dot: 'bg-emerald-400'
        };
      case 'Databases':
        return {
          icon: <Database className="w-4 h-4 text-amber-400" />,
          border: 'hover:border-amber-500/40',
          badge: 'bg-amber-500/10 text-amber-300',
          dot: 'bg-amber-400'
        };
      case 'Tools & Frameworks':
        return {
          icon: <Wrench className="w-4 h-4 text-pink-400" />,
          border: 'hover:border-pink-500/40',
          badge: 'bg-pink-500/10 text-pink-300',
          dot: 'bg-pink-400'
        };
      case 'Concepts':
        return {
          icon: <Lightbulb className="w-4 h-4 text-indigo-400" />,
          border: 'hover:border-indigo-500/40',
          badge: 'bg-indigo-500/10 text-indigo-300',
          dot: 'bg-indigo-400'
        };
      default:
        return {
          icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
          border: 'hover:border-cyan-500/40',
          badge: 'bg-cyan-500/10 text-cyan-300',
          dot: 'bg-cyan-400'
        };
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>CORE TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Main Technical <span className="bg-gradient-to-r from-purple-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Focused core competencies across Computer Science Engineering, AI/ML, Cloud Architectures, and Full-Stack Development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Scrollable category pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md shadow-cyan-900/30 font-semibold'
                      : 'bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/5'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/60 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {filteredSkills.map((skill, index) => {
            const theme = getCategoryTheme(skill.category);
            return (
              <div
                key={index}
                className={`glass-card rounded-xl p-4 border border-white/5 ${theme.border} transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-slate-900/90 border border-white/5 group-hover:scale-110 transition-transform">
                      {theme.icon}
                    </div>
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" title="Core Focus" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {skill.name}
                    </h3>
                  </div>
                </div>

                <div className="pt-3 mt-2 border-t border-white/5 flex items-center justify-between">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${theme.badge}`}>
                    {skill.category.split(' ')[0]}
                  </span>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`}></span>
                    Active
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Overview Summary Banner */}
        <div className="mt-12 glass-card rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-purple-950/20 via-slate-900/60 to-cyan-950/20">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0 hidden sm:block">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Comprehensive Multi-Disciplinary Technology Stack
              </p>
              <p className="text-xs text-slate-400">
                Backed by 12+ official industry certifications and hands-on academic training across AI, Cloud, and Software Engineering.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              Verified Competencies
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
