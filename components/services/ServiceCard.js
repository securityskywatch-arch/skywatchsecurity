"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import Link from "next/link";
import { getServiceBySlug } from "@/lib/services";
const MotionLink = motion.create(Link);
function ServiceCard({ slug }) {
  const service = getServiceBySlug(slug);
  if (!service) return null;
  const { Icon } = service;
  return /* @__PURE__ */ jsxs(
    MotionLink,
    {
      href: `/services/${service.slug}`,
      className: "group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-sage/40 bg-gradient-to-b from-secondary/95 to-secondary/70 p-5 shadow-md ring-1 ring-sage/15 transition-shadow duration-500 hover:shadow-lift-gold dark:from-base/50 dark:to-base/30 dark:ring-sage/20 sm:p-6",
      whileHover: { y: -8 },
      whileTap: { scale: 0.985 },
      transition: { type: "spring", stiffness: 380, damping: 22 },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            "aria-hidden": true,
            style: {
              background: "radial-gradient(ellipse 120% 80% at 10% 0%, rgba(196,129,0,0.14), transparent 55%), radial-gradient(ellipse 90% 70% at 100% 100%, rgba(255,204,0,0.08), transparent 50%)"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-transform duration-700 ease-out group-hover:translate-x-[220%] group-hover:opacity-100 dark:via-white/[0.07]",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-60", "aria-hidden": true }),
        /* @__PURE__ */ jsx("div", { className: "relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_22px_-2px_rgba(196,129,0,0.45)] dark:bg-primary/15", children: /* @__PURE__ */ jsx(
          Icon,
          {
            className: "h-6 w-6 transition duration-300 group-hover:scale-110 group-hover:text-[#5c3d06] dark:group-hover:text-accent",
            "aria-hidden": true
          }
        ) }),
        /* @__PURE__ */ jsx("h3", { className: "relative break-words text-base font-semibold transition duration-300 group-hover:text-primary dark:text-secondary sm:text-lg", children: service.title }),
        /* @__PURE__ */ jsx("p", { className: "relative mt-2 flex-1 break-words text-sm leading-relaxed text-base/75 dark:text-sage", children: service.short }),
        /* @__PURE__ */ jsxs("span", { className: "relative mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#5c3d06] dark:text-accent", children: [
          "Learn more",
          /* @__PURE__ */ jsx(
            "span",
            {
              "aria-hidden": true,
              className: "inline-block transition-transform duration-300 group-hover:translate-x-1.5",
              children: "\u2192"
            }
          )
        ] })
      ]
    }
  );
}
export {
  ServiceCard
};
