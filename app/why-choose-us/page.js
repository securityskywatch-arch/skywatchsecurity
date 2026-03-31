import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import {
  Award,
  ChevronRight,
  ClipboardCheck,
  FileText,
  MapPinned,
  Radio,
  Shield,
  Users
} from "lucide-react";
import { Reveal } from "@/components/motion/scroll-reveal";
const metadata = {
  title: "Why Choose Us",
  description: "A practical, standards-led UK security service: licensing, mobilisation, supervision, reporting, and governance."
};
function WhyChooseUsPage() {
  return /* @__PURE__ */ jsxs("main", { className: "min-w-0 flex-1 overflow-x-hidden bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/30 bg-base py-12 text-secondary lg:py-16", children: /* @__PURE__ */ jsxs("div", { className: "page-container page-align", children: [
      /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "text-sm text-sage", children: /* @__PURE__ */ jsxs("ol", { className: "flex flex-wrap items-center justify-center gap-1 md:justify-start", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", className: "transition hover:text-accent", children: "Home" }) }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 opacity-60", "aria-hidden": true }),
        /* @__PURE__ */ jsx("li", { className: "font-medium text-secondary", children: "Why choose us" })
      ] }) }),
      /* @__PURE__ */ jsx("h1", { className: "mt-8 text-3xl font-bold tracking-tight sm:text-4xl", children: "Why choose SkyWatch" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-3xl text-lg text-sage md:mx-0", children: "Built for UK buyers who need more than a guard on a rota: clear standards, visible supervision, reliable reporting, and accountable service management." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "page-container page-align py-12 lg:py-16", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "brand-card brand-card-interactive p-6 text-left sm:p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary", children: "What clients usually ask us to prove" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl text-sm leading-relaxed text-base/80 dark:text-sage", children: "Before appointment, most procurement and operations teams want confidence in legal compliance, mobilisation, supervision, and reporting. Our approach is structured around those checks, not sales claims." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: [
          "SIA-licensed deployment and role-fit screening",
          "Documented assignment instructions and escalation paths",
          "Supervisor reviews, spot checks, and management visibility",
          "Incident and KPI reporting suitable for audits and insurers"
        ].map((line) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 rounded-lg border border-primary/25 bg-primary/[0.06] px-3 py-2 text-sm text-base/85 dark:border-primary/30 dark:bg-primary/[0.12] dark:text-sage", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          line
        ] }, line)) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "brand-card brand-card-interactive flex gap-4 p-6 text-left sm:gap-5 sm:p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/5 text-primary", children: /* @__PURE__ */ jsx(Award, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-base dark:text-secondary", children: "Our values" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed text-base/85 dark:text-sage", children: "We are committed to environments that feel safe and secure, underpinned by trust. Success is measured by client satisfaction and the consistency of our officers on the ground." }),
          /* @__PURE__ */ jsx("blockquote", { className: "mt-4 border-l-4 border-primary pl-4 italic text-base/90 dark:text-secondary/90", children: "\u201COur success is measured only by the satisfaction of our clients.\u201D" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxs("div", { className: "brand-card brand-card-interactive flex gap-4 p-6 text-left sm:gap-5 sm:p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/5 text-primary", children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-base dark:text-secondary", children: "SIA-approved contractor disciplines" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed text-base/85 dark:text-sage", children: "We align to the standards expected of professional UK security providers across door supervision, key holding, and security guarding. Policies, people, and procedures are maintained to support audit, assurance, and insurer confidence." }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-base/75 dark:text-sage", children: "Verify approved contractors on the official SIA ACS register when shortlisting suppliers." })
        ] })
      ] }) })
    ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsx(Reveal, { delay: 0.06, children: /* @__PURE__ */ jsxs("div", { className: "brand-card brand-card-interactive h-full p-6 text-left", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 text-primary", children: /* @__PURE__ */ jsx(Users, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-semibold text-base dark:text-secondary", children: "People & screening" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-base/80 dark:text-sage", children: "Right-to-work, licence checks, induction standards, and role-appropriate screening aligned to your risk profile and procurement requirements." })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.09, children: /* @__PURE__ */ jsxs("div", { className: "brand-card brand-card-interactive h-full p-6 text-left", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 text-primary", children: /* @__PURE__ */ jsx(ClipboardCheck, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-semibold text-base dark:text-secondary", children: "Mobilisation & handover" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-base/80 dark:text-sage", children: "Post orders, site inductions, contact trees, key and alarm protocols, and shift handover standards prepared before go-live." })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.12, children: /* @__PURE__ */ jsxs("div", { className: "brand-card brand-card-interactive h-full p-6 text-left", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 text-primary", children: /* @__PURE__ */ jsx(Radio, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-semibold text-base dark:text-secondary", children: "Supervision & escalation" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-base/80 dark:text-sage", children: "Field supervision, spot checks, clear escalation routes, and management attendance on critical incidents or repeated service risks." })
      ] }) })
    ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx(Reveal, { delay: 0.14, children: /* @__PURE__ */ jsxs("div", { className: "brand-card brand-card-interactive flex gap-4 p-6 text-left sm:gap-5 sm:p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/5 text-primary", children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-base dark:text-secondary", children: "Reporting you can use" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed text-base/85 dark:text-sage", children: "We focus on clear, factual reports with timestamps, actions taken, and escalation records, designed for client review meetings and insurer or compliance queries." }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-base/75 dark:text-sage", children: "Typical reporting rhythm: daily logs where needed, incident reports as events occur, and structured periodic service reviews." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxs("div", { className: "brand-card brand-card-interactive flex gap-4 p-6 text-left sm:gap-5 sm:p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/5 text-primary", children: /* @__PURE__ */ jsx(MapPinned, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-base dark:text-secondary", children: "Areas we cover" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3 leading-relaxed text-base/85 dark:text-sage", children: [
            "Deployment is focused across",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-base dark:text-secondary", children: "South East England" }),
            ",",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-base dark:text-secondary", children: "South West England" }),
            ", and",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-base dark:text-secondary", children: "Central England" }),
            ", including major towns and cities within those regions. Share your postcode and we will confirm feasibility and response models."
          ] })
        ] })
      ] }) })
    ] }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.12, children: /* @__PURE__ */ jsxs("div", { className: "brand-card-cta brand-card-interactive mt-8 px-6 py-8 text-center sm:mt-10 sm:px-10 sm:py-10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-[#5c3d06] dark:text-accent", children: "Next step" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-2 max-w-lg text-sm leading-relaxed text-base/80 dark:text-sage", children: "Share your site profile, hours, risk points, and any contractual standards. We will return a proportionate proposal with mobilisation steps and service controls." }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/quote",
            className: "mt-6 inline-flex min-h-[44px] items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-bold text-base transition hover:bg-accent",
            children: "Request a quote"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-3xl text-center text-xs leading-relaxed text-base/65 dark:text-sage", children: "Where relevant, we align delivery to recognised UK security good practice and your contractual obligations. Formal certification and scope should always be confirmed during procurement." }) })
    ] })
  ] });
}
export {
  WhyChooseUsPage as default,
  metadata
};
