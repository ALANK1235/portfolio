import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [muted, setMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['overview', 'vault', 'playground', 'ethos', 'arsenal', 'timeline', 'terminal'];
      const scrollPos = window.scrollY + 250;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const isNowMuted = sound.toggleMute();
    setMuted(isNowMuted);
  };

  const navLinks = [
    { label: 'Overview', href: '#overview', id: 'overview' },
    { label: 'The Vault', href: '#vault', id: 'vault' },
    { label: 'Playground', href: '#playground', id: 'playground' },
    { label: 'Ethos', href: '#ethos', id: 'ethos' },
    { label: 'Arsenal', href: '#arsenal', id: 'arsenal' },
    { label: 'Journey', href: '#timeline', id: 'timeline' },
  ];

  return (
    <>
      <header
        className={`fixed top-4 md:top-6 inset-x-0 mx-auto w-[92%] max-w-5xl z-40 transition-all duration-500 ${
          scrolled ? 'translate-y-0' : 'translate-y-0'
        }`}
      >
        <div className="relative rounded-full bg-[#0A0A0C]/85 backdrop-blur-xl border border-white/[0.08] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.7)] px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all">
          
          {/* Brand Identity / Left */}
          <a
            href="#overview"
            className="flex items-center gap-3 group"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0038FF] to-blue-400 p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(0,56,255,0.4)]">
              <div className="w-full h-full bg-[#0A0A0C] rounded-full flex items-center justify-center group-hover:bg-[#0038FF]/20 transition-colors">
                <span className="font-editorial text-sm font-bold text-[#F5F3EF]">A</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-sm md:text-base font-semibold tracking-wider text-[#F5F3EF] flex items-center gap-1.5">
                ALAN K BINU
              </span>
              <span className="font-mono-code text-[9px] text-[#6B6A72] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                AJCE • AI & DS
              </span>
            </div>
          </a>

          {/* Desktop Navigation / Center */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono-code transition-all duration-300 ${
                    isActive
                      ? 'text-[#F5F3EF] font-semibold'
                      : 'text-[#6B6A72] hover:text-[#F5F3EF]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-[#0038FF]/20 border border-[#0038FF]/40 -z-10 shadow-[0_0_12px_rgba(0,56,255,0.3)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              title={muted ? 'Unmute tactile soundscapes' : 'Mute tactile soundscapes'}
              className="w-8 h-8 rounded-full border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#0038FF]/50 text-[#6B6A72] hover:text-[#F5F3EF] flex items-center justify-center transition-all cursor-pointer"
            >
              {muted ? (
                <VolumeX className="w-3.5 h-3.5" />
              ) : (
                <div className="flex items-center gap-[2px]">
                  <Volume2 className="w-3.5 h-3.5 text-[#0038FF]" />
                </div>
              )}
            </button>

            {/* Magnetic Contact Button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenContact();
              }}
              onMouseEnter={() => sound.playHover()}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0038FF] hover:bg-[#002ed4] text-xs font-mono-code font-medium text-white shadow-[0_0_20px_rgba(0,56,255,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Initiate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-[#F5F3EF] hover:bg-white/[0.05]"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-2xl bg-[#0A0A0C]/95 backdrop-blur-2xl border border-white/[0.1] p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    sound.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-2.5 rounded-xl font-editorial text-lg text-[#F5F3EF] hover:bg-white/[0.04] hover:text-[#0038FF] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="font-mono-code text-xs text-[#6B6A72]">0{navLinks.indexOf(link) + 1}</span>
                </a>
              ))}
              <div className="pt-3 border-t border-white/[0.08] mt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    sound.playClick();
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-3 rounded-xl bg-[#0038FF] text-[#F5F3EF] font-mono-code text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start a Conversation</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
