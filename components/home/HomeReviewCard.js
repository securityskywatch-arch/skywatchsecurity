"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { StarRating } from "@/components/ui/StarRating";
function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "").join("");
}
function HomeReviewCard({ review, staticEntry = false }) {
  return /* @__PURE__ */ jsxs(
    motion.article,
    {
      initial: staticEntry ? false : { opacity: 0, y: 28, scale: 0.98 },
      whileInView: staticEntry ? void 0 : { opacity: 1, y: 0, scale: 1 },
      viewport: staticEntry ? void 0 : { once: true, margin: "0px", amount: "some" },
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      whileHover: { y: -4, transition: { duration: 0.2 } },
      className: "group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border-2 border-base/15 bg-gradient-to-br from-secondary via-[#faf3dc] to-base/[0.08] p-5 shadow-md shadow-base/[0.06] ring-1 ring-primary/20 transition-[box-shadow,border-color,ring-color] duration-300 hover:border-primary/45 hover:shadow-lift-gold hover:ring-primary/38 dark:border-secondary/15 dark:bg-gradient-to-br dark:from-base dark:via-[#22211c] dark:to-secondary/[0.06] dark:shadow-black/35 dark:ring-primary/28 dark:hover:border-primary/50 dark:hover:ring-primary/42 sm:p-6",
      children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 rounded-2xl shadow-card-inset-light dark:shadow-card-inset-dark", "aria-hidden": true }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute -right-[15%] -top-[20%] h-[70%] w-[70%] rounded-full bg-gradient-to-bl from-primary/22 via-accent/12 to-transparent opacity-45 blur-3xl motion-safe:animate-brand-ambient motion-reduce:animate-none motion-reduce:opacity-32 dark:from-primary/28 dark:via-accent/18",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/14 blur-2xl opacity-70 transition-opacity duration-500 group-hover:opacity-100 dark:bg-primary/25",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsx(StarRating, { value: review.rating }),
          /* @__PURE__ */ jsx(
            Quote,
            {
              className: "h-8 w-8 shrink-0 text-primary/25 transition-colors group-hover:text-primary/45 dark:text-primary/35",
              "aria-hidden": true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "relative mt-4 flex-1 break-words text-sm leading-relaxed text-base/90 dark:text-sage", children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg font-serif text-primary/60 dark:text-accent/50", children: "\u201C" }),
          review.quote,
          /* @__PURE__ */ jsx("span", { className: "text-lg font-serif text-primary/60 dark:text-accent/50", children: "\u201D" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative mt-6 flex items-center gap-3 border-t border-sage/25 pt-5 dark:border-sage/20", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-sm font-bold text-primary dark:border-primary/50 dark:bg-primary/20 dark:text-accent",
              "aria-hidden": true,
              children: initials(review.name)
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "break-words font-semibold text-base dark:text-secondary", children: review.name }),
            /* @__PURE__ */ jsx("p", { className: "break-words text-xs text-base/65 dark:text-sage", children: review.role })
          ] })
        ] })
      ]
    }
  );
}
export {
  HomeReviewCard
};
