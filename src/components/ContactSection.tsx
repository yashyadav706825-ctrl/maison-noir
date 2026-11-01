import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Shirt,
  Car,
  Compass,
  Check,
  Send,
  Sparkles,
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiryName && inquiryEmail) {
      setInquirySent(true);
      setTimeout(() => {
        setInquiryName('');
        setInquiryEmail('');
        setInquiryMessage('');
      }, 3500);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#070707] relative overflow-hidden border-t border-[#DFC283]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#DFC283]/40" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#DFC283] font-medium">
              Salons & Concierge
            </span>
            <span className="w-6 h-[1px] bg-[#DFC283]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#FAF6F0] font-normal leading-[1.12]">
            Hours & Location
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#DFC283] to-transparent mx-auto mt-6 mb-6" />
          <p className="text-[#C8C2B7] text-base md:text-lg font-light leading-relaxed">
            Conveniently positioned in the cultural heart of the Upper East Side.
            Our Maître d' and concierge team look forward to receiving you.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Opening Hours & Service Times */}
          <div className="lg:col-span-6 space-y-8">
            <div className="luxury-card p-8 sm:p-9 rounded-sm shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 text-[#DFC283] mb-6">
                <Clock className="w-5 h-5" />
                <h3 className="text-2xl font-serif text-[#FAF6F0] font-normal tracking-wide">
                  Dining Room Hours
                </h3>
              </div>

              <div className="space-y-6 text-sm">
                {/* Lunch */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/10 gap-1.5">
                  <div>
                    <span className="font-medium text-[#FAF6F0] text-sm">Lunch Service</span>
                    <span className="text-xs text-[#8F877C] block mt-0.5">A la carte & 4-Course Express Menu</span>
                  </div>
                  <span className="font-mono text-xs text-[#EAD7AC] sm:text-right">
                    Tue – Sun: 12:00 PM – 2:30 PM
                  </span>
                </div>

                {/* Dinner Weekday */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/10 gap-1.5">
                  <div>
                    <span className="font-medium text-[#FAF6F0] text-sm">Dinner (Weekdays)</span>
                    <span className="text-xs text-[#8F877C] block mt-0.5">Full Degustation & Seasonal Menu</span>
                  </div>
                  <span className="font-mono text-xs text-[#EAD7AC] sm:text-right">
                    Tue – Thu: 5:30 PM – 10:30 PM
                  </span>
                </div>

                {/* Dinner Weekend */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/10 gap-1.5">
                  <div>
                    <span className="font-medium text-[#FAF6F0] text-sm">Dinner (Weekends)</span>
                    <span className="text-xs text-[#8F877C] block mt-0.5">Sommelier Tasting & Live Harpist</span>
                  </div>
                  <span className="font-mono text-xs text-[#EAD7AC] sm:text-right">
                    Fri – Sun: 5:00 PM – 11:30 PM
                  </span>
                </div>

                {/* Monday Cellar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-1 text-xs text-[#8F877C] gap-1.5">
                  <span className="font-medium text-[#C8C2B7]">Monday Evenings</span>
                  <span className="italic font-serif">Reserved for Private Sommelier Cellar Tastings</span>
                </div>
              </div>
            </div>

            {/* Practical Guidelines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="luxury-card p-6 rounded-sm flex items-start gap-4">
                <Shirt className="w-5 h-5 text-[#DFC283] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-[0.18em] text-[#FAF6F0] font-medium mb-1.5">
                    Dress Code
                  </h4>
                  <p className="text-xs text-[#8F877C] leading-relaxed">
                    {RESTAURANT_INFO.dressCode}
                  </p>
                </div>
              </div>

              <div className="luxury-card p-6 rounded-sm flex items-start gap-4">
                <Car className="w-5 h-5 text-[#DFC283] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-[0.18em] text-[#FAF6F0] font-medium mb-1.5">
                    Valet Parking
                  </h4>
                  <p className="text-xs text-[#8F877C] leading-relaxed">
                    {RESTAURANT_INFO.valet}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Location Card & Concierge Inquiry */}
          <div className="lg:col-span-6 space-y-8">
            <div className="luxury-card p-8 sm:p-9 rounded-sm shadow-xl">
              <div className="flex items-center gap-3 text-[#DFC283] mb-6">
                <MapPin className="w-5 h-5" />
                <h3 className="text-2xl font-serif text-[#FAF6F0] font-normal tracking-wide">
                  Address & Contact
                </h3>
              </div>

              <div className="space-y-4 text-xs text-[#C8C2B7]">
                <div className="flex items-start justify-between gap-4 p-5 bg-[#070707] border border-white/10 rounded-sm">
                  <div>
                    <span className="text-[#8F877C] uppercase tracking-[0.2em] block mb-1">
                      Physical Address
                    </span>
                    <p className="text-sm font-serif text-[#FAF6F0]">
                      {RESTAURANT_INFO.address}
                    </p>
                  </div>
                  <button
                    onClick={handleCopyAddress}
                    className="p-2.5 bg-[#12110F] hover:bg-[#1C1A16] border border-[#DFC283]/30 text-[#DFC283] rounded-sm transition-colors cursor-pointer shrink-0"
                    title="Copy Address"
                  >
                    {copiedAddress ? <Check className="w-4 h-4 text-emerald-400" /> : <Compass className="w-4 h-4" />}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-[#070707] border border-white/10 rounded-sm">
                    <span className="text-[#8F877C] uppercase tracking-[0.2em] block mb-1">
                      Direct Concierge Line
                    </span>
                    <a
                      href={`tel:${RESTAURANT_INFO.phone}`}
                      className="text-sm font-mono text-[#EAD7AC] hover:underline"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>

                  <div className="p-5 bg-[#070707] border border-white/10 rounded-sm">
                    <span className="text-[#8F877C] uppercase tracking-[0.2em] block mb-1">
                      Private Dining Email
                    </span>
                    <a
                      href={`mailto:${RESTAURANT_INFO.conciergeEmail}`}
                      className="text-xs text-[#EAD7AC] hover:underline truncate block"
                    >
                      {RESTAURANT_INFO.conciergeEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Concierge Inquiry Form */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-xs uppercase tracking-[0.24em] text-[#DFC283] font-semibold mb-4">
                  Inquire with the Maître d’
                </h4>

                {inquirySent ? (
                  <div className="p-4 bg-[#141310] border border-[#DFC283]/40 text-xs text-[#EAD7AC] flex items-center gap-2.5 rounded-sm">
                    <Sparkles className="w-4 h-4 text-[#DFC283]" />
                    <span>Your concierge note has been dispatched for demo inquiry.</span>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        className="px-4 py-2.5 luxury-input text-xs text-[#FAF6F0] placeholder-[#666] rounded-sm"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        className="px-4 py-2.5 luxury-input text-xs text-[#FAF6F0] placeholder-[#666] rounded-sm"
                      />
                    </div>
                    <textarea
                      rows={2}
                      placeholder="Private salon inquiry, corporate celebration, cellar buyout..."
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      className="w-full px-4 py-2.5 luxury-input text-xs text-[#FAF6F0] placeholder-[#666] rounded-sm resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#12110F] hover:bg-[#DFC283] text-[#EAD7AC] hover:text-[#070707] border border-[#DFC283]/40 text-xs uppercase tracking-[0.22em] font-medium rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Concierge Note</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
