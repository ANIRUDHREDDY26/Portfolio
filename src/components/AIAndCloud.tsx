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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/20 text-cyan-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>SPECIALIZED ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            AI & <span className="bg-gradient-to-r from-purple-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">Cloud Architecture</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Deep dive into my foundational approaches for designing scalable cloud systems, GenAI pipelines, and secure telemetry systems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Interactive Architecture Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl gap-2">
            <button
              onClick={() => setActiveTab('rag')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'rag'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <BrainCircuit className="w-4 h-4 text-purple-300" />
              <span>Generative AI & RAG Pipeline</span>
            </button>

            <button
              onClick={() => setActiveTab('cloud')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'cloud'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-900/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Cloud className="w-4 h-4 text-cyan-300" />
              <span>Multi-Cloud Infrastructure</span>
            </button>

            <button
              onClick={() => setActiveTab('security')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'security'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Cloud Security & Anomaly Detection</span>
            </button>
          </div>
        </div>

        {/* Tab 1: RAG Pipeline */}
        {activeTab === 'rag' && (
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-purple-500/20 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-purple-950/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                  Retrieval-Augmented Generation
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Intelligent Knowledge Retrieval & Context Synthesis
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Combining high-dimensional vector embeddings with MongoDB Atlas Vector Search and LangChain orchestration to power accurate, hallucination-resistant LLM reasoning.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span>Domain text chunking & dense vector embedding transformation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>K-Nearest Neighbor similarity indexing via MongoDB Atlas</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Zap className="w-4 h-4 text-indigo-400" />
                    <span>Dynamic prompt construction with few-shot context injection</span>
                  </div>
                </div>
              </div>

              {/* Visual Flow diagram */}
              <div className="lg:col-span-7 bg-[#050b18] rounded-xl p-6 border border-white/10 space-y-4">
                <p className="text-xs font-mono text-slate-400 pb-2 border-b border-white/5 flex items-center justify-between">
                  <span>RAG_ARCHITECTURE_FLOW.SYS</span>
                  <span className="text-purple-400">STATUS: OPTIMIZED</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/20">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 mx-auto flex items-center justify-center mb-2">
                      <Database className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-bold text-white">1. Vector Store</p>
                    <p className="text-[10px] text-slate-400 mt-1">MongoDB Atlas Vector Search & dense embeddings</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-blue-500/20">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 mx-auto flex items-center justify-center mb-2">
                      <Network className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-bold text-white">2. Orchestration</p>
                    <p className="text-[10px] text-slate-400 mt-1">LangChain retrieval chains & prompt synthesis</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/20">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 mx-auto flex items-center justify-center mb-2">
                      <BrainCircuit className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-bold text-white">3. LLM Inference</p>
                    <p className="text-[10px] text-slate-400 mt-1">Contextual generation with verified citation groundedness</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-purple-950/30 border border-purple-500/20 text-[11px] font-mono text-purple-300 flex items-center justify-between">
                  <span>Primary Stack: LangChain + Python + MongoDB Atlas + GenAI APIs</span>
                  <span className="text-cyan-300">OCI Certified AI Associate</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Multi-Cloud */}
        {activeTab === 'cloud' && (
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-blue-500/20 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-blue-950/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Multi-Cloud Ecosystem
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Resilient Enterprise Cloud Architecture
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Certified understanding of Microsoft Azure, Google Cloud, and Oracle Cloud Infrastructure (OCI) architectures, focusing on compute isolation, managed services, and automated provisioning.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Cloud className="w-4 h-4 text-cyan-400" />
                    <span>Microsoft Azure: App Services, Resource Groups, Azure SQL, VNet</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Cloud className="w-4 h-4 text-blue-400" />
                    <span>Google Cloud: Career Launchpad Computing Foundations & Cloud Storage</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Cloud className="w-4 h-4 text-amber-400" />
                    <span>Oracle Cloud Infrastructure: 2025 AI Foundations Certified</span>
                  </div>
                </div>
              </div>

              {/* Cloud Architecture Grid */}
              <div className="lg:col-span-7 bg-[#050b18] rounded-xl p-6 border border-white/10 space-y-4">
                <p className="text-xs font-mono text-slate-400 pb-2 border-b border-white/5 flex items-center justify-between">
                  <span>CLOUD_TIER_OVERVIEW.SYS</span>
                  <span className="text-cyan-400">STATUS: ONLINE</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-900 border border-blue-500/20 text-center">
                    <p className="text-xs font-mono text-cyan-300 font-bold">Microsoft Azure</p>
                    <p className="text-[11px] text-slate-300 mt-1">App Services & Full-Stack Hosting</p>
                    <span className="inline-block mt-2 text-[9px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      Infosys Azure Certified
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/20 text-center">
                    <p className="text-xs font-mono text-emerald-300 font-bold">Google Cloud</p>
                    <p className="text-[11px] text-slate-300 mt-1">IoT Telemetry & Computing Core</p>
                    <span className="inline-block mt-2 text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      GCP Launchpad
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/20 text-center">
                    <p className="text-xs font-mono text-amber-300 font-bold">Oracle Cloud (OCI)</p>
                    <p className="text-[11px] text-slate-300 mt-1">AI Services & Model Infrastructure</p>
                    <span className="inline-block mt-2 text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      OCI 2025 Associate
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-[11px] font-mono text-cyan-300">
                  Target Architecture: Microservices, Containerization, Serverless Ingestion & Secure IAM Policies.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Security & Anomaly Detection */}
        {activeTab === 'security' && (
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-emerald-500/20 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-emerald-950/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  Threat Detection & Cyber Defense
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Intelligent Threat Monitoring & Defense
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Integrating machine learning with security event logging to detect brute force attempts, unauthorized privilege escalations, and unusual network egress patterns before damage occurs.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Lock className="w-4 h-4 text-emerald-400" />
                    <span>Real-time security log aggregation and feature extraction</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>Supervised & unsupervised anomaly classifiers (Python, Scikit-Learn)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>Automated containment webhooks and SOC alert notifications</span>
                  </div>
                </div>
              </div>

              {/* Security Telemetry Flow */}
              <div className="lg:col-span-7 bg-[#050b18] rounded-xl p-6 border border-white/10 space-y-4">
                <p className="text-xs font-mono text-slate-400 pb-2 border-b border-white/5 flex items-center justify-between">
                  <span>THREAT_PIPELINE.LOG</span>
                  <span className="text-emerald-400">STATUS: PROTECTED</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/20">
                    <p className="text-xs font-bold text-white">Ingest</p>
                    <p className="text-[10px] text-slate-400 mt-1">Cloud Audit Logs, VPC Flow Logs, Auth Events</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/20">
                    <p className="text-xs font-bold text-white">Evaluate</p>
                    <p className="text-[10px] text-slate-400 mt-1">ML Anomaly Scoring & Behavioral Baselines</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/20">
                    <p className="text-xs font-bold text-white">Mitigate</p>
                    <p className="text-[10px] text-slate-400 mt-1">Security Dashboard & Priority Alert Triggers</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
                  Backed by Corizo Cyber Security Internship Training & Enterprise Best Practices.
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
