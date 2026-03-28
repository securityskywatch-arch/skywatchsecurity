import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  ClipboardCheck,
  HeartHandshake,
  MapPin,
  Shield,
  Users
} from "lucide-react";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { serviceNavItems } from "@/lib/navigation";
const metadata = {
  title: "About Us",
  description: "SkyWatch Security: SIA-minded guarding, ISO-style quality, Safe Contractor health & safety, and customer-focused officers across England."
};
const pillars = [
  {
    Icon: Shield,
    title: "Licensed & accountable",
    text: "SIA-licensed roles deployed with assignment instructions, patrol discipline, and incident reporting you can audit."
  },
  {
    Icon: ClipboardCheck,
    title: "Quality you can evidence",
    text: "Structured handovers, supervision visits, and client feedback loops\u2014so standards don\u2019t depend on one heroic shift."
  },
  {
    Icon: HeartHandshake,
    title: "Customer-focused culture",
    text: "Officers trained to communicate with calm authority: protecting your people without souring your brand at the door."
  },
  {
    Icon: Building2,
    title: "Built for complex estates",
    text: "Corporate HQs, retail, education, construction, and void property portfolios\u2014with flexible cover for peaks and projects."
  }
];
const stats = [
  { value: "24/7", label: "Control-room coordination" },
  { value: "UK", label: "England-wide operating model" },
  { value: "SIA", label: "Aligned guarding disciplines" },
  { value: "ISO-style", label: "Documented service delivery" }
];
const aboutFaqs = [
  {
    q: "What types of security does SkyWatch provide?",
    a: "We deliver manned guarding, door supervision, concierge-style reception, patrols (foot and mobile), CCTV coordination, alarm response and key holding, construction and industrial site cover, retail, education campus support, events, and close protection\u2014scoped with clear assignment instructions."
  },
  {
    q: "Are your officers SIA-licensed?",
    a: "Yes. Officers are deployed in licensed roles with inductions aligned to your site hazards, customer profile, and access technology. We can align screening depth to your procurement rules."
  },
  {
    q: "How do you maintain service quality over time?",
    a: "Through structured handovers, supervision visits, documented policies, and client feedback\u2014not dependence on a single strong shift team. See Our standards and individual policy pages for governance detail."
  },
  {
    q: "Can you cover multiple regions?",
    a: "We plan deployment across England with emphasis on the South East, South West, and Central regions, matching travel and response to your portfolio."
  }
];
function AboutPage() {
  return /* @__PURE__ */ jsxs("main", { className: "flex-1 bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-b border-sage/30 bg-base px-4 py-16 text-secondary sm:px-6 lg:px-8 lg:py-20", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "pointer-events-none absolute inset-0 opacity-30",
          "aria-hidden": true,
          style: {
            background: "radial-gradient(ellipse 70% 50% at 80% 0%, rgba(196,129,0,0.4), transparent), radial-gradient(ellipse 40% 40% at 10% 100%, rgba(255,204,0,0.1), transparent)"
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-page", children: [
        /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "text-sm text-sage", children: /* @__PURE__ */ jsxs("ol", { className: "flex flex-wrap items-center gap-1", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", className: "transition hover:text-accent", children: "Home" }) }),
          /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 opacity-60", "aria-hidden": true }),
          /* @__PURE__ */ jsx("li", { className: "font-medium text-secondary", children: "About us" })
        ] }) }),
        /* @__PURE__ */ jsxs(Reveal, { children: [
          /* @__PURE__ */ jsx("p", { className: "mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-accent", children: "About SkyWatch Security" }),
          /* @__PURE__ */ jsx("h1", { className: "mt-4 max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-5xl", children: "Protection that protects your reputation\u2014not just your perimeter." }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-lg leading-relaxed text-sage", children: "We are a customer-focused security provider delivering manned guarding, door supervision, key holding, patrols, concierge-style reception cover, and monitoring support. Our teams are briefed to protect the integrity of your sites while reinforcing the professional image you expect at the front line." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-sage/35 bg-white/5 px-5 py-4 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-accent", children: s.value }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-sage", children: s.label })
        ] }) }, s.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-page px-4 py-16 sm:px-6 lg:py-20 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:items-start", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold tracking-tight text-base dark:text-secondary sm:text-3xl", children: "Who we are" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4 leading-relaxed text-base/85 dark:text-sage", children: [
          /* @__PURE__ */ jsx("p", { children: "SkyWatch Security supports organisations that need dependable cover without drama: punctual officers, clear escalation paths, and management visibility when something doesn\u2019t go to plan." }),
          /* @__PURE__ */ jsx("p", { children: "We invest in inductions that reflect your hazards, your customer profile, and your access-control technology\u2014so teams aren\u2019t learning your building on the public\u2019s time." }),
          /* @__PURE__ */ jsx("p", { children: "From locking and unlocking programmes to alarm response, event cover, and remote monitoring coordination, we assemble affordable packages that scale with your footprint." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: "/standards",
              className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-base transition hover:bg-accent",
              children: [
                "Our standards",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/why-choose-us",
              className: "inline-flex items-center gap-2 rounded-md border border-sage/45 px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-primary",
              children: "Why choose us"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.08, children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-sage/40 bg-base/5 p-8 dark:border-sage/30 dark:bg-secondary/5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl border border-primary/40 text-primary", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-base dark:text-secondary", children: "Safe, ethical, modern employment" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-6 space-y-3 text-sm text-base/80 dark:text-sage", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" }),
            "Right-to-work and screening aligned to your procurement rules"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" }),
            "Welfare and lone-working considerations built into rosters"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" }),
            "Equality, anti-bribery, and data-handling policies published for audit"
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(StaggerSection, { className: "border-y border-sage/20 bg-base/[0.04] px-4 py-16 dark:border-sage/25 dark:bg-secondary/[0.06] sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-page", children: [
      /* @__PURE__ */ jsxs(StaggerItem, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary sm:text-3xl", children: "Security services we provide" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-2xl text-sm text-base/75 dark:text-sage", children: "Each service has its own page with scope, typical deliverables, risks, and FAQs\u2014similar to how leading UK providers structure their catalogue." })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: serviceNavItems.map((item) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
        Link,
        {
          href: item.href,
          className: "flex h-full items-center justify-between gap-3 rounded-xl border border-sage/40 bg-secondary/80 px-4 py-3 text-sm font-medium text-base transition hover:border-primary/50 hover:text-primary dark:border-sage/30 dark:bg-base/40 dark:text-secondary dark:hover:text-accent",
          children: [
            item.label,
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 shrink-0 opacity-60", "aria-hidden": true })
          ]
        }
      ) }) }, item.href)) }),
      /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs(
        Link,
        {
          href: "/services",
          className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent",
          children: [
            "Full services overview",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-page px-4 py-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl border border-primary/40 text-primary", children: /* @__PURE__ */ jsx(MapPin, { className: "h-6 w-6", "aria-hidden": true }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary", children: "Areas we serve" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 leading-relaxed text-base/85 dark:text-sage", children: "We support clients across England with a practical focus on the South East, South West, and Central regions\u2014planning travel, response, and bench depth so cover stays credible as your footprint grows." }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/contact",
            className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent",
            children: [
              "Discuss your locations",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.06, children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-sage/40 bg-base/5 p-8 dark:border-sage/30 dark:bg-secondary/5", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-base dark:text-secondary", children: "Governance & assurance" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-base/80 dark:text-sage", children: "Mission, safety, ethics, data protection, equality, anti-bribery, and more\u2014published for clients, insurers, and auditors. Browse the policy library or read our standards page for how we run operations day to day." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/about/policies",
              className: "rounded-md border border-primary/50 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-base",
              children: "All policies"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/standards",
              className: "rounded-md border border-sage/45 px-4 py-2 text-sm font-semibold text-base transition hover:border-primary dark:text-secondary",
              children: "Our standards"
            }
          )
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(StaggerSection, { className: "border-y border-sage/20 bg-base/[0.04] px-4 py-16 dark:border-sage/25 dark:bg-secondary/[0.06] sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-page", children: [
      /* @__PURE__ */ jsxs(StaggerItem, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-center text-2xl font-bold tracking-tight text-base dark:text-secondary sm:text-3xl", children: "How we operate day to day" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-2xl text-center leading-relaxed text-base/75 dark:text-sage", children: "Four principles that show up in post orders, supervisor visits, and the tone your visitors experience." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2", children: pillars.map(({ Icon, title, text }) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "group h-full rounded-2xl border border-sage/40 bg-secondary/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lift dark:border-sage/30 dark:bg-base/40", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary transition group-hover:border-accent group-hover:text-accent", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-semibold text-base dark:text-secondary", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-base/75 dark:text-sage", children: text })
      ] }) }, title)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-page px-4 py-16 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary sm:text-3xl", children: "Frequently asked questions" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-base/75 dark:text-sage", children: "Quick answers before you speak to the team or request a quote." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-3", children: aboutFaqs.map((faq) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("details", { className: "group rounded-xl border border-sage/40 bg-base/5 open:border-primary/40 dark:border-sage/30 dark:bg-secondary/5", children: [
        /* @__PURE__ */ jsx("summary", { className: "cursor-pointer list-none px-5 py-4 font-semibold text-base dark:text-secondary [&::-webkit-details-marker]:hidden", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-between gap-4", children: [
          faq.q,
          /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 shrink-0 text-primary transition group-open:rotate-90" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "border-t border-sage/25 px-5 pb-4 pt-3 text-sm leading-relaxed text-base/80 dark:text-sage", children: faq.a })
      ] }) }, faq.q)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-page px-4 py-16 sm:px-6 lg:py-20 lg:px-8", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-primary/35 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 px-8 py-10 text-center sm:px-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary sm:text-3xl", children: "Ready to talk?" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-xl text-sm text-base/80 dark:text-sage", children: "Request a quote or speak to us about sites, hours, and hazards\u2014we\u2019ll propose a proportionate plan with clear deliverables." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/quote",
            className: "inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-base transition hover:bg-accent",
            children: [
              "Request a quote",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/about/policies",
            className: "inline-flex items-center gap-2 rounded-md border-2 border-primary/60 bg-base px-6 py-3 text-sm font-bold text-secondary transition hover:bg-primary hover:text-base dark:bg-base dark:text-secondary",
            children: [
              "Browse all policies",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  AboutPage as default,
  metadata
};
