import { SectionHeading } from "./SectionHeading";
import { Code2, Palette, Server, Wrench, Brain, Mic } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: Server,
    title: "Backend & Languages",
    skills: ["Java", "Python", "C++", "Node.js", "Django", "Spring Boot"],
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    skills: ["Figma", "Wireframing", "Prototyping"],
  },
  {
    icon: Wrench,
    title: "DevOps & Cloud",
    skills: ["Git & GitHub", "Docker", "AWS Cloud", "REST APIs"],
  },
  {
    icon: Brain,
    title: "AI / Data",
    skills: ["Python ML", "PostgreSQL", "AR Toolkit"],
  },
  {
    icon: Mic,
    title: "Soft Skills",
    skills: ["Problem Solving", "Critical Thinking", "Public Speaking", "Presentation"],
  },
];

export const Skills = () => (
  <section id="skills" className="section-padding relative">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Skills"
        title="A toolkit that ships"
        description="From pixel-perfect interfaces to production-ready APIs — here's the stack I work with daily."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <div
            key={g.title}
            className="glow-card p-6 animate-fade-in-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center">
                <g.icon size={18} className="text-primary-glow" />
              </div>
              <h3 className="font-display font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs font-mono px-3 py-1.5 rounded-full bg-secondary/60 border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
