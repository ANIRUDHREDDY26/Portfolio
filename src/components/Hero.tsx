import React from 'react';
import { ArrowUpRight, Download, Send, Sparkles, Shield, Cpu, Cloud, Terminal } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="min-h-screen pt-36 sm:pt-44 pb-16 relative z-10">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Split Left/Right Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Side: Title & Info */}
          <div className="w-full lg:max-w-[62%] space-y-6 text-left">
            
            {/* Domain Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider bg-white/5 border border-white/10 text-orange-400 uppercase">
                AI & MACHINE LEARNING
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider bg-white/5 border border-white/10 text-white/80 uppercase">
                CLOUD ARCHITECTURE
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider bg-white/5 border border-white/10 text-white/80 uppercase">
                CYBERSECURITY
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider bg-white/5 border border-white/10 text-white/80 uppercase">
                FULL STACK
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider bg-white/5 border border-white/10 text-orange-400 uppercase">
                IOT
              </span>
            </div>

            {/* Massive Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-black leading-[1.02] tracking-tight text-white uppercase">
              HEY, I'M <br />
              <span className="text-[#ff5500]">PEDDI REDDY LEELA ANIRUDH REDDY</span>
            </h1>

            {/* Subtitle & Bio */}
            <div className="space-y-4 max-w-2xl">
              <p className="text-base sm:text-lg text-white font-medium leading-snug">
                Building intelligent, scalable, and secure products combining <span className="serif-italic text-2xl text-orange-400">Generative AI</span>, multi-cloud architectures, and modern full-stack systems.
              </p>
              
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Computer Science & Engineering (CSE) undergraduate at <strong className="text-white">R.M.D. Engineering College</strong> (Chennai, 2024–2028). Continuously mastering problem-solving on SkillRack (<strong className="text-orange-400">1300+ Solved</strong>), building hands-on cloud security and IoT telemetry prototypes, and architecting enterprise web applications.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-orange">
                <span>View My Work</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[11px]">
                  ↗
                </span>
              </a>

              <button onClick={onOpenResume} className="btn-pill-dark">
                <Download className="w-4 h-4 text-orange-400" />
                <span>Download Resume</span>
              </button>

              <a href="#contact" className="btn-pill-dark">
                <Send className="w-4 h-4 text-white/70" />
                <span>Let's Connect</span>
              </a>
            </div>

          </div>

          {/* Right Side: Portrait Image in Glow Card */}
          <div className="w-full lg:max-w-[340px] flex justify-center lg:justify-end">
            <div className="profile-card-glow max-w-[320px] w-full">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 aspect-[4/5]">
                <img
                  src="/anirudh.jpg"
                  alt="PEDDI REDDY LEELA ANIRUDH REDDY"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/profile.jpg';
                  }}
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Card Identity Pill */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-center">
                  <p className="text-xs font-bold font-mono text-white tracking-wide">
                    PEDDI REDDY LEELA ANIRUDH REDDY
                  </p>
                  <p className="text-[11px] font-mono text-orange-400 mt-0.5 flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    B.Tech CSE • R.M.D. Engg College
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Services Grid (Hafruddin 4-item bottom bar) */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-[#0c0a0a]/60 backdrop-blur-xl border border-white/10">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-orange-500">#01</span>
            <h4 className="text-sm sm:text-base font-semibold text-white/95">
              AI & Machine Learning
            </h4>
            <p className="text-xs text-white/60">Neural Models, Prompting, Threat Detection</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-orange-500">#02</span>
            <h4 className="text-sm sm:text-base font-semibold text-white/95">
              Cloud Technologies
            </h4>
            <p className="text-xs text-white/60">Azure, Google Cloud, Oracle Cloud (OCI)</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-orange-500">#03</span>
            <h4 className="text-sm sm:text-base font-semibold text-white/95">
              Cybersecurity & Threat Detection
            </h4>
            <p className="text-xs text-white/60">SOC Telemetry, Anomaly ML, Defense</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-orange-500">#04</span>
            <h4 className="text-sm sm:text-base font-semibold text-white/95">
              Full-Stack & IoT Systems
            </h4>
            <p className="text-xs text-white/60">React.js, Spring Boot, Hardware Telemetry</p>
          </div>
        </div>

      </div>
    </section>
  );
};
