import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle, ShieldAlert, Cpu, Layers, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl glass-card rounded-2xl border border-white/20 p-6 sm:p-8 bg-[#070d1e] shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {project.status}
            </span>
            <span className="text-xs font-mono text-cyan-400">
              {project.category}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white pr-8">
            {project.title}
          </h3>
        </div>

        {/* Problem & Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-red-500/20 space-y-2">
            <p className="text-xs font-mono text-red-400 flex items-center gap-1.5 font-semibold">
              <ShieldAlert className="w-4 h-4" />
              PROBLEM STATEMENT
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 space-y-2">
            <p className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 font-semibold">
              <Sparkles className="w-4 h-4" />
              ENGINEERED SOLUTION
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6 space-y-3">
          <h4 className="text-sm font-mono text-slate-300 uppercase tracking-wider font-semibold">
            Core Functional Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="mb-6 space-y-3">
          <h4 className="text-sm font-mono text-slate-300 uppercase tracking-wider font-semibold">
            System & Deployment Architecture
          </h4>
          <div className="space-y-2">
            {project.architectureHighlights.map((arch, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-purple-950/20 border border-purple-500/20 text-xs text-purple-200">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>{arch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Stack */}
        <div className="mb-8 space-y-2">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-cyan-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Repository & Demo Action Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            Currently marked as <span className="text-amber-300 font-mono">Concept / In Progress</span>. Repositories will be linked upon project release.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                alert(`GitHub repository placeholder for "${project.title}". You can attach your GitHub repository URL in src/data/portfolioData.ts!`);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-white hover:bg-slate-700 border border-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub (Preview)</span>
            </button>

            <button
              onClick={() => {
                alert(`Interactive live demo placeholder for "${project.title}". Set your hosted deployment URL in src/data/portfolioData.ts!`);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
