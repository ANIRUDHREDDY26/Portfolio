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

  const getIssuerBadgeColor = (issuer: string) => {
    if (issuer.includes('Board')) {
      return 'border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-950/30';
    }
    switch (issuer) {
      case 'Oracle':
        return 'border-red-500/30 text-red-300 bg-red-950/30';
      case 'Google Cloud':
        return 'border-blue-500/30 text-blue-300 bg-blue-950/30';
      case 'NPTEL':
        return 'border-amber-500/30 text-amber-300 bg-amber-950/30';
      case 'Infosys Springboard':
        return 'border-cyan-500/30 text-cyan-300 bg-cyan-950/30';
      case 'Corizo':
        return 'border-emerald-500/30 text-emerald-300 bg-emerald-950/30';
      case 'CodeTantra':
        return 'border-purple-500/30 text-purple-300 bg-purple-950/30';
      default:
        return 'border-slate-500/30 text-slate-300 bg-slate-900/30';
    }
  };

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-purple-300 text-xs font-mono">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            <span>CREDENTIAL VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Professional <span className="bg-gradient-to-r from-purple-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            14+ verified credentials across Cloud Architecture, AI Foundations, Academic Boards (10th & Intermediate), IoT, and Cyber Security.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {issuers.map((issuer) => {
            const isActive = selectedIssuer === issuer;
            return (
              <button
                key={issuer}
                onClick={() => setSelectedIssuer(issuer)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md shadow-cyan-900/30 font-semibold'
                    : 'bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/5'
                }`}
              >
                {issuer}
              </button>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => {
            const badgeStyle = getIssuerBadgeColor(cert.issuer);

            return (
              <div
                key={cert.id}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Top Row: Issuer & Date */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold border ${badgeStyle}`}>
                      {cert.issuer}
                    </span>

                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      <span>{cert.issueDate}</span>
                    </div>
                  </div>

                  {/* Title & Badge */}
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    {cert.badge && (
                      <span className="inline-block text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {cert.badge}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300/80 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">
                    Category: {cert.category}
                  </span>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 hover:text-white bg-slate-900 border border-cyan-500/20 hover:border-cyan-400/50 transition-all group-hover:bg-cyan-500/10"
                  >
                    <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate PDF Directory Guide */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-white/5 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 font-mono">
            All certifications reference local verified files in <code className="text-cyan-300">public/certificates/</code>. Click "View Certificate" on any card to view and download.
          </p>
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
