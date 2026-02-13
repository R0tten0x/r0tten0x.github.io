import React from 'react';

interface GlitchTextProps {
  as?: keyof React.JSX.IntrinsicElements; // e.g., 'h1', 'h2', 'p'
  className?: string;
  children: React.ReactNode;
}

const GlitchText: React.FC<GlitchTextProps> = ({ as: Component = 'span', className, children }) => {
  // Placeholder for a CSS-based glitch effect.
  // Actual glitch effect would require specific CSS (e.g., keyframes, ::before/::after)
  // and potentially JS for dynamic text manipulation.
  return (
    <Component className={`glitch-text ${className || ''}`} data-text={children}>
      {children}
    </Component>
  );
};

export default GlitchText;
