import { useState } from "react";
import { X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import testImg from "@/assets/placeholder.svg";

const categories = ["All", "Weddings", "Pre-Wedding", "Baby Shoot", "Events"];

const images = [
  // Weddings
  { src: "/images/weddings/gal-1.jpg", category: "Weddings", alt: "Wedding Photography 1" },
  { src: "/images/weddings/gal-2.jpg", category: "Weddings", alt: "Wedding Photography 2" },
  { src: "/images/weddings/gal-3.jpg", category: "Weddings", alt: "Wedding Photography 3" },
  { src: "/images/weddings/gal-4.jpg", category: "Weddings", alt: "Wedding Photography 4" },
  // Pre-Wedding
  { src: "/images/pre-wedding/gal-1.jpg", category: "Pre-Wedding", alt: "Pre-Wedding Shoot 1" },
  { src: "/images/pre-wedding/gal-2.jpg", category: "Pre-Wedding", alt: "Pre-Wedding Shoot 2" },
  { src: "/images/pre-wedding/gal-3.jpg", category: "Pre-Wedding", alt: "Pre-Wedding Shoot 3" },
  // Baby Shoot
  { src: "/images/baby/gal-1.jpg", category: "Baby Shoot", alt: "Baby Photography 1" },
  { src: "/images/baby/gal-2.jpg", category: "Baby Shoot", alt: "Baby Photography 2" },
  { src: "/images/baby/gal-3.jpg", category: "Baby Shoot", alt: "Baby Photography 3" },
  // Events
  { src: "/images/events/gal-1.jpg", category: "Events", alt: "Event Coverage 1" },
  { src: "/images/events/gal-2.jpg", category: "Events", alt: "Event Coverage 2" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <div className="pt-24">
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Gallery" subtitle="Browse through our finest work" />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === cat
                    ? "bg-gold-gradient text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filtered.map((img, i) => (
              <div
                key={`${img.alt}-${i}`}
                onClick={() => setLightbox(img.src)}
                className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="font-heading text-primary text-lg font-semibold">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Preview"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
