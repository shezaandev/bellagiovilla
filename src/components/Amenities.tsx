import { useState } from "react";
import { AMENITIES, AmenityItem } from "../data";
import { LucideIcon } from "./LucideIcon";

export function Amenities() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "leisure" | "essentials" | "dining">("all");

  const categorizeAmenity = (item: AmenityItem): "leisure" | "essentials" | "dining" => {
    const leisureKeywords = ["pool", "garden", "game", "speaker", "pet", "wi-fi", "bluetooth", "tv"];
    const culinaryKeywords = ["kitchen", "meal", "bbq", "barbeque", "kettle", "microwave"];
    
    const labelLower = item.label.toLowerCase();
    
    if (leisureKeywords.some(kw => labelLower.includes(kw))) return "leisure";
    if (culinaryKeywords.some(kw => labelLower.includes(kw))) return "dining";
    return "essentials";
  };

  const filteredAmenities = AMENITIES.filter((item) => {
    const matchesSearch =
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());

    const category = categorizeAmenity(item);
    const matchesCategory = selectedCategory === "all" || category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="amenities" className="py-24 sm:py-32 bg-cream text-charcoal scroll-mt-10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title & Beautiful Botanical Leaf SVG Divider */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold font-sans">
              Boutique Luxuries
            </span>
          </div>
          <h2 className="font-serif text-3.5xl sm:text-5xl font-normal text-forest leading-tight mb-4">
            Everything You Need
          </h2>
          
          {/* Botanical SVG Divider */}
          <div className="flex justify-center items-center gap-3 text-terracotta my-6">
            <div className="h-[1px] w-20 bg-terracotta/30" />
            <svg className="w-8 h-8 opacity-80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 1.83-.62 3.51-1.66 4.86z"/>
            </svg>
            <svg className="w-6 h-6 rotate-45 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C8 10 9 21 9 21s11-1 12-10a12 12 0 0 0-4-3zM9 21s-1-11-10-12a12 12 0 0 0 3 4C3 20 9 21 9 21z"/>
            </svg>
            <div className="h-[1px] w-20 bg-terracotta/30" />
          </div>

          <p className="text-charcoal/70 text-base font-light font-sans max-w-lg mx-auto">
            From your own private blue sanctuary pool to bespoke culinary service by our live-in caretaker team.
          </p>
        </div>

        {/* Search Bar & Categorization Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-warm-white p-5 rounded-2xl border border-forest/5 shadow-sm">
          {/* Quick Categories */}
          <div className="flex flex-wrap gap-2.5 justify-center md:justify-start w-full md:w-auto">
            {(["all", "leisure", "essentials", "dining"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedCategory(tab)}
                className={`px-5 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-300 font-sans cursor-pointer ${
                  selectedCategory === tab
                    ? "bg-forest text-cream shadow"
                    : "bg-cream hover:bg-forest/5 text-forest"
                }`}
              >
                {tab === "all" && "All Luxuries"}
                {tab === "leisure" && "Leisure & Fun"}
                {tab === "essentials" && "Stay Essentials"}
                {tab === "dining" && "Kitchen & Culinary"}
              </button>
            ))}
          </div>

          {/* Text Search Input */}
          <div className="relative w-full md:w-80">
            <LucideIcon
              name="User" // we will use fallback map or specific icon
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40"
            />
            {/* Standard magnifying glass representation - wait, let's just make the text input look beautiful */}
            <input
              type="text"
              placeholder="Search amenities (e.g., Wi-Fi)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-6 pr-4 py-2.5 bg-cream/75 border border-forest/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:bg-warm-white transition-all text-charcoal"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-charcoal/50 hover:text-charcoal uppercase font-bold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Amenities Responsive Grid Grid */}
        {filteredAmenities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAmenities.map((item, index) => (
              <div
                key={index}
                className="bg-warm-white/90 p-6 rounded-2xl border border-forest/5 hover:border-forest/20 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4 hover:-translate-y-0.5"
              >
                {/* Icon Backdrop */}
                <div className="p-3 bg-forest/5 text-forest rounded-xl flex-shrink-0 border border-forest/5">
                  <LucideIcon name={item.iconName} className="w-6 h-6 text-forest-light" />
                </div>

                {/* Text Context */}
                <div className="text-left">
                  <h4 className="font-serif text-lg font-bold text-forest mb-1 leading-tight">
                    {item.label}
                  </h4>
                  <p className="text-charcoal/70 text-xs sm:text-sm font-sans font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-warm-white rounded-3xl border border-dashed border-forest/20 max-w-md mx-auto">
            <LucideIcon name="Compass" className="w-12 h-12 text-terracotta mx-auto mb-4 animate-spin" />
            <h4 className="font-serif text-xl font-medium text-forest mb-1">No Matching Amenities</h4>
            <p className="text-charcoal/60 text-sm font-sans px-6">
              Try adjusting your lookup terms or clearing the tags to display our full 15 estate luxuries.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
