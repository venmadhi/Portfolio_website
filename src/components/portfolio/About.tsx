import { SectionHeading } from "./SectionHeading";
import { Sparkles, Target, Zap } from "lucide-react";

const stats = [
  { value: "8.26", label: "CGPA" },
  { value: "3+", label: "Full-Stack Projects" },
  { value: "5+", label: "Hackathons" },
  { value: "10+", label: "Technologies" },
];

const pillars = [
  { icon: Sparkles, title: "Curious Builder", desc: "Learning by doing — shipping real projects across web, AI, and AR." },
  { icon: Target, title: "User-Focused", desc: "Designing responsive, accessible experiences that feel effortless to use." },
  { icon: Zap, title: "Adaptable", desc: "Comfortable across React, Django, Spring Boot, and the cloud stack." },
];

export const About = () => (
  <section id="about" className="section-padding relative">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="About"
        title="Crafting digital experiences with intent"
        description="I'm a passionate full-stack developer with a strong interest in building scalable, AI-powered web platforms. I love translating ideas into responsive interfaces — and I'm constantly expanding my backend, DevOps, and design toolkit."
      />

      <div className="grid md:grid-cols-3 gap-5 mb-16">
        {pillars.map((p, i) => (
          <div
            key={p.title}
            className="glow-card p-7 animate-fade-in-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
              <p.icon size={20} className="text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="glow-card p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">{s.value}</div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
