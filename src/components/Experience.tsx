import React, { useState } from 'react';
import { EXPERIENCES_DATA } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import { CertificationItem } from '../types';
import { Briefcase, Calendar, Award, ExternalLink, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const handleOpenCert = (exp: typeof EXPERIENCES_DATA[0]) => {
    if (!exp.certificateFileName) return;
    setSelectedCert({
      id: exp.id,
      title: `${exp.title} - ${exp.company}`,
      issuer: exp.company,
      issueDate: exp.period,
      badge: exp.type,
      category: "Internship",
      description: exp.description.join(' '),
      certificateFileName: exp.certificateFileName
    });
  };

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="eyebrow-orange">Professional Journey</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-1">
              Internship <span className="text-orange-500">Experience</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/60 max-w-md font-medium">
            Industry-oriented internship training completed with Corizo in Cloud Infrastructure, Cloud Architectures, and Cybersecurity.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCES_DATA.map((exp) => (
            <div
              key={exp.id}
              className="glass-card rounded-3xl p-8 border border-white/10 hover:border-orange-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-500/10 text-orange-400 border border-orange-500/30">
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-white/60">
                    <Calendar className="w-3.5 h-3.5 text-orange-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-semibold text-orange-400 mt-0.5">
                    {exp.company}
                  </p>
                </div>

                {/* Description Bullets */}
                <div className="space-y-2 pt-2">
                  {exp.description.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/70 leading-relaxed">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="pt-3 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-white/80 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Official Certificate Button */}
              {exp.certificateFileName && (
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-white/60">
                    <Award className="w-4 h-4 text-orange-400" />
                    <span>Verified Completion</span>
                  </div>

                  <button
                    onClick={() => handleOpenCert(exp)}
                    className="btn-pill-dark text-xs py-1.5 px-3"
                  >
                    <span>View Official Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5 text-orange-400" />
                  </button>
                </div>
              )}
            </div>
          ))}
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
