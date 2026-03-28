"use client";
import { jsx } from "react/jsx-runtime";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useThemeContext } from "@/context/ThemeContext";
function ThemeToggle() {
  const { setTheme, resolvedTheme } = useThemeContext();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return /* @__PURE__ */ jsx(
      "span",
      {
        className: "inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-sage/35 bg-secondary/90 dark:bg-base/80",
        "aria-hidden": true
      }
    );
  }
  const isDark = resolvedTheme === "dark";
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: () => setTheme(isDark ? "light" : "dark"),
      className: "inline-flex h-11 min-h-[44px] min-w-[44px] w-11 items-center justify-center rounded-md border border-sage/40 bg-base/[0.06] text-[#1a1a1a] touch-manipulation transition hover:border-primary hover:text-primary dark:bg-base/60 dark:text-secondary dark:hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
      "aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
      children: isDark ? /* @__PURE__ */ jsx(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Moon, { className: "h-5 w-5" })
    }
  );
}
export {
  ThemeToggle
};
