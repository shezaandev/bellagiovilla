import { useState, useRef } from "react";
import { REVIEWS, ReviewItem } from "../data";
import { LucideIcon } from "./LucideIcon";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const stats = [
    { label: "Cleanliness", score: 4.9, max: 5 },
    { label: "Accuracy", score: 5.0, max: 5 },
    { label: "Communication", score: 5.0, max: 5 },
    { label: "Location", score: 4.9, max: 5 },
    { label: "Value", score: 4.8, max: 5 }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : REVIEWS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < REVIEWS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-cream text-charcoal scroll-mt-10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-1 mb-3 text-terracotta">
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                <LucideIcon name="Star" className="w-5 h-5 fill-current" />
              </span>
            ))}
          </div>
          <h2 className="font-serif text-3.5xl sm:text-5xl font-normal text-forest leading-tight mb-4">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto mb-6"></div>
          
          <p className="text-charcoal/80 text-sm sm:text-base font-sans max-w-md mx-auto leading-relaxed">
            "Rated 4.4–4.5 on Justdial · 4.96 on Airbnb · 38+ verified reviews"
          </p>
        </div>

        {/* Ratings Metrics Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 sm:mb-20">
          
          {/* Left Block: Summary Rating Box */}
          <div className="lg:col-span-4 bg-warm-white p-8 rounded-3xl border border-forest/10 shadow-sm text-center">
            <h3 className="text-sm font-sans uppercase tracking-[0.25em] text-charcoal/50 mb-3 font-semibold">
              Airbnb Guest Choice
            </h3>
            <div className="text-6xl sm:text-7xl font-serif font-bold text-forest leading-tight mb-2">
              4.96
            </div>
            <div className="text-xs font-sans uppercase tracking-widest text-charcoal/60 mb-6 font-medium">
              out of 5 stars based on 68 reviews
            </div>
            
            {/* Custom Review Badges */}
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-xs bg-forest/5 text-forest font-sans py-1 py-1.5 px-3.5 rounded-full border border-forest/10 font-semibold">
                ★ Guest Favourite
              </span>
              <span className="text-xs bg-terracotta/5 text-terracotta font-sans py-1 py-1.5 px-3.5 rounded-full border border-terracotta/10 font-semibold">
                🌿 Hospitality Winner
              </span>
            </div>
          </div>

          {/* Right Block: Progress Scores */}
          <div className="lg:col-span-8 bg-warm-white/50 p-8 sm:p-10 rounded-3xl border border-forest/5 shadow-inner">
            <h4 className="font-serif text-xl sm:text-2xl text-forest mb-6 font-medium text-left">
              Detailed House Ratings Matrix
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col text-left">
                  <div className="flex justify-between items-center mb-1 text-sm">
                    <span className="text-charcoal/80 font-medium font-sans">{stat.label}</span>
                    <span className="font-serif font-semibold text-forest">{stat.score.toFixed(1)} / 5</span>
                  </div>
                  {/* Custom Styled Slider Bar */}
                  <div className="w-full bg-forest/5 rounded-full h-2 overflow-hidden border border-forest/5">
                    <div
                      className="bg-gradient-to-r from-forest to-forest-light h-full rounded-full transition-all duration-1000"
                      style={{ width: `${(stat.score / stat.max) * 105}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Carousel / Slider Navigation wrapper */}
        <div className="relative max-w-4xl mx-auto">
          {/* Slider Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-16 z-20">
            <button
              onClick={handlePrev}
              className="p-3 bg-warm-white hover:bg-forest hover:text-cream text-forest rounded-full shadow-lg border border-forest/15 transition-all outline-none focus:ring-2 focus:ring-forest cursor-pointer"
              aria-label="Previous Review"
            >
              <LucideIcon name="ChevronLeft" className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-16 z-20">
            <button
              onClick={handleNext}
              className="p-3 bg-warm-white hover:bg-forest hover:text-cream text-forest rounded-full shadow-lg border border-forest/15 transition-all outline-none focus:ring-2 focus:ring-forest cursor-pointer"
              aria-label="Next Review"
            >
              <LucideIcon name="ChevronRight" className="w-5 h-5" />
            </button>
          </div>

          {/* Individual Review Card Box */}
          <div className="bg-warm-white rounded-3xl p-8 sm:p-12 border border-forest/10 shadow-xl relative overflow-hidden text-left transition-all duration-500 transform hover:scale-[1.01]">
            {/* Top quote marker decoration */}
            <div className="absolute -top-3 -right-3 text-forest/5 text-9xl font-serif select-none pointer-events-none">
              ”
            </div>

            {/* User credentials */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-forest/5 pb-6 mb-6">
              <div className="flex items-center gap-4">
                {/* User Initials Avatar */}
                <div className="w-14 h-14 rounded-full bg-forest/10 border border-forest/20 flex items-center justify-center font-serif text-xl font-bold text-forest">
                  {REVIEWS[activeIndex].avatarLetter}
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-forest leading-tight">
                    {REVIEWS[activeIndex].name}
                  </h4>
                  <p className="text-xs text-charcoal/50 font-sans uppercase tracking-widest mt-0.5">
                    {REVIEWS[activeIndex].location} · {REVIEWS[activeIndex].date}
                  </p>
                </div>
              </div>

              {/* Trip Tag & Rating Stars overlay */}
              <div className="flex flex-col sm:items-end gap-1.5">
                <div className="flex gap-0.5 text-terracotta">
                  {[...Array(REVIEWS[activeIndex].rating)].map((_, i) => (
                    <span key={i}>
                      <LucideIcon name="Star" className="w-4 h-4 fill-current" />
                    </span>
                  ))}
                </div>
                <span className="text-[10px] bg-terracotta/10 text-terracotta font-sans tracking-wider uppercase font-bold px-3 py-1 rounded-full">
                  {REVIEWS[activeIndex].type}
                </span>
              </div>
            </div>

            {/* Main Statement */}
            <h5 className="font-serif text-xl sm:text-2xl font-bold text-forest mb-4">
              "{REVIEWS[activeIndex].title}"
            </h5>

            <p className="text-charcoal/85 text-base sm:text-lg leading-relaxed font-sans font-light italic">
              {REVIEWS[activeIndex].comment}
            </p>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-8 bg-terracotta" : "w-2.5 bg-forest/15 hover:bg-forest/35"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
