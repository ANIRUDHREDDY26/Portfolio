import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Sparkles, 
  AlertCircle,
  Clock
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct mailto link as reliable real fallback
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Attempt opening email client
      window.open(mailtoUrl, '_blank');

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => setSubmitStatus('idle'), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-purple-300 text-xs font-mono">
            <Mail className="w-3.5 h-3.5 text-purple-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Get in <span className="bg-gradient-to-r from-purple-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Open for technical collaborations, internship opportunities, and innovative engineering conversations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Contact Cards & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Contact Information
              </h3>
              
              <p className="text-xs text-slate-300 leading-relaxed">
                Feel free to reach out directly via email, phone, or connect through professional networks.
              </p>

              {/* Direct Info Pills with Click-to-Copy */}
              <div className="space-y-3 pt-2">
                
                {/* Email Pill */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-white/5 flex items-center justify-between group hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[10px] font-mono text-slate-400">EMAIL</p>
                      <p className="text-xs font-semibold text-white truncate">
                        {PERSONAL_INFO.email}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-300 hover:bg-slate-700 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Pill */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-white/5 flex items-center justify-between group hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-400">PHONE</p>
                      <p className="text-xs font-semibold text-white">
                        {PERSONAL_INFO.phone}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-300 hover:bg-slate-700 transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Pill */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-white/5 flex items-center justify-between group hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-400">LOCATION</p>
                      <p className="text-xs font-semibold text-white">
                        {PERSONAL_INFO.location}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.location, 'location')}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-300 hover:bg-slate-700 transition-colors shrink-0"
                    title="Copy Location"
                  >
                    {copiedField === 'location' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

              </div>

              {/* Social Media Link Buttons */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Social & Developer Profiles
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold text-slate-200 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold text-slate-200 hover:text-purple-300 hover:border-purple-500/40 transition-all"
                  >
                    <Github className="w-4 h-4 text-purple-400" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Functional Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6 relative overflow-hidden">
              
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Send className="w-4 h-4 text-cyan-400" />
                Send a Direct Message
              </h3>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Thank you! Your message client has been prepared. You can also contact directly via email.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. AI / Cloud Internship Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message or inquiry here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-purple-900/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
