import React from 'react';
import { PERSONAL_INFO, PROFILE_HIGHLIGHTS } from '../data/portfolioData';
import { 
  BrainCircuit, 
  Cloud, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Award,
  CheckCircle2,
  Code2
} from 'lucide-react';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-purple-400" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-sky-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-pink-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-purple-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>DISCOVER MY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Narrative & Quick Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Bio Card (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                Crafting Next-Gen Intelligent Applications
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {PERSONAL_INFO.aboutText}
              </p>

              <p className="text-slate-400 leading-relaxed text-sm">
                With a strong foundation in Computer Science Engineering and hands-on specialization in Artificial Intelligence and Machine Learning, I bridge high-level algorithmic logic with resilient, scalable cloud architectures.
              </p>
            </div>

            {/* Core Values / Strengths list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Algorithmic Thinking & Clean Code",
                "Scalable Multi-Cloud Architectures",
                "Generative AI & Vector Retrieval (RAG)",
                "Proactive Cyber Threat Defenses"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quick Context Pills */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Chennai, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                <span>B.Tech CSE (2024–2028)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>SkillRack: 1300+ Solved</span>
              </div>
            </div>
          </div>

          {/* Quick Stats & Engineering Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-purple-950/20">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  ENGINEERING PILLARS
                </span>
                <span className="text-xs text-slate-400 font-mono">04 CORE DOMAINS</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Focused on solving real-world challenges through automation, clean system designs, and intelligent models that scale reliably across modern production environments.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-purple-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                      <BrainCircuit className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-white">AI & Deep Foundations</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">Active</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-cyan-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Cloud className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-white">Cloud Architecture (OCI, GCP, Azure)</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">Certified</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-white">Cybersecurity & Telemetry</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Trained</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Profile Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFILE_HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className={`group glass-card rounded-2xl p-6 border border-white/10 ${item.borderGlow} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {getIcon(item.iconName)}
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
