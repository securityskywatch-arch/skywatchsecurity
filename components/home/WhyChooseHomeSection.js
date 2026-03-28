"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  MapPinned,
  Shield,
  Sparkles,
  Users
} from "lucide-react";
import { homeImages } from "@/lib/homeImages";
const points = [
  {
    Icon: Shield,
    title: "SIA-aligned disciplines",
    text: "Guarding, door supervision, and key holding delivered to UK professional standards."
  },
  {
    Icon: Users,
    title: "Customer-first officers",
    text: "Teams briefed to your brand, hazards, and access systems\u2014not generic presence."
  },
  {
    Icon: BadgeCheck,
    title: "Quality you can evidence",
    text: "Handovers, supervision visits, and policies that stand up to audit and insurers."
  },
  {
    Icon: Headphones,
    title: "Responsive planning",
    text: "Cover for peaks, projects, absence, and short-notice events where agreed."
  },
  {
    Icon: MapPinned,
    title: "Regional deployment",
    text: "England-wide model with practical focus on the South East, South West, and Central regions."
  },
  {
    Icon: Sparkles,
    title: "Technology-aware teams",
    text: "Comfortable with CCTV, access control, radios, and your reporting rhythms."
  }
];
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 }
  }
};
const item = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};
function WhyChooseHomeSection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-x-clip border-b border-sage/20 bg-secondary px-4 py-16 dark:border-sage/25 dark:bg-base sm:px-6 sm:py-20 lg:px-8 lg:py-24", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/4 rounded-full bg-primary/10 blur-3xl dark:bg-primary/15 sm:h-96 sm:w-96 sm:translate-x-1/3 lg:-translate-y-1/4",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative mx-auto min-w-0 max-w-page", children: /* @__PURE__ */ jsxs("div", { className: "grid min-w-0 gap-10 lg:grid-cols-12 lg:gap-10 lg:gap-y-12", children: [
      /* @__PURE__ */ jsx("div", { className: "min-w-0 lg:col-span-5", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          className: "relative mx-auto aspect-[3/4] max-h-[min(70vh,28rem)] w-full max-w-md overflow-hidden rounded-2xl border border-sage/40 shadow-lift dark:border-sage/30 sm:max-h-[520px] sm:max-w-none lg:sticky lg:top-28 lg:mx-0",
          children: [
            /* @__PURE__ */ jsx(
              Image,
              {
                src: homeImages.whyChoose,
                alt: "SkyWatch Security \u2014 professional guarding and client-focused service",
                fill: true,
                className: "object-cover",
                sizes: "(max-width: 1024px) 100vw, 40vw"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-base/70 via-base/20 to-transparent dark:from-base/80" }),
            /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4 sm:p-6", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-accent sm:text-sm", children: "Why choose us" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-base font-bold leading-snug text-secondary sm:mt-2 sm:text-lg", children: "Measured by your satisfaction\u2014not ours." })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 lg:col-span-7", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.55 },
            children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-[#5c3d06] dark:text-accent sm:text-sm sm:tracking-[0.2em]", children: "Why SkyWatch" }),
              /* @__PURE__ */ jsx("h2", { className: "mt-3 break-words text-[1.65rem] font-bold leading-tight tracking-tight text-base dark:text-secondary sm:text-3xl md:text-4xl", children: "Why choose SkyWatch Security?" }),
              /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl leading-relaxed text-base/80 dark:text-sage", children: "Our reputation rests on safety, trust, and loyalty\u2014delivered through dependable service and officers you are comfortable putting in front of customers and colleagues." }),
              /* @__PURE__ */ jsx("blockquote", { className: "mt-6 break-words border-l-4 border-primary pl-5 font-medium italic text-base/90 dark:text-secondary/90", children: "\u201COur success is measured only by the satisfaction of our clients.\u201D" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.ul,
          {
            className: "mt-8 grid min-w-0 gap-4 sm:mt-10 sm:grid-cols-2",
            variants: container,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-40px", amount: 0.15 },
            children: points.map(({ Icon, title, text }) => /* @__PURE__ */ jsx(
              motion.li,
              {
                variants: item,
                className: "group rounded-xl border border-sage/35 bg-base/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift-gold dark:border-sage/30 dark:bg-secondary/[0.06]",
                children: /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary transition group-hover:border-primary group-hover:text-[#5c3d06] dark:group-hover:border-accent dark:group-hover:text-accent", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5", "aria-hidden": true }) }),
                  /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsx("h3", { className: "break-words font-semibold text-base dark:text-secondary", children: title }),
                    /* @__PURE__ */ jsx("p", { className: "mt-1 break-words text-sm leading-relaxed text-base/75 dark:text-sage", children: text })
                  ] })
                ] })
              },
              title
            ))
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "mt-10 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4",
            initial: { opacity: 0, y: 12 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.2, duration: 0.5 },
            children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  href: "/why-choose-us",
                  className: "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-base shadow-md touch-manipulation transition hover:bg-accent",
                  children: [
                    "Read full why choose us",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 shrink-0", "aria-hidden": true })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/quote",
                  className: "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-sage/45 px-6 py-3 text-sm font-semibold text-primary touch-manipulation transition hover:border-primary dark:border-sage/40 dark:text-accent",
                  children: "Request a quote"
                }
              )
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  WhyChooseHomeSection
};
