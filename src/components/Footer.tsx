import React from 'react';
import { ArrowUp, ExternalLink, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { sound } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { name: 'GitHub', href: 'https://github.com', icon: <GithubIcon className="w-3.5 h-3.5" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: <LinkedinIcon className="w-3.5 h-3.5" /> },
    { name: 'X / Twitter', href: 'https://x.com', icon: <TwitterIcon className="w-3.5 h-3.5" /> },
    { name: 'ResearchGate', href: 'https://researchgate.net', icon: <Globe className="w-3.5 h-3.5" /> },
  ];

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#0A0A0C] py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
        {/* Monogram Brand */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-editorial text-2xl font-bold tracking-wider text-[#F5F3EF]">
              ALAN K BINU
            </span>
            <span className="font-mono-code text-[10px] px-2 py-0.5 rounded-full bg-[#0038FF]/20 text-[#0038FF] border border-[#0038FF]/30">
              v2.4
            </span>
          </div>
          <p className="font-sans-clean text-xs text-[#6B6A72] max-w-sm">
            Second-Year B.Tech Scholar in Artificial Intelligence & Data Science at Amal Jyothi College of Engineering.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono-code text-xs">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="text-[#6B6A72] hover:text-[#F5F3EF] flex items-center gap-1.5 transition-colors group"
            >
              {s.icon}
              <span className="group-hover:text-[#0038FF] transition-colors">{s.name}</span>
              <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => sound.playHover()}
          className="w-10 h-10 rounded-full bg-white/[0.03] hover:bg-[#0038FF] border border-white/[0.08] text-[#F5F3EF] flex items-center justify-center transition-all cursor-pointer shadow-lg group self-end md:self-auto"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Colophon & Coordinates */}
      <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-[11px] text-[#6B6A72]">
        <div>
          © {new Date().getFullYear()} ALAN K BINU. ALL RIGHTS RESERVED.
        </div>

        <div className="flex items-center gap-2 text-center">
          <Globe className="w-3 h-3 text-[#0038FF]" />
          <span>KERALA, INDIA • 9.5916° N, 76.5222° E</span>
        </div>

        <div className="text-white/60">
          ENGINEERED WITH REACT, TAILWIND & MATHEMATICS
        </div>
      </div>
    </footer>
  );
};
