import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types/restaurant';

interface GallerySectionProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectImage }) => {
  const [filter, setFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Spaces & Art' },
    { id: 'interior', label: 'The Dining Room & Bar' },
    { id: 'cellar', label: 'Wine Cellar' },
    { id: 'private', label: 'Private Salon' },
    { id: 'culinary', label: 'Culinary Art' },
  ];

  const filteredGallery = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-28 md:py-36 bg-[#070707] relative overflow-hidden border-t border-[#DFC283]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#DFC283]/40" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#DFC283] font-medium">
              Visual Ambiance
            </span>
            <span className="w-6 h-[1px] bg-[#DFC283]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#FAF6F0] font-normal leading-[1.12]">
            The Gallery of Maison Noir
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#DFC283] to-transparent mx-auto mt-6 mb-6" />
          <p className="text-[#C8C2B7] text-base md:text-lg font-light leading-relaxed">
            Step inside our architectural sanctuary where warm candlelight, antique brass, and
            culinary sculpture shape every moment. Click any photograph to expand.
          </p>

          {/* Segmented Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] rounded-sm transition-all duration-300 cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#DFC283] text-[#070707] font-semibold shadow-[0_2px_15px_rgba(223,194,131,0.25)]'
                    : 'text-[#C8C2B7] hover:text-[#FAF6F0] bg-[#100F0D] border border-white/5 hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Premium Photography Grid with Different Image Proportions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-[280px]">
          {filteredGallery.map((item, index) => {
            // Apply varied editorial proportions for visual luxury cadence:
            // Item 0: Hero wide card (lg:col-span-8 lg:row-span-2)
            // Item 1: Vertical or square card (lg:col-span-4 lg:row-span-2)
            // Item 2: Wide card (lg:col-span-7)
            // Item 3: Complementary card (lg:col-span-5)
            // Item 4 & 5: Half-half split (lg:col-span-6)
            let colSpan = 'lg:col-span-6';
            let rowSpan = 'lg:row-span-1';

            if (filter === 'all') {
              if (index === 0) {
                colSpan = 'lg:col-span-7';
                rowSpan = 'lg:row-span-2';
              } else if (index === 1) {
                colSpan = 'lg:col-span-5';
                rowSpan = 'lg:row-span-2';
              } else if (index === 2) {
                colSpan = 'lg:col-span-5';
                rowSpan = 'lg:row-span-1';
              } else if (index === 3) {
                colSpan = 'lg:col-span-7';
                rowSpan = 'lg:row-span-1';
              } else {
                colSpan = 'lg:col-span-6';
                rowSpan = 'lg:row-span-1';
              }
            }

            return (
              <div
                key={item.id}
                onClick={() => onSelectImage(item)}
                className={`group relative overflow-hidden bg-[#0A0A09] border border-white/10 hover:border-[#DFC283]/60 transition-all duration-500 cursor-pointer rounded-sm shadow-2xl ${colSpan} ${rowSpan}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 filter brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark gradient overlay with warm gold reveal */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/90 via-[#070707]/30 to-black/20 group-hover:via-[#070707]/20 transition-all duration-500" />

                {/* Category label */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[9px] uppercase tracking-[0.25em] font-medium text-[#DFC283] bg-[#070707]/90 px-3 py-1 border border-[#DFC283]/30 backdrop-blur-md">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Maximize Icon */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#070707]/80 border border-[#DFC283]/40 flex items-center justify-center text-[#DFC283] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption and Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif text-[#FAF6F0] group-hover:text-[#EAD7AC] transition-colors font-normal leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#C8C2B7] mt-1.5 font-light line-clamp-2 leading-relaxed opacity-90">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-[#DFC283] font-medium">
                    <span>Enlarge photograph</span>
                    <span aria-hidden="true">&rarr;</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
