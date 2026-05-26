import { RETREAT_EXPERIENCES } from "../data";
import { LucideIcon } from "./LucideIcon";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-forest text-cream scroll-mt-10 relative overflow-hidden">
      
      {/* Decorative subtle vector backgrounds */}
      <div className="absolute top-1/2 right-0 w-80 h-80 text-cream/5 pointer-events-none transform translate-x-32 -translate-y-32">
        <svg fill="currentColor" viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold font-sans">
              Sahyadri Escapades
            </span>
          </div>
          <h2 className="font-serif text-3.5xl sm:text-5xl font-normal italic text-cream leading-tight mb-4">
            More Than Just a Stay
          </h2>
          <div className="w-16 h-[2px] bg-terracotta mx-auto mb-6"></div>
          <p className="text-cream/80 text-base sm:text-lg font-light font-sans max-w-xl mx-auto">
            Whether you wish to melt your worries away in our private pool or embark on mist-laden hikes around the Western Ghats.
          </p>
        </div>

        {/* Two-Column split screen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: At the Villa */}
          <div className="bg-cream/5 border border-cream/10 p-8 sm:p-10 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 bg-terracotta text-cream rounded-2xl">
                  <LucideIcon name="Home" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2.5xl font-medium text-cream leading-tight">
                    On the Sacred Estate
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-cream/60 font-sans">
                    Unwind Inside Bellagio
                  </p>
                </div>
              </div>

              <p className="text-cream/80 text-sm sm:text-base leading-relaxed mb-8 font-sans font-light">
                Your mornings here start with birdsong. Step onto the stone-brick patio with hot ginger tea, cook a slow breakfast in our fully-equipped kitchen, or enjoy these curated activities:
              </p>

              {/* Stacked list with minimal visual boxes */}
              <div className="space-y-6">
                {RETREAT_EXPERIENCES.villa.map((exp, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="mt-1.5 p-1 bg-terracotta/20 rounded-full text-terracotta group-hover:bg-terracotta group-hover:text-cream transition-colors">
                      <LucideIcon name="Check" className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-cream group-hover:text-terracotta transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-cream/70 text-xs sm:text-sm font-sans mt-0.5 font-light leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cozy quote badge inside column */}
            <div className="mt-10 p-5 bg-cream/5 rounded-2xl border border-cream/10 flex items-center gap-4">
              <LucideIcon name="Sparkles" className="w-6 h-6 text-terracotta animate-pulse" />
              <p className="text-xs text-cream/85 font-serif italic">
                "We requested a surprise BBQ night with skewered paneer and seekh kebabs. The caretaker crew managed everything beautifully!"
              </p>
            </div>
          </div>

          {/* Right Column: Around Lonavala */}
          <div className="bg-cream/5 border border-cream/10 p-8 sm:p-10 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 bg-terracotta text-cream rounded-2xl">
                  <LucideIcon name="Compass" className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-serif text-2.5xl font-medium text-cream leading-tight">
                    Around Lonavala
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-cream/60 font-sans">
                    Minutes from key attractions
                  </p>
                </div>
              </div>

              <p className="text-cream/80 text-sm sm:text-base leading-relaxed mb-8 font-sans font-light">
                While you are tucked away in a quiet tree-lined sanctuary, you are moments away from the most iconic waterfalls, scenic viewpoints, and amusement parks in Lonavala:
              </p>

              {/* Structured grid with distances */}
              <div className="space-y-5">
                {RETREAT_EXPERIENCES.lonavala.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4 p-4 rounded-xl bg-warm-white/5 border border-cream/5 hover:border-cream/10 hover:bg-warm-white/10 transition-all duration-300">
                    <div className="text-left">
                      <h4 className="font-serif text-base sm:text-lg font-bold text-cream leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-cream/70 text-xs sm:text-sm font-sans font-light mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                    {/* Floating Proximity Pill */}
                    <span className="flex-shrink-0 bg-terracotta hover:bg-[#b06330] text-cream text-[10px] sm:text-xs tracking-wider uppercase font-semibold font-sans px-3.5 py-1.5 rounded-full shadow-md">
                      {item.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total context tagline */}
            <p className="text-xs text-cream/55 font-sans mt-8 text-center italic">
              Easily accessible via Pune Airport (75km) or scenic Mumbai Pune express train (6km from Lonavala market station).
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
