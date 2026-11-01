import React, { useState, useMemo } from 'react';
import { Wine, Search, BookOpen, ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuCategory, MenuItem } from '../types/restaurant';

interface MenuSectionProps {
  onReserveItem: (item: MenuItem) => void;
  onOpenDegustationModal: () => void;
  onViewImage: (image: string, title: string, description: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onReserveItem,
  onOpenDegustationModal,
  onViewImage,
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Creations', french: 'Tous les Plats' },
    { id: 'entrees', label: 'Starters', french: 'Les Entrées' },
    { id: 'mains', label: 'Main Courses', french: 'Plats Principaux' },
    { id: 'desserts', label: 'Desserts', french: 'Les Desserts' },
    { id: 'drinks', label: 'Cellar & Bar', french: 'Vins & Cocktails' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.frenchName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDietary =
        selectedDietary === 'all' ||
        (item.dietary && item.dietary.includes(selectedDietary));

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [activeCategory, searchQuery, selectedDietary]);

  return (
    <section id="menu" className="py-28 md:py-36 bg-[#070707] relative overflow-hidden border-t border-[#DFC283]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#DFC283]/40" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#DFC283] font-medium">
              Haute Gastronomie
            </span>
            <span className="w-6 h-[1px] bg-[#DFC283]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#FAF6F0] font-normal leading-[1.12]">
            The Signature Menu
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#DFC283] to-transparent mx-auto mt-6 mb-6" />
          <p className="text-[#C8C2B7] text-base md:text-lg font-light leading-relaxed">
            Harmonious compositions created daily from prime botanical harvests, line-caught fisheries,
            and rare heritage breeds.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onOpenDegustationModal}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#11100E] border border-[#DFC283]/40 text-[#EAD7AC] hover:text-white hover:border-[#DFC283] text-xs uppercase tracking-[0.22em] font-medium rounded-sm transition-all shadow-md cursor-pointer group"
            >
              <BookOpen className="w-4 h-4 text-[#DFC283] group-hover:scale-105 transition-transform" />
              <span>Explore 7-Course Degustation Tasting Menu ($295)</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14 pb-8 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as MenuCategory)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] rounded-sm transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#DFC283] text-[#070707] font-semibold shadow-[0_2px_15px_rgba(223,194,131,0.25)]'
                    : 'text-[#C8C2B7] hover:text-[#FAF6F0] bg-[#100F0D] border border-white/5 hover:border-white/20'
                }`}
              >
                <span>{cat.label}</span>
                <span className="hidden sm:inline text-[10px] opacity-70 ml-1.5 font-serif italic">
                  ({cat.french})
                </span>
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8F877C]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, ingredients, wines..."
              className="w-full pl-10 pr-4 py-2.5 luxury-input text-xs text-[#FAF6F0] placeholder-[#736B5F] rounded-sm"
            />
          </div>
        </div>

        {/* Menu Grid: Consistent Food Cards with Uniform Image Sizes and Subtle Hover Animations */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-24 border border-white/5 bg-[#0D0D0B] rounded-sm">
            <p className="text-lg font-serif text-[#C8C2B7]">No culinary creations found matching your filter.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setSelectedDietary('all');
              }}
              className="mt-5 px-6 py-2.5 text-xs text-[#DFC283] border border-[#DFC283]/40 hover:bg-[#DFC283]/10 uppercase tracking-[0.2em]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="luxury-card p-6 sm:p-7 flex flex-col sm:flex-row gap-6 group rounded-sm shadow-xl"
              >
                {/* Food Image: Uniform 40x40 (160px) desktop container with consistent aspect ratio */}
                <div
                  className="w-full sm:w-44 h-48 sm:h-44 shrink-0 relative overflow-hidden rounded-sm cursor-pointer bg-[#0A0A09]"
                  onClick={() => onViewImage(item.image, item.name, item.description)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-500" />
                  {item.isChefSpecial && (
                    <span className="absolute top-2.5 left-2.5 bg-[#070707]/90 border border-[#DFC283]/40 px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-[#DFC283]">
                      Signature
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header: Name and Tabular Price */}
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div>
                        <h3 className="text-xl font-serif text-[#FAF6F0] group-hover:text-[#EAD7AC] transition-colors font-normal leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-xs text-[#DFC283] font-serif italic mb-2.5">
                          {item.frenchName}
                        </p>
                      </div>
                      <span className="text-xl font-mono text-[#EAD7AC] font-light tabular-nums shrink-0">
                        ${item.price}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#C8C2B7] font-light leading-relaxed mb-3.5">
                      {item.description}
                    </p>

                    {/* Sommelier Pairing */}
                    {item.winePairing && (
                      <div className="flex items-center gap-1.5 text-xs text-[#8F877C] mb-2 font-light">
                        <Wine className="w-3.5 h-3.5 text-[#DFC283] shrink-0" />
                        <span className="truncate italic font-serif">Pairing: {item.winePairing}</span>
                      </div>
                    )}
                  </div>

                  {/* Dietary cues & Order Inquiry */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-white/5 text-xs">
                    <div className="text-[#8F877C] flex items-center gap-2">
                      {item.dietary?.map((tag, idx) => (
                        <span key={tag}>
                          {tag}
                          {idx < (item.dietary?.length || 0) - 1 && <span className="ml-2 text-[#555]">·</span>}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onReserveItem(item)}
                      className="text-[#DFC283] hover:text-[#FAF6F0] text-xs uppercase tracking-[0.16em] font-medium flex items-center gap-1.5 transition-colors cursor-pointer group/link"
                    >
                      <span>Reserve for Table</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
