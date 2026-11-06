import React from 'react';
import { Sparkles, Terminal, Shield, Cloud, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const domains = [
    'Python',
    'React.js',
    'Java',
    'Spring Boot',
    'Microsoft Azure',
    'Google Cloud',
    'Oracle Cloud (OCI)',
    'Cybersecurity',
    'Internet of Things (IoT)',
    'MySQL',
    'MongoDB Atlas',
  ];

  return (
    <>
      {/* Brands / Core Domains Banner */}
      <section className="w-full py-8 bg-[#0a0a0a]/60 backdrop-blur-md border-y border-white/10 relative z-10">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-white/60 shrink-0">
            Core Domains & Technologies
          </p>

          <div className="flex items-center gap-6 sm:gap-8 flex-wrap justify-center">
            {domains.map((dom, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm font-mono font-semibold text-white/80 hover:text-orange-400 transition-colors cursor-default"
              >
                {dom}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section ("Behind the Code") */}
      <section id="about" className="py-24 relative z-10">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <p className="eyebrow-orange">Behind the Code</p>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Engineering Next-Gen <span className="serif-italic text-4xl sm:text-6xl text-orange-400">Intelligent</span> & Scalable Cloud Systems.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed">
                <p>
                  I am a Computer Science & Engineering undergraduate and aspiring AI & Full-Stack Developer at <strong className="text-white">R.M.D. Engineering College</strong> (Chennai, Tamil Nadu), pursuing my degree from 2024 to 2028.
                </p>
                <p>
                  My engineering journey is driven by practical problem-solving and systems thinking. I continuously hone my algorithmic capabilities on SkillRack with over <strong className="text-orange-400">1300+ problems solved</strong>, while actively architecting projects spanning AI-powered security telemetry, IoT edge sensor streams, and enterprise microservices.
                </p>
                <p>
                  Certified across <strong className="text-white">Oracle Cloud Infrastructure (OCI 2025 AI Foundations)</strong>, <strong className="text-white">Google Cloud</strong>, and trained through hands-on industrial internships in Cyber Security and Cloud Infrastructure with <strong className="text-white">Corizo</strong>.
                </p>
              </div>

              {/* Quick Info Badges */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-white/60">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  Chennai, Tamil Nadu
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  B.Tech CSE (2024–2028)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  SkillRack: 1300+ Solved
                </span>
              </div>
            </div>

            {/* Right Side: 4 Core Pillar Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-orange-500">PILLAR 01</span>
                  <Cpu className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-base font-bold text-white">AI & Machine Learning</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Designing anomaly detection classifiers, predictive models, and prompt architectures for automated threat intelligence.
                </p>
              </div>

              <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-orange-500">PILLAR 02</span>
                  <Cloud className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-base font-bold text-white">Multi-Cloud Architecture</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Architecting resilient cloud hosting across Microsoft Azure, Google Cloud (Pub/Sub & Data), and Oracle Cloud Infrastructure.
                </p>
              </div>

              <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-orange-500">PILLAR 03</span>
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-base font-bold text-white">Cybersecurity & Telemetry</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Real-time threat feeds, event streaming analysis, intrusion mitigation, and enterprise Zero-Trust concepts.
                </p>
              </div>

              <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-orange-500">PILLAR 04</span>
                  <Terminal className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-base font-bold text-white">Full-Stack & IoT Systems</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Developing reactive user interfaces with React.js, high-throughput Spring Boot REST APIs, and embedded sensor streams.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};
