"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeImages } from "@/lib/homeImages";
function WelcomeSection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-y border-sage/25 bg-base text-secondary dark:border-sage/30 dark:bg-[#0f0f0f]", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none absolute inset-0 opacity-[0.12] dark:opacity-[0.18]",
        "aria-hidden": true,
        style: {
          background: "radial-gradient(ellipse 80% 70% at 100% 0%, rgba(196,129,0,0.5), transparent 55%), radial-gradient(ellipse 50% 50% at 0% 100%, rgba(255,204,0,0.15), transparent 45%)"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid min-w-0 max-w-page gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-20", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "min-w-0",
          initial: { opacity: 0, x: -28 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "0px", amount: "some" },
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-accent", children: "Welcome" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-3 text-[1.6rem] font-bold leading-tight tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-tight", children: "Welcome to SkyWatch Security" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4 text-base leading-relaxed text-sage", children: [
              /* @__PURE__ */ jsx("p", { children: "Thank you for visiting. We provide professional security services across England\u2014from manned guarding and concierge reception to patrols, monitoring, and alarm response\u2014delivered by licensed teams who understand your brand and your risks." }),
              /* @__PURE__ */ jsx("p", { children: "Whether you need a single site covered or a coordinated model across a portfolio, we build clear assignment instructions, supervision, and reporting so you always know what good looks like on the ground." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  href: "/about",
                  className: "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-base shadow-lg touch-manipulation transition hover:bg-accent",
                  children: [
                    "About us",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 shrink-0", "aria-hidden": true })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/contact",
                  className: "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-sage/50 px-5 py-2.5 text-sm font-semibold text-secondary touch-manipulation transition hover:border-accent hover:text-accent",
                  children: "Get in touch"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.96, y: 24 },
          whileInView: { opacity: 1, scale: 1, y: 0 },
          viewport: { once: true, margin: "0px", amount: "some" },
          transition: { duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
          className: "relative min-w-0",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] max-h-[min(100vw,22rem)] overflow-hidden rounded-2xl border border-primary/35 shadow-lift-gold ring-1 ring-sage/20 sm:max-h-none", children: [
              /* @__PURE__ */ jsx(
                Image,
                {
                  src: homeImages.welcome,
                  alt: "Professional security guard team in UK-style high-visibility uniform",
                  fill: true,
                  className: "object-cover",
                  sizes: "(max-width: 1024px) 100vw, 50vw"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" })
            ] }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "mt-4 w-full max-w-md rounded-xl border border-primary/40 bg-base/95 px-4 py-3 text-xs text-sage shadow-lg backdrop-blur-sm sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 sm:max-w-[14rem] sm:translate-y-1/4 sm:text-sm",
                initial: { opacity: 0, y: 12 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: "0px", amount: "some" },
                transition: { delay: 0.35, duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsx("p", { className: "font-semibold text-accent", children: "Trusted coverage" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-1 leading-snug text-secondary/90", children: "South East, South West & Central England" })
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
export {
  WelcomeSection
};
