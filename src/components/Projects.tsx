import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ProjectLiveDemoModal } from './ProjectLiveDemoModal';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ShieldCheck, 
  Radio, 
  Layers, 
  ArrowUpRight, 
  Play
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [liveDemoProject, setLiveDemoProject] = useState<Project | null>(null);

  const getProjectIcon = (category: string) => {
    if (category.includes('Cybersecurity')) {
      return <ShieldCheck className="w-5 h-5 text-orange-400" />;
    }
    if (category.includes('IoT')) {
      return <Radio className="w-5 h-5 text-orange-400" />;
    }
    return <Layers className="w-5 h-5 text-orange-400" />;
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="eyebrow-orange">My Portfolio</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-1">
              Featured <span className="text-orange-500">Architectures</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/60 max-w-md font-medium">
            Production-oriented systems spanning AI security telemetry, Google Cloud IoT data pipelines, and scalable enterprise full-stack platforms.
          </p>
        </div>

        {/* Projects Grid in Hafruddin Showcase Style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div>
                {/* Card Top Banner */}
                <div className="p-6 pb-4 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                      {getProjectIcon(project.category)}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-orange-500/10 text-orange-400 border border-orange-500/30">
                      Live Demo Ready
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors mt-1">
                    {project.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-orange-400 mb-1 font-semibold">
                      Problem Context
                    </p>
                    <p className="text-xs text-white/70 line-clamp-3 leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-white/60 mb-1 font-semibold">
                      Engineered Solution
                    </p>
                    <p className="text-xs text-white/80 line-clamp-3 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/70">
                        <span className="text-orange-500">•</span>
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-white/70 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-3 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white transition-colors"
                >
                  <span>Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/ANIRUDHREDDY26/Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setLiveDemoProject(project)}
                    className="btn-orange text-xs py-2 px-3.5"
                    title="Open Live Demo & Auth Gateway"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Specification Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenLiveDemo={(proj) => setLiveDemoProject(proj)}
      />

      {/* Interactive Live Demo Modal with Custom Login */}
      <ProjectLiveDemoModal
        project={liveDemoProject}
        onClose={() => setLiveDemoProject(null)}
      />
    </section>
  );
};
