import React from 'react';
import wineCellarImage from '../assets/images/gallery_wine_cellar_1793523873162.jpg';
import { Wine, BookOpen, Flame, Compass } from 'lucide-react';

interface AboutSectionProps {
  onOpenDegustationModal: () => void;
  onReserveTable: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenDegustationModal,
  onReserveTable,
}) => {
  return (
    <section id="about" className="py-28 md:py-36 bg-[#070707] relative overflow-hidden border-t border-[#DFC283]/15">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#DFC283]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#DFC283]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Section Kicker */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#DFC283]/40" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#DFC283] font-medium">
              The Maison Noir Philosophy
            </span>
            <span className="w-6 h-[1px] bg-[#DFC283]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#FAF6F0] font-normal leading-[1.12]">
            Where Craft Meets <br />
            <span className="italic text-[#EAD7AC]">Sensual Restraint</span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#DFC283] to-transparent mx-auto mt-6 mb-6" />
          <p className="text-[#C8C2B7] text-base md:text-lg font-light leading-relaxed">
            Founded with an uncompromising devotion to classical French technique and contemporary
            audacity, Maison Noir is an ode to twilight dining. We curate moments where gastronomy,
            vintage viniculture, and atmospheric intimacy converge.
          </p>
        </div>

        {/* Attractive Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Photography with Asymmetric Gold Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 p-2.5 bg-[#0D0D0B] border border-[#DFC283]/25 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
              <div className="relative overflow-hidden h-[460px] md:h-[540px]">
                <img
                  src={wineCellarImage}
                  alt="Maison Noir Sommelier Cellar & Private Tasting Room"
                  className="w-full h-full object-cover filter contrast-[1.06] brightness-95 transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/90 via-transparent to-transparent" />

                {/* Floating Editorial Quote Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0A0A09]/92 backdrop-blur-md border border-[#DFC283]/20">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFC283] block mb-1">
                    Cellar Sanctuary
                  </span>
                  <p className="font-serif italic text-sm text-[#FAF6F0] leading-snug">
                    "A dining room is not merely a venue for dinner; it is a nocturnal theater for memories."
                  </p>
                  <p className="text-[11px] text-[#8F877C] mt-2 font-mono">
                    — Chef de Cuisine Antoine Moreau
                  </p>
                </div>
              </div>
            </div>

            {/* Asymmetric Offset Luxury Border */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full border border-[#DFC283]/15 pointer-events-none -z-0" />
          </div>

          {/* Right Column: Three Curated Pillars & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Pillar 1 */}
              <div className="p-7 luxury-card rounded-sm group">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-[#171512] border border-[#DFC283]/25 text-[#DFC283] shrink-0 group-hover:scale-105 transition-transform">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-[#FAF6F0] group-hover:text-[#EAD7AC] transition-colors font-normal">
                      Artisanal Provenance & Terroir
                    </h3>
                    <p className="text-sm text-[#C8C2B7] mt-2 leading-relaxed font-light">
                      Every ingredient is harvested with purpose. From winter truffles unearthed in
                      Périgord to hand-selected Miyazaki A5 wagyu and line-caught Breton seafood, our
                      kitchen honors the micro-seasons of earth and ocean.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-7 luxury-card rounded-sm group">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-[#171512] border border-[#DFC283]/25 text-[#DFC283] shrink-0 group-hover:scale-105 transition-transform">
                    <Wine className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-[#FAF6F0] group-hover:text-[#EAD7AC] transition-colors font-normal">
                      The Cellar of Rare Vintages
                    </h3>
                    <p className="text-sm text-[#C8C2B7] mt-2 leading-relaxed font-light">
                      Guarded beneath Madison Avenue lies our temperature-controlled vault containing
                      over 4,500 bottles. Led by our Master Sommelier, we offer rare Grand Cru verticals
                      and bespoke pairings tailored to each palate.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-7 luxury-card rounded-sm group">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-[#171512] border border-[#DFC283]/25 text-[#DFC283] shrink-0 group-hover:scale-105 transition-transform">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-[#FAF6F0] group-hover:text-[#EAD7AC] transition-colors font-normal">
                      Nocturnal Intimacy & Spatial Discretion
                    </h3>
                    <p className="text-sm text-[#C8C2B7] mt-2 leading-relaxed font-light">
                      With only 14 hand-dressed tables and two private salons, Maison Noir maintains
                      an unhurried, acoustic harmony. Soft candlelight, bespoke velvet banquettes,
                      and seamless service anticipate your every desire.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDegustationModal}
                className="px-7 py-3.5 bg-[#12110F] hover:bg-[#1A1814] text-[#EAD7AC] border border-[#DFC283]/40 text-xs font-semibold uppercase tracking-[0.22em] rounded-sm transition-all flex items-center gap-2.5 cursor-pointer shadow-sm hover:border-[#DFC283]"
              >
                <BookOpen className="w-4 h-4 text-[#DFC283]" />
                <span>View 7-Course Degustation Menu</span>
              </button>

              <button
                onClick={onReserveTable}
                className="px-7 py-3.5 luxury-gold-btn text-xs font-semibold uppercase tracking-[0.22em] rounded-sm shadow-md cursor-pointer active:scale-[0.98]"
              >
                Experience Maison Noir
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
