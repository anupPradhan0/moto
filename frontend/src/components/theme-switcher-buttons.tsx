"use client";

import { useTheme } from "@/lib/theme-provider";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

interface ThemeSwitcherButtonsProps {
  /** When true, show only icons (e.g. in collapsed sidebar). */
  compact?: boolean;
}

export function ThemeSwitcherButtons({ compact }: ThemeSwitcherButtonsProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`flex w-full gap-2 min-w-0 ${compact ? "lg:flex-col lg:gap-1.5 lg:items-stretch" : ""}`}
    >
      <Button
        variant={theme === "light" ? "secondary" : "ghost"}
        size={compact ? "icon" : "default"}
        className={compact ? "lg:h-9 lg:w-full lg:min-w-0 lg:shrink-0" : "flex-1 h-10 justify-center gap-2"}
        onClick={() => setTheme("light")}
        aria-label="Light theme"
      >
        <Sun className="h-4 w-4 shrink-0" style={{ color: "#1976B8" }} />
        <span className={`text-sm font-medium ${compact ? "lg:hidden" : ""}`}>Light</span>
      </Button>
      <Button
        variant={theme === "dark" ? "secondary" : "ghost"}
        size={compact ? "icon" : "default"}
        className={compact ? "lg:h-9 lg:w-full lg:min-w-0 lg:shrink-0" : "flex-1 h-10 justify-center gap-2"}
        onClick={() => setTheme("dark")}
        aria-label="Dark theme"
      >
        <Moon className="h-4 w-4 shrink-0" style={{ color: "#1976B8" }} />
        <span className={`text-sm font-medium ${compact ? "lg:hidden" : ""}`}>Dark</span>
      </Button>
    </div>
  );
}
