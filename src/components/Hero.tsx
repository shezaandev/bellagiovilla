import React, { useEffect, useState } from "react";
import { LucideIcon } from "./LucideIcon";
import villaExteriorImg from "../assets/images/villa_exterior_1779779601624.png";

export function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTAExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#about");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const handleCTABookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#book");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image with Parallax Transition */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center select-none"
        style={{
          backgroundImage: `url(${villaExteriorImg})`,
          transform: `translateY(${offsetY * 0.4}px) scale(${1 + offsetY * 0.0005})`,
          transition: "transform 0.1s ease-out-sine"
        }}
      />

      {/* Dark vignette tint, nature aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/40 to-black/75" />

      {/* Decorative leaf/botanical subtle background texture overlays */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-warm-white to-transparent pointer-events-none" />

      {/* Primary Hero Text Area */}
      <div className="relative text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center h-full pt-16 animate-fade-in z-10">
        
        {/* Floating Guest Favorite Badge */}
        <div className="mb-6 px-5 py-2.5 bg-cream/10 backdrop-blur-md rounded-full border border-cream/25 shadow-xl text-cream text-[11px] sm:text-xs tracking-wider flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
          <span className="text-terracotta">★</span>
          <span className="font-semibold uppercase font-sans">4.96 · Guest Favourite on Airbnb</span>
          <span className="text-cream/50">•</span>
          <span className="font-light">68 Verified Reviews</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal text-cream tracking-tight mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          Bellagio Villa
        </h1>

        {/* Tagline */}
        <p className="text-cream/90 font-serif italic text-lg sm:text-2xl md:text-3xl font-light max-w-2xl mb-12 select-none tracking-wide text-center">
          "A Home Amidst Nature — Lonavala, Maharashtra"
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4 sm:px-0 max-w-md">
          <a
            href="#book"
            onClick={handleCTABookClick}
            className="px-8 py-4 bg-terracotta hover:bg-[#b06330] text-cream font-semibold tracking-wider text-sm uppercase rounded shadow-lg transition-all duration-300 transform active:scale-95 text-center flex-1"
          >
            Book Now
          </a>
          <a
            href="#about"
            onClick={handleCTAExploreClick}
            className="px-8 py-4 border-2 border-cream/80 hover:border-cream hover:bg-cream/10 text-cream font-semibold tracking-wider text-sm uppercase rounded backdrop-blur-xs transition-all duration-300 transform active:scale-95 text-center flex-1"
          >
            Explore Villa
          </a>
        </div>
      </div>

      {/* Cozy Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-10 text-cream/80 hover:text-cream transition-colors" onClick={(e) => {
        const target = document.querySelector("#about");
        if (target) {
          const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }}>
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans">Scroll to Discover</span>
        <div className="w-[20px] h-[34px] border-2 border-cream/40 rounded-full flex justify-center p-1.5">
          <div className="w-1 h-2 bg-terracotta rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
