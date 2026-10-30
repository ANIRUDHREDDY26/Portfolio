import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ShieldCheck, 
  Radio, 
  Layers, 
  ArrowUpRight, 
  Sparkles,
  Cpu,
  Clock
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (category: string) => {
    if (category.includes('Cybersecurity')) {
      return <ShieldCheck className="w-5 h-5 text-purple-400" />;
    }
    if (category.includes('IoT')) {
      return <Radio className="w-5 h-5 text-cyan-400" />;
    }
    return <Layers className="w-5 h-5 text-blue-400" />;
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-purple-300 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured <span className="bg-gradient-to-r from-purple-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Practical architectural systems and intelligent engineering implementations across AI, IoT, and Cloud solutions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20"
            >
              <div>
                {/* Card Header & Mock Visual Preview */}
                <div className="p-6 pb-4 bg-gradient-to-b from-slate-900 to-[#070e20] border-b border-white/5 relative overflow-hidden">
                  
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300" />

                  {/* Top Bar with Icon & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 group-hover:scale-110 transition-transform">
                      {getProjectIcon(project.category)}
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      <Clock className="w-3 h-3 text-amber-400 animate-spin" />
                      {project.status}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-1 leading-snug">
                    {project.title}
                  </h3>
                </div>

                {/* Card Body: Problem Statement & Solution */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                      Problem Statement
                    </p>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                      Engineered Solution
                    </p>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Key Features Bullets */}
                  <div>
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Key Highlights
                    </p>
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-1.5">
                          <span className="text-cyan-400 mt-0.5">•</span>
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Badges */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-900 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="p-6 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white transition-colors group/btn"
                >
                  <span>View Details & Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="View GitHub status"
                  >
                    <Github className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 rounded-lg bg-slate-900 text-cyan-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Concept Notice Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-400">
            Note: Projects are maintained as <span className="text-amber-300 font-semibold">Concepts / In Progress</span> with active architecture models. Click any project to inspect full design specifications.
          </p>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
