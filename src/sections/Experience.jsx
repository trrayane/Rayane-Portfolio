import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "2023 — Present",
    role: "Full-Stack Engineer",
    company: "Freelance / Open Source",
    description:
      "Building full-stack web applications for clients — REST & GraphQL APIs, React frontends, containerized deployments. Contributing to open-source projects and developing personal AI-integrated tools.",
    technologies: ["React", "Node.js", "TypeScript", "Docker", "PostgreSQL"],
    current: true,
  },
  {
    period: "2022 — 2023",
    role: "Backend Developer",
    company: "Personal Projects & Internship",
    description:
      "Designed and implemented scalable backend systems using Express.js and NestJS. Built authentication flows (JWT/OAuth2), integrated third-party APIs, and deployed on AWS and Vercel.",
    technologies: ["NestJS", "Express", "JWT", "AWS", "MongoDB"],
    current: false,
  },
  {
    period: "2021 — 2022",
    role: "Junior Web Developer",
    company: "Self-taught / University Projects",
    description:
      "Developed dynamic web applications as part of computer science studies. Explored frontend frameworks (React), backend basics (Node.js), and databases (MySQL, MongoDB).",
    technologies: ["React", "Node.js", "MySQL", "PHP", "Bootstrap"],
    current: false,
  },
  {
    period: "2020 — 2021",
    role: "Systems & Low-Level Programming",
    company: "Academic — CS Fundamentals",
    description:
      "Deep dive into systems programming: C, x86 Assembly, memory management, and algorithm design. Built projects including a game engine with SDL2 and an assembly-level calculator.",
    technologies: ["C", "Assembly", "SDL2", "Linux", "Algorithms"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="section-label reveal">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 reveal reveal-delay-1">
            <span className="text-secondary-foreground">Experience that </span>
            <span className="font-serif italic font-normal text-white/90">speaks volumes.</span>
          </h2>
          <p className="text-muted-foreground reveal reveal-delay-2">
            A timeline of my professional growth — from low-level systems
            programming to full-stack engineering and AI-driven applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-glow absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/80 via-primary/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-14">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative grid md:grid-cols-2 gap-6 md:gap-12 reveal reveal-delay-${Math.min(idx + 1, 4)}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-6 md:top-8 -translate-x-1/2 z-10">
                  <div className="relative w-4 h-4 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    {exp.current && (
                      <>
                        <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" />
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </>
                    )}
                    {!exp.current && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    )}
                  </div>
                </div>

                {/* Card — alternating sides on desktop */}
                <div
                  className={`pl-12 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right md:col-start-1"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="group glass p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
                    {/* Period */}
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                      <Briefcase className="w-3 h-3" />
                      {exp.period}
                      {exp.current && (
                        <span className="ml-1 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[10px]">
                          Current
                        </span>
                      )}
                    </span>

                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground mb-4">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Tech tags */}
                    <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tag-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
