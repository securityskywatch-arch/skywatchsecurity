import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { policies } from "@/lib/policies";
const metadata = {
  title: "Company policies",
  description: "Corporate policies covering safety, compliance, ethics, data protection, and governance, structured like leading UK security providers."
};
function PoliciesIndexPage() {
  return /* @__PURE__ */ jsxs("main", { className: "min-w-0 flex-1 overflow-x-hidden bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/30 bg-base py-12 text-secondary", children: /* @__PURE__ */ jsxs("div", { className: "page-container page-align", children: [
      /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "text-sm text-sage", children: /* @__PURE__ */ jsxs("ol", { className: "flex flex-wrap items-center justify-center gap-1 md:justify-start", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", className: "transition hover:text-accent", children: "Home" }) }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 opacity-60", "aria-hidden": true }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/about", className: "transition hover:text-accent", children: "About" }) }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 opacity-60", "aria-hidden": true }),
        /* @__PURE__ */ jsx("li", { className: "font-medium text-secondary", children: "Policies" })
      ] }) }),
      /* @__PURE__ */ jsx("h1", { className: "mt-8 text-3xl font-bold tracking-tight sm:text-4xl", children: "Company policies" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-4xl text-sage md:mx-0", children: "Governance, safety, ethics, equality, data protection (including UK GDPR), and operational standards, documented so clients, insurers, and auditors can see how we work." }),
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-sage/90 md:mx-0", children: "Select a policy below for full text. These mirror the breadth of documentation you would expect from an established UK security contractor: from health and safety and duty of care to modern slavery, whistleblowing, and anti-bribery." }) })
    ] }) }),
    /* @__PURE__ */ jsx(StaggerSection, { className: "page-container py-12", children: /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 gap-3 text-left md:grid-cols-2 lg:grid-cols-3", children: policies.map((p) => /* @__PURE__ */ jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsx("li", { className: "h-full", children: /* @__PURE__ */ jsxs(
      Link,
      {
        href: `/about/policies/${p.slug}`,
        className: "brand-card brand-card-interactive flex h-full flex-col p-4 transition hover:shadow-md",
        children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-[1rem] text-[#1a1a1a] dark:text-secondary", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 flex-1 text-sm leading-relaxed text-[#1a1a1a]/75 dark:text-[#d8d3c8]", children: p.summary })
        ]
      }
    ) }) }, p.slug)) }) })
  ] });
}
export {
  PoliciesIndexPage as default,
  metadata
};
