

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onReserveClick: () => void;
  onMenuClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick, onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['about', 'menu', 'specials', 'gallery', 'contact'];
      let currentSection = '';

      sections.forEach((id) => {
        const element = document.getElementById(id);

        if (element && element.getBoundingClientRect().top <= 160) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#070707]/95 backdrop-blur-md border-b border-[#DFC283]/15 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#070707]/90 via-[#070707]/50 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">

        {/* Zone 1: Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3 shrink-0"
        >
          <div className="w-6 h-6 border border-[#DFC283]/40 rotate-45 flex items-center justify-center transition-transform duration-500 group-hover:rotate-90">
            <span className="-rotate-45 text-[9px] font-brand text-[#DFC283] font-semibold tracking-tighter">
              MN
            </span>
          </div>
          <span className="font-brand text-lg md:text-xl tracking-[0.3em] text-[#FAF6F0] group-hover:text-[#DFC283] transition-colors whitespace-nowrap">
            MAISON NOIR
          </span>
        </a>

        {/* Zone 2: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-9 text-[11px] uppercase tracking-[0.22em] font-medium text-[#C8C2B7]">

          <button
            onClick={() => scrollToSection('about')}
            className={`relative py-1 ${
              activeSection === 'about' ? 'text-[#F2D89B] after:w-full' : 'hover:text-[#DFC283] after:w-0'
            } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#F2D89B] after:transition-all after:duration-300`}
          >
            About
          </button>

          <button
            onClick={() => {
              scrollToSection('menu');
              onMenuClick();
            }}
            className={`relative py-1 ${
              activeSection === 'menu' ? 'text-[#F2D89B] after:w-full' : 'hover:text-[#DFC283] after:w-0'
            } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#F2D89B] after:transition-all after:duration-300`}
          >
            Menu
          </button>

          <button
            onClick={() => scrollToSection('specials')}
            className={`relative py-1 ${
              activeSection === 'specials' ? 'text-[#F2D89B] after:w-full' : 'hover:text-[#DFC283] after:w-0'
            } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#F2D89B] after:transition-all after:duration-300`}
          >
            Chef's Specials
          </button>

          <button
            onClick={() => scrollToSection('gallery')}
            className={`relative py-1 ${
              activeSection === 'gallery' ? 'text-[#F2D89B] after:w-full' : 'hover:text-[#DFC283] after:w-0'
            } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#F2D89B] after:transition-all after:duration-300`}
          >
            Gallery
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className={`relative py-1 ${
              activeSection === 'contact' ? 'text-[#F2D89B] after:w-full' : 'hover:text-[#DFC283] after:w-0'
            } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#F2D89B] after:transition-all after:duration-300`}
          >
            Hours & Contact
          </button>

        </nav>

        {/* Zone 3: Reserve Button */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onReserveClick}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] luxury-gold-btn rounded-sm whitespace-nowrap shrink-0 cursor-pointer active:scale-[0.98]"
          >
            Reserve a Table
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#FAF6F0] hover:text-[#DFC283] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A09]/98 border-b border-[#DFC283]/20 px-8 py-8 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-5 text-xs uppercase tracking-[0.22em] text-[#C8C2B7]">

            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 hover:text-[#DFC283] transition-colors border-b border-white/5"
            >
              About
            </button>

            <button
              onClick={() => {
                scrollToSection('menu');
                onMenuClick();
              }}
              className="text-left py-2 hover:text-[#DFC283] transition-colors border-b border-white/5"
            >
              Menu
            </button>

            <button
              onClick={() => scrollToSection('specials')}
              className="text-left py-2 hover:text-[#DFC283] transition-colors border-b border-white/5"
            >
              Chef's Specials
            </button>

            <button
              onClick={() => scrollToSection('gallery')}
              className="text-left py-2 hover:text-[#DFC283] transition-colors border-b border-white/5"
            >
              Gallery
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 hover:text-[#DFC283] transition-colors border-b border-white/5"
            >
              Hours & Contact
            </button>

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReserveClick();
                }}
                className="w-full py-3.5 text-xs font-semibold uppercase tracking-[0.24em] luxury-gold-btn text-center rounded-sm shadow-lg"
              >
                Reserve a Table
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
