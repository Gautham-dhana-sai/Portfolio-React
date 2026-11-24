import React from 'react';

interface TechnologyIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechnologyIcon: React.FC<TechnologyIconProps> = ({
  name,
  className = "w-6 h-6",
  size = 24
}) => {
  const normalized = name.toLowerCase().replace(/[\s.\-_]/g, '');

  // Render authentic vector paths matching strict black/white/orange system
  switch (normalized) {
    case 'typescript':
    case 'ts':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="4" strokeWidth="1.8" />
          <path d="M7 8h6M10 8v8" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14 15.5c.8.5 1.7.6 2.3.2.7-.4.6-1.4-.4-1.8l-1-.4c-1-.4-1.3-1.4-.8-2.2.5-.9 1.7-1 2.7-.5" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="4" strokeWidth="1.8" />
          <path d="M8 12v3.5c0 .8-.5 1.5-1.5 1.5M14 15.5c.8.5 1.7.6 2.3.2.7-.4.6-1.4-.4-1.8l-1-.4c-1-.4-1.3-1.4-.8-2.2.5-.9 1.7-1 2.7-.5" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <path d="M12 2C8 2 8 3.5 8 5v2h4v1H6C3.5 8 2 9.5 2 13s1.5 5 4 5h1v-2.5C7 13 9 13 9 13h4c2 0 3-1 3-3V5c0-1.5 0-3-4-3zm-1.5 2a.75.75 0 110 1.5.75.75 0 010-1.5z" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M12 22c4 0 4-1.5 4-3v-2h-4v-1h6c2.5 0 4-1.5 4-5s-1.5-5-4-5h-1v2.5c0 2.5-2 2.5-2 2.5h-4c-2 0-3 1-3 3v5c0 1.5 0 3 4 3zm1.5-2a.75.75 0 110-1.5.75.75 0 010 1.5z" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );

    case 'react':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1.6" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1.6" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1.6" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );

    case 'angular':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <path d="M12 2L3 5l1.5 12L12 22l7.5-5L21 5 12 2z" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M12 6L8 16h2.2l.8-2h4l.8 2H16L12 6zm-1 6.5l1-2.5 1 2.5h-2z" fill="currentColor" strokeWidth="0.5" />
        </svg>
      );

    case 'nodejs':
    case 'node':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M12 7v10M8 9.5l4 2.5 4-2.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'nestjs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <path d="M12 2L3 6.5v11L12 22l9-4.5v-11L12 2z" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M8 8l4 8 4-8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="8" r="1.5" fill="currentColor" />
        </svg>
      );

    case 'express':
    case 'expressjs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="1.6" />
          <path d="M8 8h8M8 12h6M8 16h8" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'graphql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <polygon points="12,2 21,7.5 21,16.5 12,22 3,16.5 3,7.5" strokeWidth="1.6" />
          <line x1="12" y1="2" x2="12" y2="22" strokeWidth="1.2" />
          <line x1="3" y1="7.5" x2="21" y2="16.5" strokeWidth="1.2" />
          <line x1="3" y1="16.5" x2="21" y2="7.5" strokeWidth="1.2" />
          <circle cx="12" cy="2" r="1.5" fill="currentColor" />
          <circle cx="21" cy="7.5" r="1.5" fill="currentColor" />
          <circle cx="21" cy="16.5" r="1.5" fill="currentColor" />
          <circle cx="12" cy="22" r="1.5" fill="currentColor" />
          <circle cx="3" cy="16.5" r="1.5" fill="currentColor" />
          <circle cx="3" cy="7.5" r="1.5" fill="currentColor" />
        </svg>
      );

    case 'postgresql':
    case 'postgres':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <path d="M12 3c-4.5 0-7 2.5-7 6.5 0 3.5 1.8 6 4.5 7.2V21h5v-4.3c2.7-1.2 4.5-3.7 4.5-7.2 0-4-2.5-6.5-7-6.5z" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M9 10a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm4 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" fill="currentColor" />
        </svg>
      );

    case 'mongodb':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <path d="M12 2C10.5 5 6 9 6 14.5c0 4 2.5 7.5 6 7.5s6-3.5 6-7.5C18 9 13.5 5 12 2z" strokeWidth="1.6" strokeLinejoin="round" />
          <line x1="12" y1="2" x2="12" y2="22" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'sql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <ellipse cx="12" cy="6" rx="9" ry="3" strokeWidth="1.6" />
          <path d="M3 6v6c0 1.66 4 3 9 3s9-1.34 9-3V6" strokeWidth="1.6" />
          <path d="M3 12v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" strokeWidth="1.6" />
        </svg>
      );

    case 'redis':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <path d="M12 3L3 7.5 12 12l9-4.5L12 3z" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M3 12l9 4.5 9-4.5" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M3 16.5l9 4.5 9-4.5" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );

    case 'kafka':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <circle cx="12" cy="12" r="3" strokeWidth="1.8" />
          <circle cx="5" cy="7" r="2.5" strokeWidth="1.6" />
          <circle cx="19" cy="7" r="2.5" strokeWidth="1.6" />
          <circle cx="5" cy="17" r="2.5" strokeWidth="1.6" />
          <circle cx="19" cy="17" r="2.5" strokeWidth="1.6" />
          <line x1="7.2" y1="8.2" x2="9.8" y2="10.5" strokeWidth="1.4" />
          <line x1="16.8" y1="8.2" x2="14.2" y2="10.5" strokeWidth="1.4" />
          <line x1="7.2" y1="15.8" x2="9.8" y2="13.5" strokeWidth="1.4" />
          <line x1="16.8" y1="15.8" x2="14.2" y2="13.5" strokeWidth="1.4" />
        </svg>
      );

    case 'docker':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <path d="M4 14h16c.5 0 2-.3 2-2 0-3-3-4-5-4-1 0-2 .5-2 1h-2V7h-3v2H8V7H5v2H3c-1 0-2 .8-2 2 0 1.7 1.5 3 3 3z" strokeWidth="1.6" />
          <path d="M2 14c1 4 5 7 10 7s9-3 10-7" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="7" y="10" width="2" height="2" fill="currentColor" />
          <rect x="10" y="10" width="2" height="2" fill="currentColor" />
          <rect x="13" y="10" width="2" height="2" fill="currentColor" />
        </svg>
      );

    case 'git':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <circle cx="6" cy="6" r="3" strokeWidth="1.6" />
          <circle cx="6" cy="18" r="3" strokeWidth="1.6" />
          <circle cx="18" cy="10" r="3" strokeWidth="1.6" />
          <line x1="6" y1="9" x2="6" y2="15" strokeWidth="1.6" />
          <path d="M6 15c0-4 12-2 12-5" strokeWidth="1.6" fill="none" />
        </svg>
      );

    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'aws':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <path d="M4 14c4 3 12 3 16 0" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18 13l2.5 1.5L18 16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 7l3 5-3 1M11 7v6M15 7l-2 6 4-2" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case 'lambda':
    case 'awslambda':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <path d="M6 19l4-14h4l4 14M8 15h8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 's3':
    case 'amazons3':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <path d="M4 6l8-3 8 3v12l-8 3-8-3V6z" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M4 6l8 3 8-3M12 9v12" strokeWidth="1.6" />
        </svg>
      );

    case 'eventbridge':
    case 'awseventbridge':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <circle cx="6" cy="12" r="3" strokeWidth="1.6" />
          <circle cx="18" cy="6" r="3" strokeWidth="1.6" />
          <circle cx="18" cy="18" r="3" strokeWidth="1.6" />
          <path d="M9 12h3m0 0l3-6m-3 6l3 6" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case 'rag':
    case 'antigravity':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <circle cx="12" cy="12" r="9" strokeWidth="1.6" strokeDasharray="3 3" />
          <path d="M12 7v5l3 3" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2" fill="#FF6B27" />
        </svg>
      );

    default:
      // Clean fallback vector icon
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="4" strokeWidth="1.6" />
          <path d="M9 10l3 3-3 3M13 16h3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};
