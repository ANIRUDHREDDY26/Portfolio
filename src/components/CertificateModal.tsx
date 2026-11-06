import React from 'react';
import { CertificationItem } from '../types';
import { X, ExternalLink, Calendar, FileText, Download, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  const certificateUrl = `/certificates/${cert.certificateFileName}`;
  const isImage = cert.certificateFileName?.match(/\.(jpg|jpeg|png|webp)$/i);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl glass-card rounded-2xl border border-white/20 p-5 sm:p-7 bg-[#070d1e] shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-4 shrink-0 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
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

          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
            {cert.title}
          </h3>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>Issued: {cert.issueDate}</span>
            <span>•</span>
            <span className="text-slate-300">Recipient: PEDDI REDDY LEELA ANIRUDH REDDY</span>
          </div>
        </div>

        {/* Certificate Viewer Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-4">
          <div className="rounded-xl border border-white/10 bg-slate-950/80 p-2 sm:p-4 flex flex-col items-center justify-center min-h-[350px]">
            {isImage ? (
              <div className="w-full flex justify-center">
                <img
                  src={certificateUrl}
                  alt={cert.title}
                  className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-2xl border border-white/5"
                />
              </div>
            ) : (
              <iframe
                src={certificateUrl}
                title={cert.title}
                className="w-full h-[60vh] rounded-lg border border-white/5 bg-slate-900"
              />
            )}
          </div>

          <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-white/5">
            {cert.description}
          </p>
        </div>

        {/* Modal Action Bar */}
        <div className="pt-3 mt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <span className="text-xs font-mono text-slate-400 truncate">
            File: {cert.certificateFileName}
          </span>

          <div className="flex items-center gap-2">
            <a
              href={certificateUrl}
              download={cert.certificateFileName}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download File</span>
            </a>

            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-95 shadow-md shadow-purple-900/30 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Full Tab</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
