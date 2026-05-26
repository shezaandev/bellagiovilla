import React, { useState, useEffect } from "react";
import { LucideIcon } from "./LucideIcon";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Amenities", href: "#amenities" },
    { name: "Experience", href: "#experience" },
    { name: "Reviews", href: "#reviews" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-forest/95 backdrop-blur-md py-4 shadow-lg border-b border-forest-light/20"
            : "bg-gradient-to-b from-black/60 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex flex-col text-left group"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-wide text-cream leading-none group-hover:text-terracotta transition-colors">
              Bellagio Villa
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-cream/70 font-sans mt-0.5">
              Lonavala Retreat
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-cream/90 hover:text-terracotta text-sm font-medium tracking-wide transition-all uppercase text-[12px] duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-terracotta transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:block">
            <a
              href="#book"
              onClick={(e) => handleLinkClick(e, "#book")}
              className="px-6 py-2.5 bg-terracotta hover:bg-[#b06330] text-cream text-xs font-semibold tracking-wider uppercase rounded shadow transition-all duration-300 hover:shadow-lg transform active:scale-95"
            >
              Book Your Lockout
            </a>
          </div>

          {/* Mobile Menu Action */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-cream hover:text-terracotta transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <LucideIcon name={isMobileMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 pointer-events-none lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[350px] bg-forest border-l border-forest-light/30 z-50 p-8 flex flex-col justify-between transition-transform duration-500 ease-in-out transform lg:hidden shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Header Close */}
          <div className="flex items-center justify-between border-b border-cream/10 pb-6 mb-8">
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-wide text-cream leading-none">
                Bellagio Villa
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-cream/70 mt-1">
                Lonavala
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 px-2 text-cream hover:text-terracotta transition-colors border border-cream/10 rounded"
            >
              <LucideIcon name="X" className="w-5 h-5" />
            </button>
          </div>

          {/* Nav List */}
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-cream/90 hover:text-terracotta text-lg font-medium tracking-wide block transition-colors border-b border-cream/5 pb-2"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Action Button & Contact Footer */}
        <div className="space-y-6">
          <a
            href="#book"
            onClick={(e) => handleLinkClick(e, "#book")}
            className="w-full block py-3 text-center bg-terracotta hover:bg-[#b06330] text-cream font-medium text-sm tracking-wider uppercase rounded shadow transition-all"
          >
            Check Availability
          </a>
          <div className="text-center text-xs text-cream/60 font-serif leading-relaxed">
            🌿 Hosted by Radhika · Lonavala
          </div>
        </div>
      </div>
    </>
  );
}
