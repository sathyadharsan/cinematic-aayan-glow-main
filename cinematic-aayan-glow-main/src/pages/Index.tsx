import { Link } from "react-router-dom";
import { ArrowRight, Star, Camera, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import testImg from "@/assets/placeholder.svg";
const services = [
  { icon: Camera, title: "Wedding Photography", desc: "Cinematic coverage of your most special day with emotion and elegance." },
  { icon: Heart, title: "Pre-Wedding Shoots", desc: "Romantic outdoor and studio shoots that tell your love story beautifully." },
  { icon: Users, title: "Baby & Kids", desc: "Adorable moments captured with warmth, care, and creative setups." },
];

const testimonials = [
  { name: "Priya & Karthik", text: "Sri Aayan captured our wedding like a dream. Every photo tells a story!", rating: 5 },
  { name: "Deepa Rajan", text: "The baby photoshoot was magical. So creative and patient with our little one.", rating: 5 },
  { name: "Mani & Lakshmi", text: "Professional, punctual, and the photos were absolutely stunning. Highly recommended!", rating: 5 },
];

const galleryImages = [
  { src: "/images/weddings/gal-1.jpg", alt: "Wedding" },
  { src: "/images/pre-wedding/gal-1.jpg", alt: "Pre-Wedding" },
  { src: "/images/baby/gal-1.jpg", alt: "Baby Shoot" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src="/images/hero/hero-bg.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Sri Aayan Photography
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Capturing Emotions.
            <br />
            <span className="text-gold-gradient">Freezing Memories.</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Wedding, Pre-Wedding, Baby & Event Photography in Tenkasi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Button asChild size="lg" className="bg-gold-gradient text-primary-foreground font-semibold tracking-wider hover:opacity-90 transition-opacity">
              <Link to="/contact">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10">
              <Link to="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading title="About Us" subtitle="A passionate team dedicated to storytelling through the lens" />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed mb-8">
              Sri Aayan Photography is a professional studio based in Tenkasi, specializing in wedding, baby, and event photography. We focus on storytelling, emotion, and cinematic visuals that you'll treasure forever.
            </p>
            <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              <Link to="/about">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-elevated py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Services" subtitle="Professional photography for every milestone" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/40 hover:gold-border-glow transition-all duration-500 group"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <s.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading title="Featured Work" subtitle="A glimpse into our portfolio" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {galleryImages.map((img) => (
              <div key={img.alt} className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="font-heading text-lg text-primary font-semibold">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              <Link to="/gallery">View Full Gallery <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-elevated py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading title="Client Stories" subtitle="What our clients say about us" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-6">"{t.text}"</p>
                <p className="font-heading text-foreground font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gold-gradient opacity-10" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-gold-gradient mb-6">
            Ready to Create Memories?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Let's discuss your special event and craft something extraordinary together.
          </p>
          <Button asChild size="lg" className="bg-gold-gradient text-primary-foreground font-semibold tracking-wider hover:opacity-90">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
