import { Eye, Award, Aperture, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const highlights = [
  { icon: Eye, title: "Our Vision", desc: "To be the most sought-after photography studio in South Tamil Nadu, known for cinematic storytelling and heartfelt imagery." },
  { icon: Award, title: "Experience", desc: "With over 8 years of professional photography experience, we've covered 500+ weddings and events across Tamil Nadu." },
  { icon: Aperture, title: "Equipment", desc: "We use top-tier Canon & Sony mirrorless cameras, professional lighting, drone equipment, and state-of-the-art editing software." },
  { icon: Users, title: "Our Team", desc: "A dedicated team of photographers, cinematographers, and editors who are passionate about their craft." },
];

const team = [
  { name: "Aayan Kumar", role: "Lead Photographer" },
  { name: "Ravi Shankar", role: "Cinematographer" },
  { name: "Divya Priya", role: "Editor & Designer" },
  { name: "Karthik Raj", role: "Drone Operator" },
];

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="About Sri Aayan Photography"
            subtitle="Passionate storytellers behind the lens"
          />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Sri Aayan Photography is a professional studio based in Tenkasi specializing in wedding, baby, and event photography. We focus on storytelling, emotion, and cinematic visuals. Every frame we capture is a blend of artistry and authenticity — preserving the raw emotions of your most cherished moments.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-elevated py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {highlights.map((h) => (
              <div key={h.title} className="bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-all duration-300 group">
                <h.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{h.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading title="Meet Our Team" subtitle="The creative minds behind every shot" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((t) => (
              <div key={t.name} className="text-center group">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-secondary border-2 border-primary/30 mx-auto mb-4 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                  <Users className="w-10 h-10 text-primary/50" />
                </div>
                <h4 className="font-heading text-foreground font-semibold text-sm md:text-base">{t.name}</h4>
                <p className="text-muted-foreground text-xs md:text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
