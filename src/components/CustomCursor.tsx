import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'project'>('default');
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if touch device / mobile screen
    const checkMobile = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobile(hasTouch || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="project"]');
      const interactiveEl = target.closest('a, button, input, textarea, [data-cursor="hover"]');

      if (projectCard) {
        setCursorState('project');
      } else if (interactiveEl) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Primary Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#F2F0EA] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: cursorState === 'project' ? 0 : cursorState === 'hover' ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Outer Ring / View Label */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center text-[10px] font-medium tracking-wider ${
          cursorState === 'project'
            ? 'w-16 h-16 bg-[#B79CFF] text-[#090909] font-bold shadow-lg shadow-[#B79CFF]/20'
            : cursorState === 'hover'
            ? 'w-10 h-10 border border-[#B79CFF]/60 bg-[#B79CFF]/10'
            : 'w-8 h-8 border border-[#F2F0EA]/20'
        }`}
        animate={{
          x: mousePosition.x - (cursorState === 'project' ? 32 : cursorState === 'hover' ? 20 : 16),
          y: mousePosition.y - (cursorState === 'project' ? 32 : cursorState === 'hover' ? 20 : 16),
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.2 }}
      >
        {cursorState === 'project' && <span>VIEW ↗</span>}
      </motion.div>
    </>
  );
};
