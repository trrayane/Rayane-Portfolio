import { Compass, LayoutGrid, Code2, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Compass,
    title: "Discover & Define",
    description:
      "Deep-dive into the problem space. Map requirements, constraints, and user needs before a single line of code gets written.",
    highlights: ["Requirements analysis", "Tech feasibility", "Scope alignment"],
    accent: "text-primary",
    glow: "from-primary/20 to-primary/0",
    border: "hover:border-primary/40",
  },
  {
    n: "02",
    icon: LayoutGrid,
    title: "Architect & Plan",
    description:
      "Design scalable system architecture, choose the right tools for the job, and lay out a clear technical roadmap.",
    highlights: ["System design", "Stack selection", "Sprint roadmap"],
    accent: "text-accent",
    glow: "from-accent/20 to-accent/0",
    border: "hover:border-accent/40",
  },
  {
    n: "03",
    icon: Code2,
    title: "Build & Iterate",
    description:
      "Ship clean, tested, well-documented code. Continuous feedback loops — every step visible, never a black box.",
    highlights: ["Clean code", "Test coverage", "Weekly demos"],
    accent: "text-emerald-400",
    glow: "from-emerald-500/20 to-emerald-500/0",
    border: "hover:border-emerald-400/40",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Deploy & Refine",
    description:
      "Production-ready deployments with CI/CD, monitoring, and post-launch support to keep things humming reliably.",
    highlights: ["CI/CD pipelines", "Monitoring", "Ongoing support"],
    accent: "text-highlight",
    glow: "from-highlight/20 to-highlight/0",
    border: "hover:border-highlight/40",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-20 md:py-32 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-label reveal">How I Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 reveal reveal-delay-1">
            <span className="text-secondary-foreground">A process forged by </span>
            <span className="font-serif italic font-normal text-foreground">engineering rigor.</span>
          </h2>
          <p className="text-muted-foreground reveal reveal-delay-2">
            Every project follows a structured workflow — from discovery to
            deployment. No shortcuts, no surprises, no black boxes.
          </p>
        </div>

        {/* Steps grid */}
        <div className="relative grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.n}
              className={`group relative glass rounded-3xl p-7 border border-border/40 ${step.border} transition-all duration-500 reveal hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Decorative blob */}
              <div
                className={`absolute -top-px -right-px w-40 h-40 bg-gradient-to-bl ${step.glow} rounded-full blur-3xl opacity-60 pointer-events-none`}
              />

              {/* Step number watermark */}
              <span
                className={`absolute top-6 right-6 font-serif italic text-5xl font-bold text-foreground/[0.04] group-hover:text-foreground/[0.08] transition-colors duration-500 select-none`}
              >
                {step.n}
              </span>

              {/* Icon */}
              <div
                className={`relative w-12 h-12 rounded-2xl glass border border-border/50 flex items-center justify-center ${step.accent} mb-5 group-hover:scale-110 transition-transform duration-500`}
              >
                <step.icon className="w-5 h-5" />
              </div>

              {/* Step label */}
              <p className={`relative text-[11px] font-semibold uppercase tracking-widest ${step.accent} mb-2`}>
                Step {step.n}
              </p>

              {/* Title */}
              <h3 className="relative text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="relative text-sm text-muted-foreground leading-relaxed mb-5">
                {step.description}
              </p>

              {/* Highlight bullets */}
              <ul className="relative space-y-2 pt-4 border-t border-border/30">
                {step.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 text-xs text-muted-foreground/90"
                  >
                    <span className={`w-1 h-1 rounded-full ${step.accent} bg-current`} />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Connector arrow — only on xl screens, not after the last card */}
              {idx < steps.length - 1 && (
                <div className="hidden xl:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 w-8 h-8 rounded-full glass border border-border/50 items-center justify-center text-primary/60 group-hover:text-primary group-hover:border-primary/40 transition-all duration-500">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-muted-foreground/60 mt-12 reveal">
          Transparent. Methodical. Built to last.
        </p>
      </div>
    </section>
  );
};
