import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  theme?: 'dark' | 'light';
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className = '',
  theme = 'dark'
}) => {
  const isDark = theme === 'dark';

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-2 text-xs sm:text-sm font-mono py-2 ${className}`}
    >
      <Link
        to="/"
        className={`inline-flex items-center gap-1 transition-colors ${
          isDark
            ? 'text-[#737373] hover:text-[#FF6B27]'
            : 'text-[#737373] hover:text-[#FF6B27]'
        }`}
      >
        <Home className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-[#737373] shrink-0" />
            {isLast || !item.to ? (
              <span
                className={`truncate font-medium ${
                  isDark ? 'text-pureWhite' : 'text-[#0A0A0A]'
                }`}
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to}
                className={`truncate transition-colors ${
                  isDark
                    ? 'text-[#737373] hover:text-[#FF6B27]'
                    : 'text-[#737373] hover:text-[#FF6B27]'
                }`}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
