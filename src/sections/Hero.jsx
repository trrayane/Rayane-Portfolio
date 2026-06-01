import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaEnvelope } from "react-icons/fa6";
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

// ── Code editor showcase ────────────────────────────────────────────────────
const K  = ({ children }) => <span style={{ color: "#c792ea" }}>{children}</span>; // keyword
const Vr = ({ children }) => <span style={{ color: "#82aaff" }}>{children}</span>; // variable / type
const Pr = ({ children }) => <span style={{ color: "#5ccfe0" }}>{children}</span>; // property
const St = ({ children }) => <span style={{ color: "#c3e88d" }}>{children}</span>; // string
const Bo = ({ children }) => <span style={{ color: "#f78c6c" }}>{children}</span>; // boolean
const Mu = ({ children }) => <span style={{ color: "#8b949e" }}>{children}</span>; // punctuation

const codeLines = [
  <><K>const</K> <Vr>rayane</Vr><Mu>:</Mu> <Vr>Dev</Vr> <Mu>= {"{"}</Mu></>,
  <>{"  "}<Pr>name</Pr><Mu>:</Mu> <St>"Rayane Terki"</St><Mu>,</Mu></>,
  <>{"  "}<Pr>role</Pr><Mu>:</Mu> <St>"Full-Stack Engineer"</St><Mu>,</Mu></>,
  <>{"  "}<Pr>stack</Pr><Mu>: {"{"}</Mu></>,
  <>{"    "}<Pr>frontend</Pr><Mu>:</Mu> <Mu>[</Mu><St>"React"</St><Mu>,</Mu> <St>"Next.js"</St><Mu>,</Mu> <St>"TS"</St><Mu>],</Mu></>,
  <>{"    "}<Pr>backend</Pr><Mu>:</Mu> <Mu>[</Mu><St>"Node"</St><Mu>,</Mu> <St>"Python"</St><Mu>,</Mu> <St>"NestJS"</St><Mu>],</Mu></>,
  <>{"    "}<Pr>infra</Pr><Mu>:</Mu> <Mu>[</Mu><St>"Docker"</St><Mu>,</Mu> <St>"AWS"</St><Mu>,</Mu> <St>"Linux"</St><Mu>],</Mu></>,
  <>{"  "}<Mu>{"},"}</Mu></>,
  <>{"  "}<Pr>focus</Pr><Mu>:</Mu> <Mu>[</Mu><St>"Backend"</St><Mu>,</Mu> <St>"AI"</St><Mu>,</Mu> <St>"Security"</St><Mu>],</Mu></>,
  <>{"  "}<Pr>available</Pr><Mu>:</Mu> <Bo>true</Bo><Mu>,</Mu></>,
  <><Mu>{"};"}</Mu></>,
];

const CodeShowcase = () => (
  <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
    {/* Glow */}
    <div className="absolute -inset-6 bg-gradient-to-br from-primary/15 via-accent/5 to-transparent blur-3xl pointer-events-none" />

    <div className="relative rounded-xl overflow-hidden border border-border/60 bg-[#0d1117] shadow-2xl shadow-black/40">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 pt-3 bg-[#161b22] border-b border-border/60">
        <div className="flex items-center gap-2 pb-3">
          <span className="w-3 h-3 rounded-full bg-red-500/90" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/90" />
          <span className="w-3 h-3 rounded-full bg-green-500/90" />
        </div>
        <span className="ml-3 px-3 py-1.5 rounded-t-md bg-[#0d1117] border-t-2 border-primary text-[#c9d1d9] text-xs font-mono">
          developer.ts
        </span>
      </div>

      {/* Code body */}
      <div className="flex p-4 font-mono text-[12.5px] leading-[1.7] overflow-x-auto">
        {/* Line numbers */}
        <div className="select-none pr-4 text-right" style={{ color: "#6e7681" }}>
          {codeLines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        {/* Code */}
        <div className="min-w-0">
          {codeLines.map((line, i) => (
            <div key={i} className="whitespace-pre">
              {line}
              {i === codeLines.length - 1 && (
                <span className="inline-block w-[7px] h-[15px] bg-primary animate-blink align-middle ml-1 rounded-[1px]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

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
            </div>

            {/* Heading */}
            <div className="space-y-5 animate-fade-in animation-delay-100">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                Crafting{" "}
                <span className="gradient-text glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-foreground">
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
              — Full-Stack Developer focused on backend engineering and security.
              I build secure, scalable, high-performance web apps.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" className="btn-shine" onClick={() => window.location.href = "#contact"}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton href="/Rayane-Terki-CV.pdf" download>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Inline stats strip */}
            <div className="flex items-center gap-6 pt-2 animate-fade-in animation-delay-400">
              {[
                { value: "2+",  label: "Years" },
                { value: "20+", label: "Projects" },
                { value: "20+", label: "Tech" },
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
                  { icon: FaGithub,   href: "https://github.com/trrayane",        label: "GitHub" },
                  { icon: FaEnvelope, href: "mailto:rayaneterki55@gmail.com",      label: "Email" },
                ].map(({ icon: Icon, href, label }) => {
                  const external = href.startsWith("http");
                  return (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary hover:border-primary/30 border border-transparent transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── RIGHT ─────────────────────────────────────── */}
          <div className="relative animate-fade-in animation-delay-300">
            <CodeShowcase />
          </div>
        </div>

      </div>

    </section>
  );
};
