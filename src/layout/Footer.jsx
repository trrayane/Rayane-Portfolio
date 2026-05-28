import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: FaGithub,   href: "https://github.com/trrayane", label: "GitHub" },
  { icon: FaLinkedin, href: "#",                            label: "LinkedIn" },
  { icon: FaXTwitter, href: "#",                            label: "Twitter" },
];

const footerLinks = [
  { href: "#about",      label: "About" },
  { href: "#skills",     label: "Skills" },
  { href: "#projects",   label: "Projects" },
  { href: "#process",    label: "Process" },
  { href: "#contact",    label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/40">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="group inline-flex items-center gap-0.5 mb-2">
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                RT
              </span>
              <span className="text-xl font-bold text-primary">.</span>
            </a>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Rayane Terki. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1 justify-center md:justify-start">
              Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> and lots of ☕
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20 transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
