import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Terminal, 
  Sparkles, 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  ExternalLink,
  Camera
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const roles = PERSONAL_INFO.typewriterRoles;

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(50);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(120);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-medium backdrop-blur-md shadow-lg shadow-cyan-900/20 animate-pulse-slow">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Pursuing B.Tech in Computer Science & Engineering (CSE)</span>
            </div>

            {/* Greeting & Name */}
            <div className="space-y-2">
              <p className="text-slate-400 font-mono text-sm tracking-wider uppercase flex items-center justify-center lg:justify-start gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                Hello, I'm
              </p>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                <span className="block font-sans text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                  PEDDI REDDY LEELA
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent mt-1">
                  ANIRUDH REDDY
                </span>
              </h1>
            </div>

            {/* Professional Title & Typewriter */}
            <div className="space-y-1">
              <h2 className="text-lg sm:text-xl font-bold text-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span>Computer Science Engineering</span>
                <span className="text-cyan-400">•</span>
                <span className="text-purple-300">AI & Full-Stack Developer</span>
              </h2>

              <div className="h-8 flex items-center justify-center lg:justify-start gap-2">
                <span className="text-slate-400 text-sm font-mono">Specializing in</span>
                <span className="text-cyan-400 font-mono font-semibold text-sm sm:text-base border-r-2 border-cyan-400 pr-1 animate-pulse">
                  {displayedText}
                </span>
              </div>
            </div>

            {/* Bio paragraph */}
            <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 shadow-lg shadow-purple-900/30 hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 text-cyan-200" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 backdrop-blur-md hover:text-white transition-all duration-200 shadow-md"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800/60 border border-white/5 hover:border-purple-500/30 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Stats Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-3 text-center border border-white/5 hover:border-cyan-500/30 transition-colors"
                >
                  <p className="text-lg sm:text-xl font-mono font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-medium text-slate-200 truncate mt-0.5">
                    {stat.label}
                  </p>
                  <p className="text-[9px] text-slate-400 font-mono truncate">
                    {stat.subtitle}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Profile Visual Placeholder (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Outer Glowing Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-400 blur-2xl opacity-30 animate-pulse-slow" />
              
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 p-[2px] shadow-2xl shadow-purple-900/40 animate-glow">
                
                {/* Inner Card Container */}
                <div className="w-full h-full bg-[#0a1329]/90 rounded-[22px] backdrop-blur-xl p-6 flex flex-col items-center justify-between relative overflow-hidden border border-white/10">
                  
                  {/* Subtle top tech grid */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />
                  
                  {/* Tech status badge */}
                  <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/5">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                      SYSTEM_ACTIVE
                    </span>
                    <span className="text-[10px] text-slate-500">ID: AR-2026</span>
                  </div>

                  {/* Profile Photograph Container */}
                  <div className="relative my-auto group">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-tr from-purple-900/60 via-slate-800 to-cyan-900/60 p-1 border-2 border-cyan-400/50 shadow-2xl shadow-cyan-900/40 flex items-center justify-center relative overflow-hidden group-hover:border-purple-400 transition-all duration-300">
                      
                      {/* Anirudh's Real Photo */}
                      <img
                        src="/anirudh.jpg"
                        alt="PEDDI REDDY LEELA ANIRUDH REDDY"
                        className="w-full h-full object-cover object-center rounded-xl group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src.indexOf('profile.jpg') === -1) {
                            target.src = '/profile.jpg';
                          } else {
                            target.src = '/avatar.svg';
                          }
                        }}
                      />

                      {/* Subtle Glass Gradient Over Lower Half */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    </div>

                    {/* Verified badge */}
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-full p-2 shadow-xl shadow-black border border-white/20">
                      <ShieldCheck className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Bottom Avatar Info */}
                  <div className="w-full text-center pt-3 border-t border-white/5">
                    <p className="font-mono text-xs font-bold text-white tracking-wide">
                      PEDDI REDDY LEELA ANIRUDH REDDY
                    </p>
                    <p className="text-[11px] text-cyan-300 font-medium flex items-center justify-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      B.Tech CSE • R.M.D. Engg College
                    </p>
                  </div>

                  {/* Floating Tech Badges */}
                  <div className="absolute -top-3 -right-3 px-3 py-1 rounded-lg bg-[#070e20] border border-cyan-500/40 shadow-lg text-[10px] font-mono text-cyan-300 flex items-center gap-1.5 backdrop-blur-md">
                    <Cloud className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Cloud & AI</span>
                  </div>
                  
                  <div className="absolute -bottom-3 -left-3 px-3 py-1 rounded-lg bg-[#070e20] border border-purple-500/40 shadow-lg text-[10px] font-mono text-purple-300 flex items-center gap-1.5 backdrop-blur-md">
                    <Code2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>1300+ Solved</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
