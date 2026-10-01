import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, List, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { sound } from '../utils/audio';

const PROJECTS: Project[] = [
  {
    id: 'nexus-vision',
    title: 'NexusVision',
    tagline: 'Edge-Optimized Multimodal Perception Engine',
    category: 'Computer Vision / Edge AI',
    role: 'Lead AI Engineer & Architect',
    year: '2024',
    tech: ['PyTorch', 'TensorRT', 'FastAPI', 'OpenCV', 'WebSockets', 'Next.js'],
    description:
      'High-throughput computer vision pipeline engineered for multi-camera video streams. Implements temporal feature tracking, zero-shot open-vocabulary object recognition, and automated anomaly classification at low latencies.',
    architecture: [
      'Custom TensorRT FP16 quantization reducing inference latency to <11.8ms per batch frame',
      'Dual-stream architecture separating spatial feature extraction from temporal Kalman motion prediction',
      'Asynchronous WebSocket streaming buffer powering interactive multi-camera real-time analytics',
    ],
    metrics: [
      { label: 'Inference Latency', value: '11.8 ms' },
      { label: 'Mean Precision', value: '99.3%' },
      { label: 'Throughput', value: '60+ FPS' },
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    featured: true,
    accentColor: '#0038FF',
  },
  {
    id: 'omni-graph',
    title: 'OmniGraph',
    tagline: 'Autonomous Neural Knowledge Synthesizer',
    category: 'Agentic AI / Knowledge Graphs',
    role: 'ML Researcher & Developer',
    year: '2024',
    tech: ['LangGraph', 'Transformers', 'Neo4j', 'FastAPI', 'Tailwind CSS', 'Pinecone'],
    description:
      'Self-directed multi-agent cognitive architecture designed to ingest complex multi-disciplinary scientific papers, distill causal semantic relationships, and construct navigable high-dimensional knowledge topologies.',
    architecture: [
      'Graph-augmented retrieval generation (GraphRAG) eliminating hallucination loops via ontology validation',
      'Multi-agent reflection loop checking factual consistency and source paragraph citations in parallel',
      'Interactive 3D graph visualizer rendering 150,000+ extracted knowledge triples with physics clustering',
    ],
    metrics: [
      { label: 'Ingestion Speed', value: '12x Faster' },
      { label: 'Knowledge Triples', value: '150k+' },
      { label: 'Factual Accuracy', value: '99.7%' },
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    featured: true,
    accentColor: '#3B82F6',
  },
  {
    id: 'synapse-db',
    title: 'SynapseDB',
    tagline: 'Vectorized Time-Series Telemetry Engine',
    category: 'Systems / Vector Databases',
    role: 'Systems Developer',
    year: '2023',
    tech: ['Rust', 'Python', 'SIMD', 'gRPC', 'React', 'TimeSeries'],
    description:
      'High-performance hybrid database engine combining dense cosine vector similarity indexing with continuous temporal telemetry logging for robotic edge fleets and autonomous agents.',
    architecture: [
      'Custom SIMD-accelerated dot-product calculation kernels achieving 3.4x speedup over standard pgvector',
      'Lock-free ring buffer memory allocation eliminating garbage collection pauses during high-rate spikes',
      'Python bindings via PyO3 enabling seamless integration into PyTorch and Hugging Face pipelines',
    ],
    metrics: [
      { label: 'Query P99 Latency', value: '0.84 ms' },
      { label: 'Benchmark Speedup', value: '3.4x' },
      { label: 'Throughput', value: '250k ops/s' },
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    featured: true,
    accentColor: '#60A5FA',
  },
  {
    id: 'aura-craft',
    title: 'AuraCraft',
    tagline: 'Generative Audio-Visual Spatial Engine',
    category: 'Creative Tech / WebGL',
    role: 'Creative Director & Developer',
    year: '2023',
    tech: ['Three.js', 'GLSL Shaders', 'Web Audio API', 'React', 'Framer Motion'],
    description:
      'Interactive generative audiovisual canvas mapping real-time frequency-domain audio analysis and cursor velocity vectors into responsive 3D mathematical manifolds and fluid particle fields.',
    architecture: [
      'Custom WebGL fragment shaders implementing ray-marched signed distance fields with procedural noise',
      'Web Audio API FFT analyzer driving geometric transformations across 4096 individual frequency bins',
      'Zero-jank 120 FPS rendering pipeline with dynamic LOD scaling for mobile and low-power devices',
    ],
    metrics: [
      { label: 'Frame Rate', value: '120 FPS' },
      { label: 'Audio Bins', value: '4,096' },
      { label: 'Shader Compute', value: 'GPU Native' },
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    featured: true,
    accentColor: '#0038FF',
  },
];

export const TheVault: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Computer Vision / Edge AI', 'Agentic AI / Knowledge Graphs', 'Systems / Vector Databases', 'Creative Tech / WebGL'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="vault" className="relative py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#0038FF] font-semibold tracking-widest uppercase mb-2">
            <span>01</span>
            <span>//</span>
            <span>THE ARCHIVE & SELECTED WORKS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-[#F5F3EF] tracking-tight">
            The Vault
          </h2>
          <p className="font-sans-clean text-sm sm:text-base text-[#6B6A72] mt-2 max-w-xl">
            Selected engineering prototypes, neural architectures, and interactive systems crafted at the intersection of mathematical theory and modern software design.
          </p>
        </div>

        {/* View Switcher & Controls */}
        <div className="flex items-center gap-2 self-start md:self-end">
          <div className="bg-white/[0.03] border border-white/[0.08] p-1 rounded-xl flex items-center gap-1">
            <button
              onClick={() => {
                sound.playClick();
                setViewMode('grid');
              }}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#0038FF] text-white shadow-[0_0_15px_rgba(0,56,255,0.4)]'
                  : 'text-[#6B6A72] hover:text-[#F5F3EF]'
              }`}
              title="Visual Cards View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setViewMode('list');
              }}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'list'
                  ? 'bg-[#0038FF] text-white shadow-[0_0_15px_rgba(0,56,255,0.4)]'
                  : 'text-[#6B6A72] hover:text-[#F5F3EF]'
              }`}
              title="Editorial Index View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setSelectedCategory(cat);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono-code transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white/[0.12] border border-white/[0.3] text-[#F5F3EF]'
                  : 'bg-white/[0.02] border border-white/[0.06] text-[#6B6A72] hover:text-[#F5F3EF] hover:border-white/[0.12]'
              }`}
            >
              {cat === 'All' ? 'ALL ARCHIVES' : cat}
            </button>
          );
        })}
      </div>

      {/* Content: Mode A (Visual Bento Cards) */}
      {viewMode === 'grid' && (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              data-cursor="project"
              onClick={() => {
                sound.playClick();
                setActiveProject(project);
              }}
              onMouseEnter={() => sound.playHover()}
              className="group relative rounded-3xl bg-[#0F0F13]/90 border border-white/[0.08] hover:border-[#0038FF]/50 p-7 sm:p-9 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(0,56,255,0.25)] hover:-translate-y-1 cursor-pointer"
            >
              {/* Dynamic Accent Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#0038FF]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-[#0038FF]/20 transition-all duration-700" />

              <div>
                {/* Meta Top */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6">
                  <span className="font-mono-code text-[11px] text-[#0038FF] font-medium tracking-wider uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0038FF]"></span>
                    {project.category}
                  </span>
                  <span className="font-mono-code text-xs text-[#6B6A72]">
                    // 0{idx + 1}
                  </span>
                </div>

                {/* Project Header */}
                <div className="space-y-2 mb-4">
                  <h3 className="font-display text-2xl sm:text-3xl text-[#F5F3EF] font-bold group-hover:text-white transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#6B6A72] group-hover:text-[#0038FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </h3>
                  <p className="font-sans-clean text-sm font-medium text-[#0038FF]">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="font-sans-clean text-sm text-[#6B6A72] line-clamp-3 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Highlights Preview */}
                <div className="grid grid-cols-2 gap-3 mb-6 bg-white/[0.02] border border-white/[0.04] p-3 rounded-xl">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i}>
                      <span className="font-mono-code text-[10px] text-[#6B6A72] uppercase block">
                        {m.label}
                      </span>
                      <span className="font-display text-lg font-bold text-[#F5F3EF]">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono-code text-[#F5F3EF]/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Content: Mode B (Editorial Index Table) */}
      {viewMode === 'list' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border border-white/[0.08] rounded-2xl overflow-hidden bg-[#0F0F13]/70 backdrop-blur-md"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] font-mono-code text-[11px] text-[#6B6A72] uppercase bg-white/[0.02]">
                  <th className="py-4 px-6">Year</th>
                  <th className="py-4 px-6">Project Title</th>
                  <th className="py-4 px-6 hidden sm:table-cell">Discipline</th>
                  <th className="py-4 px-6 hidden md:table-cell">Tech Architecture</th>
                  <th className="py-4 px-6 text-right">Inspect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] font-mono-code text-xs">
                {filteredProjects.map((p, idx) => (
                  <tr
                    key={p.id}
                    onClick={() => {
                      sound.playClick();
                      setActiveProject(p);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className="hover:bg-white/[0.04] transition-colors cursor-pointer group"
                  >
                    <td className="py-5 px-6 text-[#6B6A72]">{p.year}</td>
                    <td className="py-5 px-6">
                      <div className="font-display text-base font-bold text-[#F5F3EF] group-hover:text-[#0038FF] transition-colors">
                        {p.title}
                      </div>
                      <div className="text-[11px] text-[#6B6A72] font-sans-clean">
                        {p.role}
                      </div>
                    </td>
                    <td className="py-5 px-6 text-[#F5F3EF]/70 hidden sm:table-cell">
                      {p.category}
                    </td>
                    <td className="py-5 px-6 hidden md:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {p.tech.slice(0, 3).map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-white/[0.03] text-[10px] text-[#6B6A72]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-5 px-6 text-right">
                      <button className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.03] group-hover:bg-[#0038FF] text-[#F5F3EF] text-[11px] transition-all">
                        <span>Deep Dive</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {/* Project Detail In-Place Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
