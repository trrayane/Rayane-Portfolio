import { useEffect, useState } from "react";
import { ArrowUpRight, X, Bell, Home, Eye, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Healy",
    featured: true,
    description:
      "An intelligent health platform that helps users track symptoms, get AI-driven health insights, and connect with practitioners in real time. Features a secure patient dashboard, ML-powered recommendations, appointment scheduling, and end-to-end encrypted medical records.",
    shortDesc: "AI-powered health platform with smart insights & real-time consultations.",
    tags: ["React", "Python", "AI / ML", "FastAPI", "PostgreSQL"],
    github: "#",
  },
  {
    title: "2048-SDL",
    description:
      "A high-performance implementation of the 2048 puzzle game built in C with SDL2. Features smooth tile animations, score tracking, responsive keyboard controls, and a clean game loop — runs natively on Linux/Windows. A deep dive into game development without a framework.",
    shortDesc: "2048 game built in C with SDL2 — native, fast, and smooth.",
    tags: ["C", "SDL2", "Game Dev", "Algorithms"],
    github: "https://github.com/trrayane",
  },
  {
    title: "Assembly Calculator",
    description:
      "A fully functional arithmetic calculator written entirely in x86 Assembly. Demonstrates deep understanding of CPU registers, memory stack, system calls, and instruction sets — built as part of computer architecture studies.",
    shortDesc: "x86 Assembly calculator with full arithmetic ops.",
    tags: ["Assembly", "x86", "Low-Level", "Systems"],
    github: "#",
  },
  {
    title: "SummarAI",
    description:
      "A production-ready LLM summarisation workspace powered by Google Gemini and LangChain. Upload PDFs/Word docs, paste text, or drop URLs and get clean structured summaries streamed in real time via SSE. Multiple style modes, a full analytics dashboard, source-type breakdown, and searchable history.",
    shortDesc: "Gemini + LangChain summariser — PDFs, URLs, streaming, analytics.",
    tags: ["Python", "FastAPI", "LangChain", "Gemini", "MySQL"],
    github: "https://github.com/trrayane/SummarAI",
  },
  {
    title: "Project Management Tool",
    description:
      "A real-time collaborative workspace for dev teams. Features Kanban boards, live task updates via WebSockets, role-based access control, GitHub integration for commit tracking, and a MongoDB-backed REST API.",
    shortDesc: "Real-time Kanban boards with WebSockets & GitHub integration.",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    github: "#",
  },
  {
    title: "Rayane Labs",
    description:
      "A full-stack peripherals e-commerce platform tailored for the Algerian market — keyboards, mice, audio, and displays. Features advanced filtering (brand, price, hot-swap, RGB, wireless), JWT authentication with bcrypt, Supabase-backed catalog, file uploads, rate-limited APIs, dark mode, and nationwide cash-on-delivery shipping across 58 wilayas.",
    shortDesc: "Peripherals e-commerce for Algeria — React + Express + Supabase.",
    tags: ["React", "Vite", "Express", "Supabase", "JWT", "Docker"],
    github: "https://github.com/trrayane/Rayane-ecomm",
  },
];

// ── Multi-sun icon (used by Coming Soon page) ───────────────────────────────
const SunIcon = ({ size = 80, color = "#22d3b8", filled = false, strokeWidth = 2 }) => {
  const center = size * 0.5;
  const ringRadius = size * 0.22;
  const rayInner = size * 0.32;
  const rayOuter = size * 0.46;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      {/* Center circle */}
      <circle
        cx={center}
        cy={center}
        r={ringRadius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill={filled ? color : "none"}
        fillOpacity={filled ? 0.15 : 0}
      />
      {/* Rays */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = center + Math.cos(angle) * rayInner;
        const y1 = center + Math.sin(angle) * rayInner;
        const x2 = center + Math.cos(angle) * rayOuter;
        const y2 = center + Math.sin(angle) * rayOuter;
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};

// ── Coming Soon Page (full-screen) ──────────────────────────────────────────
const ComingSoonPage = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const handleNotify = () => {
    onClose();
    setTimeout(() => {
      window.location.href = "#contact";
    }, 50);
  };

  return (
    <div className="fixed inset-0 z-[200] bg-background overflow-hidden animate-fade-in">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,184,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34,211,184,0.05) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Ambient glows — portfolio teal as main */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Drifting particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 4 === 0 ? "3px" : "2px",
              height: i % 4 === 0 ? "3px" : "2px",
              backgroundColor: i % 5 === 0 ? "#a855f7" : "#22d3b8",
              opacity: 0.3 + Math.random() * 0.3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${22 + Math.random() * 16}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Close button — top right */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-30 p-2.5 rounded-full glass border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Centered content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="text-center max-w-3xl w-full">

          {/* Multi-sun icon — rotating */}
          <div className="relative inline-flex items-center justify-center mb-10 h-28 w-32 animate-fade-in animation-delay-100">
            {/* Soft glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/15 to-accent/10 blur-3xl rounded-full scale-150" />

            {/* Big primary sun — spins slowly clockwise */}
            <div className="relative animate-spin-slow" style={{ animationDuration: "18s" }}>
              <SunIcon size={88} color="#22d3b8" filled />
            </div>

            {/* Small purple sun — top-right, reverse spin */}
            <div
              className="absolute -top-1 -right-2 animate-spin-reverse"
              style={{ animationDuration: "10s" }}
            >
              <SunIcon size={36} color="#a855f7" />
            </div>

            {/* Small orange sun — bottom-left, slow spin */}
            <div
              className="absolute -bottom-1 -left-2 animate-spin-slow"
              style={{ animationDuration: "14s" }}
            >
              <SunIcon size={30} color="#f97316" />
            </div>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6 animate-fade-in animation-delay-200">
            <span className="w-8 h-px bg-primary/70" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Coming Soon
            </span>
          </div>

          {/* Heading — tighter */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] mb-6 animate-fade-in animation-delay-300">
            <span className="text-foreground">Something</span>{" "}
            <span className="font-serif italic font-normal gradient-text glow-text">is coming</span>
          </h1>

          {/* Project name */}
          {project && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-border/40 mb-6 animate-fade-in animation-delay-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                <span className="text-primary font-semibold">Project:</span> {project.title}
              </span>
            </div>
          )}

          {/* Description — shorter */}
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-10 max-w-sm mx-auto animate-fade-in animation-delay-500">
            Working on it. Stay tuned for the reveal.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in animation-delay-600">
            <button
              onClick={handleNotify}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-xs font-bold uppercase tracking-[0.15em] hover:bg-primary/90 transition-all hover:scale-105 btn-shine shadow-lg shadow-primary/30"
            >
              <Bell className="w-4 h-4" />
              Get Notified
            </button>
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-border hover:border-primary/40 hover:text-primary text-xs font-bold uppercase tracking-[0.15em] transition-all hover:scale-105"
            >
              <Home className="w-4 h-4" />
              Back Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Status badge ─────────────────────────────────────────────────────────────
const StatusBadge = ({ status }) => {
  const styles = {
    Completed: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    "In Progress": "text-orange-400 bg-orange-500/10 border-orange-500/20",
  };
  return (
    <span
      className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold border ${styles[status] || styles.Completed}`}
    >
      {status}
    </span>
  );
};

// ── Project details modal ────────────────────────────────────────────────────
const ProjectModal = ({ project, onClose, onComingSoon }) => {
  const hasCode = project.github && project.github !== "#";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl glass-strong border border-border/50 shadow-2xl shadow-black/40 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 md:p-8 border-b border-border/50 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full glass border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="mb-3">
            <StatusBadge status={hasCode ? "Completed" : "In Progress"} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h2>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 space-y-6">
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {hasCode ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all hover:scale-105 btn-shine shadow-lg shadow-primary/20"
              >
                <FaGithub className="w-4 h-4" /> View Source
              </a>
            ) : (
              <button
                onClick={() => { onClose(); setTimeout(() => onComingSoon(project), 60); }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-border hover:border-primary/40 hover:text-primary text-sm font-medium transition-all hover:scale-105"
              >
                <FaGithub className="w-4 h-4" /> Code — Coming soon
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Project card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, delay, onView, onComingSoon }) => {
  const hasCode = project.github && project.github !== "#";
  // Status is derived from the GitHub link: linked → Completed, otherwise In Progress
  const status = hasCode ? "Completed" : "In Progress";
  // No repo → the whole card goes straight to Coming Soon
  const open = () => (hasCode ? onView(project) : onComingSoon(project));

  return (
    <div
      onClick={open}
      className={`group glass rounded-2xl border p-6 flex flex-col gap-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 cursor-pointer reveal ${
        project.featured
          ? "border-primary/30 hover:border-primary/50"
          : "border-border/50 hover:border-primary/30"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Featured ribbon */}
      {project.featured && (
        <span className="inline-flex items-center gap-1.5 self-start -mt-1 mb-0.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-[11px] font-semibold">
          <Star className="w-3 h-3 fill-current" /> Featured
        </span>
      )}

      {/* Header — title + status */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <StatusBadge status={status} />
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {project.shortDesc}
      </p>

      {/* Tags — portfolio teal */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
      </div>

      {/* Actions — View (details / coming soon) + Code (repo or coming soon) */}
      <div className="flex items-center gap-2 pt-1">
        <button
          onClick={(e) => { e.stopPropagation(); open(); }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all btn-shine shadow-lg shadow-primary/20"
        >
          <Eye className="w-4 h-4" /> View
        </button>

        {hasCode ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border border-border/60 text-sm font-medium hover:border-primary/40 hover:text-primary transition-all"
          >
            <FaGithub className="w-4 h-4" /> Code
          </a>
        ) : (
          <button
            onClick={(e) => { e.stopPropagation(); onComingSoon(project); }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/40 text-sm font-medium text-muted-foreground/50 hover:text-muted-foreground hover:border-border transition-all"
          >
            <FaGithub className="w-4 h-4" /> Code
          </button>
        )}
      </div>
    </div>
  );
};

// ── Section ──────────────────────────────────────────────────────────────────
export const Projects = () => {
  const [detail, setDetail] = useState(null);
  const [comingSoon, setComingSoon] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="section-label reveal">Featured Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 reveal reveal-delay-1">
            <span className="text-secondary-foreground">Projects that </span>
            <span className="font-serif italic font-normal text-foreground">make an impact.</span>
          </h2>
          <p className="text-muted-foreground reveal reveal-delay-2">
            A selection of things I've built — from frontend apps to low-level systems.
          </p>
        </div>

        {/* Uniform grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              project={p}
              delay={(i % 3) * 100}
              onView={setDetail}
              onComingSoon={setComingSoon}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 reveal">
          <AnimatedBorderButton href="https://github.com/trrayane">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>

      {/* Project details window */}
      {detail && (
        <ProjectModal
          project={detail}
          onClose={() => setDetail(null)}
          onComingSoon={setComingSoon}
        />
      )}

      {/* Coming Soon page for projects without a GitHub link */}
      {comingSoon && (
        <ComingSoonPage project={comingSoon} onClose={() => setComingSoon(null)} />
      )}
    </section>
  );
};
