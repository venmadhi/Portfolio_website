export const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) => (
  <div className="max-w-2xl mb-16">
    <div className="inline-flex items-center gap-2 text-xs font-mono text-primary-glow mb-4 uppercase tracking-widest">
      <span className="w-6 h-px bg-primary-glow" />
      {eyebrow}
    </div>
    <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4">
      <span className="text-gradient">{title}</span>
    </h2>
    {description && (
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{description}</p>
    )}
  </div>
);
