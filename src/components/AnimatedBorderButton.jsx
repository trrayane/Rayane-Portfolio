export const AnimatedBorderButton = ({
  children,
  href,
  download,
  onClick,
  target,
  rel,
  className = "",
  ...props
}) => {
  const Tag = href ? "a" : "button";

  // External links open in a new tab; download links keep default behaviour
  const computedTarget = target ?? (href && !download ? "_blank" : undefined);
  const computedRel =
    rel ?? (computedTarget === "_blank" ? "noopener noreferrer" : undefined);

  return (
    <Tag
      href={href}
      download={download}
      onClick={onClick}
      target={computedTarget}
      rel={computedRel}
      className={`relative inline-flex items-center justify-center bg-transparent border border-border
        text-foreground hover:border-primary/50 transition-all
        duration-1000 focus:outline-none focus-visible:ring-2
        focus-visible:ring-primary focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed group
        px-8 py-4 text-lg font-medium rounded-full overflow-visible
        animated-border ${className}`}
      {...props}
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Tag>
  );
};
