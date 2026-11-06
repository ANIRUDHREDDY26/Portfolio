import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle, ShieldAlert, Cpu, Layers, Sparkles, Play } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenLiveDemo?: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenLiveDemo }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl glass-card rounded-3xl border border-white/20 p-6 sm:p-8 bg-[#0c0a0a] shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
          title="Close Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-500/10 text-orange-400 border border-orange-500/30">
              {project.status}
            </span>
            <span className="text-xs font-mono text-white/60">
              {project.category}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white pr-8">
            {project.title}
          </h3>
        </div>

        {/* Problem & Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-2xl bg-[#070707] border border-white/10 space-y-2">
            <p className="text-xs font-mono text-red-400 flex items-center gap-1.5 font-bold uppercase">
              <ShieldAlert className="w-4 h-4" />
              PROBLEM CONTEXT
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#070707] border border-white/10 space-y-2">
            <p className="text-xs font-mono text-orange-400 flex items-center gap-1.5 font-bold uppercase">
              <Sparkles className="w-4 h-4" />
              ENGINEERED SOLUTION
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6 space-y-3">
          <h4 className="text-xs font-mono text-white/60 uppercase tracking-wider font-bold">
            Core Functional Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-xs text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="mb-6 space-y-3">
          <h4 className="text-xs font-mono text-white/60 uppercase tracking-wider font-bold">
            System & Deployment Architecture
          </h4>
          <div className="space-y-2">
            {project.architectureHighlights.map((arch, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-orange-500/5 border border-orange-500/20 text-xs text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>{arch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Stack */}
        <div className="mb-8 space-y-2">
          <h4 className="text-xs font-mono text-white/60 uppercase tracking-wider font-bold">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-orange-400 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60 text-center sm:text-left">
            Interactive live demo simulation with project authentication gateway available.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://github.com/ANIRUDHREDDY26/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-dark text-xs py-2 px-4"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>

            <button
              onClick={() => {
                if (onOpenLiveDemo) {
                  onClose();
                  onOpenLiveDemo(project);
                }
              }}
              className="btn-orange text-xs py-2 px-4"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Launch Live Demo</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
