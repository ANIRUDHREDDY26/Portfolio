import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Project Collaboration',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', interest: 'Project Collaboration', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('anirudhreddy2601@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <>
      {/* Contact Form Section */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          
          <div className="glass-card rounded-3xl p-8 sm:p-14 border border-white/10 hover:border-orange-500/30 transition-all">
            
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-12">
              <div>
                <p className="eyebrow-orange">Initiate Contact</p>
                <h2 className="text-3xl sm:text-6xl font-black text-white mt-1 uppercase tracking-tight">
                  LET'S WORK <br />
                  <span className="text-orange-500">TOGETHER</span>
                </h2>
              </div>

              <div className="max-w-xs p-4 border-l-2 border-white/20 text-xs sm:text-sm text-white/60 leading-relaxed">
                <span className="font-mono text-orange-400 font-bold block mb-1">OPEN FOR ROLES</span>
                Currently available for software engineering internships, AI/ML research collaborations, and full-stack projects.
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-white/80">
                    YOUR FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name..."
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:border-orange-500 py-3 text-base text-white placeholder-white/30 focus:outline-none transition-colors font-sans"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-white/80">
                    YOUR WORK EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:border-orange-500 py-3 text-base text-white placeholder-white/30 focus:outline-none transition-colors font-sans"
                  />
                </div>

                {/* Topic / Interest */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-white/80">
                    PRIMARY OBJECTIVE
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:border-orange-500 py-3 text-base text-white focus:outline-none transition-colors font-sans"
                  >
                    <option value="Project Collaboration" className="bg-[#0c0a0a] text-white">Project Collaboration</option>
                    <option value="Internship / Hiring" className="bg-[#0c0a0a] text-white">Internship / Hiring Opportunity</option>
                    <option value="Cloud / AI Architecture Inquiry" className="bg-[#0c0a0a] text-white">Cloud / AI Architecture Inquiry</option>
                    <option value="Technical Networking" className="bg-[#0c0a0a] text-white">Technical Networking</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-white/80">
                    PROJECT SUMMARY / MESSAGE
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your requirements..."
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:border-orange-500 py-3 text-base text-white placeholder-white/30 focus:outline-none transition-colors font-sans"
                  />
                </div>

              </div>

              {/* Submit Row */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="btn-orange text-sm px-8 py-3.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                    ↗
                  </span>
                </button>

                {submitted && (
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-4 py-2 rounded-full">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Message dispatched successfully! I will reply shortly.</span>
                  </div>
                )}
              </div>
            </form>

          </div>

        </div>
      </section>

      {/* Grand Connect Card (Hafruddin Signature CTA) */}
      <section id="connect" className="py-16 relative z-10">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          
          <div className="glass-card rounded-3xl p-10 sm:p-16 border border-white/10 text-center space-y-8 flex flex-col items-center">
            <span className="eyebrow-orange">HAVE AN OPPORTUNITY?</span>

            <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight max-w-3xl leading-tight">
              LET'S BUILD SOMETHING <br />
              <span className="text-orange-500">EXTRAORDINARY</span>
            </h2>

            <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
              Whether you have a breakthrough engineering opportunity, an internship offer, or want to discuss AI pipelines and cloud deployments.
            </p>

            {/* Direct Connect Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handleCopyEmail}
                className="btn-orange text-sm py-3 px-6"
              >
                {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copied!' : 'anirudhreddy2601@gmail.com'}</span>
              </button>

              <a
                href="tel:+919182348773"
                className="btn-pill-dark text-sm py-3 px-6"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>+91 91823 48773</span>
              </a>

              <a
                href="https://www.linkedin.com/in/peddireddy-leela-anirudh-reddy-11a511342"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-dark text-sm py-3 px-6"
              >
                <Linkedin className="w-4 h-4 text-orange-400" />
                <span>LinkedIn Message</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="w-full pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-white/60">
              <a href="https://github.com/ANIRUDHREDDY26" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                GITHUB: @ANIRUDHREDDY26
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/peddireddy-leela-anirudh-reddy-11a511342" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                LINKEDIN: ANIRUDH REDDY
              </a>
              <span>•</span>
              <span>CHENNAI, TAMIL NADU</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
