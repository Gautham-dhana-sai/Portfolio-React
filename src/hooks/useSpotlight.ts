import React, { useRef } from 'react';

/**
 * Hook to provide real-time pointer coordinates relative to an element,
 * enabling dynamic spotlight and border-glow effects on dark surfaces.
 */
export const useSpotlight = <T extends HTMLElement = HTMLDivElement>() => {
  const elementRef = useRef<T>(null);

  const handleMouseMove = (e: React.MouseEvent<T>) => {
    if (!elementRef.current) return;
    const rect = elementRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    elementRef.current.style.setProperty('--mouse-x', `${x}px`);
    elementRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!elementRef.current) return;
    // Reset to center or keep last position with smooth fade
    elementRef.current.style.removeProperty('--mouse-x');
    elementRef.current.style.removeProperty('--mouse-y');
  };

  return { elementRef, handleMouseMove, handleMouseLeave };
};
