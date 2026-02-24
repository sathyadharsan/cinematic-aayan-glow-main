import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import testImg from "@/assets/placeholder.svg";

const services = [
  {
    title: "Wedding Photography",
    img: "/images/weddings/gal-1.jpg",
    desc: "We capture every ritual, every emotion, and every detail of your wedding day with a cinematic approach. From the bridal prep to the grand ceremony, our team ensures nothing is missed.",
    price: "Starting from \u20B925,000",
  },
  {
    title: "Pre-Wedding Shoots",
    img: "/images/pre-wedding/gal-1.jpg",
    desc: "Romantic, creative, and beautifully staged pre-wedding shoots at stunning locations. We turn your love story into a visual masterpiece.",
    price: "Starting from \u20B910,000",
  },
  {
    title: "Baby & Kids Photography",
    img: "/images/baby/gal-1.jpg",
    desc: "Adorable setups, safe environments, and endless patience \u2014 we create timeless portraits of your little ones that you'll cherish forever.",
    price: "Starting from \u20B95,000",
  },
  {
    title: "Birthday & Events Coverage",
    img: "/images/events/gal-1.jpg",
    desc: "From milestone birthdays to corporate events, we provide professional coverage with candid and posed photography that captures the spirit of your celebration.",
    price: "Starting from \u20B98,000",
  },
  {
    title: "Outdoor Cinematic Shoots",
    img: "/images/pre-wedding/gal-2.jpg",
    desc: "Golden hour magic at handpicked outdoor locations. We create dramatic, film-inspired visuals that stand out in every frame.",
    price: "Starting from \u20B912,000",
  },
  {
    title: "Album Design & Video Editing",
    img: "/images/weddings/gal-2.jpg",
    desc: "Premium album layouts, cinematic highlight videos, and professional post-production. We transform raw footage into polished art pieces.",
    price: "Starting from \u20B97,000",
  },
];

const Services = () => {
  return (
    <div className="pt-24">
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Services" subtitle="Comprehensive photography solutions for every occasion" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((s) => (
              <div key={s.title} className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/40 transition-all duration-500">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <p className="text-primary font-semibold text-sm mb-4">{s.price}</p>
                  <Button asChild variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10 w-full">
                    <Link to="/contact">Enquire Now</Link>
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

export default Services;
