import { jsx, jsxs } from "react/jsx-runtime";
import { BadgeCheck, Building2, HardHat, Shield } from "lucide-react";
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
  return /* @__PURE__ */ jsxs("main", { className: "flex-1 bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/30 bg-base px-4 py-14 text-secondary sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight sm:text-4xl", children: "Accreditation & assurance" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-sage", children: "Credentials and management systems that support procurement, auditing, and insurer questions." })
    ] }) }),
    /* @__PURE__ */ jsxs(StaggerSection, { className: "mx-auto max-w-page px-4 py-14 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2", children: items.map(({ Icon, title, body }) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-2xl border border-sage/40 bg-base/5 p-6 dark:border-sage/30 dark:bg-secondary/5", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-lg border border-primary/35 text-primary", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-lg font-semibold text-base dark:text-secondary", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-base/80 dark:text-sage", children: body })
      ] }) }, title)) }),
      /* @__PURE__ */ jsxs(Reveal, { className: "mt-10 rounded-xl border border-dashed border-sage/50 p-6 text-center text-sm text-base/70 dark:text-sage", children: [
        "Place official badge artwork (Safe Contractor, UKAS, etc.) in",
        " ",
        /* @__PURE__ */ jsx("code", { className: "rounded bg-base/10 px-1 py-0.5 text-xs dark:bg-secondary/10", children: "public/brand/accreditations" }),
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
