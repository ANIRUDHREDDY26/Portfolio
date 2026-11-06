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
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="eyebrow-orange">Academic Pathway</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-1">
              Education & <span className="text-orange-500">Problem Solving</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/60 max-w-md font-medium">
            Rigorous engineering education at R.M.D. Engineering College, verified board credentials, and sustained coding performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-mono text-orange-400 uppercase tracking-wider font-bold">
              Formal Education & Board Qualifications
            </h3>

            <div className="space-y-6">
              {EDUCATION_DATA.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-white/5 border border-white/10 text-orange-400">
                      {item.status}
                    </span>
                    <span className="text-xs font-mono text-white/60 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-orange-400" />
                      {item.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {item.degree}
                    </h4>
                    <p className="text-sm font-semibold text-white/80">
                      {item.institution}
                    </p>
                    <p className="text-xs font-mono text-white/50 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-orange-400" />
                      {item.location}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-1">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-xs sm:text-sm text-white/70 flex items-start gap-2">
                        <span className="text-orange-500 mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Certificate View Button if available */}
                  {item.certificateFileName && (
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Board Certificate Verified
                      </span>
                      <button
                        onClick={() => handleOpenCert(item)}
                        className="btn-pill-dark text-xs py-1 px-3"
                      >
                        <span>View Board Certificate</span>
                        <ExternalLink className="w-3 h-3 text-orange-400" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Problem Solving & SkillRack (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono text-orange-400 uppercase tracking-wider font-bold">
              Coding & Problem Solving Mastery
            </h3>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">SkillRack Coding Profile</h4>
                  <p className="text-xs font-mono text-white/60">Algorithmic Problem Solving</p>
                </div>
              </div>

              {/* Big Stat */}
              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 text-center space-y-1">
                <div className="stat-number text-orange-500">{PROBLEM_SOLVING_DATA.problemsSolved}</div>
                <p className="text-xs font-mono uppercase tracking-wider text-white/80 font-bold">
                  Problems Successfully Solved
                </p>
              </div>

              {/* Badges / Domains */}
              <div className="space-y-3">
                <p className="text-xs font-mono text-white/60 uppercase tracking-wider">
                  Core Track Competencies
                </p>
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">Data Structures & Algorithms</span>
                    <span className="font-mono text-orange-400 font-bold">Core Mastery</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">Python Programming Track</span>
                    <span className="font-mono text-orange-400 font-bold">Active Solved</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">Java & Object-Oriented Logic</span>
                    <span className="font-mono text-orange-400 font-bold">Certified NPTEL</span>
                  </div>
                </div>
              </div>

              {/* Profile Link */}
              <div className="pt-2">
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-center text-xs font-mono text-orange-300">
                  ⚡ 1300+ Verified Coding Challenges Solved on SkillRack
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Certificate Viewer Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
