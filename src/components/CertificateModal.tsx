import React from 'react';
import { CertificationItem } from '../types';
import { X, ExternalLink, Award, Calendar, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  const certificateUrl = `/certificates/${cert.certificateFileName}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl glass-card rounded-2xl border border-white/20 p-6 sm:p-8 bg-[#070d1e] shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
              {cert.issuer}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              {cert.category}
            </span>
            {cert.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                {cert.badge}
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white pr-8">
            {cert.title}
          </h3>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>Issued: {cert.issueDate}</span>
          </div>
        </div>

        {/* Certificate Overview */}
        <div className="mb-6 p-4 rounded-xl bg-slate-900/90 border border-white/5 space-y-2">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Certification Scope
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {cert.description}
          </p>
        </div>

        {/* Certificate Document Display & Viewer */}
        <div className="mb-6 rounded-xl border border-dashed border-cyan-500/30 p-6 bg-slate-950/60 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center">
            <FileText className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-white">
              Official Certificate Document
            </p>
            <p className="text-xs font-mono text-slate-400">
              File: {cert.certificateFileName}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5 text-[11px] text-slate-300 flex items-start gap-2 text-left max-w-lg mx-auto">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>
              This certificate link is mapped to your local storage path <code className="text-cyan-300 font-mono">public/certificates/{cert.certificateFileName}</code>. Place your downloaded PDF file there to preview directly.
            </span>
          </div>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-purple-900/30 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open / Download Certificate PDF</span>
            </a>
          </div>
        </div>

        {/* Recipient Details */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-2">
          <span>Recipient: PEDDI REDDY LEELA ANIRUDH REDDY</span>
          <span className="text-cyan-400">Verified Professional Credential</span>
        </div>

      </div>
    </div>
  );
};
