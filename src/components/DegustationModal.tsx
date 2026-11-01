import React from 'react';
import { X, Wine, Sparkles, Calendar } from 'lucide-react';
import { DEGUSTATION_COURSES } from '../data/restaurantData';

interface DegustationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReserve: () => void;
}

export const DegustationModal: React.FC<DegustationModalProps> = ({
  isOpen,
  onClose,
  onReserve,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0A0A09] border border-[#DFC283]/35 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-y-auto rounded-sm p-6 sm:p-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#8F877C] hover:text-[#FAF6F0] hover:bg-white/5 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-10 pb-6 border-b border-[#DFC283]/20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#141310] border border-[#DFC283]/30 text-[#DFC283] text-xs uppercase tracking-[0.28em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Grand Menu Dégustation</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-serif text-[#FAF6F0] font-normal tracking-wide">
            The Autumn Equinox Odyssey
          </h3>
          <p className="text-xs uppercase tracking-[0.24em] text-[#DFC283] mt-2 font-medium">
            Seven Sequences · $295 per Guest · Prestige Wine Accord $185
          </p>
        </div>

        {/* Courses List */}
        <div className="space-y-4">
          {DEGUSTATION_COURSES.map((item) => (
            <div
              key={item.course}
              className="p-5 bg-[#12110F] border border-white/5 hover:border-[#DFC283]/30 transition-all rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFC283] font-mono">
                  {item.course}
                </span>
                <p className="text-base font-serif text-[#FAF6F0] font-normal">
                  {item.dish}
                </p>
              </div>

              <div className="sm:text-right shrink-0">
                <div className="flex items-center sm:justify-end gap-1.5 text-xs text-[#C8C2B7]">
                  <Wine className="w-3.5 h-3.5 text-[#DFC283]" />
                  <span className="font-serif italic text-xs text-[#EAD7AC]">{item.pairing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dietary note */}
        <p className="text-center text-xs text-[#8F877C] mt-8 italic font-light">
          * Vegetarian and pescatarian variations available with 24 hours prior notice.
        </p>

        {/* Footer CTAs */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              onClose();
              onReserve();
            }}
            className="w-full sm:w-auto px-9 py-3.5 luxury-gold-btn text-xs font-semibold uppercase tracking-[0.22em] rounded-sm cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4 text-[#0A0A0A]" />
            <span>Reserve Degustation Table</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#12110F] hover:bg-[#1E1C18] text-[#C8C2B7] border border-white/10 text-xs uppercase tracking-[0.22em] rounded-sm cursor-pointer"
          >
            Close Menu
          </button>
        </div>
      </div>
    </div>
  );
};
