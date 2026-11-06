import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills-section' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Credentials', href: '#education-certs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group text-decoration-none">
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-orange-500 transition-colors">
            ANIRUDH<span className="text-orange-500">.</span>REDDY
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-orange-400">
            B.TECH CSE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors relative py-1 hover:text-orange-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="btn-pill-dark text-xs sm:text-sm"
          >
            <FileText className="w-3.5 h-3.5 text-orange-400" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="btn-orange text-xs sm:text-sm"
          >
            <span>Let's Talk</span>
            <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center text-[10px]">
              ↗
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white/90 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <ul className="space-y-3 list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-semibold text-white/80 hover:text-orange-500 py-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn-pill-dark w-full justify-center"
            >
              <FileText className="w-4 h-4 text-orange-400" />
              <span>Digital Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-orange w-full justify-center"
            >
              <span>Get In Touch</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
