import React, { useState } from 'react';
import { Sun, Moon, FileText, Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  onOpenResume,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors ${
        isDark
          ? 'bg-neutral-950/85 border-neutral-800 text-neutral-100'
          : 'bg-white/85 border-neutral-200 text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16 sm:h-20">
          {/* Brand Name (Increased font size) */}
          <a
            href="#home"
            className="text-base sm:text-lg font-bold tracking-tight font-sans hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>{PORTFOLIO_DATA.personal.fullName}</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors whitespace-nowrap hover:text-emerald-400 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-emerald-400 font-semibold'
                    : isDark ? 'text-neutral-400' : 'text-neutral-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Cluster (Theme Switcher & Resume Button) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? 'border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300'
                  : 'border-neutral-200 bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
              aria-label="Toggle light or dark theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
            </button>

            {/* Resume Button */}
            <button
              type="button"
              onClick={onOpenResume}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg md:hidden border transition-colors ${
                isDark
                  ? 'border-neutral-800 bg-neutral-900 text-neutral-300'
                  : 'border-neutral-200 bg-neutral-100 text-neutral-700'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-4 pt-3 pb-5 border-t space-y-2 ${
            isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.href.replace('#', '')
                  ? 'bg-emerald-500/10 text-emerald-400 font-semibold'
                  : isDark ? 'text-neutral-300 hover:bg-neutral-900' : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
