import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Experience', to: '/experience/akrivia' },
    { label: 'Projects', to: '/projects/open-bot' },
    { label: 'Education', to: '/education' },
    { label: 'Resume', to: '/resume' },
  ];

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    if (to.startsWith('/experience')) return location.pathname.startsWith('/experience');
    if (to.startsWith('/projects')) return location.pathname.startsWith('/projects');
    return location.pathname === to;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#303030]/80 py-3.5 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B27] rounded-lg p-1"
            aria-label="Home"
          >
            <div className="w-9 h-9 rounded-lg bg-charcoal border border-[#303030] flex items-center justify-center font-heading font-black text-white group-hover:border-[#FF6B27] transition-colors relative">
              <span className="text-white">P</span>
              <span className="text-[#FF6B27]">G</span>
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#FF6B27]" />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-sm tracking-tight text-pureWhite group-hover:text-[#FF6B27] transition-colors block leading-tight">
                Goutham Reddy
              </span>
              <span className="font-mono text-[11px] text-[#737373] block leading-none mt-0.5">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-charcoal/80 border border-[#303030] rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-3.5 py-1.5 text-xs font-heading font-medium tracking-wide transition-colors rounded-full ${
                    active
                      ? 'text-white font-semibold'
                      : 'text-[#737373] hover:text-white'
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 bg-[#303030] rounded-full -z-10 border border-[#FF6B27]/40" />
                  )}
                  {link.label}
                  {active && (
                    <span className="w-1 h-1 rounded-full bg-[#FF6B27] inline-block ml-1.5 align-middle" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/resume"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#737373] hover:text-white px-3 py-1.5 rounded-lg border border-[#303030] hover:border-[#FF6B27] transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF6B27]" />
              <span>Resume</span>
            </Link>

            <a
              href="#contact"
              onClick={(e) => {
                if (location.pathname !== '/') {
                  return;
                }
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold bg-[#FF6B27] text-white hover:bg-[#E05514] px-4 py-2 rounded-lg transition-all active:scale-[0.98] shadow-[0_4px_14px_rgba(255,107,39,0.3)]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-charcoal border border-[#303030] text-[#737373] hover:text-white hover:border-[#FF6B27] focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-richBlack/95 border-b border-[#303030] backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-2">
          {navLinks.map((link) => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-heading font-medium transition-colors ${
                  active
                    ? 'bg-charcoal text-[#FF6B27] border border-[#FF6B27]/30'
                    : 'text-[#737373] hover:text-white hover:bg-charcoal'
                }`}
              >
                <span>{link.label}</span>
                {active && <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B27]" />}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-[#303030] flex flex-col gap-2">
            <Link
              to="/resume"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#303030] text-sm font-mono text-white hover:border-[#FF6B27]"
            >
              <FileText className="w-4 h-4 text-[#FF6B27]" />
              <span>View Resume</span>
            </Link>
            <a
              href="mailto:gautham523sai@gmail.com"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#FF6B27] text-white text-sm font-heading font-semibold hover:bg-[#E05514]"
            >
              <span>Contact Directly</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
