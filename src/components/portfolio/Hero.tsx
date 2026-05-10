import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const phrases = ["Full-Stack Developer", "Full Stack Developer", "AI/AR Tinkerer", "UI/UX Enthusiast"];

export const Hero = () => {
  const [text, setText] = useState("");
  const [pi, setPi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[pi % phrases.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1400);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setPi((p) => p + 1);
          }
        }
      },
      deleting ? 40 : 90
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, pi]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-glow-pulse" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary-glow animate-glow-pulse" />
            Available for opportunities
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6 animate-fade-in-up">
            <span className="text-gradient">Venmadhi K</span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-6 font-mono h-8 animate-fade-in" style={{ animationDelay: "150ms" }}>
            <span className="text-foreground">{text}</span>
            <span className="text-primary-glow animate-blink">|</span>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: "250ms" }}>
            I build responsive, user-focused digital experiences — blending clean React frontends with
            real-time APIs, AI integrations, and thoughtful UI/UX. Currently a B.Tech IT student at SKCET
            crafting platforms that ship.
          </p>

          <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: "350ms" }}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] transition-all"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:border-primary/50 font-medium transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-5 animate-fade-in" style={{ animationDelay: "450ms" }}>
            <a href="https://www.linkedin.com/in/venmadhi-k" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary-glow transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/venmadhi-k" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary-glow transition-colors">
              <Github size={20} />
            </a>
            <a href="mailto:kvenmadhi@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary-glow transition-colors">
              <Mail size={20} />
            </a>
            <span className="h-4 w-px bg-border" />
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
              <MapPin size={12} /> Coimbatore, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
