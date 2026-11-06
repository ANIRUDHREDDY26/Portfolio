import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Github, Linkedin, Mail, Code2, Cpu, Cloud, Shield, Database, Terminal, ArrowUpRight } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Programming',
    'AI & Machine Learning',
    'Cloud Computing',
    'Cybersecurity & IoT',
    'Databases',
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills-section" className="py-20 relative z-10">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 space-y-16">
        
        {/* Hafruddin-style Stats Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-white/10 hover:border-orange-500/40 transition-colors">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
            
            {/* Left Column: Hub Tag & Headline */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-3 text-xs font-mono text-white/70 border-l-2 border-orange-500 pl-3">
                <span>CHENNAI, INDIA • B.TECH CSE (2024–2028)</span>
              </div>

              {/* Social Pills */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/ANIRUDHREDDY26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/peddireddy-leela-anirudh-reddy-11a511342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 border border-white/10 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="mailto:anirudhreddy2601@gmail.com"
                  className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 border border-white/10 transition-colors"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Column: Statement */}
            <div className="lg:col-span-7">
              <p className="text-xl sm:text-3xl font-medium text-white/60 leading-snug">
                Specializing in bridging <span className="text-white font-bold">AI Intelligence</span> with <span className="text-white font-bold">Enterprise Cloud Architectures</span>, robust cybersecurity defenses, and responsive full-stack applications.
              </p>
            </div>

          </div>

          {/* Stats Metrics Row in Share Tech Mono */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
            <div className="space-y-2">
              <div className="stat-number">1300+</div>
              <div className="flex items-center gap-2 text-xs font-medium text-white/80">
                <span className="w-1.5 h-1.5 rounded-sm bg-orange-500" />
                <span>SkillRack Solved</span>
              </div>
              <div className="w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent" />
            </div>

            <div className="space-y-2">
              <div className="stat-number">14+</div>
              <div className="flex items-center gap-2 text-xs font-medium text-white/80">
                <span className="w-1.5 h-1.5 rounded-sm bg-orange-500" />
                <span>Verified Credentials</span>
              </div>
              <div className="w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent" />
            </div>

            <div className="space-y-2">
              <div className="stat-number">03</div>
              <div className="flex items-center gap-2 text-xs font-medium text-white/80">
                <span className="w-1.5 h-1.5 rounded-sm bg-orange-500" />
                <span>Featured Architectures</span>
              </div>
              <div className="w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent" />
            </div>

            <div className="space-y-2">
              <div className="stat-number">2028</div>
              <div className="flex items-center gap-2 text-xs font-medium text-white/80">
                <span className="w-1.5 h-1.5 rounded-sm bg-orange-500" />
                <span>B.Tech CSE Cohort</span>
              </div>
              <div className="w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent" />
            </div>
          </div>

        </div>

        {/* Technical Skills Section */}
        <div className="space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="eyebrow-orange">Technical Arsenal</p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Main Technical Skills
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? 'bg-orange-500 text-white font-bold shadow-md shadow-orange-500/20'
                      : 'bg-white/5 text-white/70 hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-4 rounded-xl border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500/80 group-hover:bg-orange-500 transition-colors" />
                    <span className="text-[10px] font-mono text-white/50">{skill.category}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/60">
                  <span>Core Skill</span>
                  <span className="text-orange-400">✓</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
