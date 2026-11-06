import React, { useState } from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { CertificationItem } from '../types';
import { CertificateModal } from './CertificateModal';
import { 
  Award, 
  Calendar, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Cloud,
  FileCheck
} from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [selectedIssuer, setSelectedIssuer] = useState<string>('All');

  const issuers = ['All', 'Oracle', 'Google Cloud', 'NPTEL', 'Infosys Springboard', 'Corizo', 'CodeTantra', 'Academic Boards'];

  const filteredCerts = CERTIFICATIONS_DATA.filter((cert) => {
    if (selectedIssuer === 'All') return true;
    if (selectedIssuer === 'Academic Boards') return cert.category === 'Academic' || cert.issuer.includes('Board');
    return cert.issuer === selectedIssuer;
  });

  return (
    <section id="education-certs" className="py-24 relative z-10">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="eyebrow-orange">Credentials & Academics</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-1">
              Verified <span className="text-orange-500">Certifications</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/60 max-w-md font-medium">
            Official industry certifications, professional training accreditations, and state board qualifications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {issuers.map((issuer) => (
            <button
              key={issuer}
              onClick={() => setSelectedIssuer(issuer)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedIssuer === issuer
                  ? 'bg-orange-500 text-white font-bold shadow-md shadow-orange-500/20'
                  : 'bg-white/5 text-white/70 hover:text-white border border-white/10'
              }`}
            >
              {issuer}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-orange-500/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-orange-400">
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-mono text-white/50">{cert.issueDate}</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs text-white/65 line-clamp-3 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* View Certificate Action */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Credential
                </span>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="btn-pill-dark text-xs py-1 px-3"
                >
                  <span>Preview</span>
                  <ExternalLink className="w-3 h-3 text-orange-400" />
                </button>
              </div>
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
