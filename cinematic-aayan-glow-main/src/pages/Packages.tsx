import { Link } from "react-router-dom";
import { Check, X as XIcon, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const packages = [
  {
    name: "Basic Package",
    price: "₹15,000",
    featured: false,
    features: [
      { text: "4 Hours Coverage", included: true },
      { text: "100 Edited Photos", included: true },
      { text: "Online Gallery", included: true },
      { text: "Album Included", included: false },
      { text: "Drone Coverage", included: false },
      { text: "Highlight Video", included: false },
    ],
  },
  {
    name: "Standard Package",
    price: "₹35,000",
    featured: true,
    features: [
      { text: "8 Hours Coverage", included: true },
      { text: "300 Edited Photos", included: true },
      { text: "Online Gallery", included: true },
      { text: "Premium Album", included: true },
      { text: "Drone Coverage", included: false },
      { text: "Highlight Video", included: true },
    ],
  },
  {
    name: "Premium Package",
    price: "₹65,000",
    featured: false,
    features: [
      { text: "Full Day Coverage", included: true },
      { text: "500+ Edited Photos", included: true },
      { text: "Online Gallery", included: true },
      { text: "Luxury Album", included: true },
      { text: "Drone Coverage", included: true },
      { text: "Cinematic Highlight Video", included: true },
    ],
  },
];

const Packages = () => {
  return (
    <div className="pt-24">
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Packages" subtitle="Choose the perfect plan for your special occasion" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-card rounded-lg border overflow-hidden transition-all duration-500 hover:gold-border-glow ${
                  pkg.featured ? "border-primary gold-glow scale-[1.02]" : "border-border"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-gold-gradient text-primary-foreground text-xs font-semibold text-center py-1.5 tracking-wider uppercase flex items-center justify-center gap-1">
                    <Star className="w-3 h-3" /> Most Popular
                  </div>
                )}
                <div className={`p-8 text-center ${pkg.featured ? "pt-12" : ""}`}>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-8">{pkg.price}</p>
                  <div className="flex flex-col gap-3 mb-8">
                    {pkg.features.map((f) => (
                      <div key={f.text} className="flex items-center gap-3 text-sm">
                        {f.included ? (
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        ) : (
                          <XIcon className="w-4 h-4 text-muted-foreground/40 flex-shrink-0" />
                        )}
                        <span className={f.included ? "text-foreground" : "text-muted-foreground/40"}>
                          {f.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    className={`w-full font-semibold ${
                      pkg.featured
                        ? "bg-gold-gradient text-primary-foreground hover:opacity-90"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <Link to="/contact">Book This Package</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
