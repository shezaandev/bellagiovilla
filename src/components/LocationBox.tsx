import { useState } from "react";
import { LucideIcon } from "./LucideIcon";

export function LocationBox() {
  const [copied, setCopied] = useState(false);
  
  const addressText = "Bungalow No. 1, Bellagio, Frichley Hill Road, Tungarli, Opposite Hotel Sarovar Portico, Lonavala 410401";

  const handleCopy = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const landmarks = [
    { name: "Near Kinara Dhaba", color: "bg-forest/5 text-forest border-forest/15" },
    { name: "Opposite Sarovar Portico", color: "bg-terracotta/5 text-terracotta border-terracotta/15" },
    { name: "5 mins from main market", color: "bg-charcoal/5 text-charcoal border-charcoal/15" },
    { name: "Pristine Villas Complex", color: "bg-forest/5 text-forest border-forest/15" }
  ];

  return (
    <section id="location" className="py-24 sm:py-32 bg-warm-white text-charcoal scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold font-sans">
              Estate Location
            </span>
          </div>
          <h2 className="font-serif text-3.5xl sm:text-5xl font-normal text-forest leading-tight mb-4">
            How to Reach Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto mb-6"></div>
          <p className="text-charcoal/70 text-base font-light font-sans max-w-md mx-auto leading-relaxed">
            Conveniently nestled on the tranquil heights of Frichley Hill road in Tungarli, Lonavala. Complete map and landmarks:
          </p>
        </div>

        {/* Maps Container split/column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Map Column (7 cols) */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden shadow-2xl border border-forest/15 h-[450px]">
            {/* Embedded Google Maps centered in Tungarli, Lonavala - we will search and embed a beautiful, functional high performance map iframe */}
            <iframe
              title="Google Map location of Bellagio Villa Lonavala"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3813897103217!2d73.41503937519238!3d18.758832582725807!2m3!1f0!2f0!3f0!3m2!1i1224!2i768!4f13.1!3m3!1m2!1s0x3bc2b14beaaaaaab%3A0xeabcdabcdabcda9!2sFrichley%20Hill%20Rd%2C%20Tungarli%2C%20Lonavala%2C%20Maharashtra%20410401!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Landmarks / Copy Box Column (4 cols) */}
          <div className="lg:col-span-4 bg-cream p-8 sm:p-10 rounded-3xl border border-forest/10 flex flex-col justify-between text-left shadow-lg">
            
            <div>
              <div className="flex items-center gap-2 mb-6">
                <LucideIcon name="MapPin" className="w-5 h-5 text-terracotta shrink-0 animate-bounce" />
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest">
                  Physical Address
                </h4>
              </div>

              {/* Centered clean physical text with copy button */}
              <div className="p-5 bg-warm-white rounded-2xl border border-forest/5 relative shadow-inner mb-8">
                <p className="text-sm text-charcoal/85 font-sans leading-relaxed pr-8">
                  {addressText}
                </p>

                {/* Floating copy button */}
                <button
                  onClick={handleCopy}
                  className="absolute bottom-4 right-4 p-2 bg-cream hover:bg-forest hover:text-cream text-forest rounded-xl transition-all shadow border border-forest/10 cursor-pointer select-none"
                  aria-label="Copy Address"
                  title="Copy address to clipboard"
                >
                  <LucideIcon name={copied ? "Check" : "Copy"} className="w-4 h-4" />
                </button>
              </div>

              {/* Toast indication message */}
              {copied && (
                <div className="p-3 bg-forest text-cream text-xs rounded-xl font-sans text-center mb-6 animate-fade-in font-semibold shadow">
                  ✓ Location address copied to clipboard!
                </div>
              )}

              {/* Landmarks pills */}
              <div className="mb-8">
                <h5 className="font-serif text-base font-bold text-forest mb-4">
                  Surrounding Landmarks
                </h5>

                <div className="flex flex-wrap gap-2.5">
                  {landmarks.map((landmark, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] sm:text-xs font-semibold py-1.5 px-3.5 rounded-full border tracking-wide font-sans ${landmark.color}`}
                    >
                      {landmark.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Accessibility tagline block */}
            <div className="border-t border-forest/10 pt-6 mt-6">
              <h5 className="font-serif text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1">
                Proximity Drive Coordinates
              </h5>
              <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                Located right opposite Sarovar Portico hotel, just after the Pristine Villas archway. Free private car spaces inside.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
