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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl glass-card rounded-3xl border border-white/20 p-5 sm:p-8 bg-[#0c0a0a] shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-4 shrink-0 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-orange-500/10 text-orange-400 border border-orange-500/30">
              {cert.issuer}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 text-white/70 border border-white/10">
              {cert.category}
            </span>
            {cert.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {cert.badge}
              </span>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
            {cert.title}
          </h3>

          <div className="flex items-center gap-2 text-xs font-mono text-white/50">
            <Calendar className="w-3.5 h-3.5 text-orange-400" />
            <span>Issued: {cert.issueDate}</span>
            <span>•</span>
            <span className="text-white/80">Recipient: PEDDI REDDY LEELA ANIRUDH REDDY</span>
          </div>
        </div>

        {/* Certificate Viewer Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-4">
          <div className="rounded-2xl border border-white/10 bg-black/80 p-2 sm:p-4 flex flex-col items-center justify-center min-h-[350px]">
            {isImage ? (
              <img
                src={certificateUrl}
                alt={cert.title}
                className="max-h-[62vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-[62vh] rounded-xl overflow-hidden bg-slate-900 border border-white/10 flex flex-col items-center justify-center p-6 text-center space-y-4">
                <FileText className="w-16 h-16 text-orange-400 animate-pulse" />
                <div>
                  <h4 className="text-base font-bold text-white">{cert.title}</h4>
                  <p className="text-xs font-mono text-white/60 mt-1">Official Document ({cert.certificateFileName})</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-orange text-xs py-2 px-4"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Full PDF in New Tab</span>
                  </a>
                  <a
                    href={certificateUrl}
                    download={cert.certificateFileName}
                    className="btn-pill-dark text-xs py-2 px-4"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          {cert.description && (
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed px-1">
              {cert.description}
            </p>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between shrink-0">
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            Verified & Authenticated
          </span>

          <div className="flex items-center gap-2">
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-dark text-xs py-1.5 px-3"
            >
              <ExternalLink className="w-3.5 h-3.5 text-orange-400" />
              <span>Open File ↗</span>
            </a>
            <button
              onClick={onClose}
              className="btn-orange text-xs py-1.5 px-4"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
