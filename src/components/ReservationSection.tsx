import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Info,
  Copy,
  Check,
  RefreshCw,
} from 'lucide-react';
import { ReservationFormData, ConfirmedReservation } from '../types/restaurant';

interface ReservationSectionProps {
  preselectedDish?: string;
  onClearPreselectedDish?: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  preselectedDish,
  onClearPreselectedDish,
}) => {
  // Tomorrow's date formatted as YYYY-MM-DD
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationFormData>({
    guests: 2,
    date: defaultDate,
    time: '19:30',
    seatingArea: 'Main Dining Salon',
    occasion: 'Fine Dining Tasting',
    fullName: '',
    email: '',
    phone: '',
    specialRequests: preselectedDish ? `Guest requested dish: ${preselectedDish}` : '',
    dietaryNotes: 'None',
  });

  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedReservation | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const seatingOptions = [
    { id: 'Main Dining Salon', label: 'Main Dining Salon', desc: 'Candlelit velvet banquettes' },
    { id: 'Private Wine Cellar Room', label: 'Private Wine Cellar', desc: 'Subterranean Grand Cru vault' },
    { id: "Chef's Atelier Counter", label: "Chef's Atelier Counter", desc: 'Front-row view of culinary brigade' },
    { id: 'Intimate Corner Booth', label: 'Intimate Corner Booth', desc: 'Maximum acoustic seclusion' },
  ];

  const timeSlots = [
    { type: 'Dinner', slots: ['17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'] },
    { type: 'Lunch', slots: ['12:00', '12:30', '13:00', '13:30'] },
  ];

  const occasions = [
    'Fine Dining Tasting',
    'Romantic Rendezvous',
    'Anniversary Celebration',
    'Birthday Evening',
    'Executive Business Dinner',
    'Special Celebration',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!formData.fullName.trim()) {
      setValidationError('Please enter your full name for the reservation party.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setValidationError('Please provide a valid email address for booking verification.');
      return;
    }
    if (!formData.phone.trim()) {
      setValidationError('Please provide a phone number for concierge confirmation.');
      return;
    }

    const generatedCode = 'MN-' + Math.floor(10000 + Math.random() * 90000);
    const confirmed: ConfirmedReservation = {
      ...formData,
      referenceCode: generatedCode,
      bookingTimestamp: new Date().toLocaleString(),
    };

    setConfirmedBooking(confirmed);
  };

  const handleCopyCode = () => {
    if (confirmedBooking) {
      navigator.clipboard.writeText(confirmedBooking.referenceCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    if (onClearPreselectedDish) {
      onClearPreselectedDish();
    }
  };

  return (
    <section id="reservation" className="py-28 md:py-36 bg-[#070707] relative overflow-hidden border-t border-[#DFC283]/15">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#DFC283]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#DFC283]/40" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#DFC283] font-medium">
              Bespoke Hospitality
            </span>
            <span className="w-6 h-[1px] bg-[#DFC283]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#FAF6F0] font-normal leading-[1.12]">
            Reserve Your Experience
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#DFC283] to-transparent mx-auto mt-6 mb-6" />
          <p className="text-[#C8C2B7] text-base font-light leading-relaxed">
            Seating at Maison Noir is limited to maintain unhurried, intimate dining.
            Please submit your preferred party details below.
          </p>

          {preselectedDish && (
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-[#12110F] border border-[#DFC283]/40 text-[#EAD7AC] text-xs rounded-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC283]" />
              <span>Requested Item: <strong>{preselectedDish}</strong></span>
              <button
                type="button"
                onClick={onClearPreselectedDish}
                className="ml-2 text-[#8F877C] hover:text-white"
              >
                &times;
              </button>
            </div>
          )}
        </div>

        {/* Confirmation Screen OR Form */}
        {confirmedBooking ? (
          <div className="bg-[#0D0D0B] border border-[#DFC283]/40 p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative animate-in fade-in zoom-in-95 duration-300 rounded-sm">
            {/* Top decorative emblem */}
            <div className="w-14 h-14 rounded-full bg-[#141310] border border-[#DFC283]/50 flex items-center justify-center text-[#DFC283] mx-auto mb-6 shadow-inner">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#DFC283] font-semibold block mb-1">
                Demonstration Confirmation
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#FAF6F0] font-normal">
                Reservation Request Recorded
              </h3>
              <p className="text-sm text-[#C8C2B7] font-light mt-2">
                Thank you, <strong className="text-[#FAF6F0]">{confirmedBooking.fullName}</strong>.
                Your table request has been simulated for our records.
              </p>
            </div>

            {/* Clear Requirement Notice (Simulated booking disclaimer) */}
            <div className="mb-8 p-5 bg-[#141310] border border-[#DFC283]/30 rounded-sm flex items-start gap-3.5">
              <Info className="w-5 h-5 text-[#DFC283] shrink-0 mt-0.5" />
              <div className="text-xs text-[#C8C2B7] leading-relaxed">
                <strong className="text-[#DFC283] block mb-0.5 font-medium">Interactive Demo Notice:</strong>
                This website is a fine dining demonstration for Maison Noir.
                <strong> No real booking or reservation has been processed</strong>, and no credit card was charged.
                Our concierge welcomes you to explore our culinary universe!
              </div>
            </div>

            {/* Simulated Booking Voucher Card */}
            <div className="bg-[#080808] border border-white/10 p-6 sm:p-8 rounded-sm mb-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#8F877C]">
                    Booking Reference Code
                  </span>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-2xl sm:text-3xl font-mono text-[#EAD7AC] tracking-widest font-normal">
                      {confirmedBooking.referenceCode}
                    </span>
                    <button
                      onClick={handleCopyCode}
                      className="p-1.5 bg-[#141310] hover:bg-[#201E1A] border border-white/10 text-xs text-[#C8C2B7] hover:text-white rounded-sm flex items-center gap-1.5 cursor-pointer transition-colors"
                      title="Copy reference code"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span className="text-[10px]">{copiedCode ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#8F877C]">
                    Status
                  </span>
                  <div className="text-xs text-[#DFC283] font-medium mt-1.5 uppercase tracking-wider flex items-center sm:justify-end gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DFC283] inline-block" />
                    <span>Demo Table Assigned</span>
                  </div>
                </div>
              </div>

              {/* Grid Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
                <div>
                  <span className="text-[#8F877C] uppercase tracking-wider block mb-1">Guests</span>
                  <span className="text-[#FAF6F0] font-mono text-sm">{confirmedBooking.guests} Persons</span>
                </div>
                <div>
                  <span className="text-[#8F877C] uppercase tracking-wider block mb-1">Date</span>
                  <span className="text-[#FAF6F0] font-mono text-sm">{confirmedBooking.date}</span>
                </div>
                <div>
                  <span className="text-[#8F877C] uppercase tracking-wider block mb-1">Seating Time</span>
                  <span className="text-[#FAF6F0] font-mono text-sm">{confirmedBooking.time}</span>
                </div>
                <div>
                  <span className="text-[#8F877C] uppercase tracking-wider block mb-1">Salon Area</span>
                  <span className="text-[#FAF6F0] text-sm">{confirmedBooking.seatingArea}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs text-[#C8C2B7]">
                <div>
                  <span className="text-[#8F877C] block mb-0.5">Contact Notification:</span>
                  <span className="text-[#FAF6F0]">{confirmedBooking.email} · {confirmedBooking.phone}</span>
                </div>
                <div>
                  <span className="text-[#8F877C] block mb-0.5">Occasion:</span>
                  <span className="text-[#FAF6F0]">{confirmedBooking.occasion}</span>
                </div>
                {confirmedBooking.specialRequests && (
                  <div className="sm:col-span-2">
                    <span className="text-[#8F877C] block mb-0.5">Special Notes:</span>
                    <span className="text-[#FAF6F0] italic">{confirmedBooking.specialRequests}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#141310] hover:bg-[#1E1C17] text-[#EAD7AC] border border-[#DFC283]/40 text-xs font-semibold uppercase tracking-[0.22em] rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Simulate Another Reservation</span>
              </button>

              <a
                href="#menu"
                className="w-full sm:w-auto px-7 py-3.5 luxury-gold-btn text-xs font-semibold uppercase tracking-[0.22em] rounded-sm transition-all text-center cursor-pointer"
              >
                Explore Dining Menu
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#0D0D0B] border border-[#DFC283]/25 hover:border-[#DFC283]/40 transition-all p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-sm"
          >
            {validationError && (
              <div className="mb-8 p-4 bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2.5 rounded-sm">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Step 1: Party Size, Date, and Time */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] uppercase tracking-[0.26em] text-[#DFC283] font-semibold">
                  01. Table Specifications
                </span>
                <span className="flex-1 h-[1px] bg-[#DFC283]/20" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Guests */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#C8C2B7] mb-2 font-medium">
                    Party Size
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#8F877C]" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full pl-11 pr-4 py-3.5 luxury-input text-xs text-[#FAF6F0] rounded-sm appearance-none cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num} className="bg-[#12110F] text-[#FAF6F0]">
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                      <option value={9} className="bg-[#12110F] text-[#FAF6F0]">
                        9+ Guests (Private Salon)
                      </option>
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#C8C2B7] mb-2 font-medium">
                    Dining Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#8F877C]" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-11 pr-4 py-3.5 luxury-input text-xs text-[#FAF6F0] rounded-sm cursor-pointer"
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#C8C2B7] mb-2 font-medium">
                    Seating Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#8F877C]" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 luxury-input text-xs text-[#FAF6F0] rounded-sm appearance-none cursor-pointer"
                    >
                      {timeSlots.map((group) => (
                        <optgroup key={group.type} label={`— ${group.type} Service —`} className="bg-[#14120F] text-[#DFC283]">
                          {group.slots.map((slot) => (
                            <option key={slot} value={slot} className="text-[#FAF6F0] bg-[#0A0A09]">
                              {slot} ({group.type})
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Seating Ambience & Occasion */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] uppercase tracking-[0.26em] text-[#DFC283] font-semibold">
                  02. Atmospheric Preferences
                </span>
                <span className="flex-1 h-[1px] bg-[#DFC283]/20" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {seatingOptions.map((opt) => (
                  <label
                    key={opt.id}
                    onClick={() => setFormData({ ...formData, seatingArea: opt.id })}
                    className={`p-4 border rounded-sm cursor-pointer transition-all flex items-start justify-between ${
                      formData.seatingArea === opt.id
                        ? 'border-[#DFC283] bg-[#171512] shadow-sm'
                        : 'border-white/10 bg-[#0A0A09] hover:border-white/20'
                    }`}
                  >
                    <div>
                      <p className="text-sm font-medium text-[#FAF6F0]">{opt.label}</p>
                      <p className="text-xs text-[#8F877C] mt-0.5">{opt.desc}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                      formData.seatingArea === opt.id
                        ? 'border-[#DFC283] bg-[#DFC283]'
                        : 'border-[#555]'
                    }`}>
                      {formData.seatingArea === opt.id && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#070707]" />
                      )}
                    </div>
                  </label>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#C8C2B7] mb-2 font-medium">
                    Occasion / Experience
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-4 py-3.5 luxury-input text-xs text-[#FAF6F0] rounded-sm appearance-none cursor-pointer"
                  >
                    {occasions.map((occ) => (
                      <option key={occ} value={occ} className="bg-[#12110F] text-[#FAF6F0]">
                        {occ}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#C8C2B7] mb-2 font-medium">
                    Dietary Requirements or Allergies
                  </label>
                  <select
                    value={formData.dietaryNotes}
                    onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
                    className="w-full px-4 py-3.5 luxury-input text-xs text-[#FAF6F0] rounded-sm appearance-none cursor-pointer"
                  >
                    <option value="None">None / Standard Gastronomy</option>
                    <option value="Pescatarian">Pescatarian</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Gluten Sensitivity">Gluten-Free / Celiac</option>
                    <option value="Nut Allergy">Nut Allergy</option>
                    <option value="Shellfish Allergy">Shellfish Allergy</option>
                    <option value="Multiple (Detail in notes)">Multiple (Detail below)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Guest Contact & Requests */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] uppercase tracking-[0.26em] text-[#DFC283] font-semibold">
                  03. Guest Concierge Details
                </span>
                <span className="flex-1 h-[1px] bg-[#DFC283]/20" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#C8C2B7] mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Charles Sterling"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3.5 luxury-input text-xs text-[#FAF6F0] placeholder-[#666] rounded-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#C8C2B7] mb-2 font-medium">
                    Concierge Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. guest@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 luxury-input text-xs text-[#FAF6F0] placeholder-[#666] rounded-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#C8C2B7] mb-2 font-medium">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (212) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 luxury-input text-xs text-[#FAF6F0] placeholder-[#666] rounded-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.16em] text-[#C8C2B7] mb-2 font-medium">
                  Special Requests, Wine Preferences or Notes for the Chef
                </label>
                <textarea
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="Optional: Sommelier wine pairing preference, quiet table request, celebratory champagne on arrival..."
                  className="w-full px-4 py-3.5 luxury-input text-xs text-[#FAF6F0] placeholder-[#666] rounded-sm resize-none"
                />
              </div>
            </div>

            {/* Disclaimer & Submit */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-3 text-xs text-[#8F877C] max-w-md">
                <ShieldCheck className="w-4 h-4 text-[#DFC283] shrink-0 mt-0.5" />
                <span>
                  By requesting a table, you agree to our 24-hour cancellation protocol.
                  Interactive demonstration confirmation will be displayed instantly.
                </span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 luxury-gold-btn text-xs font-semibold uppercase tracking-[0.24em] rounded-sm shadow-xl cursor-pointer active:scale-[0.98]"
              >
                Confirm Reservation Request
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
