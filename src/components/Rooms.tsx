import { useState } from "react";
import { VILLA_SPACES, SpaceItem } from "../data";
import { LucideIcon } from "./LucideIcon";

export function Rooms() {
  const [selectedSpace, setSelectedSpace] = useState<SpaceItem | null>(null);

  return (
    <section id="rooms" className="py-24 sm:py-32 bg-warm-white text-charcoal scroll-mt-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title and Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold font-sans">
              Exclusive Sanctuary
            </span>
          </div>
          <h2 className="font-serif text-3.5xl sm:text-5xl font-normal text-forest leading-tight mb-4">
            Where You'll Stay
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto mb-6"></div>
          <p className="text-charcoal/70 text-base font-light italic font-serif">
            "Every bedroom is styled beautifully to recreate the cozy elegance of deep wood and Italian countryside manor design."
          </p>
        </div>

        {/* 3-Column Bento/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VILLA_SPACES.map((space) => (
            <div
              key={space.id}
              className="bg-cream/40 rounded-2xl overflow-hidden border border-cream hover:border-forest/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group transform hover:-translate-y-1.5"
            >
              {/* Card Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Vignette Gradient Cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 right-4 bg-forest/90 backdrop-blur-xs text-cream text-[10px] font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
                  {space.id.includes("bed") ? "Sleep Oasis" : "Recreation"}
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-forest group-hover:text-terracotta transition-colors mb-3">
                    {space.name}
                  </h3>
                  <p className="text-charcoal/85 text-sm leading-relaxed mb-6 font-sans">
                    {space.description}
                  </p>
                </div>

                {/* Bullet details list */}
                <div className="border-t border-forest/10 pt-4 mt-auto">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-charcoal/50 mb-3 font-sans">
                    Room Specifications
                  </h4>
                  <ul className="space-y-2">
                    {space.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-charcoal/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                        <span className="font-sans font-light">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedSpace(space)}
                    className="w-full mt-6 py-2.5 px-4 bg-forest/5 hover:bg-forest hover:text-cream text-forest text-xs font-semibold tracking-wider uppercase rounded transition-all duration-300 flex items-center justify-center gap-1.5 font-sans group-hover:bg-forest/10"
                  >
                    <span>Immersive Preview</span>
                    <LucideIcon name="ArrowUpRight" className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox room details overlay modal */}
      {selectedSpace && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300 animate-fade-in">
          <div className="bg-cream rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl overflow-y-auto border border-cream/20">
            {/* Modal Image Slider Area */}
            <div className="relative h-[40vh] min-h-[250px] w-full bg-black">
              <img
                src={selectedSpace.image}
                alt={selectedSpace.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
              <button
                onClick={() => setSelectedSpace(null)}
                className="absolute top-6 right-6 p-2 bg-black/50 hover:bg-black/80 text-cream rounded-full transition-colors border border-cream/20"
              >
                <LucideIcon name="X" className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-6 left-8 text-left">
                <span className="text-terracotta text-xs font-bold uppercase tracking-widest bg-cream/15 backdrop-blur-sm p-1 px-3 rounded-full border border-cream/20">
                  Bellagio Lonavala
                </span>
                <h4 className="font-serif text-3xl sm:text-4xl text-cream mt-2 font-normal">
                  {selectedSpace.name}
                </h4>
              </div>
            </div>

            <div className="p-8 sm:p-10 text-left grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7">
                <h5 className="font-serif text-2xl text-forest mb-4 font-semibold">About this Space</h5>
                <p className="text-charcoal/80 text-base leading-relaxed mb-6 font-sans">
                  {selectedSpace.description}
                </p>
                <div className="p-6 bg-forest/5 rounded-2xl border border-forest/10 flex items-center gap-4">
                  <LucideIcon name="Sparkles" className="w-8 h-8 text-terracotta flex-shrink-0 animate-pulse" />
                  <div className="text-sm text-charcoal/80 leading-relaxed font-sans font-light">
                    Every pillow check, sheets sanitation and room scenting is carefully prepared by Radhika’s crew prior to your 2:00 PM check-in, ensuring clinical cleanliness with boutique soul.
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 bg-warm-white p-6 rounded-2xl border border-forest/10 flex flex-col justify-between">
                <div>
                  <h5 className="font-serif text-xl text-forest mb-4 font-semibold">Included in Suite</h5>
                  <ul className="space-y-3">
                    {selectedSpace.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-2.5 items-center text-sm text-charcoal/80 font-sans">
                        <LucideIcon name="CheckCircle2" className="w-4 h-4 text-terracotta flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                    <li className="flex gap-2.5 items-center text-sm text-charcoal/80 font-sans">
                      <LucideIcon name="CheckCircle2" className="w-4 h-4 text-terracotta flex-shrink-0" />
                      <span>Soundproof glass frames</span>
                    </li>
                    <li className="flex gap-2.5 items-center text-sm text-charcoal/80 font-sans">
                      <LucideIcon name="CheckCircle2" className="w-4 h-4 text-terracotta flex-shrink-0" />
                      <span>Complimentary high speed WiFi</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedSpace(null);
                    const target = document.querySelector("#book");
                    if (target) {
                      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top: offsetTop, behavior: "smooth" });
                    }
                  }}
                  className="w-full mt-8 py-3 bg-terracotta hover:bg-[#b06330] text-cream font-semibold tracking-wider text-xs uppercase rounded shadow transition-all duration-300 transform active:scale-95 text-center"
                >
                  Request to Book Space
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
