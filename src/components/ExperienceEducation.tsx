import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, BookOpen, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { sound } from '../utils/audio';

export const ExperienceEducation: React.FC = () => {
  const experiences = [
    {
      period: '2024 — PRESENT',
      role: 'AI Engineering Intern & Machine Learning Intern',
      company: 'Applied AI & Intelligent Systems Labs',
      location: 'Remote / Hybrid',
      description:
        'Engineered edge-compatible inference pipelines with TensorRT and ONNX. Optimized domain-specific transformer architectures via LoRA fine-tuning and 4-bit AWQ quantization to reduce memory footprints by 65%.',
      tags: ['PyTorch', 'TensorRT', 'LoRA', 'FastAPI', 'Inference Optimization'],
      active: true,
    },
    {
      period: '2023 — PRESENT',
      role: 'Research Assistant — Artificial Intelligence & Data Science',
      company: 'Amal Jyothi College of Engineering',
      location: 'Kerala, India',
      description:
        'Conducting computational research on high-dimensional data topologies and multimodal neural networks. Benchmarking graph neural networks (GNNs) on complex relational datasets and collaborating on empirical literature.',
      tags: ['Research', 'Graph Neural Networks', 'Empirical Benchmarking', 'Python', 'Neo4j'],
      active: true,
    },
    {
      period: '2023 — PRESENT',
      role: 'Freelance Software & Creative Developer',
      company: 'Independent Client Collaborations',
      location: 'Global / Remote',
      description:
        'Architecting modern digital products, interactive web applications, and tailored backend infrastructures for early-stage founders and creative teams, focusing on sub-pixel visual polish and fluid user experiences.',
      tags: ['Full-Stack', 'Next.js', 'TypeScript', 'Tailwind CSS', 'WebGL'],
      active: false,
    },
  ];

  const education = {
    institution: 'Amal Jyothi College of Engineering (AJCE), Autonomous',
    degree: 'Bachelor of Technology (B.Tech) — Artificial Intelligence & Data Science',
    period: '2023 — 2027 (Second-Year Scholar)',
    location: 'Kanjirappally, Kottayam, Kerala',
    coursework: [
      'Core Computational Methodologies',
      'Modern Database Schemas & Distributed Systems',
      'Statistical Models & Applied Probability',
      'Data Structures & Algorithmic Analysis',
      'Linear Algebra & Numerical Methods',
      'Artificial Neural Networks & Pattern Recognition',
    ],
  };

  const certifications = [
    {
      title: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI / Coursera',
      year: '2024',
      badge: 'Verified Credential',
      skills: 'CNNs, RNNs, Transformers, Optimization',
    },
    {
      title: 'Advanced Machine Learning & Statistical Modeling',
      issuer: 'Academic Honors & Peer Review',
      year: '2024',
      badge: 'Specialization',
      skills: 'High-Dimensional Analytics & Inference',
    },
    {
      title: 'Modern Database Architectures & Graph Systems',
      issuer: 'AJCE Research Cell',
      year: '2023',
      badge: 'Distinction',
      skills: 'Neo4j, PostgreSQL, SIMD Optimization',
    },
  ];

  return (
    <section id="timeline" className="relative py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="border-b border-white/[0.08] pb-8 mb-16">
        <div className="flex items-center gap-2 font-mono-code text-xs text-[#0038FF] font-semibold tracking-widest uppercase mb-2">
          <span>05</span>
          <span>//</span>
          <span>ACADEMIC & PROFESSIONAL TRAJECTORY</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl text-[#F5F3EF] tracking-tight">
          Journey & Credentials
        </h2>
        <p className="font-sans-clean text-sm sm:text-base text-[#6B6A72] mt-2 max-w-xl">
          A progression of academic inquiry, research apprenticeships, and production engineering commitments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Experience Timeline (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-2 font-mono-code text-xs font-semibold text-[#F5F3EF] uppercase tracking-wider mb-6">
            <Briefcase className="w-4 h-4 text-[#0038FF]" />
            <span>Professional Roles & Research Posts</span>
          </div>

          <div className="relative border-l border-white/[0.1] pl-6 sm:pl-8 ml-3 space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                    exp.active
                      ? 'border-[#0038FF] bg-[#0038FF] shadow-[0_0_15px_#0038FF]'
                      : 'border-[#6B6A72] bg-[#0A0A0C]'
                  }`}
                />

                <div className="bg-[#0F0F13]/90 border border-white/[0.07] hover:border-[#0038FF]/40 rounded-2xl p-6 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono-code text-[11px]">
                    <span className="text-[#0038FF] font-semibold">{exp.period}</span>
                    <span className="text-[#6B6A72] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#F5F3EF] group-hover:text-white transition-colors">
                    {exp.role}
                  </h3>

                  <div className="font-mono-code text-xs text-[#6B6A72] mb-3">
                    {exp.company}
                  </div>

                  <p className="font-sans-clean text-sm text-[#F5F3EF]/70 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.04]">
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded text-[10px] font-mono-code bg-white/[0.02] border border-white/[0.06] text-[#6B6A72]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Certifications (5 Cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Education Card */}
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs font-semibold text-[#F5F3EF] uppercase tracking-wider mb-6">
              <GraduationCap className="w-4 h-4 text-[#0038FF]" />
              <span>Academic Foundation</span>
            </div>

            <div className="bg-gradient-to-br from-[#121218] to-[#0A0A0C] border border-white/[0.08] hover:border-[#0038FF]/30 rounded-3xl p-7 shadow-xl">
              <div className="flex items-center justify-between font-mono-code text-[11px] text-[#0038FF] mb-2">
                <span>{education.period}</span>
                <span className="text-emerald-400">ENROLLED</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#F5F3EF] mb-1">
                {education.degree}
              </h3>
              <p className="font-sans-clean text-sm text-[#6B6A72] mb-5">
                {education.institution}
              </p>

              <div className="pt-4 border-t border-white/[0.06]">
                <span className="font-mono-code text-[11px] text-[#6B6A72] uppercase block mb-3">
                  Core Computational Methodologies:
                </span>
                <ul className="space-y-2">
                  {education.coursework.map((course, cIdx) => (
                    <li
                      key={cIdx}
                      className="font-mono-code text-xs text-[#F5F3EF]/80 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0038FF]" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications & Laurels */}
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs font-semibold text-[#F5F3EF] uppercase tracking-wider mb-6">
              <Award className="w-4 h-4 text-[#0038FF]" />
              <span>Certifications & Honors</span>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-4 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-sans-clean text-sm font-semibold text-[#F5F3EF]">
                      {cert.title}
                    </span>
                    <span className="font-mono-code text-[10px] text-[#0038FF]">
                      {cert.year}
                    </span>
                  </div>
                  <div className="font-mono-code text-xs text-[#6B6A72]">
                    {cert.issuer}
                  </div>
                  <div className="mt-2 text-[11px] font-mono-code text-[#6B6A72]">
                    Focus: <span className="text-[#F5F3EF]/70">{cert.skills}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
