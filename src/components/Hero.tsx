import React from 'react';
import heroImage from '../assets/images/hero_dining_room_1793523870201.jpg';
import { Calendar, UtensilsCrossed, ChevronDown } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onReserveTable }) => {
  return (
    <section className="relative min-h-[96vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#070707]">
      {/* Visually Stunning Full-Width Restaurant Photography Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Maison Noir Luxury Dining Room"
          className="w-full h-full object-cover object-center scale-100 filter brightness-[0.58] contrast-[1.12] transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Multi-layered subtle dark overlay with warm vignette & depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/65 to-[#070707]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#070707]/40 to-[#070707]/90" />
        {/* Soft golden ambiance glow in center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#DFC283]/8 blur-[120px] pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Editorial Subtitle / Heritage Kicker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 md:w-12 h-[1px] bg-[#DFC283]/60" />
          <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.35em] text-[#DFC283]">
            Fine Dining & Wine Cellar
          </span>
          <span className="w-8 md:w-12 h-[1px] bg-[#DFC283]/60" />
        </div>

        {/* Main Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-serif text-[#FAF6F0] tracking-[-0.01em] font-normal max-w-4xl leading-[1.08] mb-6 drop-shadow-2xl">
          An Extraordinary <br />
          <span className="italic font-light text-[#EAD7AC] font-serif">Dining Experience</span>
        </h1>

        {/* Brand Tagline in Warm Ivory & Gold */}
        <p className="text-xs sm:text-sm md:text-base font-medium tracking-[0.3em] uppercase text-[#DFC283]/90 mb-5">
          Where Taste Meets Elegance
        </p>

        {/* Atmosphere Prose with Editorial Breathing Room */}
        <p className="text-sm sm:text-base md:text-lg text-[#C8C2B7] max-w-2xl font-light leading-relaxed mb-12 drop-shadow">
          A nocturnal sanctuary where French culinary heritage meets the avant-garde.
          Intimate candlelit dining, rare vintage pairings, and an obsessive dedication to craft.
        </p>

        {/* Primary Luxury Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          {/* Luxurious Reservation Button */}
          <button
            onClick={onReserveTable}
            className="w-full sm:w-auto px-10 py-4 text-xs font-semibold uppercase tracking-[0.24em] luxury-gold-btn rounded-sm shadow-[0_6px_30px_rgba(223,194,131,0.28)] flex items-center justify-center gap-3 cursor-pointer group active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4 text-[#0A0A0A] transition-transform duration-300 group-hover:scale-110" />
            <span>Reserve a Table</span>
          </button>

          {/* Explore Menu Button */}
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-9 py-4 bg-[#0A0A09]/70 hover:bg-[#141310] text-[#FAF6F0] border border-[#DFC283]/40 hover:border-[#DFC283] text-xs font-semibold uppercase tracking-[0.24em] rounded-sm transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-3 cursor-pointer group"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#DFC283] transition-transform duration-300 group-hover:rotate-12" />
            <span>Explore Menu</span>
          </button>
        </div>

        {/* Refined Accolades Strip with Hairline Dividers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 pt-16 mt-12 border-t border-white/10 w-full max-w-4xl text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-serif text-[#FAF6F0] font-normal tracking-tight">
              3 Stars
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#8F877C] mt-1.5 font-medium">
              Guide Michelin
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-serif text-[#FAF6F0] font-normal tracking-tight">
              4,500+
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#8F877C] mt-1.5 font-medium">
              Cellar Vintages
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-serif text-[#FAF6F0] font-normal tracking-tight">
              7 Sequences
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#8F877C] mt-1.5 font-medium">
              Degustation
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-serif text-[#FAF6F0] font-normal tracking-tight">
              Grand Award
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#8F877C] mt-1.5 font-medium">
              Wine Spectator
            </span>
          </div>
        </div>

        {/* Subtle scroll down indicator */}
        <button
          onClick={onExploreMenu}
          className="mt-12 text-[#8F877C] hover:text-[#DFC283] transition-colors p-2 flex flex-col items-center gap-1 cursor-pointer"
          aria-label="Scroll down to menu"
        >
          <span className="text-[9px] uppercase tracking-[0.28em] font-medium">Discover</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
