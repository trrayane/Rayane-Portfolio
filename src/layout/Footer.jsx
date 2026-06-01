import { FaGithub, FaEnvelope } from "react-icons/fa6";

const socialLinks = [
  { icon: FaGithub,   href: "https://github.com/trrayane",   label: "GitHub" },
  { icon: FaEnvelope, href: "mailto:rayaneterki55@gmail.com", label: "Email" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/40">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground order-2 sm:order-1">
          © {currentYear}{" "}
          <span className="text-foreground font-semibold">Rayane Terki</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-2 order-1 sm:order-2">
          {socialLinks.map((social) => {
            const external = social.href.startsWith("http");
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="p-2.5 rounded-full glass text-muted-foreground border border-border/40 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
