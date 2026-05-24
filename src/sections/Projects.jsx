import { useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink, Star, X, Clock, Eye } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "2048-SDL",
    description:
      "A high-performance implementation of the 2048 puzzle game built in C with SDL2. Features smooth tile animations, score tracking, responsive keyboard controls, and a clean game loop — runs natively on Linux/Windows. A deep dive into game development without a framework.",
    shortDesc: "2048 game built in C with SDL2 — native, fast, and smooth.",
    image: "/projects/project1.png",
    tags: ["C", "SDL2", "Game Dev", "Algorithms"],
    link: "#",
    github: "https://github.com/trrayane",
    featured: true,
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
      "An intelligent text summarisation web app powered by LLM APIs (OpenAI/Mistral). Paste any article, document, or URL and get a clean structured summary with key points. Built with React frontend and a FastAPI backend for low-latency processing.",
    shortDesc: "AI-powered text summarisation using LLMs + FastAPI.",
    image: "/projects/project3.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "#",
    github: "#",
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

// ── Project Modal ────────────────────────────────────────────────────────────
const ProjectModal = ({ project, onClose }) => {
  const hasLive   = project.link   && project.link   !== "#";
  const hasGithub = project.github && project.github !== "#";

  // Lock body scroll + Escape key
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
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

      {/* Modal panel */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-strong border border-border/50 shadow-2xl shadow-black/50 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image header */}
        <div className="relative overflow-hidden rounded-t-3xl">
          <div className="aspect-video relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.parentElement.innerHTML =
                  `<div class="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-background flex items-center justify-center"><span class="text-5xl font-bold gradient-text opacity-30">${project.title[0]}</span></div>`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          </div>

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

// ── Featured card ────────────────────────────────────────────────────────────
const FeaturedCard = ({ project, onClick }) => (
  <div
    className="group glass rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500 cursor-pointer hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/10 reveal"
    onClick={onClick}
  >
    <div className="grid md:grid-cols-5 gap-0">
      {/* Image */}
      <div className="relative md:col-span-3 overflow-hidden aspect-video md:aspect-auto">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.parentElement.classList.add(
              "bg-gradient-to-br", "from-primary/20", "via-accent/10", "to-background",
              "flex", "items-center", "justify-center", "min-h-[200px]"
            );
            e.currentTarget.remove();
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/80 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent md:hidden" />

        <div className="absolute top-4 left-4 flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
            <Star className="w-3 h-3 fill-current" /> Featured Project
          </span>
        </div>

        {/* Click hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 text-sm font-medium backdrop-blur-sm">
            <Eye className="w-4 h-4" /> View details
          </div>
        </div>
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
    <div className="relative overflow-hidden aspect-video">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => {
          e.currentTarget.parentElement.classList.add(
            "bg-gradient-to-br","from-primary/15","via-accent/10","to-background",
            "flex","items-center","justify-center"
          );
          e.currentTarget.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-70" />

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 text-sm font-medium text-white">
          <Eye className="w-4 h-4" /> View details
        </div>
      </div>
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
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 reveal reveal-delay-1">
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

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};
