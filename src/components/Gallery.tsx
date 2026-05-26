import React, { useState } from "react";
import { GALLERY_IMAGES, GalleryItem } from "../data";
import { LucideIcon } from "./LucideIcon";

export function Gallery() {
  const [filter, setFilter] = useState<"all" | "exterior" | "pool-garden" | "rooms" | "living" | "dining">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter corresponding items
  const filteredImages = GALLERY_IMAGES.filter((img) => {
    if (filter === "all") return true;
    return img.category === filter;
  });

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-warm-white text-charcoal scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Gallery Headers */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold font-sans">
              Visual Narrative
            </span>
          </div>
          <h2 className="font-serif text-3.5xl sm:text-5xl font-normal italic text-forest leading-tight mb-4">
            Life at Bellagio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto mb-6"></div>
          <p className="text-charcoal/70 text-base font-light font-sans max-w-md mx-auto leading-relaxed">
            Take a look inside our serene sanctuary. Click on any thumbnail image to pop open the immersive full-bleed slideshow.
          </p>
        </div>

        {/* Filter Navigation Links */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {[
            { tag: "all", name: "All Spaces" },
            { tag: "exterior", name: "Estate Facade" },
            { tag: "pool-garden", name: "Pool & Bonfires" },
            { tag: "rooms", name: "Bedrooms" },
            { tag: "living", name: "Grand Living" },
            { tag: "dining", name: "Kitchen" }
          ].map((category) => (
            <button
              key={category.tag}
              onClick={() => {
                setFilter(category.tag as any);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-300 font-sans cursor-pointer ${
                filter === category.tag
                  ? "bg-forest text-cream shadow"
                  : "bg-cream/70 hover:bg-forest/5 text-forest"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Fluid Masonry-Like Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setLightboxIndex(index)}
              className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer group transform hover:-translate-y-1 transition-all duration-500 border border-cream"
            >
              {/* Image element */}
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Black Tint Overlay with text on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left" />

              {/* Text Information displayed on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
                <span className="text-[9px] bg-terracotta text-cream font-sans tracking-widest uppercase font-bold px-2 py-0.5 rounded-full">
                  {image.category.replace("-", " ")}
                </span>
                <h4 className="font-serif text-lg text-cream mt-2 leading-snug">
                  {image.caption}
                </h4>
              </div>

              {/* Elegant Expand Icon on corners */}
              <div className="absolute top-4 right-4 p-2 bg-cream/10 backdrop-blur-xs rounded-full border border-cream/20 text-cream opacity-0 group-hover:opacity-100 transition-all duration-300 shadow">
                <LucideIcon name="Compass" className="w-4 h-4" /> {/* magnifying icon placeholder */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Immersive CSS Lightbox Slideshow Panel */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col justify-between p-6 transition-all duration-300 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between text-cream h-16 relative">
            <div className="text-left font-serif text-lg text-cream/80">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
            
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-3 bg-cream/10 hover:bg-cream/20 rounded-full border border-cream/20 text-cream transition-colors cursor-pointer select-none"
            >
              <LucideIcon name="X" className="w-5 h-5" />
            </button>
          </div>

          {/* Main Visual Carousel Area */}
          <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full group">
            
            {/* Left Button */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 p-4 bg-cream/10 hover:bg-cream/20 rounded-full border border-cream/20 text-cream transition-colors z-30 cursor-pointer select-none"
              aria-label="Previous image"
            >
              <LucideIcon name="ChevronLeft" className="w-6 h-6" />
            </button>

            {/* Lightbox Main Image */}
            <img
              src={filteredImages[lightboxIndex].url}
              alt={filteredImages[lightboxIndex].caption}
              className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300 select-none border border-cream/5"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />

            {/* Right Button */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 p-4 bg-cream/10 hover:bg-cream/20 rounded-full border border-cream/20 text-cream transition-colors z-30 cursor-pointer select-none"
              aria-label="Next image"
            >
              <LucideIcon name="ChevronRight" className="w-6 h-6" />
            </button>
          </div>

          {/* Captions Detail Overlay */}
          <div className="h-24 flex flex-col justify-center items-center text-center text-cream max-w-xl mx-auto">
            <span className="text-xs text-terracotta uppercase tracking-[0.2em] font-bold font-sans">
              {filteredImages[lightboxIndex].category.replace("-", " ")}
            </span>
            <p className="font-serif text-lg sm:text-xl font-light text-cream/90 mt-1.5 leading-relaxed">
              {filteredImages[lightboxIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
