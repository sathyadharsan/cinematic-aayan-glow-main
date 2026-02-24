interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ title, subtitle, className = "" }: SectionHeadingProps) => (
  <div className={`text-center mb-12 ${className}`}>
    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gold-gradient mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div className="w-20 h-[2px] bg-gold-gradient mx-auto mt-6" />
  </div>
);

export default SectionHeading;
