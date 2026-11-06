import React, { useState } from 'react';
import { 
  Cloud, 
  BrainCircuit, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Sparkles, 
  Server, 
  Database, 
  ArrowRight, 
  Network,
  Zap,
  Lock
} from 'lucide-react';

export const AIAndCloud: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rag' | 'cloud' | 'security'>('rag');

  return (
    <section id="ai-cloud" className="py-24 relative z-10">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="eyebrow-orange">Systems & Frameworks</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-1">
              AI & <span className="text-orange-500">Cloud Architecture</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/60 max-w-md font-medium">
            Foundational architectural approaches for designing GenAI pipelines, multi-cloud hosting, and real-time security telemetry.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-start sm:justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-white/10 gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('rag')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'rag'
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <BrainCircuit className="w-4 h-4" />
              <span>Generative AI & RAG Pipeline</span>
            </button>

            <button
              onClick={() => setActiveTab('cloud')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'cloud'
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Cloud className="w-4 h-4" />
              <span>Multi-Cloud Architecture</span>
            </button>

            <button
              onClick={() => setActiveTab('security')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'security'
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Security Telemetry Flow</span>
            </button>
          </div>
        </div>

        {/* Tab 1: RAG */}
        {activeTab === 'rag' && (
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-mono font-bold text-orange-500">ARCHITECTURE 01</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Retrieval-Augmented Generation (RAG) System Architecture
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-white/80">
                Vector Similarity & LLM Ingestion
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2">
                <div className="text-xs font-mono text-orange-400 font-bold">STAGE 01</div>
                <h4 className="text-sm font-bold text-white">Document Ingestion</h4>
                <p className="text-xs text-white/60">PDF, Markdown and API logs parsed and chunked with token overlap.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2">
                <div className="text-xs font-mono text-orange-400 font-bold">STAGE 02</div>
                <h4 className="text-sm font-bold text-white">Embeddings Generation</h4>
                <p className="text-xs text-white/60">Normalized text embedded into dense float vectors using text embedding models.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2">
                <div className="text-xs font-mono text-orange-400 font-bold">STAGE 03</div>
                <h4 className="text-sm font-bold text-white">Vector Storage</h4>
                <p className="text-xs text-white/60">Persistent high-speed cosine search across MongoDB Atlas Vector Search.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2">
                <div className="text-xs font-mono text-orange-400 font-bold">STAGE 04</div>
                <h4 className="text-sm font-bold text-white">Augmented Response</h4>
                <p className="text-xs text-white/60">Context-injected LLM generation with strict citation verification.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Cloud */}
        {activeTab === 'cloud' && (
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-mono font-bold text-orange-500">ARCHITECTURE 02</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Resilient Multi-Cloud Deployment Paradigm
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-white/80">
                Azure + GCP + OCI
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-3">
                <h4 className="text-base font-bold text-white">Microsoft Azure Tier</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Enterprise Spring Boot REST APIs hosted on Azure App Service with Azure Static Web Apps frontend and Managed Identity.
                </p>
                <div className="pt-2 flex flex-wrap gap-1 text-[11px] font-mono text-white/60">
                  <span>App Service</span> • <span>Azure SQL</span> • <span>Static Web Apps</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-3">
                <h4 className="text-base font-bold text-white">Google Cloud (GCP) Tier</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  High-throughput IoT sensory streaming via Google Cloud Pub/Sub, Cloud Functions, and BigQuery analytics tables.
                </p>
                <div className="pt-2 flex flex-wrap gap-1 text-[11px] font-mono text-white/60">
                  <span>Cloud Pub/Sub</span> • <span>BigQuery</span> • <span>Cloud Run</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-3">
                <h4 className="text-base font-bold text-white">Oracle Cloud (OCI) Tier</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  OCI 2025 AI Foundations architecture leveraging OCI Generative AI Service, Compute shapes, and Object Storage.
                </p>
                <div className="pt-2 flex flex-wrap gap-1 text-[11px] font-mono text-white/60">
                  <span>OCI GenAI</span> • <span>Object Storage</span> • <span>OCI Compute</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Security */}
        {activeTab === 'security' && (
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-mono font-bold text-orange-500">ARCHITECTURE 03</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Zero-Trust Real-Time Security Telemetry & Anomaly Interception
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-white/80">
                12ms Auto-Mitigation
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2">
                <div className="text-xs font-mono text-orange-400 font-bold">INGESTION</div>
                <h4 className="text-base font-bold text-white">Normalized Telemetry</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Multi-source cloud logs normalized into standardized event structures with microsecond timestamps.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2">
                <div className="text-xs font-mono text-orange-400 font-bold">ANALYSIS</div>
                <h4 className="text-base font-bold text-white">Neural Anomaly Scoring</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Supervised signature matching paired with unsupervised clustering for novel zero-day attack identification.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2">
                <div className="text-xs font-mono text-orange-400 font-bold">CONTAINMENT</div>
                <h4 className="text-base font-bold text-white">Automated Webhook Response</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Immediate security token revocation, IP rate-limiting, and containment webhooks dispatched to incident responders.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
