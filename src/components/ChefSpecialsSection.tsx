import React from 'react';
import { Wine, MapPin, ArrowRight } from 'lucide-react';
import { CHEF_SPECIALS } from '../data/restaurantData';
import { ChefSpecial } from '../types/restaurant';

interface ChefSpecialsSectionProps {
  onReserveItem: (dish: ChefSpecial) => void;
  onViewImage: (image: string, title: string, description: string) => void;
}

export const ChefSpecialsSection: React.FC<ChefSpecialsSectionProps> = ({
  onReserveItem,
  onViewImage,
}) => {
  return (
    <section id="specials" className="py-28 md:py-36 bg-[#070707] relative overflow-hidden border-t border-[#DFC283]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#DFC283]/40" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#DFC283] font-medium">
              Chef de Cuisine Creations
            </span>
            <span className="w-6 h-[1px] bg-[#DFC283]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#FAF6F0] font-normal leading-[1.12]">
            Chef’s Special Masterpieces
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#DFC283] to-transparent mx-auto mt-6 mb-6" />
          <p className="text-[#C8C2B7] text-base md:text-lg font-light leading-relaxed">
            Signature culinary expressions conceived by Antoine Moreau. Limited daily allocations,
            prepared with rare single-origin harvests and table-side sommelier service.
          </p>
        </div>

        {/* 3-Card Showcase Grid with Consistent Image Aspect Ratios and Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {CHEF_SPECIALS.map((dish, index) => (
            <div
              key={dish.id}
              className="luxury-card flex flex-col justify-between group overflow-hidden shadow-2xl rounded-sm"
            >
              <div>
                {/* Consistent Image Container with Zoom & Elegant Price Tag */}
                <div
                  className="relative h-72 sm:h-80 w-full overflow-hidden cursor-pointer bg-[#0A0A09]"
                  onClick={() => onViewImage(dish.image, dish.title, dish.description)}
                >
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 filter brightness-95 contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0B] via-[#0E0D0B]/20 to-black/30" />

                  {/* Elegant Price Tag */}
                  <div className="absolute top-4 right-4 bg-[#070707]/90 border border-[#DFC283]/40 px-3.5 py-1 text-sm font-mono text-[#EAD7AC] tracking-widest backdrop-blur-md">
                    ${dish.price}
                  </div>

                  {/* French Subhead Overlay */}
                  <div className="absolute bottom-3 left-5 right-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#DFC283] font-serif italic truncate">
                      {dish.frenchTitle}
                    </p>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-7 flex flex-col gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-[#8F877C] font-mono block mb-1">
                      Sequence 0{index + 1}
                    </span>
                    <h3 className="text-2xl font-serif text-[#FAF6F0] group-hover:text-[#EAD7AC] transition-colors font-normal leading-snug">
                      {dish.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#C8C2B7] leading-relaxed font-light">
                    {dish.description}
                  </p>

                  {/* Origin */}
                  <div className="flex items-center gap-2 text-xs text-[#8F877C]">
                    <MapPin className="w-3.5 h-3.5 text-[#DFC283]" />
                    <span className="tracking-wide">Origin: {dish.origin}</span>
                  </div>

                  {/* Sommelier Wine Pairing Note with Gold Left Accent Border */}
                  <div className="bg-[#131210] border-l border-[#DFC283] p-3.5 text-xs text-[#C8C2B7]">
                    <div className="flex items-center gap-1.5 text-[#DFC283] font-medium uppercase tracking-[0.18em] mb-1">
                      <Wine className="w-3 h-3" />
                      <span>Sommelier Pairing</span>
                    </div>
                    <p className="font-serif italic text-xs text-[#FAF6F0]">{dish.winePairing}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-7 pt-0">
                <button
                  onClick={() => onReserveItem(dish)}
                  className="w-full py-3.5 bg-[#141311] hover:bg-[#DFC283] text-[#EAD7AC] hover:text-[#070707] border border-[#DFC283]/30 hover:border-transparent text-xs font-semibold uppercase tracking-[0.22em] rounded-sm transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer group/btn active:scale-[0.98]"
                >
                  <span>Request for Table</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
