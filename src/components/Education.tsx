import React, { useState } from 'react';
import { EDUCATION_DATA, PROBLEM_SOLVING_DATA } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import { CertificationItem } from '../types';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Code2, 
  CheckCircle2, 
  Sparkles, 
  Trophy,
  FileCheck,
  ExternalLink
} from 'lucide-react';

export const Education: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const handleOpenCert = (item: typeof EDUCATION_DATA[0]) => {
    if (!item.certificateFileName) return;
    setSelectedCert({
      id: item.degree,
      title: item.certificateTitle || item.degree,
      issuer: item.institution,
      issueDate: item.period,
      badge: item.status,
      category: "Academic",
      description: item.details.join(' '),
      certificateFileName: item.certificateFileName
    });
  };

  return (
    <section id="education" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education & <span className="bg-gradient-to-r from-purple-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">Problem Solving</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Formal engineering degree coursework, academic board qualifications, and intensive algorithmic problem solving.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Academic Degrees & Board Certifications
            </h3>

            <div className="space-y-6">
              {EDUCATION_DATA.map((item, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 space-y-4 relative overflow-hidden"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                      {item.status}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {item.degree}
                    </h4>
                    <p className="text-sm font-medium text-cyan-300 mt-1">
                      {item.institution}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
                      <MapPin className="w-3 h-3 text-rose-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {item.certificateFileName && (
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">
                        Official Board Document Available
                      </span>
                      <button
                        onClick={() => handleOpenCert(item)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 hover:text-white bg-slate-900 border border-cyan-500/20 hover:border-cyan-400/50 transition-all hover:bg-cyan-500/10"
                      >
                        <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                        <span>View Certificate / Marksheet</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Problem Solving / Coding Profiles Spotlight (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-mono text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Coding & Problem Solving
            </h3>

            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-purple-500/40 transition-all duration-300 space-y-6 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-purple-950/30">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">SkillRack Profile</h4>
                    <p className="text-xs font-mono text-slate-400">Competitive Programming</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-2xl font-mono font-extrabold bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
                    {PROBLEM_SOLVING_DATA.problemsSolved}
                  </span>
                  <p className="text-[10px] font-mono text-cyan-400">Solved Problems</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {PROBLEM_SOLVING_DATA.highlight}
              </p>

              {/* Languages Applied in Problem Solving */}
              <div className="space-y-2 pt-2">
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Core Languages Applied
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { lang: 'Python', level: 'Primary / ML' },
                    { lang: 'Java', level: 'OOP / Enterprise' },
                    { lang: 'JavaScript', level: 'Web / Async' },
                  ].map((p, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-white/5 text-center">
                      <p className="text-xs font-bold text-white">{p.lang}</p>
                      <p className="text-[9px] text-slate-400 font-mono mt-0.5">{p.level}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status footer pill */}
              <div className="pt-2">
                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 flex items-center justify-between text-xs font-mono">
                  <span className="text-purple-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Consistent Problem Solver
                  </span>
                  <span className="text-cyan-400 font-semibold">1300+ Solved</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Certificate Modal for Education Cards */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
