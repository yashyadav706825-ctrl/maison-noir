import React from 'react';
import { X, Sparkles } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  image: string;
  title: string;
  description: string;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  image,
  title,
  description,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/92 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#0A0A09] border border-[#DFC283]/40 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-[#070707]/85 hover:bg-[#DFC283] text-white hover:text-[#070707] rounded-full border border-white/20 transition-all cursor-pointer shadow-md"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* High-Res Image View */}
        <div className="relative max-h-[70vh] sm:max-h-[75vh] w-full flex items-center justify-center bg-black overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full max-h-[70vh] object-contain mx-auto filter contrast-[1.04]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption Bar */}
        <div className="p-6 sm:p-7 bg-[#0E0D0B] border-t border-[#DFC283]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#DFC283] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Maison Noir Fine Art Archive</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-[#FAF6F0] font-normal">
              {title}
            </h3>
            {description && (
              <p className="text-xs sm:text-sm text-[#C8C2B7] mt-1 font-light max-w-2xl leading-relaxed">
                {description}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#141310] hover:bg-[#201E1A] text-[#EAD7AC] border border-[#DFC283]/40 text-xs uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer shrink-0"
          >
            Return to Gallery
          </button>
        </div>
      </div>
    </div>
  );
};
