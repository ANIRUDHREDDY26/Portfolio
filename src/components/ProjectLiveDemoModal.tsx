import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import {
  X,
  Lock,
  Mail,
  Key,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Radio,
  Cpu,
  Layers,
  Activity,
  Server,
  Cloud,
  Database,
  Terminal,
  LogOut,
  AlertTriangle,
  CheckCircle2,
  Play,
  RotateCcw,
  Zap,
  Thermometer,
  Wind,
  Droplets,
  HardDrive,
  BarChart3,
  Sliders,
  Send,
  Eye,
  EyeOff,
  UserCheck,
  Sparkles,
  Wifi,
  ExternalLink
} from 'lucide-react';

interface ProjectLiveDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectLiveDemoModal: React.FC<ProjectLiveDemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Determine Project Variant
  const isSecurity = project.id.includes('security') || project.category.includes('Cybersecurity');
  const isIoT = project.id.includes('iot') || project.category.includes('IoT');
  const isFullStack = project.id.includes('fullstack') || project.category.includes('Full-Stack');

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Setup default credentials based on project
  useEffect(() => {
    setIsAuthenticated(false);
    setAuthError('');
    if (isSecurity) {
      setEmail('analyst@cloudsec.ai');
      setPassword('cyber_defense_2026');
      setSelectedRole('SOC Threat Analyst');
    } else if (isIoT) {
      setEmail('engineer@ecosense.io');
      setPassword('iot_telemetry_2026');
      setSelectedRole('Lead Systems Engineer');
    } else {
      setEmail('admin@cloudstack.azure');
      setPassword('azure_fullstack_2026');
      setSelectedRole('Enterprise Cloud Admin');
    }
  }, [project.id]);

  // Handle Login Submission
  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setAuthError('');
    setIsLoading(true);

    setTimeout(() => {
      if (email.trim() && password.length >= 4) {
        setIsAuthenticated(true);
        setIsLoading(false);
      } else {
        setAuthError('Please enter a valid email and password (minimum 4 characters).');
        setIsLoading(false);
      }
    }, 700);
  };

  const handleQuickLogin = (role: string, demoEmail: string) => {
    setEmail(demoEmail);
    setSelectedRole(role);
    setIsLoading(true);
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsLoading(false);
    }, 500);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAuthError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[92vh] glass-card rounded-2xl border border-white/20 bg-[#060c1d] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Window Bar */}
        <div className="px-5 py-3.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="h-4 w-px bg-white/15 mx-1" />
            <div className="flex items-center gap-2">
              {isSecurity && <Shield className="w-4 h-4 text-purple-400" />}
              {isIoT && <Radio className="w-4 h-4 text-cyan-400" />}
              {isFullStack && <Cloud className="w-4 h-4 text-sky-400" />}
              <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                {isSecurity && "CloudSec Sentinel AI — Threat Intelligence Portal"}
                {isIoT && "EcoSense Cloud IoT — Environmental Telemetry Command"}
                {isFullStack && "CloudStack Nexus — Azure Full-Stack Enterprise Hub"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Interactive Simulation
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              title="Close Live Demo"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Content: Login Screen OR Dashboard */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#060c1d] via-[#091228] to-[#050a17]">
          {!isAuthenticated ? (
            <ProjectLoginView
              project={project}
              isSecurity={isSecurity}
              isIoT={isIoT}
              isFullStack={isFullStack}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
              authError={authError}
              isLoading={isLoading}
              onLogin={handleLogin}
              onQuickLogin={handleQuickLogin}
            />
          ) : (
            <ProjectDashboardView
              project={project}
              isSecurity={isSecurity}
              isIoT={isIoT}
              isFullStack={isFullStack}
              userEmail={email}
              userRole={selectedRole}
              onLogout={handleLogout}
            />
          )}
        </div>

      </div>
    </div>
  );
};

// ==========================================
// 1. DEDICATED LOGIN COMPONENT
// ==========================================
interface LoginViewProps {
  project: Project;
  isSecurity: boolean;
  isIoT: boolean;
  isFullStack: boolean;
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  showPassword: boolean;
  setShowPassword: (val: boolean) => void;
  selectedRole: string;
  setSelectedRole: (val: string) => void;
  authError: string;
  isLoading: boolean;
  onLogin: (e?: React.FormEvent) => void;
  onQuickLogin: (role: string, demoEmail: string) => void;
}

const ProjectLoginView: React.FC<LoginViewProps> = ({
  project,
  isSecurity,
  isIoT,
  isFullStack,
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  selectedRole,
  setSelectedRole,
  authError,
  isLoading,
  onLogin,
  onQuickLogin,
}) => {
  return (
    <div className="min-h-full flex flex-col justify-center items-center p-6 sm:p-12">
      <div className="w-full max-w-md space-y-6">
        
        {/* Project Branding Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 shadow-xl mb-2">
            {isSecurity && <ShieldAlert className="w-8 h-8 text-purple-400" />}
            {isIoT && <Radio className="w-8 h-8 text-cyan-400" />}
            {isFullStack && <Cloud className="w-8 h-8 text-sky-400" />}
          </div>

          <h2 className="text-2xl font-black tracking-tight text-white">
            {isSecurity && "CloudSec Sentinel AI"}
            {isIoT && "EcoSense Cloud IoT"}
            {isFullStack && "CloudStack Nexus Azure"}
          </h2>

          <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
            {isSecurity && "AI-Driven Cloud Threat Detection, Intrusion Analysis & Incident Containment Gateway"}
            {isIoT && "Real-Time Environmental Sensor Telemetry Stream & Google Cloud IoT Analytics Engine"}
            {isFullStack && "Enterprise Full-Stack Architecture — React Frontend, Spring Boot REST & Azure Cloud"}
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-[11px] font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Secure Demo Auth Gateway</span>
          </div>
        </div>

        {/* Login Form Box */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/15 bg-slate-900/60 shadow-2xl space-y-5">
          <form onSubmit={onLogin} className="space-y-4">
            
            {/* Email Field */}
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                Authorized Identity / Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950/80 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                Access Token / Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Key className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-950/80 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Role Selector */}
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                Demo Session Role
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950/80 border border-white/10 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
              >
                {isSecurity && (
                  <>
                    <option value="SOC Threat Analyst">SOC Threat Analyst (L2 Monitoring)</option>
                    <option value="Incident Commander">Incident Commander (Full Containment Access)</option>
                    <option value="Cloud Security Architect">Cloud Security Architect (Policy Read/Write)</option>
                  </>
                )}
                {isIoT && (
                  <>
                    <option value="Lead Systems Engineer">Lead Systems Engineer (Telemetry R/W)</option>
                    <option value="Environmental Auditor">Environmental Auditor (Reporting & Analytics)</option>
                    <option value="Field Node Technician">Field Node Technician (Hardware Calibrator)</option>
                  </>
                )}
                {isFullStack && (
                  <>
                    <option value="Enterprise Cloud Admin">Enterprise Cloud Admin (Full Azure Access)</option>
                    <option value="Full-Stack Developer">Full-Stack Developer (API Sandbox & DB)</option>
                    <option value="API Integration Tester">API Integration Tester (Microservice QA)</option>
                  </>
                )}
              </select>
            </div>

            {authError && (
              <div className="p-2.5 rounded-lg bg-red-950/50 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 via-sky-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-cyan-900/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Authenticating Session...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Authenticate & Launch Demo</span>
                </>
              )}
            </button>
          </form>

          {/* Quick 1-Click Demo Login Shortcuts */}
          <div className="pt-3 border-t border-white/10 space-y-2">
            <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider text-center">
              Quick 1-Click Fast Login
            </p>
            <div className="grid grid-cols-2 gap-2">
              {isSecurity && (
                <>
                  <button
                    type="button"
                    onClick={() => onQuickLogin('SOC Threat Analyst', 'analyst@cloudsec.ai')}
                    className="p-2 rounded-lg bg-purple-950/40 border border-purple-500/30 hover:bg-purple-900/50 text-[11px] font-mono text-purple-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <UserCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>Analyst Role</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onQuickLogin('Incident Commander', 'commander@cloudsec.ai')}
                    className="p-2 rounded-lg bg-red-950/40 border border-red-500/30 hover:bg-red-900/50 text-[11px] font-mono text-red-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
                    <span>Commander</span>
                  </button>
                </>
              )}
              {isIoT && (
                <>
                  <button
                    type="button"
                    onClick={() => onQuickLogin('Lead Systems Engineer', 'engineer@ecosense.io')}
                    className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/50 text-[11px] font-mono text-cyan-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Radio className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Engineer Role</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onQuickLogin('Environmental Auditor', 'auditor@ecosense.io')}
                    className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/50 text-[11px] font-mono text-emerald-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Auditor Role</span>
                  </button>
                </>
              )}
              {isFullStack && (
                <>
                  <button
                    type="button"
                    onClick={() => onQuickLogin('Enterprise Cloud Admin', 'admin@cloudstack.azure')}
                    className="p-2 rounded-lg bg-sky-950/40 border border-sky-500/30 hover:bg-sky-900/50 text-[11px] font-mono text-sky-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Cloud className="w-3.5 h-3.5 text-sky-400" />
                    <span>Admin Role</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onQuickLogin('Full-Stack Developer', 'developer@cloudstack.azure')}
                    className="p-2 rounded-lg bg-indigo-950/40 border border-indigo-500/30 hover:bg-indigo-900/50 text-[11px] font-mono text-indigo-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Dev Role</span>
                  </button>
                </>
              )}
            </div>
          </div>

        </div>

        {/* Security / Technology Watermark */}
        <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-slate-500">
          <span>End-to-End Encrypted Session</span>
          <span>•</span>
          <span>Role-Based Access Control</span>
          <span>•</span>
          <span>v2.4 Live Model</span>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// 2. INTERACTIVE DASHBOARDS (AFTER LOGIN)
// ==========================================
interface DashboardViewProps {
  project: Project;
  isSecurity: boolean;
  isIoT: boolean;
  isFullStack: boolean;
  userEmail: string;
  userRole: string;
  onLogout: () => void;
}

const ProjectDashboardView: React.FC<DashboardViewProps> = ({
  project,
  isSecurity,
  isIoT,
  isFullStack,
  userEmail,
  userRole,
  onLogout,
}) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      
      {/* Session Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/80 border border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-0.5 shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              {isSecurity && <Shield className="w-5 h-5 text-purple-400" />}
              {isIoT && <Radio className="w-5 h-5 text-cyan-400" />}
              {isFullStack && <Cloud className="w-5 h-5 text-sky-400" />}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white">
                {project.title}
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ACTIVE
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Signed in as: <span className="text-cyan-300 font-semibold">{userEmail}</span> ({userRole})
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={onLogout}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-red-950/60 text-slate-300 hover:text-red-300 border border-white/10 hover:border-red-500/30 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Render Project-Specific Live Simulation Console */}
      {isSecurity && <SecurityThreatDemoConsole />}
      {isIoT && <IoTTelescopeDemoConsole />}
      {isFullStack && <FullStackAzureDemoConsole />}

    </div>
  );
};

// ========================================================
// 2A. SECURITY PROJECT DASHBOARD CONSOLE (Project 1)
// ========================================================
const SecurityThreatDemoConsole: React.FC = () => {
  const [threatScore, setThreatScore] = useState<number>(34);
  const [threatStatus, setThreatStatus] = useState<'GUARDED' | 'ELEVATED' | 'ATTACK_MITIGATED'>('GUARDED');
  const [logs, setLogs] = useState<Array<{ id: number; time: string; ip: string; threat: string; level: string; status: string }>>([
    { id: 1, time: '14:23:01', ip: '198.51.100.44', threat: 'SSH Brute-Force Burst', level: 'HIGH', status: 'Blocked by ML Rule #41' },
    { id: 2, time: '14:23:18', ip: '203.0.113.89', threat: 'S3 Unauthenticated Bucket Enumeration', level: 'MEDIUM', status: 'Access Revoked' },
    { id: 3, time: '14:24:05', ip: '192.0.2.15', threat: 'IAM Privilege Escalation Probe', level: 'CRITICAL', status: 'Role Quarantined' },
    { id: 4, time: '14:24:42', ip: '185.220.101.5', threat: 'SQL Injection in REST Gateway', level: 'HIGH', status: 'Payload Filtered' },
  ]);
  const [activeAlert, setActiveAlert] = useState<string | null>(null);

  const simulateAttack = (type: 'ddos' | 'injection' | 'credential') => {
    const time = new Date().toLocaleTimeString();
    if (type === 'ddos') {
      setThreatScore(88);
      setThreatStatus('ELEVATED');
      setActiveAlert('HIGH-VOLUME DDOS SURGE: 48,000 req/s detected on Ingress Gateway! AI Auto-Rate-Limiter triggered.');
      setLogs((prev) => [
        { id: Date.now(), time, ip: 'Multi-Source Botnet (24 IPs)', threat: 'Layer-7 SYN Influx Surge', level: 'CRITICAL', status: 'AI Scrubbing Active' },
        ...prev.slice(0, 5),
      ]);
    } else if (type === 'injection') {
      setThreatScore(65);
      setThreatStatus('ATTACK_MITIGATED');
      setActiveAlert('SQL INJECTION INTERCEPTED: Malicious string UNION SELECT rejected by Neural WAF.');
      setLogs((prev) => [
        { id: Date.now(), time, ip: '104.244.72.11', threat: 'Tainted SQL Param Payload', level: 'HIGH', status: 'Auto-Blocked 100%' },
        ...prev.slice(0, 5),
      ]);
    } else {
      setThreatScore(52);
      setActiveAlert('CREDENTIAL STUFFING DETECTED: 120 failed auth attempts in 4s. Adaptive MFA enforced.');
      setLogs((prev) => [
        { id: Date.now(), time, ip: '185.190.141.2', threat: 'Dictionary Credential Attack', level: 'MEDIUM', status: 'IP Blacklisted' },
        ...prev.slice(0, 5),
      ]);
    }
  };

  const resetSimulation = () => {
    setThreatScore(22);
    setThreatStatus('GUARDED');
    setActiveAlert(null);
  };

  return (
    <div className="space-y-6">
      
      {/* Alert Banner if Active */}
      {activeAlert && (
        <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-200 flex items-center justify-between gap-3 animate-in fade-in">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-5 h-5 text-purple-400 shrink-0 animate-bounce" />
            <span className="text-xs sm:text-sm font-semibold">{activeAlert}</span>
          </div>
          <button
            onClick={resetSimulation}
            className="px-2.5 py-1 rounded bg-purple-800 text-xs font-mono hover:bg-purple-700 text-white shrink-0"
          >
            Acknowledge & Neutralize
          </button>
        </div>
      )}

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Threat Score</span>
            <Activity className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-black text-white">{threatScore} / 100</div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                threatScore > 75 ? 'bg-red-500' : threatScore > 45 ? 'bg-amber-400' : 'bg-emerald-400'
              }`}
              style={{ width: `${threatScore}%` }}
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>AI Model Status</span>
            <Cpu className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-black text-cyan-300">v2.4 Active</div>
          <p className="text-[11px] text-slate-400 font-mono">99.4% Detection Precision</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Attacks Neutralized</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-emerald-400">1,489</div>
          <p className="text-[11px] text-slate-400 font-mono">Last 24 Hours SOC Stream</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Response Latency</span>
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-black text-amber-300">12 ms</div>
          <p className="text-[11px] text-slate-400 font-mono">Automated Cloud Firewall</p>
        </div>
      </div>

      {/* Interactive Attack Simulator Controls */}
      <div className="p-5 rounded-2xl bg-slate-900/80 border border-purple-500/20 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-purple-400" />
            <h4 className="text-xs sm:text-sm font-bold text-white font-mono uppercase tracking-wider">
              Interactive Attack & AI Response Simulator
            </h4>
          </div>
          <button
            onClick={resetSimulation}
            className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Baseline</span>
          </button>
        </div>

        <p className="text-xs text-slate-300">
          Click below to inject live simulated cyber threats into the telemetry pipeline and observe real-time AI ML containment:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <button
            onClick={() => simulateAttack('ddos')}
            className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 hover:bg-red-900/50 text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-red-300 group-hover:text-red-200">Inject DDoS Attack</span>
              <Play className="w-3.5 h-3.5 text-red-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="text-[11px] text-slate-400">Tests rapid rate-limiting & automated ingress throttling.</p>
          </button>

          <button
            onClick={() => simulateAttack('injection')}
            className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/40 hover:bg-purple-900/50 text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-purple-300 group-hover:text-purple-200">Simulate SQL Injection</span>
              <Play className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="text-[11px] text-slate-400">Verifies neural WAF query parsing and signature filter.</p>
          </button>

          <button
            onClick={() => simulateAttack('credential')}
            className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 hover:bg-amber-900/50 text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-amber-300 group-hover:text-amber-200">Simulate Credential Stuffing</span>
              <Play className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="text-[11px] text-slate-400">Triggers adaptive multi-factor zero-trust containment.</p>
          </button>
        </div>
      </div>

      {/* Live Threat Log Stream Table */}
      <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <h4 className="text-xs sm:text-sm font-bold text-white font-mono uppercase tracking-wider">
              Live Cloud Security Telemetry Feed (AI Evaluated)
            </h4>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            Stream Synchronized
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="py-2 px-3">Time</th>
                <th className="py-2 px-3">Origin / IP</th>
                <th className="py-2 px-3">Attack Vector</th>
                <th className="py-2 px-3">Severity</th>
                <th className="py-2 px-3">AI Action & Containment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-white/5 transition-colors">
                  <td className="py-2.5 px-3 text-slate-400">{log.time}</td>
                  <td className="py-2.5 px-3 text-cyan-300">{log.ip}</td>
                  <td className="py-2.5 px-3 text-white font-semibold">{log.threat}</td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        log.level === 'CRITICAL'
                          ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                          : log.level === 'HIGH'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                      }`}
                    >
                      {log.level}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{log.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

// ========================================================
// 2B. IOT PROJECT DASHBOARD CONSOLE (Project 2)
// ========================================================
const IoTTelescopeDemoConsole: React.FC = () => {
  const [temp, setTemp] = useState<number>(24.6);
  const [humidity, setHumidity] = useState<number>(62);
  const [aqi, setAqi] = useState<number>(45);
  const [co2, setCo2] = useState<number>(418);
  const [isAlertActive, setIsAlertActive] = useState<boolean>(false);
  const [pingSuccess, setPingSuccess] = useState<boolean>(false);

  const triggerHazardSpike = () => {
    setTemp(38.4);
    setAqi(192);
    setCo2(890);
    setIsAlertActive(true);
  };

  const resetSensors = () => {
    setTemp(24.6);
    setHumidity(62);
    setAqi(45);
    setCo2(418);
    setIsAlertActive(false);
  };

  const triggerMqttPing = () => {
    setPingSuccess(true);
    setTimeout(() => setPingSuccess(false), 2500);
  };

  return (
    <div className="space-y-6">
      
      {/* Alert Banner */}
      {isAlertActive && (
        <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 flex items-center justify-between gap-3 animate-in fade-in">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 animate-bounce" />
            <span className="text-xs sm:text-sm font-semibold">
              HAZARDOUS SPIKE DETECTED: AQI reached {aqi} (Unhealthy) & Temp {temp}°C! Automated ventilation fan triggered.
            </span>
          </div>
          <button
            onClick={resetSensors}
            className="px-2.5 py-1 rounded bg-red-800 text-xs font-mono hover:bg-red-700 text-white shrink-0"
          >
            Reset Telemetry
          </button>
        </div>
      )}

      {/* IoT Sensory Gauges */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Temperature */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Ambient Temp</span>
            <Thermometer className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-black text-white">{temp.toFixed(1)} °C</div>
          <p className="text-[11px] text-slate-400 font-mono">
            Status: <span className={temp > 32 ? 'text-red-400 font-bold' : 'text-emerald-400'}>{temp > 32 ? 'Elevated' : 'Optimal'}</span>
          </p>
        </div>

        {/* Humidity */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Relative Humidity</span>
            <Droplets className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-black text-cyan-300">{humidity}%</div>
          <p className="text-[11px] text-slate-400 font-mono">Status: Stable Range</p>
        </div>

        {/* Air Quality Index */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Air Quality (AQI)</span>
            <Wind className="w-4 h-4 text-emerald-400" />
          </div>
          <div className={`text-2xl font-black ${aqi > 100 ? 'text-red-400' : 'text-emerald-400'}`}>
            {aqi} AQI
          </div>
          <p className="text-[11px] text-slate-400 font-mono">
            Category: <span className={aqi > 100 ? 'text-red-400 font-bold' : 'text-emerald-400'}>{aqi > 100 ? 'Poor / Unhealthy' : 'Good Quality'}</span>
          </p>
        </div>

        {/* CO2 Concentration */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>CO2 Concentration</span>
            <Radio className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-2xl font-black text-sky-300">{co2} ppm</div>
          <p className="text-[11px] text-slate-400 font-mono">Sensor: MQ-135 Gas Cell</p>
        </div>

      </div>

      {/* Interactive Telemetry Test Controls */}
      <div className="p-5 rounded-2xl bg-slate-900/80 border border-cyan-500/20 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-cyan-400" />
            <h4 className="text-xs sm:text-sm font-bold text-white font-mono uppercase tracking-wider">
              Telemetry Transmitter & Sensor Actuation Controls
            </h4>
          </div>
          <button
            onClick={resetSensors}
            className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Baseline</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <button
            onClick={triggerHazardSpike}
            className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 hover:bg-red-900/50 text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-red-300">Simulate Environmental Smoke & Thermal Hazard</span>
              <AlertTriangle className="w-4 h-4 text-red-400" />
            </div>
            <p className="text-[11px] text-slate-400">
              Spikes AQI to 192 and triggers warning threshold notification.
            </p>
          </button>

          <button
            onClick={triggerMqttPing}
            className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-900/50 text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-cyan-300">Dispatch MQTT Telemetry Packet to Google Cloud</span>
              <Send className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-[11px] text-slate-400">
              Transmits 64-byte JSON payload to Google Cloud Pub/Sub ingest topic.
            </p>
          </button>
        </div>

        {pingSuccess && (
          <div className="p-2.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>MQTT Publish ACK 200 OK — Telemetry successfully ingested by Google Cloud Pub/Sub!</span>
          </div>
        )}
      </div>

      {/* Connected Sensor Nodes */}
      <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3">
        <h4 className="text-xs sm:text-sm font-bold text-white font-mono uppercase tracking-wider">
          Active Hardware Sensor Nodes
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white font-mono">Node #1: Urban Campus Area</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <p className="text-[11px] text-slate-400 font-mono">DHT22 + MQ-135 • RSSI: -54 dBm</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white font-mono">Node #2: Industrial Perimeter</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <p className="text-[11px] text-slate-400 font-mono">BME280 + PM2.5 • RSSI: -61 dBm</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white font-mono">Node #3: Microclimate Lab</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <p className="text-[11px] text-slate-400 font-mono">O2 Sensor + Barometer • RSSI: -48 dBm</p>
          </div>
        </div>
      </div>

    </div>
  );
};

// ========================================================
// 2C. FULL-STACK CLOUD APPLICATION CONSOLE (Project 3)
// ========================================================
const FullStackAzureDemoConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'api' | 'db' | 'infra'>('api');
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [apiLoading, setApiLoading] = useState<boolean>(false);
  const [records, setRecords] = useState<Array<{ id: string; name: string; email: string; role: string; status: string }>>([
    { id: 'USR-101', name: 'Anirudh Reddy', email: 'anirudh@portfolio.dev', role: 'Full-Stack Developer', status: 'ACTIVE' },
    { id: 'USR-102', name: 'Enterprise Client A', email: 'billing@enterprise.corp', role: 'Tenant Admin', status: 'ACTIVE' },
    { id: 'USR-103', name: 'Cloud Ops Operator', email: 'ops@cloudstack.azure', role: 'DevOps Lead', status: 'ACTIVE' },
  ]);
  const [newUserName, setNewUserName] = useState<string>('');

  const callApiEndpoint = (endpoint: string) => {
    setApiLoading(true);
    setApiResponse(null);

    setTimeout(() => {
      setApiLoading(false);
      if (endpoint === '/api/v1/health') {
        setApiResponse(
          JSON.stringify(
            {
              status: 'UP',
              timestamp: new Date().toISOString(),
              services: {
                frontend: { framework: 'React 18', host: 'Azure Static Web Apps', status: 'ONLINE' },
                backend: { framework: 'Spring Boot 3.2', host: 'Azure App Service Linux', status: 'ONLINE' },
                database: { engine: 'Azure Cosmos DB / PostgreSQL', connections: 24, status: 'CONNECTED' },
              },
              latencyMs: 14,
            },
            null,
            2
          )
        );
      } else if (endpoint === '/api/v1/auth/token') {
        setApiResponse(
          JSON.stringify(
            {
              jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
              token_type: 'Bearer',
              expires_in: 3600,
              claims: {
                sub: 'USR-101',
                scope: ['read:cloud', 'write:resources', 'deploy:microservice'],
                issuer: 'cloudstack-auth-service',
              },
            },
            null,
            2
          )
        );
      } else {
        setApiResponse(
          JSON.stringify(
            {
              totalUsers: records.length,
              databaseCluster: 'azure-eastus-cluster-prod',
              records,
            },
            null,
            2
          )
        );
      }
    }, 450);
  };

  const handleAddRecord = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName.trim()) return;
    const newId = `USR-${Math.floor(100 + Math.random() * 900)}`;
    setRecords((prev) => [
      ...prev,
      {
        id: newId,
        name: newUserName.trim(),
        email: `${newUserName.toLowerCase().replace(/\s+/g, '.')}@cloudstack.azure`,
        role: 'Standard User',
        status: 'ACTIVE',
      },
    ]);
    setNewUserName('');
  };

  const handleDeleteRecord = (id: string) => {
    setRecords((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="space-y-6">
      
      {/* Architecture Uptime Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Frontend Tier (React)</span>
            <Layers className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-xl font-bold text-white">Azure Static Web Apps</div>
          <p className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> 99.98% SLA
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Backend Tier (Spring Boot)</span>
            <Server className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-xl font-bold text-white">Azure App Service</div>
          <p className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> 14ms Response Time
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Persistence Tier</span>
            <Database className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-xl font-bold text-white">Azure Database Layer</div>
          <p className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Encrypted At Rest
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <button
          onClick={() => setActiveTab('api')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
            activeTab === 'api'
              ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          REST API Test Sandbox
        </button>
        <button
          onClick={() => setActiveTab('db')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
            activeTab === 'db'
              ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Database CRUD Simulator
        </button>
      </div>

      {/* TAB 1: REST API SANDBOX */}
      {activeTab === 'api' && (
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-sky-500/20 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white font-mono uppercase tracking-wider">
              Execute Live Spring Boot REST API Calls
            </h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => callApiEndpoint('/api/v1/health')}
                className="px-3 py-2 rounded-xl bg-slate-800 border border-white/10 hover:bg-slate-700 text-xs font-mono text-cyan-300 flex items-center gap-2"
              >
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">GET</span>
                <span>/api/v1/health</span>
              </button>

              <button
                onClick={() => callApiEndpoint('/api/v1/auth/token')}
                className="px-3 py-2 rounded-xl bg-slate-800 border border-white/10 hover:bg-slate-700 text-xs font-mono text-cyan-300 flex items-center gap-2"
              >
                <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold">POST</span>
                <span>/api/v1/auth/token</span>
              </button>

              <button
                onClick={() => callApiEndpoint('/api/v1/users')}
                className="px-3 py-2 rounded-xl bg-slate-800 border border-white/10 hover:bg-slate-700 text-xs font-mono text-cyan-300 flex items-center gap-2"
              >
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">GET</span>
                <span>/api/v1/users</span>
              </button>
            </div>

            {/* Response Console */}
            <div className="pt-2">
              <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                Terminal Response Preview
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto min-h-[140px] flex items-center justify-center">
                {apiLoading ? (
                  <div className="flex items-center gap-2 text-sky-400">
                    <div className="w-4 h-4 border-2 border-sky-400/30 border-t-sky-400 rounded-full animate-spin" />
                    <span>Executing Request on Azure App Service...</span>
                  </div>
                ) : apiResponse ? (
                  <pre className="w-full text-emerald-300">{apiResponse}</pre>
                ) : (
                  <span className="text-slate-500">Click any REST API button above to dispatch live request.</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DATABASE CRUD SIMULATOR */}
      {activeTab === 'db' && (
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <h4 className="text-xs sm:text-sm font-bold text-white font-mono uppercase tracking-wider">
              Simulated Database Persistence Table
            </h4>

            {/* Quick Add Record Form */}
            <form onSubmit={handleAddRecord} className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="text"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                placeholder="Enter user name..."
                className="px-3 py-1.5 bg-slate-950 border border-white/10 rounded-lg text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold whitespace-nowrap"
              >
                + Add Record
              </button>
            </form>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-2 px-3">Record ID</th>
                  <th className="py-2 px-3">Name</th>
                  <th className="py-2 px-3">Email</th>
                  <th className="py-2 px-3">Assigned Role</th>
                  <th className="py-2 px-3">Status</th>
                  <th className="py-2 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {records.map((r) => (
                  <tr key={r.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-2 px-3 text-cyan-400 font-bold">{r.id}</td>
                    <td className="py-2 px-3 text-white">{r.name}</td>
                    <td className="py-2 px-3 text-slate-300">{r.email}</td>
                    <td className="py-2 px-3 text-slate-400">{r.role}</td>
                    <td className="py-2 px-3">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {r.status}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-right">
                      <button
                        onClick={() => handleDeleteRecord(r.id)}
                        className="text-red-400 hover:text-red-300 text-[11px]"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
