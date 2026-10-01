import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { AmbientCanvas } from './components/AmbientCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheVault } from './components/TheVault';
import { Playground } from './components/Playground';
import { Ethos } from './components/Ethos';
import { Arsenal } from './components/Arsenal';
import { ExperienceEducation } from './components/ExperienceEducation';
import { TerminalContact } from './components/TerminalContact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0A0A0C] text-[#F5F3EF] selection:bg-[#0038FF] selection:text-white overflow-x-hidden">
      {/* 1. Subtle Procedural Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-30 opacity-[0.035] bg-noise" />

      {/* 2. Interactive Ambient Cursor-Tracking Canvas */}
      <AmbientCanvas />

      {/* 3. Custom Dual-Ring Spring Cursor */}
      <CustomCursor />

      {/* 4. Luxury Floating Header */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* 5. Main Content Architecture */}
      <main className="relative z-10">
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <TheVault />
        <Playground />
        <Ethos />
        <Arsenal />
        <ExperienceEducation />
        <TerminalContact
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </main>

      {/* 6. Footer & Colophon */}
      <Footer />
    </div>
  );
};

export default App;
