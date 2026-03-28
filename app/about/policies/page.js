import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { policies } from "@/lib/policies";
const metadata = {
  title: "Company policies",
  description: "Corporate policies covering safety, compliance, ethics, data protection, and governance\u2014structured like leading UK security providers."
};
function PoliciesIndexPage() {
  return /* @__PURE__ */ jsxs("main", { className: "flex-1 bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/30 bg-base px-4 py-12 text-secondary sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "text-sm text-sage", children: /* @__PURE__ */ jsxs("ol", { className: "flex flex-wrap items-center gap-1", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", className: "transition hover:text-accent", children: "Home" }) }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 opacity-60", "aria-hidden": true }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/about", className: "transition hover:text-accent", children: "About" }) }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 opacity-60", "aria-hidden": true }),
        /* @__PURE__ */ jsx("li", { className: "font-medium text-secondary", children: "Policies" })
      ] }) }),
      /* @__PURE__ */ jsx("h1", { className: "mt-8 text-3xl font-bold tracking-tight sm:text-4xl", children: "Company policies" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sage", children: "Governance, safety, ethics, equality, data protection, and operational standards\u2014documented so clients, insurers, and auditors can see how we work." }),
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-sage/90", children: "Select a policy below for full text. These mirror the breadth of documentation you would expect from an established UK security contractor: from health and safety to modern slavery, whistleblowing, and anti-bribery." }) })
    ] }) }),
    /* @__PURE__ */ jsx(StaggerSection, { className: "mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: policies.map((p) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
      Link,
      {
        href: `/about/policies/${p.slug}`,
        className: "block rounded-xl border border-sage/40 bg-base/5 p-4 transition hover:border-primary/50 hover:shadow-md dark:border-sage/30 dark:bg-secondary/5",
        children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-base dark:text-secondary", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-base/70 dark:text-sage", children: p.summary })
        ]
      }
    ) }) }, p.slug)) }) })
  ] });
}
export {
  PoliciesIndexPage as default,
  metadata
};
