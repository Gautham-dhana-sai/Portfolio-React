import React from 'react';

interface BrandLogoProps {
  name: string;
  type?: 'company' | 'education';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  name,
  type = 'company',
  className = "",
  size = 'md'
}) => {
  const normalized = name.toLowerCase();

  const sizeClasses = {
    sm: "w-9 h-9 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-base"
  }[size];

  // Specific stylized authentic marks matching strict design system
  if (normalized.includes('akrivia')) {
    return (
      <div className={`relative flex items-center justify-center rounded-xl bg-charcoal border border-[#303030] group-hover:border-[#FF6B27] transition-colors shrink-0 ${sizeClasses} ${className}`}>
        <div className="font-heading font-black text-pureWhite tracking-tighter flex items-center">
          <span className="text-[#FF6B27]">A</span>
          <span className="text-white">K</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF6B27] ring-2 ring-richBlack" />
      </div>
    );
  }

  if (normalized.includes('inncircles')) {
    return (
      <div className={`relative flex items-center justify-center rounded-xl bg-charcoal border border-[#303030] group-hover:border-[#FF6B27] transition-colors shrink-0 ${sizeClasses} ${className}`}>
        <div className="relative flex items-center justify-center">
          <div className="w-5 h-5 rounded-full border-2 border-white/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B27] absolute" />
        </div>
      </div>
    );
  }

  if (normalized.includes('motivity')) {
    return (
      <div className={`relative flex items-center justify-center rounded-xl bg-charcoal border border-[#303030] group-hover:border-[#FF6B27] transition-colors shrink-0 ${sizeClasses} ${className}`}>
        <div className="font-heading font-black text-pureWhite tracking-tight flex items-center">
          <span>M</span>
          <span className="text-[#FF6B27] text-xs">●</span>
        </div>
      </div>
    );
  }

  if (normalized.includes('raghu')) {
    return (
      <div className={`relative flex items-center justify-center rounded-xl bg-charcoal border border-[#303030] group-hover:border-[#FF6B27] transition-colors shrink-0 ${sizeClasses} ${className}`}>
        <div className="font-heading font-bold text-pureWhite">
          <span>REC</span>
        </div>
        <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#FF6B27]" />
      </div>
    );
  }

  if (normalized.includes('polytechnic')) {
    return (
      <div className={`relative flex items-center justify-center rounded-xl bg-charcoal border border-[#303030] group-hover:border-[#FF6B27] transition-colors shrink-0 ${sizeClasses} ${className}`}>
        <div className="font-heading font-bold text-pureWhite text-center leading-none">
          <span className="text-[10px] block text-mediumGrey">GPT</span>
          <span className="text-[#FF6B27]">K</span>
        </div>
      </div>
    );
  }

  if (normalized.includes('priyanka')) {
    return (
      <div className={`relative flex items-center justify-center rounded-xl bg-charcoal border border-[#303030] group-hover:border-[#FF6B27] transition-colors shrink-0 ${sizeClasses} ${className}`}>
        <div className="font-heading font-bold text-pureWhite flex items-center gap-0.5">
          <span>PV</span>
          <span className="text-[#FF6B27] text-xs">★</span>
        </div>
      </div>
    );
  }

  // Fallback monogram
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');

  return (
    <div className={`flex items-center justify-center rounded-xl bg-charcoal border border-[#303030] group-hover:border-[#FF6B27] transition-colors shrink-0 font-heading font-bold text-pureWhite ${sizeClasses} ${className}`}>
      {initials || (type === 'education' ? 'ED' : 'CO')}
    </div>
  );
};
