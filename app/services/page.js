import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  MapPin,
  Radio,
  Shield,
  Sparkles
} from "lucide-react";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/lib/services";
const metadata = {
  title: "Security Services",
  description: "Manned guarding, concierge, door supervision, CCTV, patrols, construction, retail, events, key holding, and close protection, UK-wide security packages."
};
const highlights = [
  {
    Icon: Shield,
    title: "SIA-licensed disciplines",
    text: "SIA-licensed guarding, door supervision, and key-holding, with recruitment and vetting aligned to BS 7858 principles where clients require it."
  },
  {
    Icon: Clock,
    title: "Roster realism",
    text: "We plan handovers, breaks, and absence cover so your front line doesn\u2019t hollow out during peaks."
  },
  {
    Icon: Radio,
    title: "Coordinated response",
    text: "Patrols, alarm response, and on-site teams can share reporting rhythms so nothing gets lost between shifts."
  },
  {
    Icon: MapPin,
    title: "Regional deployment",
    text: "South East, South West, and Central England, with travel and response models matched to your portfolio."
  }
];
function ServicesPage() {
  return /* @__PURE__ */ jsxs("main", { className: "flex-1 bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-b border-sage/25 bg-base py-16 text-secondary lg:py-24", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "pointer-events-none absolute inset-0 opacity-35",
          "aria-hidden": true,
          style: {
            background: "radial-gradient(ellipse 60% 80% at 100% 0%, rgba(196,129,0,0.45), transparent 50%), radial-gradient(ellipse 50% 50% at 0% 100%, rgba(255,204,0,0.08), transparent 45%)"
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative page-container page-align", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-5 lg:items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxs("p", { className: "inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent md:justify-start", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
            "Full service catalogue"
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl", children: "Security services shaped around your risk, not a generic guard package." }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-none text-lg leading-relaxed text-sage md:mx-0", children: "Explore manned guarding, concierge reception, door supervision, construction site cover, education campus support, industrial and warehouse loss prevention, retail, events, patrols, CCTV monitoring, alarm response, key holding, and close protection, each delivered with assignment instructions your teams can audit." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap md:justify-start", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: "/quote",
                className: "inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-base shadow-lg transition hover:bg-accent md:w-auto",
                children: [
                  "Request a quote",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/contact",
                className: "inline-flex w-full items-center justify-center gap-2 rounded-md border border-sage/50 px-6 py-3 text-sm font-semibold text-secondary transition hover:border-accent hover:text-accent md:w-auto",
                children: "Speak to us"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxs("div", { className: "brand-card-dark p-6 sm:p-8", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-accent", children: "Typical engagements" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-3 text-sm text-sage", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2 border-b border-sage/15 pb-3", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-secondary", children: "24/7" }),
              "Corporate HQ & business parks"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2 border-b border-sage/15 pb-3", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-secondary", children: "Events" }),
              "Licensed door teams & crowd flow"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2 border-b border-sage/15 pb-3", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-secondary", children: "Void" }),
              "Patrols, locks, alarm attendance"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2 pt-1", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-secondary", children: "Retail" }),
              "Customer-safe deterrence & evidential notes"
            ] })
          ] })
        ] }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "page-container py-14 page-align", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary sm:text-3xl", children: "Why clients shortlist us" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-3xl text-sm text-base/75 dark:text-sage md:mx-0", children: "The same themes show up in tenders: licence discipline, reporting, supervision, and people you\u2019re comfortable putting in front of customers." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-1 gap-5 text-left md:grid-cols-2 lg:grid-cols-4", children: highlights.map(({ Icon, title, text }) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col rounded-xl border border-sage/35 bg-base/5 p-5 dark:border-sage/30 dark:bg-secondary/5", children: [
        /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-3 text-sm font-bold text-base dark:text-secondary", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs leading-relaxed text-base/75 dark:text-sage", children: text })
      ] }) }, title)) })
    ] }),
    /* @__PURE__ */ jsx(StaggerSection, { className: "border-t border-sage/20 bg-base/[0.03] py-16 dark:bg-secondary/[0.05]", children: /* @__PURE__ */ jsxs("div", { className: "page-container page-align", children: [
      /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary sm:text-3xl", children: "Every service, one click away" }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto mt-2 max-w-3xl text-sm text-base/75 dark:text-sage md:mx-0", children: "Cards lift on hover. Each page explains scope, typical deliverables, and what good looks like on site." })
        ] }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/standards",
            className: "shrink-0 text-sm font-semibold text-primary hover:text-accent md:self-end",
            children: "Our service standards \u2192"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3", children: services.map((service) => /* @__PURE__ */ jsx(StaggerItem, { className: "h-full min-h-0", children: /* @__PURE__ */ jsx(ServiceCard, { slug: service.slug }) }, service.slug)) })
    ] }) })
  ] });
}
export {
  ServicesPage as default,
  metadata
};
