import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Code2, GraduationCap, CheckCircle } from 'lucide-react';
import { sound } from '../utils/audio';

export const Ethos: React.FC = () => {
  return (
    <section id="ethos" className="relative py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="border-b border-white/[0.08] pb-8 mb-16">
        <div className="flex items-center gap-2 font-mono-code text-xs text-[#0038FF] font-semibold tracking-widest uppercase mb-2">
          <span>03</span>
          <span>//</span>
          <span>ABOUT & ARCHITECTURAL ETHOS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl text-[#F5F3EF] tracking-tight">
          Philosophy & Pedigree
        </h2>
      </div>

      {/* Asymmetric Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Stylized Monochrome Hologram / Portrait HUD */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <div className="relative group rounded-3xl overflow-hidden bg-gradient-to-b from-[#15151C] to-[#0A0A0C] border border-white/[0.1] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
            {/* Top HUD Frame Coordinates */}
            <div className="flex items-center justify-between font-mono-code text-[10px] text-[#6B6A72] border-b border-white/[0.06] pb-3 mb-6">
              <span className="flex items-center gap-1 text-[#F5F3EF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0038FF]"></span>
                IDENTIFIER: ALAN_K_BINU
              </span>
              <span>KERALA // AJCE.EDU</span>
            </div>

            {/* Stylized Portrait Visual Canvas */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A0A0C] border border-white/[0.08] flex flex-col justify-between p-6">
              {/* Corner crosshairs */}
              <div className="absolute top-3 left-3 text-[#6B6A72] font-mono-code text-xs">+</div>
              <div className="absolute top-3 right-3 text-[#6B6A72] font-mono-code text-xs">+</div>
              <div className="absolute bottom-3 left-3 text-[#6B6A72] font-mono-code text-xs">+</div>
              <div className="absolute bottom-3 right-3 text-[#6B6A72] font-mono-code text-xs">+</div>

              {/* Geometric Silhouette Artwork */}
              <div className="my-auto text-center space-y-4">
                <div className="relative w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-[#0038FF]/40 to-blue-300/20 p-[2px] shadow-[0_0_35px_rgba(0,56,255,0.3)]">
                  <div className="w-full h-full rounded-full bg-[#0F0F14] flex items-center justify-center overflow-hidden">
                    <span className="font-editorial text-5xl font-bold text-[#F5F3EF] tracking-wider">
                      AKB
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-[#F5F3EF]">
                    ALAN K BINU
                  </h3>
                  <p className="font-mono-code text-xs text-[#0038FF] mt-1">
                    B.Tech AI & Data Science Scholar
                  </p>
                  <p className="font-mono-code text-[11px] text-[#6B6A72] mt-0.5">
                    Amal Jyothi College of Engineering
                  </p>
                </div>
              </div>

              {/* Status Footer inside card */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono-code text-[10px] text-[#6B6A72]">
                <span className="text-emerald-400 flex items-center gap-1">
                  ● ACTIVE RESEARCH
                </span>
                <span>AGE: 19</span>
              </div>
            </div>

            {/* Sub-bar */}
            <div className="mt-5 flex items-center justify-between font-mono-code text-xs text-[#6B6A72]">
              <span>COORDINATES: 9.59° N, 76.52° E</span>
              <span className="text-[#0038FF]">BATCH OF 2027</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative & Philosophical Ethos */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8"
        >
          {/* Main Statement */}
          <h3 className="font-display text-2xl sm:text-4xl text-[#F5F3EF] leading-snug">
            Bridging the chasm between{' '}
            <span className="font-editorial italic text-[#0038FF]">
              deep mathematical theory
            </span>{' '}
            and production-grade digital craft.
          </h3>

          <div className="space-y-5 font-sans-clean text-base text-[#6B6A72] leading-relaxed">
            <p>
              I am a 19-year-old Second-Year B.Tech student majoring in Artificial Intelligence & Data Science at{' '}
              <span className="text-[#F5F3EF] font-medium">Amal Jyothi College of Engineering</span>. Driven by intense curiosity and a reverence for precision, I focus on building intelligent applications, uncovering hidden topological structures in high-dimensional data, and solving real-world challenges through elegant computation.
            </p>
            <p>
              My academic journey is anchored in core computational methodologies, modern database schemas, and statistical models. Rather than accepting software engineering as disjoint from academic research, I maintain a continuous loop: exploring theoretical formulations, writing rigorous implementations, and distilling complex abstractions into high-performance developer experiences.
            </p>
            <p>
              Whether orchestrating distributed computer vision pipelines, benchmarking vector indexing algorithms, or choreographing 120 FPS web interactions, I treat software engineering as both empirical science and bespoke craftsmanship.
            </p>
          </div>

          {/* Metric Counter Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
            <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl">
              <span className="font-mono-code text-[10px] text-[#6B6A72] uppercase block">
                Research Fields
              </span>
              <span className="font-display text-2xl font-bold text-[#F5F3EF] mt-1 block">
                04+
              </span>
            </div>

            <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl">
              <span className="font-mono-code text-[10px] text-[#6B6A72] uppercase block">
                Code Repositories
              </span>
              <span className="font-display text-2xl font-bold text-[#F5F3EF] mt-1 block">
                18+
              </span>
            </div>

            <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl">
              <span className="font-mono-code text-[10px] text-[#6B6A72] uppercase block">
                Target Latency
              </span>
              <span className="font-display text-2xl font-bold text-[#0038FF] mt-1 block">
                &lt;15ms
              </span>
            </div>

            <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl">
              <span className="font-mono-code text-[10px] text-[#6B6A72] uppercase block">
                Craft Integrity
              </span>
              <span className="font-display text-2xl font-bold text-emerald-400 mt-1 block">
                100%
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
