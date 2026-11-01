import React, { useState } from 'react';
import { Award, ArrowUp, Send, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040404] text-[#C8C2B7] border-t border-[#DFC283]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-14">
        {/* Top Tier: Brand, Philosophy & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border border-[#DFC283]/40 rotate-45 flex items-center justify-center">
                <span className="-rotate-45 text-[9px] font-brand text-[#DFC283] font-semibold tracking-tighter">
                  MN
                </span>
              </div>
              <span className="font-brand text-2xl tracking-[0.3em] text-[#FAF6F0]">
                MAISON NOIR
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#DFC283]">
              Where Taste Meets Elegance
            </p>
            <p className="text-xs sm:text-sm text-[#8F877C] font-light leading-relaxed max-w-sm">
              An architectural and culinary sanctuary dedicated to nocturnal French haute cuisine,
              world-class viniculture, and intuitive hospitality.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#EAD7AC]">
              <Award className="w-4 h-4 text-[#DFC283]" />
              <span className="font-serif italic text-xs">Three Stars · Guide Michelin 2026</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.24em] text-[#FAF6F0] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.16em] text-[#A39C91]">
              <li>
                <a href="#about" className="hover:text-[#DFC283] transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#DFC283] transition-colors">
                  Signature Menu
                </a>
              </li>
              <li>
                <a href="#specials" className="hover:text-[#DFC283] transition-colors">
                  Chef's Specials
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#DFC283] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-[#DFC283] transition-colors">
                  Table Reservations
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#DFC283] transition-colors">
                  Hours & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Private Cellar Society */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.24em] text-[#FAF6F0] font-semibold">
              The Cellar Gazette
            </h4>
            <p className="text-xs text-[#8F877C] leading-relaxed font-light">
              Receive private invitations to seasonal menu debuts, Grand Cru allocations,
              and sommelier masterclasses.
            </p>

            {subscribed ? (
              <div className="p-3.5 bg-[#141310] border border-[#DFC283]/50 text-xs text-[#EAD7AC] flex items-center gap-2 rounded-sm">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>You have been added to our private mailing ledger.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 luxury-input text-xs text-[#FAF6F0] placeholder-[#666] rounded-sm"
                />
                <button
                  type="submit"
                  className="px-5 py-3 luxury-gold-btn text-xs font-semibold uppercase tracking-wider rounded-sm transition-all flex items-center gap-1.5 cursor-pointer shrink-0 active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Join</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Accreditations Strip with Champagne Gold Details */}
        <div className="py-8 border-b border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-[#8F877C] uppercase tracking-[0.18em]">
          <div className="flex flex-wrap items-center gap-6">
            <span>Guide Michelin 3-Star</span>
            <span className="text-[#DFC283]/40">·</span>
            <span>Relais & Châteaux</span>
            <span className="text-[#DFC283]/40">·</span>
            <span>Wine Spectator Grand Award</span>
            <span className="text-[#DFC283]/40">·</span>
            <span>Les Grandes Tables du Monde</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#DFC283] hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#736B60] gap-4">
          <p>
            © {new Date().getFullYear()} Maison Noir Fine Dining Group LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <span className="hover:text-[#A39C91] cursor-pointer">Privacy Charter</span>
            <span>·</span>
            <span className="hover:text-[#A39C91] cursor-pointer">Dress Policy</span>
            <span>·</span>
            <span className="hover:text-[#A39C91] cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
