import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiVite,
  SiNodedotjs, SiExpress, SiNestjs, SiPython, SiDjango, SiFastapi, SiLaravel, SiPhp,
  SiPostgresql, SiMongodb, SiMysql, SiRedis, SiPrisma, SiGraphql,
  SiDocker, SiNginx, SiGithubactions, SiVercel, SiLinux, SiGit,
  SiOpenai, SiTensorflow, SiKalilinux, SiBurpsuite, SiWireshark,
  SiC, SiCplusplus,
} from "react-icons/si";
import { FaShieldHalved, FaBolt, FaCode, FaCloud, FaBrain, FaAws } from "react-icons/fa6";

const categories = [
  {
    icon: FaCode,
    title: "Frontend",
    accent: "text-primary",
    bg: "from-primary/15 to-primary/0",
    border: "hover:border-primary/40",
    skills: [
      { name: "React",        Icon: SiReact,        color: "#61DAFB" },
      { name: "Next.js",      Icon: SiNextdotjs,    color: "#FFFFFF" },
      { name: "TypeScript",   Icon: SiTypescript,   color: "#3178C6" },
      { name: "JavaScript",   Icon: SiJavascript,   color: "#F7DF1E" },
      { name: "Tailwind CSS", Icon: SiTailwindcss,  color: "#06B6D4" },
      { name: "Vite",         Icon: SiVite,         color: "#646CFF" },
    ],
  },
  {
    icon: FaBolt,
    title: "Backend",
    accent: "text-accent",
    bg: "from-accent/15 to-accent/0",
    border: "hover:border-accent/40",
    skills: [
      { name: "Node.js",  Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express",  Icon: SiExpress,   color: "#FFFFFF" },
      { name: "NestJS",   Icon: SiNestjs,    color: "#E0234E" },
      { name: "Python",   Icon: SiPython,    color: "#3776AB" },
      { name: "Django",   Icon: SiDjango,    color: "#092E20" },
      { name: "FastAPI",  Icon: SiFastapi,   color: "#009688" },
      { name: "Laravel",  Icon: SiLaravel,   color: "#FF2D20" },
      { name: "PHP",      Icon: SiPhp,       color: "#777BB4" },
    ],
  },
  {
    icon: FaCloud,
    title: "Database & APIs",
    accent: "text-emerald-400",
    bg: "from-emerald-500/15 to-emerald-500/0",
    border: "hover:border-emerald-400/40",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB",    Icon: SiMongodb,    color: "#47A248" },
      { name: "MySQL",      Icon: SiMysql,      color: "#4479A1" },
      { name: "Redis",      Icon: SiRedis,      color: "#FF4438" },
      { name: "Prisma",     Icon: SiPrisma,     color: "#FFFFFF" },
      { name: "GraphQL",    Icon: SiGraphql,    color: "#E10098" },
    ],
  },
  {
    icon: FaShieldHalved,
    title: "DevOps & Tools",
    accent: "text-highlight",
    bg: "from-highlight/15 to-highlight/0",
    border: "hover:border-highlight/40",
    skills: [
      { name: "Docker",         Icon: SiDocker,         color: "#2496ED" },
      { name: "Nginx",          Icon: SiNginx,          color: "#009639" },
      { name: "GitHub Actions", Icon: SiGithubactions,  color: "#2088FF" },
      { name: "AWS",            Icon: FaAws,            color: "#FF9900" },
      { name: "Vercel",         Icon: SiVercel,         color: "#FFFFFF" },
      { name: "Linux",          Icon: SiLinux,          color: "#FCC624" },
      { name: "Git",            Icon: SiGit,            color: "#F05032" },
    ],
  },
  {
    icon: FaBrain,
    title: "AI & Security",
    accent: "text-fuchsia-400",
    bg: "from-fuchsia-500/15 to-fuchsia-500/0",
    border: "hover:border-fuchsia-400/40",
    skills: [
      { name: "OpenAI API", Icon: SiOpenai,     color: "#FFFFFF" },
      { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
      { name: "Kali Linux", Icon: SiKalilinux,  color: "#557C94" },
      { name: "Burp Suite", Icon: SiBurpsuite,  color: "#FF6633" },
      { name: "Wireshark",  Icon: SiWireshark,  color: "#1679A7" },
      { name: "C",          Icon: SiC,          color: "#A8B9CC" },
      { name: "C++",        Icon: SiCplusplus,  color: "#00599C" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label reveal">Tech Arsenal</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 reveal reveal-delay-1">
            <span className="text-secondary-foreground">Tools I use to </span>
            <span className="font-serif italic font-normal text-foreground">build things.</span>
          </h2>
          <p className="text-muted-foreground reveal reveal-delay-2">
            A curated stack — battle-tested in production.
          </p>
        </div>

        {/* Categories */}
        <div className="grid lg:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={cat.title}
              className={`group relative glass rounded-3xl p-7 border border-border/40 ${cat.border} transition-all duration-500 reveal hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Decorative gradient blob */}
              <div
                className={`absolute -top-px -right-px w-40 h-40 bg-gradient-to-bl ${cat.bg} rounded-full blur-3xl opacity-60 pointer-events-none`}
              />

              {/* Header row */}
              <div className="relative flex items-center gap-3 mb-6">
                <div className={`w-11 h-11 rounded-xl glass border border-border/50 flex items-center justify-center ${cat.accent}`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight">{cat.title}</h3>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium mt-0.5">
                    {cat.skills.length} technologies
                  </p>
                </div>
              </div>

              {/* Skill chips */}
              <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-chip group/chip flex items-center gap-2 px-3 py-2.5 rounded-xl bg-background/40 border border-border/30 hover:border-border hover:bg-surface/60 transition-all duration-300 cursor-default"
                  >
                    <skill.Icon
                      className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover/chip:scale-110"
                      style={{ color: skill.color }}
                    />
                    <span className="text-xs font-medium text-muted-foreground group-hover/chip:text-foreground transition-colors truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-muted-foreground/60 mt-10 reveal">
          …and always learning more.
        </p>
      </div>
    </section>
  );
};
