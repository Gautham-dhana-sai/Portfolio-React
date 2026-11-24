import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, Check, Copy } from 'lucide-react';
import { socialLinks } from '../../data/socials';
import type { SocialLink } from '../../data/socials';
import { GithubIcon, LinkedinIcon } from './BrandSocialIcon';

interface SocialLinksProps {
  variant?: 'minimal' | 'expanded' | 'cards';
  filterCategory?: 'primary' | 'social' | 'contact';
  className?: string;
  theme?: 'dark' | 'light';
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = 'minimal',
  filterCategory,
  className = '',
  theme = 'dark'
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const displayedLinks = filterCategory
    ? socialLinks.filter(l => l.category === filterCategory)
    : socialLinks;

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getIcon = (iconName: string, className = "w-4 h-4") => {
    switch (iconName) {
      case 'github':
        return <GithubIcon className={className} />;
      case 'linkedin':
        return <LinkedinIcon className={className} />;
      case 'email':
        return <Mail className={className} />;
      case 'phone':
        return <Phone className={className} />;
      default:
        return <ExternalLink className={className} />;
    }
  };

  if (variant === 'cards') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
        {displayedLinks.map((link: SocialLink) => {
          const isEmailOrPhone = link.id === 'email' || link.id === 'phone';
          const cleanCopyValue = link.id === 'email' ? 'gautham523sai@gmail.com' : '9133683491';

          return (
            <div
              key={link.id}
              className={`p-5 rounded-xl border transition-all duration-200 group flex flex-col justify-between ${
                theme === 'dark'
                  ? 'bg-charcoal border-[#303030] hover:border-[#FF6B27]'
                  : 'bg-white border-[#E5E5E5] hover:border-[#FF6B27] shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    theme === 'dark'
                      ? 'bg-richBlack text-[#FF6B27] border border-[#303030]'
                      : 'bg-[#F5F5F5] text-[#FF6B27] border border-[#E5E5E5]'
                  }`}>
                    {getIcon(link.icon, "w-5 h-5")}
                  </div>
                  {isEmailOrPhone && (
                    <button
                      onClick={() => handleCopy(link.id, cleanCopyValue)}
                      title="Copy to clipboard"
                      className="p-1.5 rounded-md text-[#737373] hover:text-white hover:bg-richBlack transition-colors"
                    >
                      {copiedId === link.id ? (
                        <Check className="w-4 h-4 text-[#FF6B27]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
                <h4 className="font-heading font-semibold text-lg text-pureWhite group-hover:text-[#FF6B27] transition-colors">
                  {link.name}
                </h4>
                <p className="text-xs text-[#737373] mt-1 line-clamp-2">
                  {link.label}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#303030]/50 flex items-center justify-between">
                <span className="text-xs font-mono text-[#737373] truncate max-w-[180px]">
                  {link.displayValue}
                </span>
                <a
                  href={link.url}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="text-xs font-medium text-[#FF6B27] hover:underline flex items-center gap-1"
                >
                  Connect
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex items-center flex-wrap gap-3 ${className}`}>
      {displayedLinks.map((link: SocialLink) => (
        <a
          key={link.id}
          href={link.url}
          target={link.isExternal ? "_blank" : undefined}
          rel={link.isExternal ? "noopener noreferrer" : undefined}
          title={link.name}
          aria-label={link.name}
          className={`p-2.5 rounded-lg border transition-all duration-200 group flex items-center justify-center ${
            theme === 'dark'
              ? 'bg-charcoal border-[#303030] text-[#737373] hover:text-white hover:border-[#FF6B27] hover:bg-[#202020]'
              : 'bg-white border-[#E5E5E5] text-[#737373] hover:text-[#0A0A0A] hover:border-[#FF6B27]'
          }`}
        >
          {getIcon(link.icon, "w-4 h-4 group-hover:scale-110 transition-transform")}
        </a>
      ))}
    </div>
  );
};
