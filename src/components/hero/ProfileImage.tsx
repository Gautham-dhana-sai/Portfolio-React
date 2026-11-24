import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';

interface ProfileImageProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  className = '',
  size = 'hero'
}) => {
  const [imageError, setImageError] = useState(false);
  const { profilePhoto } = portfolioData;

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-48 h-48',
    hero: 'w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96'
  }[size];

  return (
    <div className={`relative group ${className}`}>
      {/* Decorative technical corner frames matching design system */}
      <div className="absolute -inset-2 rounded-2xl border border-[#303030] group-hover:border-[#FF6B27]/50 transition-colors pointer-events-none -z-10" />
      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#FF6B27]" />
      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#FF6B27]" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#FF6B27]" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#FF6B27]" />

      <div className={`${sizeClasses} rounded-xl overflow-hidden bg-charcoal border border-[#303030] shadow-2xl relative flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.01]`}>
        {!imageError && profilePhoto.path ? (
          <img
            src={profilePhoto.path}
            alt={profilePhoto.alt}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 filter contrast-105"
            loading="eager"
          />
        ) : (
          /* Premium Monogram Placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-charcoal to-richBlack p-6 text-center select-none">
            <div className="w-20 h-20 rounded-full border-2 border-[#303030] group-hover:border-[#FF6B27] flex items-center justify-center mb-4 bg-richBlack transition-colors">
              <span className="font-heading font-black text-2xl text-pureWhite tracking-tighter">
                {profilePhoto.fallbackInitials}
              </span>
            </div>
            <span className="font-heading font-semibold text-sm text-pureWhite">
              {portfolioData.shortName}
            </span>
            <span className="font-mono text-xs text-[#FF6B27] mt-1">
              {portfolioData.designation}
            </span>
          </div>
        )}

        {/* Subtle bottom badge indicator */}
        <div className="absolute bottom-3 left-3 right-3 bg-[#0A0A0A]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#303030] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B27] animate-pulse" />
            <span className="font-mono text-[11px] text-white font-medium">Available</span>
          </div>
          <span className="font-mono text-[11px] text-[#737373]">Hyderabad, IN</span>
        </div>
      </div>
    </div>
  );
};
