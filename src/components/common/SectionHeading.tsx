import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  highlightedWord,
  subtitle,
  align = 'left',
  theme = 'dark',
  className = ''
}) => {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'} ${className}`}>
      {label && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 ${
          isDark
            ? 'bg-[#171717] border border-[#303030] text-[#FF6B27]'
            : 'bg-[#F5F5F5] border border-[#E5E5E5] text-[#FF6B27]'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B27]" />
          {label}
        </div>
      )}

      <h2 className={`font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] ${
        isDark ? 'text-pureWhite' : 'text-[#0A0A0A]'
      }`}>
        {highlightedWord && title.includes(highlightedWord) ? (
          <>
            {title.split(highlightedWord)[0]}
            <span className="text-[#FF6B27]">{highlightedWord}</span>
            {title.split(highlightedWord)[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          isDark ? 'text-[#737373]' : 'text-[#737373]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
