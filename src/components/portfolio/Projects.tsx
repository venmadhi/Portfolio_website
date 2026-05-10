import { SectionHeading } from "./SectionHeading";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Smart Trip Planner",
    tag: "Full-Stack Travel Planning Platform",
    year: "2025",
    desc: "An intelligent trip planning application that helps users organize personalized travel itineraries based on destination, budget, and preferences. Features real-time location suggestions, itinerary management, hotel and transport recommendations, and an interactive user-friendly dashboard built on a scalable full-stack architecture.",
    impact: "Smart itinerary generation + seamless travel management",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST API"],
    featured: true,
    github: "https://github.com/venmadhi/Trip_Planner.git",
  },
  {
    title: "LogisticsApp",
    tag: "Courier & Delivery Management",
    year: "2025",
    desc: "A courier logistics platform with a clean React frontend and real-time package tracking via Google Maps API. Building a Node.js backend for live delivery updates.",
    impact: "Real-time tracking & route visualization",
    tech: ["React.js", "Tailwind CSS", "Google Maps API", "Leaflet.js", "Node.js"],
    github: "https://github.com/venmadhi/Logistics.git",
  },
  {
    title: "Product Comparison App",
    tag: "REST API Web Application",
    year: "2024",
    desc: "Full-stack product comparison tool to analyze features and pricing. Built RESTful APIs with Spring Boot, tested with Postman, documented via Swagger, with efficient matching logic.",
    impact: "Documented APIs + responsive comparison UI",
    tech: ["React.js", "Spring Boot", "REST APIs", "Swagger", "Postman"],
    github: "https://github.com/venmadhi/ProductComparision.git",
  },
];

export const Projects = () => (
  <section id="projects" className="section-padding relative">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="Hands-on builds spanning AI, AR, real-time systems, and full-stack applications."
      />

      <div className="grid gap-6">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`glow-card p-7 md:p-9 group animate-fade-in-up ${
              p.featured ? "md:p-12 relative overflow-hidden" : ""
            }`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {p.featured && (
              <>
                <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-accent/15 blur-3xl" />
              </>
            )}
            <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-start">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  {p.featured && (
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-gradient-primary text-primary-foreground">
                      Featured
                    </span>
                  )}
                  <span className="text-xs font-mono text-muted-foreground">{p.year}</span>
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-1 group-hover:text-gradient transition-all">
                  {p.title}
                </h3>
                <p className="text-sm text-primary-glow font-mono mb-4">{p.tag}</p>
                <p className="text-muted-foreground leading-relaxed mb-5 max-w-2xl">{p.desc}</p>
                <p className="text-sm text-foreground/80 mb-5 italic">→ {p.impact}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex md:flex-col gap-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg glass hover:border-primary/50 transition-all"
                  aria-label="View details"
                >
                  <ExternalLink size={16} />
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg glass hover:border-primary/50 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
