import { LucideIcon } from "./LucideIcon";
import gardenBonfireImg from "../assets/images/garden_bonfire_1779779704644.png";

export function Introduction() {
  const stats = [
    { icon: "BedDouble", value: "3 Bedrooms", label: "Attached Bathrooms" },
    { icon: "Waves", value: "Private Pool", label: "7am – 10pm Access" },
    { icon: "Users", value: "12 Guests", label: "Perfect For Groups" },
    { icon: "Car", value: "Free Parking", label: "3 Cars On site" }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-cream text-charcoal relative overflow-hidden">
      {/* Subtle Botanical SVG Background Decors */}
      <div className="absolute top-0 left-0 w-32 h-32 text-forest/5 pointer-events-none transform -translate-x-12 -translate-y-12">
        <svg fill="currentColor" viewBox="0 0 100 100" className="w-full h-full">
          <path d="M10,90 Q30,60 80,40 T90,10 F" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Warm Lifestyle Image with rounded border and subtle frame */}
        <div className="col-span-1 lg:col-span-5 relative group">
          <div className="absolute -inset-2 bg-forest/5 rounded-3xl transform rotate-3 scale-[1.02] transition-transform duration-500 group-hover:rotate-1" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-forest/10">
            <img
              src={gardenBonfireImg}
              alt="Warm sunny patio and garden at Bellagio Villa Lonavala"
              className="w-full h-[32rem] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            {/* Soft vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
            
            {/* Host Badge card nested in the image corners */}
            <div className="absolute bottom-6 left-6 right-6 bg-warm-white/95 backdrop-blur-md p-5 rounded-xl text-left border border-cream/50 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-terracotta bg-forest/10 flex items-center justify-center font-serif text-lg font-bold text-forest">
                  R
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-forest leading-tight">Radhika Caretaker Co.</h4>
                  <p className="text-xs text-charcoal/70 font-sans">Superhost · Hosted with heart since 2021</p>
                </div>
              </div>
              <p className="text-xs text-charcoal/80 italic mt-3 font-serif">
                "Your mornings here start with gentle birdsong and soft Sahyadri mountain winds. I am here to make your getaway perfect."
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Copy/Content Block */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-terracotta"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans">
              Welcome to Your Private Oasis
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-forest leading-tight mb-6">
            Your Private Retreat in the Sahyadris
          </h2>

          <p className="text-charcoal/85 text-base sm:text-lg font-normal mb-6 leading-relaxed">
            Bellagio Villa is a spacious, designer <strong>3BHK boutique villa</strong> located in the peaceful upscale locale of <strong>Tungarli, Lonavala</strong>. Nestled in the heart of the Sahyadri mountains, the villa offers an exquisite blend of coastal European elegance and lush tropical greenery.
          </p>

          <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed mb-10">
            While completely isolated in your own quiet garden haven, you are strategically situated just <strong>5 minutes from Lonavala’s main market</strong> and <strong>10 minutes from the railway station</strong>. Designed to host up to <strong>12 guests comfortably</strong>, it's the absolute perfect destination for families seeking quiet bonding, group celebrations, or tranquil work-from-nature retreats.
          </p>

          {/* Detailed Stat/Highlights grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-forest/10 pt-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex gap-4 items-start group">
                <div className="p-3 bg-forest/10 text-forest rounded-xl group-hover:bg-forest group-hover:text-cream transition-all duration-300">
                  <LucideIcon name={stat.icon} className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-forest leading-tight">
                    {stat.value}
                  </h4>
                  <p className="text-xs text-charcoal/60 uppercase tracking-widest font-sans mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
