import React, { useState } from 'react';
import { EXPERIENCES_DATA } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import { CertificationItem } from '../types';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Cloud, 
  ShieldCheck, 
  Award,
  FileCheck
} from 'lucide-react';

export const Experience: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const handleOpenExpCert = (exp: typeof EXPERIENCES_DATA[0]) => {
    if (!exp.certificateFileName) return;
    setSelectedCert({
      id: exp.id,
      title: `${exp.title} - ${exp.company}`,
      issuer: exp.company,
      issueDate: exp.period,
      badge: exp.type,
      category: exp.title.includes('Cyber') ? 'Cybersecurity' : 'Cloud',
      description: exp.description.join(' '),
      certificateFileName: exp.certificateFileName
    });
  };

  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>PRACTICAL TRAINING MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Internship <span className="bg-gradient-to-r from-purple-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Focused internship training programs completed with Corizo, strengthening domain foundations in Cloud Infrastructure and Cybersecurity.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Timeline Cards Container */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 sm:before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-purple-500/50 before:via-cyan-500/40 before:to-transparent before:pointer-events-none">
          
          {EXPERIENCES_DATA.map((exp, index) => {
            const isEven = index % 2 === 0;
            const isCyber = exp.id.includes('cyber');

            return (
              <div
                key={exp.id}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  isEven ? 'sm:flex-row-reverse' : ''
                } gap-6 sm:gap-12 group`}
              >
                {/* Center Node Icon */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#070d1e] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 z-10 group-hover:scale-110 transition-transform">
                  {isCyber ? (
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Cloud className="w-4 h-4 text-cyan-400" />
                  )}
                </div>

                {/* Content Card (Left or Right on desktop) */}
                <div className="ml-10 sm:ml-0 sm:w-1/2">
                  <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden">
                    
                    {/* Background accent */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none ${
                        isCyber ? 'bg-emerald-500/10' : 'bg-cyan-500/10'
                      }`}
                    />

                    {/* Top Row: Type Badge & Period */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                        <Award className="w-3 h-3 text-purple-400" />
                        {exp.type}
                      </span>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Title & Company */}
                    <div className="space-y-1 mb-4">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <Building2 className="w-3.5 h-3.5 text-purple-400" />
                        <span className="text-slate-300">{exp.company}</span>
                        <span>•</span>
                        <span className="text-[11px] font-mono text-cyan-400">Internship Training</span>
                      </div>
                    </div>

                    {/* Description bullet points */}
                    <div className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills pills */}
                    <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Certificate Action */}
                    {exp.certificateFileName && (
                      <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-400">
                          Official Training Certificate
                        </span>
                        <button
                          onClick={() => handleOpenExpCert(exp)}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-cyan-300 hover:text-white bg-slate-900 border border-cyan-500/20 hover:border-cyan-400/50 transition-all hover:bg-cyan-500/10"
                        >
                          <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                          <span>View Certificate</span>
                        </button>
                      </div>
                    )}

                  </div>
                </div>

                {/* Empty side for balanced grid on desktop */}
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            );
          })}

        </div>

      </div>

      {/* Certificate Modal for Experience */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
