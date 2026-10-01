import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Copy, Check, Terminal, ExternalLink, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [copied, setCopied] = useState(false);
  const [istTime, setIstTime] = useState('');

  // Live IST Clock calculation
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
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText('alankbinu.ai@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      id="overview"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10 select-none"
    >
      {/* Top Status & Telemetry Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 font-mono-code text-[11px] text-[#6B6A72]"
      >
        <div className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.06] px-3 py-1 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[#F5F3EF] tracking-wide">
            AVAILABLE FOR PROJECTS
          </span>
          <span className="text-[#0038FF]">/</span>
          <span className="text-white/80">{istTime || '10:20 AM'} IST</span>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#0038FF]" />
            SYS: OPTIMAL
          </span>
          <span>•</span>
          <span>LATENCY: 14MS</span>
          <span>•</span>
          <span className="text-[#F5F3EF]">KERALA, INDIA</span>
        </div>
      </motion.div>

      {/* Main Massive Editorial Typography Hero */}
      <div className="my-auto py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-3"
        >
          <span className="inline-block font-mono-code text-xs sm:text-sm text-[#0038FF] font-semibold tracking-widest uppercase mb-2">
            ALAN K BINU // AI SCHOLAR & ARCHITECT
          </span>
        </motion.div>

        {/* Display Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#F5F3EF] mb-8"
        >
          <span>Crafting </span>
          <span className="font-editorial italic font-normal text-[#0038FF] bg-gradient-to-r from-[#0038FF] via-blue-400 to-indigo-200 bg-clip-text text-transparent">
            Intelligent
          </span>
          <br />
          <span>Artefacts & Neural Systems.</span>
        </motion.h1>

        {/* Lead Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2"
        >
          <div className="md:col-span-8">
            <p className="font-sans-clean text-base sm:text-lg md:text-xl text-[#F5F3EF]/90 font-light leading-relaxed max-w-2xl">
              19-year-old Second-Year B.Tech AI & Data Science Scholar at{' '}
              <span className="text-white font-medium underline decoration-[#0038FF]/60 underline-offset-4">
                Amal Jyothi College of Engineering
              </span>
              . AI Engineering & Machine Learning Intern bridging the chasm between high-order statistical theory, edge inference, and sensory digital craftsmanship.
            </p>

            {/* Quick Interactive Actions */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="#vault"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="px-6 py-3.5 rounded-full bg-[#0038FF] hover:bg-[#002fdb] text-[#F5F3EF] font-mono-code text-xs font-semibold tracking-wider flex items-center gap-2 shadow-[0_0_30px_rgba(0,56,255,0.4)] transition-all hover:scale-105 active:scale-95"
              >
                <span>EXPLORE THE VAULT</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  sound.playClick();
                  onOpenContact();
                }}
                onMouseEnter={() => sound.playHover()}
                className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-[#F5F3EF] font-mono-code text-xs font-medium tracking-wider flex items-center gap-2 transition-all hover:border-[#0038FF]/50"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0038FF]" />
                <span>START A CONVERSATION</span>
              </button>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => sound.playHover()}
                title="Copy direct email address"
                className="px-4 py-3.5 rounded-full bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.07] text-[#6B6A72] hover:text-[#F5F3EF] font-mono-code text-xs flex items-center gap-2 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">COPIED [0.12ms]</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick HUD Metrics Card */}
          <div className="md:col-span-4 bg-white/[0.02] backdrop-blur-md border border-white/[0.06] rounded-2xl p-5 space-y-4">
            <div className="text-[11px] font-mono-code text-[#6B6A72] border-b border-white/[0.06] pb-2 flex justify-between">
              <span>ACADEMIC & RESEARCH HUD</span>
              <span className="text-[#0038FF]">AJCE // 2023-27</span>
            </div>
            
            <div className="space-y-3 font-mono-code text-xs">
              <div className="flex justify-between items-center">
                <span className="text-[#6B6A72]">Major</span>
                <span className="text-[#F5F3EF] font-medium">B.Tech AI & Data Science</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6B6A72]">Focus</span>
                <span className="text-[#F5F3EF]">Neural Nets & Scalable Schemas</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6B6A72]">Positions</span>
                <span className="text-[#0038FF] font-semibold">AI/ML Intern • Res. Asst</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6B6A72]">Repositories</span>
                <span className="text-[#F5F3EF]">18+ Production Grade</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Footer Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="flex items-center justify-between border-t border-white/[0.08] pt-6 font-mono-code text-xs text-[#6B6A72]"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0038FF] animate-ping" />
          <span>SCROLL TO UNLOCK THE VAULT</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F5F3EF] flex items-center gap-1 transition-colors"
          >
            <span>GITHUB</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span>/</span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F5F3EF] flex items-center gap-1 transition-colors"
          >
            <span>LINKEDIN</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
