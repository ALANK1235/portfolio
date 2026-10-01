import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Copy, Check, Sparkles, Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

interface TerminalContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerminalContact: React.FC<TerminalContactProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'AI & Neural Systems',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    sound.playClick();
    navigator.clipboard.writeText('alankbinu.ai@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      sound.playTone(880, 'sine', 0.2, 0.08);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0038FF', '#F5F3EF', '#3B82F6'],
      });

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', scope: 'AI & Neural Systems', message: '' });
        onClose();
      }, 3500);
    }, 1200);
  };

  const scopes = [
    'AI & Neural Systems',
    'Research Collaboration',
    'Full-Stack / Creative Web',
    'Freelance Engineering',
  ];

  return (
    <section id="terminal" className="relative py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10">
      {/* High-Impact Editorial Invitation */}
      <div className="border border-white/[0.08] rounded-3xl bg-gradient-to-b from-[#121218] via-[#0A0A0C] to-[#0A0A0C] p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
        {/* Ambient Back Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0038FF]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] font-mono-code text-[11px] text-[#0038FF]">
            <Terminal className="w-3.5 h-3.5" />
            <span>TRANSMISSION TERMINAL // INQUIRY READY</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#F5F3EF] tracking-tight leading-[1.05]">
            Have an ambitious vision? <br />
            <span className="font-editorial italic text-[#0038FF]">
              Let's engineer the future.
            </span>
          </h2>

          <p className="font-sans-clean text-base sm:text-lg text-[#6B6A72] max-w-xl mx-auto">
            Whether inquiring about high-order AI implementations, research collaborations, or bespoke interactive web engineering—my inbox is continuously open.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                sound.playClick();
                onClose(); // toggle or open
              }}
              onMouseEnter={() => sound.playHover()}
              className="px-8 py-4 rounded-full bg-[#0038FF] hover:bg-[#002fdb] text-[#F5F3EF] font-mono-code text-xs font-semibold tracking-wider flex items-center gap-2 shadow-[0_0_40px_rgba(0,56,255,0.45)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>START A CONVERSATION</span>
            </button>

            <button
              onClick={handleCopy}
              onMouseEnter={() => sound.playHover()}
              className="px-6 py-4 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-[#F5F3EF] font-mono-code text-xs flex items-center gap-2 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">COPIED TO CLIPBOARD (0.12ms)</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#6B6A72]" />
                  <span>alankbinu.ai@gmail.com</span>
                </>
              )}
            </button>
          </div>

          {/* Live Status Indicators */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 font-mono-code text-xs text-[#6B6A72]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              TIME IN KERALA: <span className="text-[#F5F3EF]">{istTime || '10:20 AM'} IST</span>
            </span>
            <span>•</span>
            <span>LATENCY: 12ms</span>
            <span>•</span>
            <span>LOCATION: 9.59° N, 76.52° E</span>
          </div>
        </div>
      </div>

      {/* Inquiry Drawer / Modal Form */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl rounded-3xl bg-[#0F0F14] border border-white/[0.12] p-7 sm:p-10 shadow-2xl z-10"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#F5F3EF]">
                    Initiate Transmission
                  </h3>
                  <p className="font-mono-code text-xs text-[#6B6A72]">
                    Direct message to Alan K Binu
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="font-mono-code text-xs text-[#6B6A72] hover:text-[#F5F3EF] px-3 py-1 rounded-full border border-white/[0.08]"
                >
                  ESC / CLOSE
                </button>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="font-display text-2xl text-[#F5F3EF] font-bold">
                    Signal Transmitted Successfully
                  </h4>
                  <p className="font-sans-clean text-sm text-[#6B6A72]">
                    Thank you. Your inquiry has been logged. I typically respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono-code text-xs text-[#6B6A72] mb-1.5">
                      IDENTIFIER / NAME
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Eleanor Vance"
                      className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-[#0038FF] rounded-xl px-4 py-3 font-sans-clean text-sm text-[#F5F3EF] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-code text-xs text-[#6B6A72] mb-1.5">
                      EMAIL COORDINATE
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="eleanor@institution.org"
                      className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-[#0038FF] rounded-xl px-4 py-3 font-sans-clean text-sm text-[#F5F3EF] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-code text-xs text-[#6B6A72] mb-1.5">
                      COLLABORATION SCOPE
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {scopes.map((scope) => (
                        <button
                          key={scope}
                          type="button"
                          onClick={() => {
                            sound.playClick();
                            setFormData({ ...formData, scope });
                          }}
                          className={`p-2.5 rounded-xl border text-xs font-mono-code text-left transition-all ${
                            formData.scope === scope
                              ? 'bg-[#0038FF]/20 border-[#0038FF] text-[#F5F3EF]'
                              : 'bg-white/[0.02] border-white/[0.06] text-[#6B6A72] hover:text-[#F5F3EF]'
                          }`}
                        >
                          {scope}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono-code text-xs text-[#6B6A72] mb-1.5">
                      MESSAGE / SYSTEM SPECIFICATION
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your project scope, timeline, or research challenge..."
                      className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-[#0038FF] rounded-xl px-4 py-3 font-sans-clean text-sm text-[#F5F3EF] outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-[#0038FF] hover:bg-[#002fdb] text-white font-mono-code text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,56,255,0.4)] transition-all cursor-pointer"
                  >
                    {submitting ? (
                      <span>TRANSMITTING NEURAL PACKETS...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>DISPATCH TRANSMISSION</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
