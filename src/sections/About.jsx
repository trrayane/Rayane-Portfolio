import { Code2, Lightbulb, Rocket, ShieldCheck } from "lucide-react";

const stats = [
  { value: "2+",   label: "Years of experience" },
  { value: "20+",  label: "Projects delivered" },
  { value: "15+",  label: "Technologies mastered" },
  { value: "100%", label: "Client satisfaction" },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-documented code that scales and stands the test of time.",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing every layer — frontend, backend, DB — for lightning-fast experiences.",
    color: "from-highlight/20 to-highlight/5",
    iconColor: "text-highlight",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Security-first mindset: JWT, OAuth2, input validation, and hardened APIs.",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying ahead with AI integrations, new frameworks, and cutting-edge tooling.",
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-400",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Stats row ──────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 reveal">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`stat-card text-center reveal reveal-delay-${i + 1}`}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Column ────────────────────────────────── */}
          <div className="space-y-8">
            <div className="reveal">
              <span className="section-label">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight reveal reveal-delay-1">
              <span className="text-secondary-foreground">Building the future,</span>
              <span className="font-serif italic font-normal text-white/90">
                {" "}one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed reveal reveal-delay-2">
              <p>
                I'm a Full-Stack Engineer with a strong focus on backend systems, AI
                integration, and cybersecurity. I specialize in building scalable,
                secure, and intelligent applications designed for real-world
                production environments.
              </p>
              <p>
                My expertise spans backend architecture, API design, and distributed
                systems using Node.js, TypeScript, and Python. I also integrate ML
                models and LLM-based features to create smarter user experiences.
              </p>
              <p>
                I'm particularly interested in system design, AI-driven applications,
                and secure software engineering — focusing on performance,
                reliability, and systems that scale while maintaining strong security.
              </p>
            </div>

            {/* Quote */}
            <div className="relative glass rounded-2xl p-6 glow-border reveal reveal-delay-3 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-l-2xl" />
              <p className="text-base font-medium italic text-foreground/90 pl-4">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* ── Right Column — Highlight cards ─────────────── */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className={`group glass p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 reveal reveal-delay-${idx + 1}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
