import React from "react";
import { LucideIcon } from "./LucideIcon";

export function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-forest py-20 border-t border-forest-light/30 text-cream relative overflow-hidden">
      
      {/* Decorative leaf/botanical subtle background texture overlays */}
      <div className="absolute top-0 right-0 w-48 h-48 text-cream/3 pointer-events-none transform translate-x-12 -translate-y-12">
        <svg fill="currentColor" viewBox="0 0 100 100" className="w-full h-full">
          <path d="M10,90 Q30,60 80,40 T90,10" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
        
        {/* Logo / Tagline Column (5 cols) */}
        <div className="col-span-1 md:col-span-5 text-left space-y-4">
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, "#")}
            className="flex flex-col group"
          >
            <span className="font-serif text-3xl sm:text-4xl tracking-wide text-cream leading-tight group-hover:text-terracotta transition-colors">
              Bellagio Villa
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-cream/60 mt-1 font-sans">
              Lonavala Escape
            </span>
          </a>

          <p className="font-serif italic text-base sm:text-lg text-cream/80 max-w-sm">
            "A home amidst nature — where the city melts away and evenings start with cozy crackling fires."
          </p>

          {/* Social Links */}
          <div className="pt-4 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-cream/10 hover:bg-terracotta hover:text-cream text-cream rounded-full border border-cream/15 transition-all"
              aria-label="Instagram handle link"
              title="Follow @bellagiovilla.lonavala"
            >
              <LucideIcon name="Instagram" className="w-5 h-5" />
            </a>
            <span className="text-xs text-cream/75 font-sans">
              @bellagiovilla.lonavala
            </span>
          </div>
        </div>

        {/* Link navigation directory (4 cols) */}
        <div className="col-span-1 md:col-span-3 text-left space-y-4">
          <h4 className="font-serif text-lg font-bold text-cream select-none border-b border-cream/10 pb-2">
            Explore Retreat
          </h4>
          <nav className="flex flex-col space-y-2.5">
            {[
              { name: "Home Top", href: "#" },
              { name: "Villa Rooms", href: "#rooms" },
              { name: "Amenities Overview", href: "#amenities" },
              { name: "Retreat Experiences", href: "#experience" },
              { name: "Guest Testimonials", href: "#reviews" },
              { name: "Photo Gallery", href: "#gallery" },
              { name: "Location Details", href: "#location" }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-cream/80 hover:text-terracotta text-sm transition-colors text-left block"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Physical Address segment (4 cols) */}
        <div className="col-span-1 md:col-span-4 text-left space-y-4">
          <h4 className="font-serif text-lg font-bold text-cream select-none border-b border-cream/10 pb-2">
            Postal Address Location
          </h4>
          <p className="text-sm text-cream/85 font-sans leading-relaxed">
            Villa No. 143, Pristine Villas,<br />
            Old Mumbai–Pune Highway,<br />
            Lonavala 410401
          </p>

          <div className="pt-4 space-y-1.5 text-xs text-cream/60 font-sans">
            <div>✉ Direct Inquiry: guests@bellagiovilla.lonavala</div>
            <div>📱 Phone Service: +91 98765 43210 (24/7 Desk)</div>
          </div>
        </div>

      </div>

      {/* Licensing / Credit limits */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream/50 font-sans">
        <div>
          © {new Date().getFullYear()} Bellagio Villa, Lonavala. All rights reserved.
        </div>
        <div className="flex gap-2 items-center">
          <span>Hosted with heart by Radhika</span>
          <span>•</span>
          <span>Lonavala, Maharashtra, India</span>
        </div>
      </div>

    </footer>
  );
}
