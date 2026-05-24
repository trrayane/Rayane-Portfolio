import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

// ── Typewriter hook ─────────────────────────────────────────────────────────
const useTypewriter = (words, typeSpeed = 75, deleteSpeed = 40, pause = 1800) => {
  const [text, setText]           = useState("");
  const [wordIdx, setWordIdx]     = useState(0);
  const [isTyping, setIsTyping]   = useState(true);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;

    if (isTyping) {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), typeSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), pause);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), deleteSpeed);
      } else {
        setIsTyping(true);
        setWordIdx((p) => (p + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, isTyping, wordIdx, words, typeSpeed, deleteSpeed, pause]);

  return text;
};

const roles = [
  "Full-Stack Engineer",
  "Backend Developer",
  "Security Enthusiast",
  "AI Integrations Dev",
];

// ── Terminal card ───────────────────────────────────────────────────────────
const terminalLines = [
  { type: "cmd",  text: "whoami" },
  { type: "out",  text: "rayane@terki  →  Full-Stack Engineer" },
  { type: "gap" },
  { type: "cmd",  text: "cat skills.json" },
  { type: "json", text: "[" },
  { type: "json", text: '  "React", "Next.js", "TypeScript",' },
  { type: "json", text: '  "Node.js", "Python", "Docker", "AWS"' },
  { type: "json", text: "]" },
  { type: "gap" },
  { type: "cmd",  text: "git status" },
  { type: "ok",   text: "✓  open_to_work: true" },
];

const TerminalCard = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= terminalLines.length) return;
    const delay = terminalLines[visibleCount]?.type === "gap" ? 200 : 350;
    const t = setTimeout(() => setVisibleCount((p) => p + 1), delay);
    return () => clearTimeout(t);
  }, [visibleCount]);

  return (
    <div className="terminal-card w-full">
      {/* Header */}
      <div className="terminal-header">
        <span className="terminal-dot bg-red-500" />
        <span className="terminal-dot bg-yellow-400" />
        <span className="terminal-dot bg-green-500" />
        <span className="ml-3 text-xs text-muted-foreground font-mono flex items-center gap-1.5">
          <Terminal className="w-3 h-3" />
          terminal
        </span>
      </div>

      {/* Body */}
      <div className="terminal-body select-none">
        {terminalLines.slice(0, visibleCount).map((line, i) => {
          if (line.type === "gap") return <div key={i} className="h-2" />;
          if (line.type === "cmd")
            return (
              <div key={i} className="flex items-center gap-2 animate-fade-in">
                <span className="text-primary font-semibold">$</span>
                <span className="text-foreground">{line.text}</span>
              </div>
            );
          if (line.type === "out")
            return (
              <div key={i} className="pl-4 text-muted-foreground animate-fade-in">
                {line.text}
              </div>
            );
          if (line.type === "json")
            return (
              <div key={i} className="pl-4 text-green-400 animate-fade-in">
                {line.text}
              </div>
            );
          if (line.type === "ok")
            return (
              <div key={i} className="pl-4 text-emerald-400 font-semibold animate-fade-in">
                {line.text}
              </div>
            );
          return null;
        })}

        {/* Blinking cursor */}
        {visibleCount >= terminalLines.length && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-primary font-semibold">$</span>
            <span className="w-2 h-4 bg-primary animate-blink inline-block rounded-sm" />
          </div>
        )}
      </div>
    </div>
  );
};

// ── Skills marquee ──────────────────────────────────────────────────────────
const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Node.js", "Express.js", "NestJS", "Django", "FastAPI", "Laravel",
  "PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma",
  "REST APIs", "GraphQL", "WebSockets", "JWT", "OAuth2",
  "Docker", "Nginx", "GitHub Actions", "AWS", "Vercel", "Linux",
];

// ── Component ───────────────────────────────────────────────────────────────
export const Hero = () => {
  const typedRole = useTypewriter(roles);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/75 to-background" />
      </div>

      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width:  i % 5 === 0 ? "4px" : "2px",
              height: i % 5 === 0 ? "4px" : "2px",
              backgroundColor: i % 7 === 0 ? "#a855f7" : "#22d3b8",
              opacity: 0.4 + Math.random() * 0.4,
              left:  `${Math.random() * 100}%`,
              top:   `${Math.random() * 100}%`,
              animation: `slow-drift ${16 + Math.random() * 18}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── LEFT ──────────────────────────────────────── */}
          <div className="space-y-8">
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2.5 animate-fade-in">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-sm border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-primary font-medium">Available for new projects</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass text-xs border border-border/40 text-muted-foreground">
                <span className="text-base">📍</span>
                Based in Algeria — Remote worldwide
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-3 animate-fade-in animation-delay-100">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Crafting{" "}
                <span className="gradient-text glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white/90">
                  precision.
                </span>
              </h1>

              {/* Typewriter role */}
              <div className="flex items-center gap-2 h-8">
                <span className="text-lg text-muted-foreground font-mono">
                  {">"}&nbsp;
                </span>
                <span className="text-lg font-mono text-primary font-medium">
                  {typedRole}
                </span>
                <span className="w-0.5 h-5 bg-primary animate-blink rounded-full" />
              </div>
            </div>

            {/* Description */}
            <p className="text-base text-muted-foreground max-w-lg leading-relaxed animate-fade-in animation-delay-200">
              Hi, I'm{" "}
              <span className="text-foreground font-semibold">Rayane Terki</span>{" "}
              — a Full-Stack Developer passionate about backend engineering and
              cybersecurity. I build secure, scalable, and high-performance web
              applications with modern technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" className="btn-shine" onClick={() => window.location.href = "#contact"}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                Find me on
              </span>
              <div className="flex items-center gap-2">
                {[
                  { icon: FaGithub,   href: "https://github.com/trrayane", label: "GitHub" },
                  { icon: FaLinkedin, href: "#",                             label: "LinkedIn" },
                  { icon: FaXTwitter, href: "#",                             label: "Twitter" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary hover:border-primary/30 border border-transparent transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT ─────────────────────────────────────── */}
          <div className="flex flex-col gap-5 animate-fade-in animation-delay-300">

            {/* Photo card */}
            <div className="relative max-w-sm mx-auto lg:mx-0 lg:ml-auto w-full">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/10 to-primary/5 blur-2xl" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/projects/IMG_1351.jpg"
                  alt="Rayane Terki"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Badge — available */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float border border-border/50 shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>

                {/* Badge — experience */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500 border border-primary/20 shadow-xl">
                  <div className="text-2xl font-bold gradient-text">2+</div>
                  <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div>
              </div>
            </div>

            {/* Terminal card */}
            <div className="max-w-sm mx-auto lg:mx-0 lg:ml-auto w-full animate-fade-in animation-delay-500">
              <TerminalCard />
            </div>
          </div>
        </div>

        {/* ── SKILLS MARQUEE ──────────────────────────────── */}
        <div className="mt-24 animate-fade-in animation-delay-600">
          <p className="text-xs text-muted-foreground mb-6 text-center uppercase tracking-widest font-medium">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-6 py-3 mx-1 rounded-full glass border border-border/40 hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                >
                  <span className="text-sm font-medium text-muted-foreground/70 hover:text-primary whitespace-nowrap transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-muted-foreground/30 group-hover:border-primary/50 flex items-start justify-center pt-1.5 transition-colors">
            <div className="w-1 h-2 bg-muted-foreground group-hover:bg-primary rounded-full animate-bounce transition-colors" />
          </div>
        </a>
      </div>
    </section>
  );
};
