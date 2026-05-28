import { useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink, Star, X, Clock, Eye, Bell, Home, ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Healy",
    description:
      "An intelligent health platform that helps users track symptoms, get AI-driven health insights, and connect with practitioners in real time. Features a secure patient dashboard, ML-powered recommendations, appointment scheduling, and end-to-end encrypted medical records.",
    shortDesc: "AI-powered health platform with smart insights & real-time consultations.",
    image: "/projects/healy.png",
    tags: ["React", "Python", "AI / ML", "FastAPI", "PostgreSQL"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "2048-SDL",
    description:
      "A high-performance implementation of the 2048 puzzle game built in C with SDL2. Features smooth tile animations, score tracking, responsive keyboard controls, and a clean game loop — runs natively on Linux/Windows. A deep dive into game development without a framework.",
    shortDesc: "2048 game built in C with SDL2 — native, fast, and smooth.",
    image: "/projects/project1.png",
    tags: ["C", "SDL2", "Game Dev", "Algorithms"],
    link: "#",
    github: "https://github.com/trrayane",
  },
  {
    title: "Assembly Calculator",
    description:
      "A fully functional arithmetic calculator written entirely in x86 Assembly. Demonstrates deep understanding of CPU registers, memory stack, system calls, and instruction sets — built as part of computer architecture studies.",
    shortDesc: "x86 Assembly calculator with full arithmetic ops.",
    image: "/projects/project2.png",
    tags: ["Assembly", "x86", "Low-Level", "Systems"],
    link: "#",
    github: "#",
  },
  {
    title: "SummarAI",
    description:
      "A production-ready LLM summarisation workspace powered by Google Gemini and LangChain. Upload PDFs/Word docs, paste text, or drop URLs and get clean structured summaries streamed in real time via SSE. Multiple style modes, a full analytics dashboard, source-type breakdown, and searchable history.",
    shortDesc: "Gemini + LangChain summariser — PDFs, URLs, streaming, analytics.",
    image: "/projects/summarai.png",
    images: ["/projects/summarai.png", "/projects/summarai-2.png"],
    tags: ["Python", "FastAPI", "LangChain", "Gemini", "MySQL"],
    link: "#",
    github: "https://github.com/trrayane/SummarAI",
  },
  {
    title: "Project Management Tool",
    description:
      "A real-time collaborative workspace for dev teams. Features Kanban boards, live task updates via WebSockets, role-based access control, GitHub integration for commit tracking, and a MongoDB-backed REST API.",
    shortDesc: "Real-time Kanban boards with WebSockets & GitHub integration.",
    image: "/projects/project4.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
  {
    title: "Rayane Labs",
    description:
      "A full-stack peripherals e-commerce platform tailored for the Algerian market — keyboards, mice, audio, and displays. Features advanced filtering (brand, price, hot-swap, RGB, wireless), JWT authentication with bcrypt, Supabase-backed catalog, file uploads, rate-limited APIs, dark mode, and nationwide cash-on-delivery shipping across 58 wilayas.",
    shortDesc: "Peripherals e-commerce for Algeria — React + Express + Supabase.",
    image: "/projects/rayane-ecomm.png",
    images: ["/projects/rayane-ecomm.png", "/projects/rayane-ecomm-2.png"],
    tags: ["React", "Vite", "Express", "Supabase", "JWT", "Docker"],
    link: "#",
    github: "https://github.com/trrayane/Rayane-ecomm",
  },
];

// ── Coming Soon button ───────────────────────────────────────────────────────
const ComingSoonBtn = ({ icon: Icon, label }) => (
  <div className="relative group/cs cursor-not-allowed">
    <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-border/50 text-muted-foreground text-sm font-medium opacity-60 select-none">
      <Icon className="w-4 h-4" />
      {label}
    </div>
    {/* Tooltip */}
    <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs text-foreground whitespace-nowrap opacity-0 group-hover/cs:opacity-100 transition-opacity pointer-events-none shadow-lg z-10">
      <Clock className="w-3 h-3 inline mr-1 text-highlight" />
      Coming soon
    </div>
  </div>
);

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
            <span className="text-white">Something</span>{" "}
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

// ── Project Modal ────────────────────────────────────────────────────────────
const ProjectModal = ({ project, onClose }) => {
  const hasLive   = project.link   && project.link   !== "#";
  const hasGithub = project.github && project.github !== "#";

  // Gallery state — supports `images: []` array, falls back to single `image`
  const gallery = project.images && project.images.length > 0
    ? project.images
    : [project.image];
  const [imgIdx, setImgIdx] = useState(0);
  const prevImg = () => setImgIdx((i) => (i - 1 + gallery.length) % gallery.length);
  const nextImg = () => setImgIdx((i) => (i + 1) % gallery.length);

  // Lock body scroll + Escape/Arrow keys
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (gallery.length > 1) {
        if (e.key === "ArrowLeft")  prevImg();
        if (e.key === "ArrowRight") nextImg();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, gallery.length]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

      {/* Modal panel */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-strong border border-border/50 shadow-2xl shadow-black/50 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image header / gallery */}
        <div className="relative overflow-hidden rounded-t-3xl group">
          <div className="aspect-video relative bg-card flex items-center justify-center">
            <img
              key={imgIdx}
              src={gallery[imgIdx]}
              alt={`${project.title} — ${imgIdx + 1}/${gallery.length}`}
              className="max-w-full max-h-full w-auto h-auto object-contain animate-fade-in"
              onError={(e) => {
                e.currentTarget.parentElement.innerHTML =
                  `<div class="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-background flex items-center justify-center"><span class="text-5xl font-bold gradient-text opacity-30">${project.title[0]}</span></div>`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Gallery arrows — only when multiple images */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImg(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass border border-border/50 text-white opacity-0 group-hover:opacity-100 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImg(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass border border-border/50 text-white opacity-0 group-hover:opacity-100 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Counter — top-left */}
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full glass border border-border/50 text-xs font-mono text-white/80 z-10">
                {imgIdx + 1} / {gallery.length}
              </div>
            </>
          )}

          {/* Gradient title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {project.featured && (
              <div className="flex items-center gap-1.5 mb-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold">
                  <Star className="w-3 h-3 fill-current" /> Featured
                </span>
              </div>
            )}
            <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full glass border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>

          {/* Tech stack */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {hasLive ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all hover:scale-105 btn-shine shadow-lg shadow-primary/20"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            ) : (
              <ComingSoonBtn icon={ExternalLink} label="Live Demo" />
            )}

            {hasGithub ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-border hover:border-primary/40 hover:text-primary text-sm font-medium transition-all hover:scale-105"
              >
                <FaGithub className="w-4 h-4" />
                View Source
              </a>
            ) : (
              <ComingSoonBtn icon={FaGithub} label="View Source" />
            )}
          </div>

          {/* Coming soon notice */}
          {(!hasLive || !hasGithub) && (
            <p className="text-xs text-muted-foreground/60 flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-highlight" />
              Some links will be available once the project is published.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Browser frame (Mac-style chrome wrapper for screenshots) ─────────────────
const slugForUrl = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const BrowserFrame = ({ project, compact = false, children }) => {
  const url = project.url || `${slugForUrl(project.title)}.app`;
  return (
    <div className="relative w-full h-full flex flex-col bg-card">
      {/* Top chrome bar */}
      <div className={`flex items-center gap-2 ${compact ? "px-2.5 py-1.5" : "px-3 py-2"} bg-[#0a0e13] border-b border-border/60`}>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className={`${compact ? "w-2 h-2" : "w-2.5 h-2.5"} rounded-full bg-red-500/60`} />
          <span className={`${compact ? "w-2 h-2" : "w-2.5 h-2.5"} rounded-full bg-yellow-500/60`} />
          <span className={`${compact ? "w-2 h-2" : "w-2.5 h-2.5"} rounded-full bg-green-500/60`} />
        </div>
        <div className={`flex-1 ${compact ? "ml-1 px-2 py-0.5" : "mx-2 px-2.5 py-1"} rounded-md bg-background/70 border border-border/50 flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground/80 min-w-0`}>
          <Lock className="w-2.5 h-2.5 text-emerald-400/80 flex-shrink-0" />
          <span className="truncate">{url}</span>
        </div>
      </div>
      {/* Content */}
      <div className="relative flex-1 min-h-0 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

// ── Featured card ────────────────────────────────────────────────────────────
const FeaturedCard = ({ project, onClick }) => (
  <div
    className="group glass rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500 cursor-pointer hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/10 reveal"
    onClick={onClick}
  >
    <div className="grid md:grid-cols-5 gap-0">
      {/* Image */}
      <div className="relative md:col-span-3 overflow-hidden aspect-video md:aspect-auto">
        <BrowserFrame project={project}>
          <div className="relative w-full h-full bg-card flex items-center justify-center min-h-[200px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              onError={(e) => {
                e.currentTarget.parentElement.classList.add(
                  "bg-gradient-to-br", "from-primary/20", "via-accent/10", "to-background"
                );
                e.currentTarget.remove();
              }}
            />
            {/* Featured badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg shadow-primary/30">
                <Star className="w-3 h-3 fill-current" /> Featured
              </span>
            </div>
            {/* Subtle dim on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            {/* View details pill */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/30">
                <Eye className="w-4 h-4" /> View details
              </div>
            </div>
          </div>
        </BrowserFrame>
      </div>

      {/* Content */}
      <div className="md:col-span-2 p-8 flex flex-col justify-center gap-5">
        <div>
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
            {project.shortDesc}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
        </div>
        <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
          View project <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  </div>
);

// ── Regular card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, delay, onClick }) => (
  <div
    className="group glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/8 cursor-pointer reveal"
    style={{ transitionDelay: `${delay}ms` }}
    onClick={onClick}
  >
    <div className="relative aspect-video overflow-hidden">
      <BrowserFrame project={project} compact>
        <div className="relative w-full h-full bg-card flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            onError={(e) => {
              e.currentTarget.parentElement.classList.add(
                "bg-gradient-to-br","from-primary/15","via-accent/10","to-background"
              );
              e.currentTarget.style.display = "none";
            }}
          />
          {/* Subtle dim on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
          {/* View details pill */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/30">
              <Eye className="w-4 h-4" /> View details
            </div>
          </div>
        </div>
      </BrowserFrame>
    </div>

    <div className="p-5 space-y-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold group-hover:text-primary transition-colors leading-tight">
          {project.title}
        </h3>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-0.5" />
      </div>
      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
        {project.shortDesc}
      </p>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.tags.slice(0, 3).map((t) => <span key={t} className="tag-pill">{t}</span>)}
        {project.tags.length > 3 && (
          <span className="tag-pill text-muted-foreground/40">+{project.tags.length - 3}</span>
        )}
      </div>
    </div>
  </div>
);

// ── Section ──────────────────────────────────────────────────────────────────
export const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [featured, ...rest]     = projects;

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="section-label reveal">Featured Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 reveal reveal-delay-1">
            <span className="text-secondary-foreground">Projects that </span>
            <span className="font-serif italic font-normal text-white/90">make an impact.</span>
          </h2>
          <p className="text-muted-foreground reveal reveal-delay-2">
            Click any project to explore details, tech stack, and links.
          </p>
        </div>

        {/* Featured */}
        <div className="mb-8">
          <FeaturedCard project={featured} onClick={() => setSelected(featured)} />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <ProjectCard key={i} project={p} delay={i * 100} onClick={() => setSelected(p)} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 reveal">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>

      {/* Coming Soon page if no GitHub link, otherwise project details modal */}
      {selected && (
        !selected.github || selected.github === "#"
          ? <ComingSoonPage project={selected} onClose={() => setSelected(null)} />
          : <ProjectModal   project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};
