import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'project' | 'text'>('default');
  const [cursorText, setCursorText] = useState('');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for outer trailing ring
  const springX = useSpring(mouseX, { damping: 28, stiffness: 220 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 220 });

  useEffect(() => {
    // Disable custom cursor on touch/coarse pointers
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      const actionEl = target.closest('button, a, [role="button"], input, textarea, select');
      const dragEl = target.closest('[data-cursor="drag"]');

      if (projectEl) {
        setCursorType('project');
        setCursorText('INSPECT');
      } else if (dragEl) {
        setCursorType('project');
        setCursorText('SLIDE');
      } else if (actionEl) {
        setCursorType('pointer');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#0038FF]/60 flex items-center justify-center pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorType === 'project' ? 84 : cursorType === 'pointer' ? 44 : 32,
          height: cursorType === 'project' ? 84 : cursorType === 'pointer' ? 44 : 32,
          borderColor: cursorType === 'project' ? 'rgba(0, 56, 255, 0.9)' : 'rgba(245, 243, 239, 0.35)',
          backgroundColor: cursorType === 'project' ? 'rgba(0, 56, 255, 0.15)' : 'rgba(0,0,0,0)',
          backdropFilter: cursorType === 'project' ? 'blur(4px)' : 'none',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 280 }}
      >
        {cursorType === 'project' && (
          <span className="font-mono-code text-[10px] tracking-widest text-[#F5F3EF] font-bold select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-[#0038FF] pointer-events-none shadow-[0_0_12px_#0038FF]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorType === 'project' ? 0 : cursorType === 'pointer' ? 6 : 4,
          height: cursorType === 'project' ? 0 : cursorType === 'pointer' ? 6 : 4,
          opacity: cursorType === 'project' ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};
