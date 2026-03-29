import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { Award, MapPinned, Shield } from "lucide-react";
import { Reveal } from "@/components/motion/scroll-reveal";
const metadata = {
  title: "Why Choose Us",
  description: "Values, SIA-approved disciplines, and national coverage across England."
};
function WhyChooseUsPage() {
  return /* @__PURE__ */ jsxs("main", { className: "flex-1 bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/30 bg-base px-4 py-14 text-secondary sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight sm:text-4xl", children: "Why choose SkyWatch" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-sage", children: "Our reputation is built on values, safety, security, trust, and loyalty, delivered through dependable, efficient service." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-3xl space-y-12 px-4 py-14 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/40 text-primary", children: /* @__PURE__ */ jsx(Award, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-base dark:text-secondary", children: "Our values" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed text-base/80 dark:text-sage", children: "We are committed to environments that feel safe and secure, underpinned by trust. Success is measured by client satisfaction and the consistency of our officers on the ground." }),
          /* @__PURE__ */ jsx("blockquote", { className: "mt-4 border-l-4 border-primary pl-4 italic text-base/85 dark:text-secondary/90", children: "\u201COur success is measured only by the satisfaction of our clients.\u201D" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/40 text-primary", children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-base dark:text-secondary", children: "SIA-approved contractor disciplines" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed text-base/80 dark:text-sage", children: "We align to the standards expected of professional UK security providers across door supervision, key holding, and security guarding. Policies, people, and procedures are maintained to support audit, assurance, and insurer confidence." }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-base/70 dark:text-sage", children: "Verify approved contractors on the official SIA ACS register when shortlisting suppliers." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/40 text-primary", children: /* @__PURE__ */ jsx(MapPinned, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-base dark:text-secondary", children: "Areas we cover" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3 leading-relaxed text-base/80 dark:text-sage", children: [
            "Deployment is focused across",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "text-base dark:text-secondary", children: "South East England" }),
            ",",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "text-base dark:text-secondary", children: "South West England" }),
            ", and",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "text-base dark:text-secondary", children: "Central England" }),
            ", including major towns and cities within those regions. Share your postcode and we will confirm feasibility and response models."
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.12, children: /* @__PURE__ */ jsx(
        Link,
        {
          href: "/quote",
          className: "inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-base transition hover:bg-accent",
          children: "Request a quote"
        }
      ) })
    ] })
  ] });
}
export {
  WhyChooseUsPage as default,
  metadata
};
