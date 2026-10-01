import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Wand2, Sparkles, RefreshCw, Zap } from 'lucide-react';
import { sound } from '../utils/audio';

// Interactive Tokenizer Sandbox
const TokenizerSandbox: React.FC = () => {
  const [input, setInput] = useState('Alan K Binu: Neural Architect');

  const tokens = input.split(/(\s+|[.,!?:;])/).filter(Boolean);

  return (
    <div className="bg-[#0A0A0C] border border-white/[0.08] rounded-2xl p-5 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between text-xs font-mono-code text-[#6B6A72] mb-3">
          <span className="flex items-center gap-1.5 text-[#0038FF]">
            <Terminal className="w-3.5 h-3.5" />
            TOKENIZER & VECTOR EMBEDDING PROJECTION
          </span>
          <span>{tokens.length} TOKENS</span>
        </div>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type to tokenize..."
          className="w-full bg-white/[0.03] border border-white/[0.1] focus:border-[#0038FF] rounded-xl px-3.5 py-2 text-xs font-mono-code text-[#F5F3EF] outline-none mb-4 transition-colors"
        />

        <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
          {tokens.map((token, i) => {
            const hash = token.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 360;
            return (
              <span
                key={i}
                style={{
                  borderColor: `hsl(${hash}, 70%, 45%)`,
                  backgroundColor: `hsla(${hash}, 70%, 30%, 0.15)`,
                }}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono-code border text-[#F5F3EF] flex items-center gap-1.5"
              >
                <span>{token === ' ' ? '␣' : token}</span>
                <span className="text-[9px] opacity-60">#{hash}</span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono-code text-[#6B6A72] flex justify-between mt-4">
        <span>LATENT SPACE: 1536-D</span>
        <span className="text-emerald-400">COSINE SIM: 0.984</span>
      </div>
    </div>
  );
};

// Interactive Neural Canvas
const NeuralFieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const w = (canvas.width = 380);
    const h = (canvas.height = 200);

    const nodes = Array.from({ length: 18 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 2,
    }));

    const draw = () => {
      ctx.fillStyle = '#0A0A0C';
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#0038FF';
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(0, 56, 255, ${1 - dist / 80})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="bg-[#0A0A0C] border border-white/[0.08] rounded-2xl p-5 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between text-xs font-mono-code text-[#6B6A72] mb-3">
          <span className="flex items-center gap-1.5 text-[#0038FF]">
            <Cpu className="w-3.5 h-3.5" />
            SYNAPTIC FORCE-GRAPH SIMULATOR
          </span>
          <span className="text-emerald-400">ONLINE</span>
        </div>
        <div className="relative rounded-xl overflow-hidden border border-white/[0.06]">
          <canvas ref={canvasRef} className="w-full h-[180px] block" />
        </div>
      </div>
      <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono-code text-[#6B6A72] flex justify-between mt-4">
        <span>TOPOLOGY: 18 VERTICES</span>
        <span>ENERGY: CONSERVED</span>
      </div>
    </div>
  );
};

// Attention Matrix Heatmap
const AttentionHeatmap: React.FC = () => {
  const [temperature, setTemperature] = useState(0.8);
  const words = ['Query', 'Key', 'Value', 'Softmax', 'Output'];

  const getWeight = (i: number, j: number) => {
    const raw = Math.sin(i * 1.5 + j * 2.1) + 1.2;
    return Math.min(1, Math.max(0.1, (raw / 2.2) * (1.2 / temperature)));
  };

  return (
    <div className="bg-[#0A0A0C] border border-white/[0.08] rounded-2xl p-5 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between text-xs font-mono-code text-[#6B6A72] mb-3">
          <span className="flex items-center gap-1.5 text-[#0038FF]">
            <Zap className="w-3.5 h-3.5" />
            MULTI-HEAD ATTENTION HEATMAP
          </span>
          <span className="text-[#F5F3EF]">T = {temperature.toFixed(2)}</span>
        </div>

        <div className="grid grid-cols-5 gap-1.5 p-2 bg-white/[0.02] border border-white/[0.06] rounded-xl mb-4">
          {words.map((w1, i) =>
            words.map((w2, j) => {
              const weight = getWeight(i, j);
              return (
                <div
                  key={`${i}-${j}`}
                  style={{
                    backgroundColor: `rgba(0, 56, 255, ${weight})`,
                  }}
                  title={`Attention(${w1}, ${w2}): ${weight.toFixed(2)}`}
                  className="h-7 rounded flex items-center justify-center text-[9px] font-mono-code text-white/90 cursor-help transition-all hover:scale-110"
                >
                  {weight.toFixed(1)}
                </div>
              );
            })
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono-code text-[11px] text-[#6B6A72]">Temp:</span>
          <input
            type="range"
            min="0.3"
            max="1.5"
            step="0.05"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            className="w-full accent-[#0038FF] cursor-pointer"
          />
        </div>
      </div>

      <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono-code text-[#6B6A72] flex justify-between mt-4">
        <span>HEAD: 08 / 16</span>
        <span>NORM: SCALE-INV</span>
      </div>
    </div>
  );
};

export const Playground: React.FC = () => {
  return (
    <section id="playground" className="relative py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="border-b border-white/[0.08] pb-8 mb-12">
        <div className="flex items-center gap-2 font-mono-code text-xs text-[#0038FF] font-semibold tracking-widest uppercase mb-2">
          <span>02</span>
          <span>//</span>
          <span>CREATIVE TECH & EXPERIMENTS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl text-[#F5F3EF] tracking-tight">
          Interactive Playground
        </h2>
        <p className="font-sans-clean text-sm sm:text-base text-[#6B6A72] mt-2 max-w-xl">
          Live generative code sandbox, real-time transformer math, and visual computing simulations running natively on your hardware.
        </p>
      </div>

      {/* Grid of Interactive Modules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TokenizerSandbox />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <NeuralFieldCanvas />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AttentionHeatmap />
        </motion.div>
      </div>

      {/* Micro ticker underneath */}
      <div className="mt-8 flex items-center justify-between font-mono-code text-xs text-[#6B6A72] border-t border-white/[0.06] pt-4">
        <span>ALL EXPERIMENTS RUN CLIENT-SIDE WITH ZERO LATENCY</span>
        <span className="hidden sm:inline-flex items-center gap-1 text-[#0038FF]">
          <Sparkles className="w-3.5 h-3.5" />
          WebGL & Canvas Accelerated
        </span>
      </div>
    </section>
  );
};
