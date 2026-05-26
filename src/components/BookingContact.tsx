import React, { useState } from "react";
import { LucideIcon } from "./LucideIcon";

export function BookingContact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);
    const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return isNaN(diffDays) ? 0 : diffDays;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation checks
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage("Please fill in your primary details (Name & Phone).");
      return;
    }

    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      if (checkOutDate <= checkInDate) {
        setErrorMessage("Check-out date must look sequentially after the Check-in date.");
        return;
      }
    }

    setErrorMessage("");
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "2",
      message: ""
    });
    setIsSubmitted(false);
  };

  const numNights = calculateNights();

  return (
    <section id="book" className="py-24 sm:py-32 bg-cream text-charcoal scroll-mt-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Contact/Book Splitting Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Booking Info Panel (5 cols) */}
          <div className="lg:col-span-5 text-left bg-warm-white p-8 sm:p-10 rounded-3xl border border-forest/15 shadow-xl flex flex-col justify-between h-full relative">
            
            <div>
              {/* Badge Icon */}
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[1px] w-6 bg-terracotta"></span>
                <span className="text-xs uppercase tracking-[0.2em] text-terracotta font-semibold font-sans">
                  Reserve Your Escapade
                </span>
              </div>

              <h2 className="font-serif text-3.5xl sm:text-4.5xl font-normal text-forest leading-tight mb-8">
                Plan Your Private Stay
              </h2>

              {/* Check-in rules and listings logs */}
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-forest/5 border border-forest/5">
                  <div className="p-3 bg-forest text-cream rounded-xl">
                    <LucideIcon name="Clock" className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-base font-bold text-forest">Timings Structure</h5>
                    <p className="text-xs sm:text-sm text-charcoal/70 font-sans mt-0.5">
                      Check-in: <strong>2:00 PM</strong> · Check-out: <strong>10:00 AM</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-forest/5 border border-forest/5">
                  <div className="p-3 bg-forest text-cream rounded-xl">
                    <LucideIcon name="Users" className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-base font-bold text-forest">Capacity Accommodation</h5>
                    <p className="text-xs sm:text-sm text-charcoal/70 font-sans mt-0.5">
                      Perfect for families & friends, comfortably hosting up to <strong>12 guests</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-forest/5 border border-forest/5">
                  <div className="p-3 bg-forest text-cream rounded-xl">
                    <LucideIcon name="Instagram" className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-base font-bold text-forest">Social Connection</h5>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-terracotta hover:text-[#b06330] hover:underline font-semibold font-sans mt-0.5 block"
                    >
                      @bellagiovilla.lonavala
                    </a>
                  </div>
                </div>
              </div>

              {/* Core Airbnb & MMT Integration Buttons */}
              <div className="border-t border-forest/10 pt-8">
                <h4 className="font-serif text-lg font-bold text-forest mb-4">
                  Instant Booking Channels
                </h4>
                <p className="text-xs text-charcoal/60 font-sans mb-6">
                  Verify our direct hosting status or schedule quick payments securely on major international reservation channels:
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://airbnb.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 bg-[#FF5A5F] hover:bg-[#e04f53] text-cream text-xs font-bold tracking-widest uppercase rounded shadow transition-all duration-300 flex items-center justify-center gap-2 font-sans"
                  >
                    <span>Book on Airbnb</span>
                    <LucideIcon name="ArrowUpRight" className="w-4 h-4" />
                  </a>

                  <a
                    href="https://makemytrip.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 bg-[#E11A3C] hover:bg-[#c21430] text-cream text-xs font-bold tracking-widest uppercase rounded shadow transition-all duration-300 flex items-center justify-center gap-2 font-sans"
                  >
                    <span>Book on MakeMyTrip</span>
                    <LucideIcon name="ArrowUpRight" className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Radhika signature tag */}
            <p className="text-[11px] text-charcoal/40 font-mono mt-8 border-t border-forest/5 pt-4 text-center">
              SECURE SECRECY · NO DEPOSIT LOSS PROTOCOL
            </p>

          </div>

          {/* Right Column: Interactive Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-warm-white p-8 sm:p-12 rounded-3xl border border-forest/10 shadow-2xl text-left">
            <h3 className="font-serif text-2.5xl font-medium text-forest mb-2">
              Send Direct Inquiry
            </h3>
            <p className="text-charcoal/70 text-sm font-sans mb-8">
              Fill in your planned tour dates below. Our host Radhika or our on-site caretakers will review availability and get back to you within 30 minutes.
            </p>

            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 text-xs sm:text-sm rounded-xl border border-red-100 flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Phone Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col text-left">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/50 mb-1.5 font-sans">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-4 py-3 bg-cream/30 border border-forest/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest text-charcoal placeholder-charcoal/35 font-sans"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/50 mb-1.5 font-sans">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="px-4 py-3 bg-cream/30 border border-forest/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest text-charcoal placeholder-charcoal/35 font-sans"
                  />
                </div>
              </div>

              {/* Dates grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col text-left">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/50 mb-1.5 font-sans">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="px-4 py-3 bg-cream/30 border border-forest/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest text-charcoal font-sans"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/50 mb-1.5 font-sans">
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="px-4 py-3 bg-cream/30 border border-forest/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest text-charcoal font-sans"
                  />
                </div>
              </div>

              {/* Guests Count Selector */}
              <div className="flex flex-col text-left">
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/50 font-sans">
                    Total Guests
                  </label>
                  <span className="text-xs bg-forest/5 text-forest font-semibold px-2.5 py-0.5 rounded-full border border-forest/10">
                    Max 12 guests allowed
                  </span>
                </div>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="px-4 py-3 bg-cream/30 border border-forest/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest text-charcoal font-sans"
                >
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={String(i + 1)}>
                      {i + 1} {i + 1 === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Details */}
              <div className="flex flex-col text-left">
                <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/50 mb-1.5 font-sans">
                  Special Requests / Caretaker Instructions
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us if you need home-cooked meals, BBQ services, bonfire fireplace setups, or are travelling with pets..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="px-4 py-3 bg-cream/30 border border-forest/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest text-charcoal placeholder-charcoal/35 font-sans"
                />
              </div>

              {/* Live Calculator Tag */}
              {numNights > 0 && (
                <div className="p-4 bg-forest/5 border border-forest/10 rounded-xl text-left animate-fade-in flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <LucideIcon name="Calendar" className="w-5 h-5 text-terracotta" />
                    <span className="text-sm font-serif font-bold text-forest">Inquiry Summary Estimate</span>
                  </div>
                  <span className="text-xs sm:text-sm font-sans uppercase tracking-wider font-semibold text-charcoal/80">
                    {numNights} {numNights === 1 ? "Night" : "Nights"} · {formData.guests} {Number(formData.guests) === 1 ? "Guest" : "Guests"}
                  </span>
                </div>
              )}

              {/* Submission Button */}
              <button
                type="submit"
                className="w-full py-4 bg-terracotta hover:bg-[#b06330] text-cream font-semibold tracking-wider text-xs uppercase rounded-xl shadow-lg transition-all duration-300 transform active:scale-95 text-center cursor-pointer font-sans"
              >
                Submit Inquiry to Radhika
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* Booking Submission Confirmation Popup */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in text-left">
          <div className="bg-cream rounded-3xl p-8 sm:p-10 max-w-lg w-full shadow-2xl border border-forest/10">
            {/* Visual Success Indicator Header */}
            <div className="w-16 h-16 bg-forest text-cream rounded-full flex items-center justify-center mb-6 shadow border-2 border-cream/20">
              <LucideIcon name="Check" className="w-8 h-8 font-bold" />
            </div>

            <h4 className="font-serif text-3xl text-forest leading-tight mb-3 font-semibold">
              Inquiry Sent Successfully
            </h4>
            
            <p className="text-charcoal/80 text-sm leading-relaxed mb-6 font-sans">
              Thank you, <strong>{formData.name}</strong>! Your luxury boutique booking request has been forwarded directly to Host Radhika at Tungarli, Lonavala.
            </p>

            <div className="p-4 bg-warm-white rounded-xl mb-8 space-y-2 border border-forest/10 text-xs text-charcoal/80 font-sans">
              <div>👨‍💼 <strong>Lead Guest:</strong> {formData.name}</div>
              <div>📞 <strong>Contact Phone:</strong> {formData.phone}</div>
              {formData.checkIn && <div>📅 <strong>Planned Stay:</strong> {formData.checkIn} to {formData.checkOut} ({numNights} nights)</div>}
              <div>👥 <strong>Guest Headcount:</strong> {formData.guests} guests</div>
            </div>

            <p className="text-xs text-charcoal/60 leading-relaxed italic mb-8 font-sans">
              🌟 Radhika or our caretakers will reply via WhatsApp or direct phone call within 30 minutes with real-time seasonal cost quotations and check-in confirmation coordinates.
            </p>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-forest hover:bg-forest-light text-cream font-semibold tracking-wider text-xs uppercase rounded shadow transition-all duration-300"
            >
              Verify Or Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
