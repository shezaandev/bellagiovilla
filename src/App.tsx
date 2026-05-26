import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { Rooms } from "./components/Rooms";
import { Amenities } from "./components/Amenities";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Gallery } from "./components/Gallery";
import { BookingContact } from "./components/BookingContact";
import { LocationBox } from "./components/LocationBox";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal flex flex-col antialiased">
      {/* Dynamic Scrolled Header */}
      <Header />

      {/* Main Single Page Layout Content */}
      <main className="flex-1">
        
        {/* Section 1: Hero Section */}
        <Hero />

        {/* Section 2: About / Introduction Section */}
        <Introduction />

        {/* Section 3: Rooms & Spaces Showcases */}
        <Rooms />

        {/* Section 4: Amenities Icon Grid and filter search */}
        <Amenities />

        {/* Section 5: Experience onsite & local activities */}
        <Experience />

        {/* Section 6: Testimonials reviews & rating metrics */}
        <Testimonials />

        {/* Section 7: Masonry photo gallery & Lightbox */}
        <Gallery />

        {/* Section 8: Direct reservation / email Contact */}
        <BookingContact />

        {/* Section 9: Embedded Maps Address Copy panel */}
        <LocationBox />

      </main>

      {/* Section 10: Dark Green Footer */}
      <Footer />
    </div>
  );
}
