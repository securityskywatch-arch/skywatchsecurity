import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { Banknote, Clock, MapPin, Shield } from "lucide-react";
import { Reveal } from "@/components/motion/scroll-reveal";
const metadata = {
  title: "Current Vacancies",
  description: "Open SIA security roles: door supervision, static guarding, mobile patrols, and event cover across England."
};
const vacancies = [
  {
    title: "SIA Door Supervisor, High Wycombe",
    type: "Part-time & full-time",
    ref: "DS-HW-01",
    rate: "Discussed at interview",
    detail: "Late retail and hospitality-adjacent venues. Strong de-escalation and entry policy experience preferred."
  },
  {
    title: "Security Officer, Reading business park",
    type: "Full-time nights",
    ref: "SO-RD-04",
    rate: "Nights premium applies",
    detail: "Access control, patrols, and contractor supervision. Clean driving licence useful but not essential."
  },
  {
    title: "Mobile Patrol Driver, South East",
    type: "Full-time (valid UK licence)",
    ref: "MP-SE-02",
    rate: "Mileage policy in handbook",
    detail: "Randomised routes, void visits, lock-ups. Van or pool vehicle depending on contract."
  },
  {
    title: "Corporate Concierge, London W1",
    type: "Rotating shifts",
    ref: "CC-LN-03",
    rate: "Central London weighting",
    detail: "Front-of-house polish with protective awareness. Customer service background welcome."
  }
];
function VacanciesPage() {
  return /* @__PURE__ */ jsxs("main", { className: "flex-1 bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/30 bg-base px-4 py-14 text-secondary sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-page", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          href: "/recruitment",
          className: "text-sm font-medium text-sage transition hover:text-accent",
          children: "\u2190 Back to recruitment"
        }
      ),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 text-3xl font-bold tracking-tight sm:text-5xl", children: "Current vacancies" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-lg text-sage", children: "Sample roles illustrating how we advertise. Swap for your live ATS, spreadsheet, or HR system feed. Each card is designed for quick scanning on mobile and desktop." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-page gap-10 px-4 py-12 lg:grid-cols-[1fr_280px] sm:px-6 lg:px-8 lg:py-16", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-5", children: vacancies.map((v, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxs("article", { className: "brand-card brand-card-interactive p-6 transition hover:shadow-md sm:p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-base dark:text-secondary", children: v.title }),
            /* @__PURE__ */ jsxs("p", { className: "mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-base/75 dark:text-sage", children: [
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-primary" }),
                v.type
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Banknote, { className: "h-4 w-4 text-primary" }),
                v.rate
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "rounded-lg bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent", children: v.ref })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-base/80 dark:text-sage", children: v.detail }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/recruitment/apply",
              className: "inline-flex rounded-md bg-primary px-4 py-2 text-sm font-bold text-base transition hover:bg-accent",
              children: "Apply for this role"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/contact",
              className: "inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent",
              children: "Ask a question first \u2192"
            }
          )
        ] })
      ] }) }, v.ref)) }),
      /* @__PURE__ */ jsx("aside", { className: "space-y-6 lg:sticky lg:top-28 lg:self-start", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "brand-card-inverse p-6", children: [
        /* @__PURE__ */ jsx(Shield, { className: "h-8 w-8 text-accent" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-lg font-bold", children: "Before you apply" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-3 text-sm text-sage", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Clock, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
            "Valid SIA licence for the role category (where required by law)."
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Clock, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
            "Right to work in the UK, documents requested at screening."
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Clock, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
            "References covering your last 24\u201336 months of employment."
          ] })
        ] })
      ] }) }) })
    ] })
  ] });
}
export {
  VacanciesPage as default,
  metadata
};
