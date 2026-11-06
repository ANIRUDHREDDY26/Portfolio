import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black pt-16 pb-12">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 space-y-12">
        
        {/* Top Footer: Brand & Columns */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          
          {/* Brand Col */}
          <div className="max-w-md space-y-4">
            <a href="#home" className="text-2xl font-black text-white tracking-tight">
              ANIRUDH<span className="text-orange-500">.</span>REDDY
            </a>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Aspiring AI & Full-Stack Developer pursuing B.Tech in Computer Science and Engineering (CSE) at R.M.D. Engineering College (Chennai). Passionate about combining machine learning, multi-cloud architectures, cybersecurity, and modern full-stack systems.
            </p>
            <div className="pt-2">
              <a href="#contact" className="btn-orange text-xs py-2 px-5">
                <span>Start A Conversation</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-xs sm:text-sm">
            
            {/* Quick Links */}
            <div className="space-y-3">
              <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-white/40">
                EXPLORE
              </p>
              <ul className="space-y-2 list-none p-0 m-0">
                <li><a href="#home" className="text-white/70 hover:text-orange-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-white/70 hover:text-orange-400 transition-colors">Behind the Code</a></li>
                <li><a href="#skills-section" className="text-white/70 hover:text-orange-400 transition-colors">Skills & Stats</a></li>
                <li><a href="#projects" className="text-white/70 hover:text-orange-400 transition-colors">Featured Projects</a></li>
              </ul>
            </div>

            {/* Credentials */}
            <div className="space-y-3">
              <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-white/40">
                CREDENTIALS
              </p>
              <ul className="space-y-2 list-none p-0 m-0">
                <li><a href="#experience" className="text-white/70 hover:text-orange-400 transition-colors">Corizo Internships</a></li>
                <li><a href="#education-certs" className="text-white/70 hover:text-orange-400 transition-colors">Certifications</a></li>
                <li><a href="#education" className="text-white/70 hover:text-orange-400 transition-colors">B.Tech CSE & Boards</a></li>
                <li><a href="https://github.com/ANIRUDHREDDY26" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-orange-400 transition-colors">GitHub Repos</a></li>
              </ul>
            </div>

            {/* Channels */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-white/40">
                CONNECT
              </p>
              <ul className="space-y-2 list-none p-0 m-0 font-mono text-xs">
                <li><a href="mailto:anirudhreddy2601@gmail.com" className="text-white/70 hover:text-orange-400 transition-colors">Email</a></li>
                <li><a href="https://www.linkedin.com/in/peddireddy-leela-anirudh-reddy-11a511342" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-orange-400 transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/ANIRUDHREDDY26" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-orange-400 transition-colors">GitHub</a></li>
                <li><a href="tel:+919182348773" className="text-white/70 hover:text-orange-400 transition-colors">+91 91823 48773</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <p>
            © {new Date().getFullYear()} PEDDI REDDY LEELA ANIRUDH REDDY. Built with React & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
