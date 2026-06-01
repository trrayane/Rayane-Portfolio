import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = ({ className = "" }) => {
  const [theme, setTheme] = useState(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("light")
      ? "light"
      : "dark"
  );

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* ignore */
    }
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={`p-2 rounded-lg glass border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all ${className}`}
    >
      {theme === "light" ? (
        <Moon className="w-[18px] h-[18px]" />
      ) : (
        <Sun className="w-[18px] h-[18px]" />
      )}
    </button>
  );
};
