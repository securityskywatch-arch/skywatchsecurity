import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import {
  BadgeCheck,
  BookOpen,
  Eye,
  FileWarning,
  Headphones,
  Shirt
} from "lucide-react";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
const metadata = {
  title: "Our Standards",
  description: "Uniform, supervision, vetting, incident reporting, and client communication standards at SkyWatch Security."
};
const blocks = [
  {
    Icon: Shirt,
    title: "Uniform & presentation",
    body: "Dress codes matched to your environment, from corporate reception polish to high-visibility construction sites. Name badges and PPE where inductions require them."
  },
  {
    Icon: Eye,
    title: "Supervision & spot checks",
    body: "Field supervisors validate post orders are lived, not filed. We look for punctuality, log quality, and professional conduct, not box-ticking alone."
  },
  {
    Icon: BookOpen,
    title: "Assignment instructions",
    body: "Every site receives documented access rules, escalation contacts, prohibited behaviours, and emergency pathways, reviewed when your risk changes."
  },
  {
    Icon: FileWarning,
    title: "Incident reporting",
    body: "Clear narratives, timestamps, and supporting detail suitable for insurers, police liaison, and internal investigations where required."
  },
  {
    Icon: Headphones,
    title: "Client communication",
    body: "Single points of contact for scheduling issues, cover gaps, and service reviews, so you\u2019re not chasing multiple numbers at 2am."
  },
  {
    Icon: BadgeCheck,
    title: "Vetting & compliance",
    body: "Right-to-work, licence checks, and role-appropriate screening aligned to your procurement and safeguarding expectations."
  }
];
function StandardsPage() {
  return /* @__PURE__ */ jsxs("main", { className: "flex-1 bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/30 bg-base px-4 py-16 text-secondary sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl text-center", children: /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-accent", children: "Our standards" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl", children: "What \u201Cgood\u201D looks like on your site" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-sage", children: "Reference-style assurance: visible standards for uniform, behaviour, reporting, and management oversight, so procurement and operations teams know what they\u2019re buying." })
    ] }) }) }),
    /* @__PURE__ */ jsx(StaggerSection, { className: "mx-auto max-w-page px-4 py-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: blocks.map(({ Icon, title, body }) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("article", { className: "brand-card brand-card-interactive h-full p-6 transition hover:shadow-md", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 text-primary", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-lg font-semibold text-base dark:text-secondary", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-base/80 dark:text-sage", children: body })
    ] }) }, title)) }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-sage/20 px-4 py-14 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "brand-card brand-card-interactive mx-auto max-w-3xl p-8 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-base/80 dark:text-sage", children: "Standards sit alongside formal policies. For legal and governance text, see our policy library." }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: "/about/policies",
          className: "mt-4 inline-block text-sm font-semibold text-primary hover:text-accent",
          children: "View all policies \u2192"
        }
      )
    ] }) }) })
  ] });
}
export {
  StandardsPage as default,
  metadata
};
