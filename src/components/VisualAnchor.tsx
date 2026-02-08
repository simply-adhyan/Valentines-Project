"use client";

interface VisualAnchorProps {
  type?: 'glow' | 'pulse' | 'sway' | 'shimmer' | 'ripple' | 'none';
  gradient: string;
}

export default function VisualAnchor({ type = 'none', gradient }: VisualAnchorProps) {
  if (!type || type === 'none') return null;

  const getVisualStyles = () => {
    const baseClasses = "absolute pointer-events-none opacity-20";
    
    switch (type) {
      case 'glow':
        return {
          className: `${baseClasses} top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl bg-gradient-to-r ${gradient} animate-pulse`,
        };
      
      case 'pulse':
        return {
          className: `${baseClasses} top-1/3 right-10 w-48 h-48 rounded-full blur-2xl bg-gradient-to-br ${gradient}`,
          style: {
            animation: 'pulse 3s ease-in-out infinite',
          },
        };
      
      case 'sway':
        return {
          className: `${baseClasses} bottom-1/4 left-10 w-56 h-56 rounded-full blur-3xl bg-gradient-to-tl ${gradient}`,
          style: {
            animation: 'sway 4s ease-in-out infinite',
          },
        };
      
      case 'shimmer':
        return {
          className: `${baseClasses} top-1/2 left-1/4 w-72 h-72 rounded-full blur-3xl bg-gradient-to-r ${gradient}`,
          style: {
            animation: 'shimmer 5s ease-in-out infinite',
          },
        };
      
      case 'ripple':
        return {
          className: `${baseClasses} bottom-1/3 right-1/4 w-60 h-60 rounded-full blur-2xl bg-gradient-to-br ${gradient}`,
          style: {
            animation: 'ripple 4s ease-in-out infinite',
          },
        };
      
      default:
        return { className: '' };
    }
  };

  const visual = getVisualStyles();

  return <div className={visual.className} style={visual.style} />;
}
