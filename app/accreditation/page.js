import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { BadgeCheck, Building2, ChevronRight, HardHat, Shield } from "lucide-react";
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
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-3xl text-lg text-sage md:mx-0", children: "Credentials and management systems that support procurement, auditing, and insurer questions." })
    ] }) }),
    /* @__PURE__ */ jsxs(StaggerSection, { className: "page-container page-align py-12 lg:py-16", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2", children: items.map(({ Icon, title, body }) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "brand-card h-full p-6 text-left", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-lg border border-primary/35 text-primary", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-lg font-semibold text-[#1a1a1a] dark:text-secondary", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-[#1a1a1a]/85 dark:text-[#d8d3c8]", children: body })
      ] }) }, title)) }),
      /* @__PURE__ */ jsxs(Reveal, { className: "mt-10 rounded-xl border border-dashed border-sage/50 p-6 text-center text-sm text-[#1a1a1a]/75 dark:text-sage", children: [
        "Place official badge artwork (Safe Contractor, UKAS, etc.) in",
        " ",
        /* @__PURE__ */ jsx("code", { className: "rounded bg-base/10 px-1 py-0.5 text-xs text-[#1a1a1a] dark:bg-secondary/10 dark:text-secondary", children: "public/brand/accreditations" }),
        " ",
        "when your certificates are finalised."
      ] })
    ] })
  ] });
}
export {
  AccreditationPage as default,
  metadata
};
