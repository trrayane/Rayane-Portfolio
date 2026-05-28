import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download, Terminal, MapPin } from "lucide-react";
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
  { type: "cmd",  text: "cat stack.json" },
  { type: "json", text: "{" },
  { type: "json", text: '  "frontend": ["React", "Next.js", "TS"],' },
  { type: "json", text: '  "backend":  ["Node", "Python", "NestJS"],' },
  { type: "json", text: '  "infra":    ["Docker", "AWS", "Linux"]' },
  { type: "json", text: "}" },
  { type: "gap" },
  { type: "cmd",  text: "git status --porcelain" },
  { type: "ok",   text: "open_to_work: true" },
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

      {/* Floating particles — quieter */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width:  i % 5 === 0 ? "3px" : "2px",
              height: i % 5 === 0 ? "3px" : "2px",
              backgroundColor: i % 6 === 0 ? "#a855f7" : "#22d3b8",
              opacity: 0.25 + Math.random() * 0.25,
              left:  `${Math.random() * 100}%`,
              top:   `${Math.random() * 100}%`,
              animation: `slow-drift ${20 + Math.random() * 18}s ease-in-out infinite`,
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
                <MapPin className="w-3.5 h-3.5 text-primary/70" />
                Based in Algeria — Remote worldwide
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-5 animate-fade-in animation-delay-100">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                Crafting{" "}
                <span className="gradient-text glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white/90">
                  precision.
                </span>
              </h1>

              {/* Typewriter role — inside subtle pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass border border-primary/15 max-w-fit">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70">
                  Role
                </span>
                <span className="w-px h-3 bg-border/60" />
                <span className="text-sm font-mono text-primary font-medium min-w-0">
                  {typedRole}
                </span>
                <span className="w-0.5 h-3.5 bg-primary animate-blink rounded-full" />
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

            {/* Inline stats strip */}
            <div className="flex items-center gap-6 pt-2 animate-fade-in animation-delay-400">
              {[
                { value: "2+",  label: "Years" },
                { value: "30+", label: "Projects" },
                { value: "20+", label: "Stack" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-6">
                  <div>
                    <div className="text-2xl font-bold text-foreground leading-none">
                      {s.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1.5 font-medium">
                      {s.label}
                    </div>
                  </div>
                  {i < 2 && <span className="w-px h-9 bg-border/60" />}
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-500">
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
          <div className="relative animate-fade-in animation-delay-300">
            {/* Soft glow behind terminal */}
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/15 via-accent/5 to-transparent blur-3xl pointer-events-none" />

            {/* Terminal card */}
            <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto w-full">
              <TerminalCard />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
