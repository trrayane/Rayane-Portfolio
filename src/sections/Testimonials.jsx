import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Rayane is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Working with Rayane was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our entire team.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Rayane's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Not only is Rayane technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((p) => (p + 1) % testimonials.length);
  const prev = () => setActiveIdx((p) => (p - 1 + testimonials.length) % testimonials.length);

  const active = testimonials[activeIdx];

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-primary/4 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label reveal">What People Say</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 reveal reveal-delay-1">
            <span className="text-secondary-foreground">Kind words from </span>
            <span className="font-serif italic font-normal text-white/90">amazing people.</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto reveal reveal-delay-2">
          {/* Mini-grid of inactive testimonials (desktop hint) */}
          <div className="hidden lg:grid grid-cols-4 gap-3 mb-4">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`p-3 rounded-xl text-left transition-all duration-300 ${
                  i === activeIdx
                    ? "glass border border-primary/40 shadow-lg shadow-primary/10"
                    : "glass opacity-50 hover:opacity-75 border border-border/30"
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-7 h-7 rounded-full object-cover ring-1 ring-primary/20"
                  />
                  <span className="text-xs font-semibold truncate">{t.author}</span>
                </div>
                <p className="text-[10px] text-muted-foreground line-clamp-2 leading-relaxed">
                  "{t.quote.slice(0, 60)}…"
                </p>
              </button>
            ))}
          </div>

          {/* Main testimonial */}
          <div
            key={activeIdx}
            className="relative glass p-8 md:p-12 rounded-3xl glow-border animate-scale-in"
          >
            {/* Quote icon */}
            <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <Quote className="w-5 h-5 text-primary-foreground" />
            </div>

            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4 text-foreground/90">
              "{active.quote}"
            </blockquote>

            <div className="flex items-center gap-4">
              <img
                src={active.avatar}
                alt={active.author}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/30"
              />
              <div>
                <div className="font-semibold">{active.author}</div>
                <div className="text-sm text-muted-foreground">{active.role}</div>
              </div>

              {/* Stars */}
              <div className="ml-auto hidden sm:flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-primary text-primary" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-110"
              onClick={prev}
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIdx
                      ? "w-8 h-2 bg-primary"
                      : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-110"
              onClick={next}
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
