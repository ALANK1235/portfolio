import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Monitor, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/audio';

interface SkillDomain {
  id: string;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  items: { name: string; proficiency: number; note: string }[];
}

const DOMAINS: SkillDomain[] = [
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    icon: <Brain className="w-4 h-4 text-[#0038FF]" />,
    tagline: 'Deep neural networks, computer vision & generative cognitive architectures',
    items: [
      { name: 'PyTorch / TorchVision', proficiency: 94, note: 'Custom loss functions, vision transformers & CUDA kernels' },
      { name: 'TensorFlow / Keras', proficiency: 88, note: 'Model conversion, TFLite & edge inference' },
      { name: 'Hugging Face & Transformers', proficiency: 92, note: 'Fine-tuning, LoRA adapters & tokenization' },
      { name: 'OpenCV & Computer Vision', proficiency: 90, note: 'Object detection, Kalman tracking & spatial filtering' },
      { name: 'LangGraph & Agentic Workflows', proficiency: 86, note: 'Multi-agent reflection, tool-use & GraphRAG' },
      { name: 'Statistical & Probabilistic Modeling', proficiency: 92, note: 'Bayesian inference, Markov chains & hypothesis testing' },
    ],
  },
  {
    id: 'systems-db',
    title: 'Systems & Modern Database Schemas',
    icon: <Database className="w-4 h-4 text-[#0038FF]" />,
    tagline: 'High-throughput backends, relational structures & topological graph models',
    items: [
      { name: 'Python (AsyncIO / CPython)', proficiency: 96, note: 'High-performance concurrency, scientific computing & PyO3' },
      { name: 'Rust (Systems & Tooling)', proficiency: 80, note: 'Zero-cost abstractions, memory safety & SIMD math' },
      { name: 'FastAPI & REST / gRPC', proficiency: 92, note: 'Microsecond serialization & asynchronous stream buffers' },
      { name: 'PostgreSQL & Relational Schemas', proficiency: 90, note: 'Complex joins, query plan optimization & indexing' },
      { name: 'Neo4j & Graph Databases', proficiency: 85, note: 'Cypher queries, knowledge graphs & topological centrality' },
      { name: 'Vector Databases (Pinecone / Chroma)', proficiency: 88, note: 'HNSW indexing, cosine metric spaces & semantic retrieval' },
    ],
  },
  {
    id: 'frontend-creative',
    title: 'Frontend & Creative Engineering',
    icon: <Monitor className="w-4 h-4 text-[#0038FF]" />,
    tagline: 'Spatial design, WebGL interactive artworks & responsive client performance',
    items: [
      { name: 'React / Next.js & TypeScript', proficiency: 94, note: 'Component composition, hooks & state trees' },
      { name: 'Tailwind CSS & Design Systems', proficiency: 95, note: 'Sub-pixel styling, design tokens & responsive grids' },
      { name: 'Three.js & WebGL Shaders', proficiency: 82, note: 'Custom fragment/vertex shaders & 3D particle physics' },
      { name: 'Framer Motion & Spring Physics', proficiency: 92, note: 'Layout choreography, gestures & scroll-linked motion' },
      { name: 'Canvas 2D & Web Audio API', proficiency: 86, note: 'Generative algorithms & tactile sound synthesis' },
    ],
  },
  {
    id: 'data-devops',
    title: 'Data Science & Computational Infrastructure',
    icon: <Cpu className="w-4 h-4 text-[#0038FF]" />,
    tagline: 'Exploratory analytics, containerization & accelerated training pipelines',
    items: [
      { name: 'NumPy, Pandas & Polars', proficiency: 95, note: 'Vectorized calculations, multi-index aggregation & cleaning' },
      { name: 'Matplotlib, Seaborn & Plotly', proficiency: 90, note: 'Publication-quality scientific visualization & distributions' },
      { name: 'Docker & Containerization', proficiency: 88, note: 'Multi-stage builds, GPU passthrough & reproducibility' },
      { name: 'Git, GitHub Actions & CI/CD', proficiency: 92, note: 'Automated test runners, linting & deployment pipelines' },
      { name: 'Linux / Unix Internals & Shell', proficiency: 90, note: 'Bash scripting, process isolation & memory profiling' },
    ],
  },
];

export const Arsenal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ai-ml');

  const currentDomain = DOMAINS.find((d) => d.id === activeTab) || DOMAINS[0];

  return (
    <section id="arsenal" className="relative py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="border-b border-white/[0.08] pb-8 mb-14">
        <div className="flex items-center gap-2 font-mono-code text-xs text-[#0038FF] font-semibold tracking-widest uppercase mb-2">
          <span>04</span>
          <span>//</span>
          <span>COMPUTATIONAL TOOLKIT</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl text-[#F5F3EF] tracking-tight">
          Technical Arsenal
        </h2>
        <p className="font-sans-clean text-sm sm:text-base text-[#6B6A72] mt-2 max-w-xl">
          Core computational methodologies, modern database architectures, and engineering tools tested in academic research and production pipelines.
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {DOMAINS.map((domain) => {
          const isActive = domain.id === activeTab;
          return (
            <button
              key={domain.id}
              onClick={() => {
                sound.playClick();
                setActiveTab(domain.id);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                isActive
                  ? 'bg-white/[0.08] border-[#0038FF] shadow-[0_0_25px_rgba(0,56,255,0.25)]'
                  : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {domain.icon}
                <span className="font-mono-code text-xs font-semibold text-[#F5F3EF]">
                  {domain.title.split(' ')[0]}
                </span>
              </div>
              <div className="font-display text-sm text-[#F5F3EF] truncate">
                {domain.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Domain Panel */}
      <motion.div
        key={currentDomain.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl bg-[#0F0F13]/90 border border-white/[0.08] p-7 sm:p-10 shadow-2xl"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.06] pb-5 mb-8 gap-4">
          <div>
            <h3 className="font-display text-2xl font-bold text-[#F5F3EF]">
              {currentDomain.title}
            </h3>
            <p className="font-sans-clean text-sm text-[#6B6A72] mt-1">
              {currentDomain.tagline}
            </p>
          </div>
          <span className="font-mono-code text-xs px-3 py-1 rounded-full bg-[#0038FF]/15 border border-[#0038FF]/30 text-[#0038FF] self-start sm:self-auto">
            {currentDomain.items.length} SPECIALIZED CAPABILITIES
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentDomain.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] rounded-2xl p-5 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans-clean text-sm font-semibold text-[#F5F3EF]">
                  {item.name}
                </span>
                <span className="font-mono-code text-xs text-[#0038FF]">
                  {item.proficiency}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.proficiency}%` }}
                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                  className="h-full bg-gradient-to-r from-[#0038FF] to-blue-400 rounded-full"
                />
              </div>

              <p className="font-mono-code text-[11px] text-[#6B6A72] leading-relaxed">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
