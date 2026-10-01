import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, Activity, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Project } from '../types';
import { sound } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0F0F13] border border-white/[0.12] p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,56,255,0.3)] z-10"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-8">
            <div className="flex items-center gap-3">
              <span className="font-mono-code text-xs px-3 py-1 rounded-full bg-[#0038FF]/20 border border-[#0038FF]/40 text-[#F5F3EF]">
                {project.category}
              </span>
              <span className="font-mono-code text-xs text-[#6B6A72]">
                ARCHIVE // {project.year}
              </span>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.1] flex items-center justify-center text-[#F5F3EF] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Header Title & Tagline */}
          <div className="space-y-3 mb-8">
            <h2 className="font-display text-3xl sm:text-4xl text-[#F5F3EF] font-bold">
              {project.title}
            </h2>
            <p className="font-sans-clean text-lg text-[#0038FF] font-medium">
              {project.tagline}
            </p>
            <p className="font-sans-clean text-sm sm:text-base text-[#6B6A72] leading-relaxed pt-2">
              {project.description}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 flex flex-col justify-between"
              >
                <span className="font-mono-code text-[11px] text-[#6B6A72] uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#0038FF]" />
                  {metric.label}
                </span>
                <span className="font-display text-2xl font-bold text-[#F5F3EF] mt-2">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Architectural Pillars */}
          <div className="mb-8 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
            <h3 className="font-mono-code text-xs text-[#F5F3EF] font-semibold tracking-wider uppercase mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0038FF]" />
              Engineering Blueprint & Highlights
            </h3>
            <ul className="space-y-2.5">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 font-sans-clean text-sm text-[#F5F3EF]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#0038FF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <h3 className="font-mono-code text-xs text-[#6B6A72] uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#0038FF]" />
              System Stack & Dependencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono-code text-[#F5F3EF]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions & Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
            <div className="font-mono-code text-xs text-[#6B6A72]">
              ROLE: <span className="text-[#F5F3EF]">{project.role}</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono-code text-[#F5F3EF] flex items-center gap-2 transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Repository</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-full bg-[#0038FF] hover:bg-[#002fdb] text-xs font-mono-code font-medium text-white flex items-center gap-2 shadow-[0_0_20px_rgba(0,56,255,0.4)] transition-all"
                >
                  <span>Launch Live System</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
