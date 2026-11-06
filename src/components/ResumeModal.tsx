import React from 'react';
import { PERSONAL_INFO, SKILLS_DATA, EXPERIENCES_DATA, PROJECTS_DATA, CERTIFICATIONS_DATA, EDUCATION_DATA, PROBLEM_SOLVING_DATA } from '../data/portfolioData';
import { X, Printer, Download, ExternalLink, Sparkles, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const mdContent = `# ${PERSONAL_INFO.name}
${PERSONAL_INFO.location} | ${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email} | LinkedIn | GitHub

## PROFESSIONAL SUMMARY
${PERSONAL_INFO.aboutText}

## MAIN TECHNICAL SKILLS
- Programming: Python, Java, JavaScript
- AI & Machine Learning: Generative AI & LLMs, Machine Learning, RAG & Vector Embeddings
- Cloud Computing: Microsoft Azure, Google Cloud (GCP), Oracle Cloud Infrastructure (OCI)
- Full-Stack & Databases: React.js, Spring Boot, MySQL, MongoDB Atlas (Vector Search)
- Cybersecurity & IoT: Cybersecurity Fundamentals, Internet of Things (IoT)

## PROFESSIONAL EXPERIENCE
${EXPERIENCES_DATA.map(exp => `### ${exp.title} | ${exp.company}
${exp.period} | ${exp.type}
${exp.description.map(d => `- ${d}`).join('\n')}
Skills: ${exp.skills.join(', ')}
`).join('\n')}

## KEY PROJECTS
${PROJECTS_DATA.map(p => `### ${p.title} (${p.status})
Technologies: ${p.technologies.join(', ')}
Problem: ${p.problemStatement}
Solution: ${p.solution}
Features:
${p.features.map(f => `- ${f}`).join('\n')}
`).join('\n')}

## EDUCATION & PROBLEM SOLVING
${EDUCATION_DATA.map(edu => `### ${edu.degree} — ${edu.institution} (${edu.location})
${edu.period} | ${edu.status}
`).join('\n')}
- SkillRack: ${PROBLEM_SOLVING_DATA.problemsSolved} Solved

## CERTIFICATIONS
${CERTIFICATIONS_DATA.map(c => `- ${c.issuer}: ${c.title} (${c.issueDate})`).join('\n')}
`;

    const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Resume_Peddireddy_Leela_Anirudh_Reddy.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl glass-card rounded-3xl border border-white/20 p-4 sm:p-8 bg-[#0c0a0a] shadow-2xl max-h-[92vh] flex flex-col">
        
        {/* Modal Top Action Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Curriculum Vitae / Resume
              </h3>
              <p className="text-[11px] font-mono text-orange-400">
                PEDDI REDDY LEELA ANIRUDH REDDY
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="btn-pill-dark text-xs py-1.5 px-3"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-orange-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="btn-orange text-xs py-1.5 px-3"
              title="Download Resume Document"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="overflow-y-auto pr-2 mt-4 space-y-6 text-white/80 text-xs sm:text-sm font-sans bg-black/80 p-4 sm:p-6 rounded-2xl border border-white/10">
          
          {/* Header Section */}
          <div className="text-center space-y-1.5 pb-4 border-b border-white/10">
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs text-white/70 font-mono">
              {PERSONAL_INFO.location} | {PERSONAL_INFO.phone} | {PERSONAL_INFO.email}
            </p>
            <div className="flex items-center justify-center gap-4 text-xs font-mono text-orange-400 pt-1">
              <span>LinkedIn</span>
              <span>•</span>
              <span>GitHub</span>
              <span>•</span>
              <span className="text-white">SkillRack: 1300+ Solved</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 border-b border-white/10 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs text-white/70 leading-relaxed">
              {PERSONAL_INFO.aboutText}
            </p>
          </div>

          {/* Main Technical Skills */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 border-b border-white/10 pb-1">
              MAIN TECHNICAL SKILLS
            </h2>
            <div className="text-xs space-y-1 text-white/70">
              <p><strong className="text-white">Programming:</strong> Python, Java, JavaScript</p>
              <p><strong className="text-white">AI & Machine Learning:</strong> Generative AI & LLMs, Machine Learning, RAG & Vector Embeddings</p>
              <p><strong className="text-white">Cloud Computing:</strong> Microsoft Azure, Google Cloud (GCP), Oracle Cloud Infrastructure (OCI)</p>
              <p><strong className="text-white">Full-Stack & Databases:</strong> React.js, Spring Boot, MySQL, MongoDB Atlas (Vector Search)</p>
              <p><strong className="text-white">Cybersecurity & IoT:</strong> Cybersecurity Fundamentals, Internet of Things (IoT)</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 border-b border-white/10 pb-1">
              PROFESSIONAL EXPERIENCE (INTERNSHIP TRAINING)
            </h2>
            {EXPERIENCES_DATA.map((exp) => (
              <div key={exp.id} className="space-y-1">
                <div className="flex flex-wrap items-center justify-between text-xs font-semibold text-white">
                  <span>{exp.title} | {exp.company}</span>
                  <span className="font-mono text-white/50">{exp.period}</span>
                </div>
                <p className="text-[11px] font-mono text-orange-400 italic">{exp.type}</p>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-white/70">
                  {exp.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 border-b border-white/10 pb-1">
              KEY PROJECTS
            </h2>
            {PROJECTS_DATA.map((p) => (
              <div key={p.id} className="space-y-1">
                <div className="flex flex-wrap items-center justify-between text-xs font-semibold text-white">
                  <span>{p.title}</span>
                  <span className="font-mono text-orange-400 text-[11px]">({p.status})</span>
                </div>
                <p className="text-[11px] text-white/80 font-mono">
                  Technologies: {p.technologies.join(' | ')}
                </p>
                <p className="text-xs text-white/70 leading-relaxed">
                  {p.solution}
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-white/70">
                  {p.features.slice(0, 3).map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Problem Solving */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 border-b border-white/10 pb-1">
              EDUCATION & PROBLEM SOLVING
            </h2>
            {EDUCATION_DATA.map((edu, i) => (
              <div key={i} className="flex flex-wrap items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-white">{edu.degree}</span> — {edu.institution}
                </div>
                <span className="font-mono text-white/50">{edu.period}</span>
              </div>
            ))}
            <div className="text-xs text-orange-400 font-mono pt-1">
              • Coding Profiles: SkillRack: 1300+ Problems Solved
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 border-b border-white/10 pb-1">
              CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-white/70">
              {CERTIFICATIONS_DATA.map((c) => (
                <div key={c.id} className="flex items-start gap-1">
                  <span className="text-orange-400">•</span>
                  <span>
                    <strong className="text-white">{c.issuer}:</strong> {c.title} ({c.issueDate})
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Note */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50 shrink-0">
          <span>Official CV of Peddi Reddy Leela Anirudh Reddy</span>
          <button
            onClick={handlePrint}
            className="text-orange-400 hover:underline flex items-center gap-1 font-bold"
          >
            <span>Print or Save to PDF ↗</span>
          </button>
        </div>

      </div>
    </div>
  );
};
