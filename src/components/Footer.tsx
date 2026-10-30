import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Sparkles, Terminal, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'AI & Cloud', href: '#ai-cloud' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#02050e] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand & Tagline (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-400 p-[1.5px] shadow-md shadow-purple-500/20">
                <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
                  <span className="font-mono font-bold text-xs bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
                    AR
                  </span>
                </div>
              </div>
              <span className="font-bold text-sm tracking-wide text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Building Intelligent Solutions with AI, Cloud and Modern Technologies.
            </p>

            <p className="text-[11px] font-mono text-cyan-400/80">
              Specialized in AI Foundations, Multi-Cloud Architectures & Full-Stack Systems.
            </p>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
              Quick Navigation
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Back-to-Top (2 cols) */}
          <div className="md:col-span-2 space-y-4 flex flex-col items-start md:items-end justify-between">
            <div className="space-y-2">
              <p className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold md:text-right">
                Connect
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-purple-400 hover:bg-slate-800 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-slate-300 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-3">
          <p>
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Designed & Developed for AI / Cloud / Full-Stack Engineering</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
