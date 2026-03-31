import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronRight,
  ClipboardCheck,
  HardHat,
  Shield
} from "lucide-react";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
const metadata = {
  title: "Accreditation",
  description: "Safe Contractor alignment, ISO-minded quality systems, SIA disciplines, and supply-chain credentials."
};
const items = [
  {
    Icon: Shield,
    title: "Safe Contractor",
    body: "Health and safety practices designed to meet recognised contractor scheme expectations, giving clients confidence in how we work on site."
  },
  {
    Icon: Building2,
    title: "Constructionline & supply-chain readiness",
    body: "Structured documentation and induction pathways suitable for construction, FM, and principal contractor environments."
  },
  {
    Icon: BadgeCheck,
    title: "ISO 9001\u2013minded quality",
    body: "Documented processes for service delivery, review, and improvement, so standards don\u2019t depend on individual heroics."
  },
  {
    Icon: HardHat,
    title: "SIA disciplines",
    body: "Licensed roles deployed with assignment instructions, supervision, and reporting aligned to professional UK guarding practice."
  }
];
function AccreditationPage() {
  return /* @__PURE__ */ jsxs("main", { className: "min-w-0 flex-1 overflow-x-hidden bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/30 bg-base py-12 text-secondary lg:py-16", children: /* @__PURE__ */ jsxs("div", { className: "page-container page-align", children: [
      /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "text-sm text-sage", children: /* @__PURE__ */ jsxs("ol", { className: "flex flex-wrap items-center justify-center gap-1 md:justify-start", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", className: "transition hover:text-accent", children: "Home" }) }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 opacity-60", "aria-hidden": true }),
        /* @__PURE__ */ jsx("li", { className: "font-medium text-secondary", children: "Accreditation" })
      ] }) }),
      /* @__PURE__ */ jsx("h1", { className: "mt-8 text-3xl font-bold tracking-tight sm:text-4xl", children: "Accreditation & assurance" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-3xl text-lg text-sage md:mx-0", children: "Evidence-led delivery for procurement teams, compliance checks, and insurer due diligence, presented in practical terms your stakeholders can review quickly." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "page-container page-align py-8", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "brand-card brand-card-interactive grid gap-4 p-6 text-left sm:grid-cols-3 sm:p-8", children: [
      {
        value: "SIA",
        label: "Licensed role disciplines",
        hint: "Guarding, door supervision, and assignment control"
      },
      {
        value: "ISO-minded",
        label: "Documented quality rhythm",
        hint: "Delivery, review, and improvement controls"
      },
      {
        value: "Supply-chain ready",
        label: "Construction/FM fit",
        hint: "Site rules, inductions, and contractor expectations"
      }
    ].map(({ value, label, hint }) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-primary/25 bg-primary/[0.06] p-4 dark:border-primary/30 dark:bg-primary/[0.12]", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-wide text-[#5c3d06] dark:text-accent", children: value }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-semibold text-base dark:text-secondary", children: label }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-base/70 dark:text-sage", children: hint })
    ] }, label)) }) }) }),
    /* @__PURE__ */ jsx(StaggerSection, { className: "page-container page-align py-12 lg:py-16", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-6 sm:grid-cols-2", children: [
      items.map(({ Icon, title, body }) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "brand-card h-full p-6 text-left", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-lg border border-primary/35 text-primary", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-lg font-semibold text-[#1a1a1a] dark:text-secondary", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-[#1a1a1a]/85 dark:text-[#d8d3c8]", children: body })
    ] }) }, title)),
      /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "brand-card brand-card-interactive h-full p-6 text-left", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-lg border border-primary/35 text-primary", children: /* @__PURE__ */ jsx(ClipboardCheck, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-lg font-semibold text-[#1a1a1a] dark:text-secondary", children: "How assurance shows up on site" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-[#1a1a1a]/85 dark:text-[#d8d3c8]", children: "Uniform standards, documented post orders, supervision records, escalation logs, and service reviews, so your team sees controls in practice, not only in policy documents." }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/standards",
            className: "mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent",
            children: "See our operating standards \u2192"
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "page-container pb-14 page-align", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "brand-card-cta brand-card-interactive px-6 py-10 sm:px-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary sm:text-3xl", children: "Need accreditation detail for tender packs?" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-base/80 dark:text-sage md:mx-0", children: "Share your procurement checklist and we will confirm how our service controls map to your pre-qualification, mobilisation, and contract assurance requirements." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap gap-3 sm:justify-center md:justify-start", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/contact",
            className: "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-base transition hover:bg-accent",
            children: [
              "Speak to the team",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/about/policies",
            className: "inline-flex min-h-[44px] items-center justify-center rounded-md border border-sage/50 px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-primary",
            children: "Review policies"
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  AccreditationPage as default,
  metadata
};
