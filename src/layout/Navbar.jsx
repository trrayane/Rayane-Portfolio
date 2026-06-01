import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about",        label: "About" },
  { href: "#skills",       label: "Skills" },
  { href: "#projects",     label: "Projects" },
  { href: "#process",      label: "Process" },
  { href: "#contact",      label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled]             = useState(false);
  const [activeSection, setActiveSection]       = useState("");

  useEffect(() => {
    // Scroll detection
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Active section via IntersectionObserver
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const sections   = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => sectionObserver.observe(s));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 md:pt-4">
      <nav
        className={`container mx-auto max-w-6xl flex items-center justify-between rounded-2xl border px-4 md:px-5 transition-all duration-300 ${
          isScrolled
            ? "glass-strong border-border/60 py-2.5 shadow-xl shadow-black/30"
            : "glass border-border/40 py-3 shadow-lg shadow-black/10"
        }`}
      >
        {/* Logo */}
        <a href="#" className="group flex items-center gap-1">
          <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
            RT
          </span>
          <span className="text-xl font-bold text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1.5 flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  href={link.href}
                  key={link.href}
                  className={`relative px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA Button + theme toggle */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" className="btn-shine" onClick={() => window.location.href = "#contact"}>
            Hire Me
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden container mx-auto max-w-6xl mt-2 rounded-2xl glass-strong border border-border/50 shadow-xl shadow-black/30 animate-fade-in overflow-hidden">
          <div className="px-4 py-5 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-xl text-base transition-all ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2 border-t border-border/30">
              <Button
                className="w-full btn-shine"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
