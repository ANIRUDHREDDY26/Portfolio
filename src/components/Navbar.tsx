import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-400 p-[1.5px] shadow-lg shadow-purple-500/20 group-hover:shadow-cyan-500/30 transition-all duration-300">
              <div className="w-full h-full bg-[#030712] rounded-[9px] overflow-hidden flex items-center justify-center">
                <img
                  src="/anirudh.jpg"
                  alt="Anirudh Reddy"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full" />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                ANIRUDH REDDY
              </span>
              <span className="text-[10px] font-mono tracking-wider text-cyan-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                B.Tech CSE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/40 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-300 bg-white/10 shadow-sm shadow-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[1px]"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA: Download Resume */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-full overflow-hidden group bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 p-[1.5px] shadow-lg shadow-purple-600/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <div className="px-4 py-1.5 bg-[#070d1e] rounded-full flex items-center gap-2 group-hover:bg-opacity-80 transition-all duration-200">
                <FileDown className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span className="bg-gradient-to-r from-purple-200 via-white to-cyan-200 bg-clip-text text-transparent font-medium">
                  Download Resume
                </span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 text-cyan-400 bg-slate-900/60 rounded-lg border border-cyan-500/20 hover:bg-cyan-500/10"
              title="Resume"
            >
              <FileDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/60 border border-white/10 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-nav border-b border-purple-500/20 px-5 pt-3 pb-6 mt-3 space-y-2 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-900/40 to-blue-900/40 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 shadow-md shadow-purple-900/40"
          >
            <FileDown className="w-4 h-4" />
            Download Resume
          </button>
        </div>
      )}
    </header>
  );
};
