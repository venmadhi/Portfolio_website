import { SectionHeading } from "./SectionHeading";
import { GraduationCap, Award, Trophy } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "B.Tech — Information Technology",
    place: "Sri Krishna College of Engineering and Technology",
    period: "2023 — 2027",
    score: "CGPA 8.26",
  },
  {
    icon: GraduationCap,
    title: "12th Grade",
    place: "Green Garden HR. SEC School",
    period: "2022 — 2023",
    score: "93.7%",
  },
  {
    icon: GraduationCap,
    title: "10th Grade",
    place: "Shri Vethathiri Vidhyalaya Matric. HR. SEC School",
    period: "2020 — 2021",
    score: "91%",
  },
];

const participation = [
  { date: "March 2025", title: "VIT Empower Tech", sub: "Technical Expo" },
  { date: "March 2025", title: "SAP Hackathon", sub: "College Round Participant" },
  { date: "Aug 2024 & 2025", title: "SKCET SIH", sub: "Internal Hackathon Round" },
];

export const Education = () => (
  <section id="education" className="section-padding relative">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Education & Achievements"
        title="Learning, building, competing"
      />

      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
            <Award size={18} className="text-primary-glow" /> Education
          </h3>
          <div className="relative pl-6 border-l border-border space-y-6">
            {education.map((e, i) => (
              <div
                key={i}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gradient-primary shadow-[0_0_15px_hsl(var(--primary)/0.6)]" />
                <div className="glow-card p-5">
                  <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                    <h4 className="font-semibold">{e.title}</h4>
                    <span className="text-xs font-mono text-primary-glow">{e.score}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{e.place}</p>
                  <p className="text-xs font-mono text-muted-foreground mt-2">{e.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
            <Trophy size={18} className="text-primary-glow" /> Participation
          </h3>
          <div className="space-y-4">
            {participation.map((p, i) => (
              <div
                key={i}
                className="glow-card p-5 flex items-start gap-4 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-xs font-mono text-primary-glow whitespace-nowrap pt-1">
                  {p.date}
                </div>
                <div>
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-muted-foreground">{p.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
