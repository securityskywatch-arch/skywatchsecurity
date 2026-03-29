import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
function ServiceDetailLayout({ service, content }) {
  const { Icon } = service;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/30 bg-base py-10 text-secondary sm:py-12", children: /* @__PURE__ */ jsxs("div", { className: "page-container page-align", children: [
      /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "text-sm text-sage", children: /* @__PURE__ */ jsxs("ol", { className: "flex min-w-0 flex-wrap items-center justify-center gap-1 md:justify-start", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", className: "transition hover:text-accent", children: "Home" }) }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 opacity-60", "aria-hidden": true }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/services", className: "transition hover:text-accent", children: "Services" }) }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 opacity-60", "aria-hidden": true }),
        /* @__PURE__ */ jsx("li", { className: "min-w-0 max-w-full break-words font-medium text-secondary", children: content.heroTitle })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex min-w-0 flex-col gap-8 lg:flex-row lg:items-start lg:justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 max-w-none lg:max-w-3xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm sm:tracking-[0.2em]", children: content.heroKicker }),
          /* @__PURE__ */ jsx("h1", { className: "mt-3 text-balance text-[1.65rem] font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl", children: content.heroTitle }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-relaxed text-sage sm:text-lg", children: content.heroSubtitle }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap md:justify-start", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: "/quote",
                className: "inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-base shadow-lg transition hover:bg-accent md:w-auto",
                children: [
                  content.primaryCtaLabel ?? "Request a quote",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/contact",
                className: "inline-flex w-full items-center justify-center gap-2 rounded-md border border-sage/50 px-6 py-3 text-sm font-semibold text-secondary transition hover:border-accent hover:text-accent md:w-auto",
                children: "Contact us"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-primary/45 bg-primary/10 text-accent md:mx-0 lg:h-24 lg:w-24", children: /* @__PURE__ */ jsx(Icon, { className: "h-10 w-10 lg:h-12 lg:w-12", "aria-hidden": true }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/20 bg-secondary/80 py-6 dark:bg-base/50", children: /* @__PURE__ */ jsxs("div", { className: "page-container flex flex-col items-center justify-between gap-4 sm:flex-row", children: [
      /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-base/75 dark:text-sage sm:text-left", children: "SIA-aligned delivery \xB7 Supervision & reporting \xB7 UK deployment" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: "/accreditation",
          className: "text-sm font-semibold text-primary transition hover:text-accent",
          children: "Accreditations & standards \u2192"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary py-14 dark:bg-base", children: /* @__PURE__ */ jsx("div", { className: "page-container page-align", children: /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary sm:text-3xl", children: "Request a quote" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-2 max-w-2xl leading-relaxed text-base/80 dark:text-sage md:mx-0", children: "Share your sites, hours, and risks. Our team will respond with a clear scope and next steps." }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          href: "/quote",
          className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-primary/60 bg-primary/10 px-6 py-3 text-sm font-bold text-primary transition hover:bg-primary hover:text-base dark:text-accent md:w-auto md:justify-start",
          children: [
            "Go to quote form",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "border-y border-sage/20 bg-base/[0.03] py-14 dark:bg-secondary/[0.06]", children: /* @__PURE__ */ jsx("div", { className: "page-container page-align", children: /* @__PURE__ */ jsxs(Reveal, { children: [
      content.introParagraphs.map((p, i) => /* @__PURE__ */ jsx(
        "p",
        {
          className: "mx-auto max-w-4xl leading-relaxed text-base/85 dark:text-sage md:mx-0 [&+&]:mt-4",
          children: p
        },
        i
      )),
      /* @__PURE__ */ jsx("h3", { className: "mt-8 text-lg font-semibold text-base dark:text-secondary", children: "Common risks without the right cover" }),
      /* @__PURE__ */ jsx("ul", { className: "mx-auto mt-4 max-w-4xl space-y-2 text-left leading-relaxed text-base/80 dark:text-sage md:mx-0", children: content.riskBullets.map((line) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
        line
      ] }, line)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-14", children: /* @__PURE__ */ jsxs("div", { className: "page-container grid gap-12 page-align lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary", children: content.whatIs.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 leading-relaxed text-base/80 dark:text-sage", children: content.whatIs.body })
      ] }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 0.06, children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary", children: content.whyNeed.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 leading-relaxed text-base/80 dark:text-sage", children: content.whyNeed.body })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-y border-sage/20 bg-base/[0.04] py-14 dark:border-sage/25 dark:bg-secondary/[0.06]", children: /* @__PURE__ */ jsxs("div", { className: "page-container page-align", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary sm:text-3xl", children: content.advantagesTitle }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-2 max-w-3xl text-sm text-base/75 dark:text-sage md:mx-0", children: "Practical outcomes clients ask for in tenders and reviews." })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-10 grid grid-cols-1 gap-4 text-left md:grid-cols-3", children: content.advantages.map((line) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("li", { className: "brand-card brand-card-interactive flex h-full gap-3 p-4", children: [
        /* @__PURE__ */ jsx(
          Check,
          {
            className: "mt-0.5 h-5 w-5 shrink-0 text-primary",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-sm leading-relaxed text-base/85 dark:text-sage", children: line })
      ] }) }, line)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-base py-14 text-secondary", children: /* @__PURE__ */ jsxs("div", { className: "page-container page-align", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold sm:text-3xl", children: content.whyChooseTitle }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-2 max-w-2xl text-sage md:mx-0", children: "SkyWatch is built for estates that need consistency across shifts, not heroics on day one and drift by week four." })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-10 grid grid-cols-1 gap-4 text-left md:grid-cols-3", children: content.whyChooseBullets.map((line) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("li", { className: "brand-card-dark brand-card-dark-interactive flex h-full gap-3 p-4", children: [
        /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent", "aria-hidden": true }),
        /* @__PURE__ */ jsx("span", { className: "text-sm leading-relaxed text-sage", children: line })
      ] }) }, line)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx(
        Link,
        {
          href: "/why-choose-us",
          className: "text-sm font-semibold text-accent transition hover:text-secondary",
          children: "Read more: Why choose us \u2192"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(StaggerSection, { className: "py-14", children: /* @__PURE__ */ jsxs("div", { className: "page-container page-align", children: [
      /* @__PURE__ */ jsxs(StaggerItem, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary sm:text-3xl", children: content.offeringsTitle }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-2 max-w-2xl text-sm text-base/75 dark:text-sage md:mx-0", children: "Explore complementary services, many clients blend guarding, patrols, monitoring, and alarm response on the same contract." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3", children: content.offerings.map((o) => /* @__PURE__ */ jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsxs(
        Link,
        {
          href: o.href,
          className: "brand-card brand-card-interactive group flex h-full flex-col p-6 transition hover:shadow-md",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-base group-hover:text-primary dark:text-secondary dark:group-hover:text-accent", children: o.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 flex-1 text-sm leading-relaxed text-base/75 dark:text-sage", children: o.description }),
            /* @__PURE__ */ jsx("span", { className: "mt-4 text-sm font-semibold text-primary", children: "View service \u2192" })
          ]
        }
      ) }, o.href)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-sage/20 bg-base/[0.03] py-14 dark:bg-secondary/[0.05]", children: /* @__PURE__ */ jsx("div", { className: "page-container page-align", children: /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary", children: content.areasTitle }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-4xl leading-relaxed text-base/80 dark:text-sage md:mx-0", children: content.areasBody })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-14", children: /* @__PURE__ */ jsx("div", { className: "page-container", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "brand-card-cta brand-card-interactive px-6 py-12 page-align sm:px-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary sm:text-3xl", children: content.finalCta.title }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-3xl leading-relaxed text-base/80 dark:text-sage md:mx-0", children: content.finalCta.body }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center md:justify-start", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/quote",
            className: "inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-base transition hover:bg-accent md:w-auto",
            children: [
              "Get a tailored quote",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/reviews",
            className: "inline-flex w-full items-center justify-center gap-2 rounded-md border border-sage/50 px-6 py-3 text-sm font-semibold text-base transition hover:border-primary dark:text-secondary md:w-auto",
            children: "Client reviews"
          }
        )
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-sage/20 bg-secondary py-14 dark:bg-base", children: /* @__PURE__ */ jsxs("div", { className: "page-container page-align", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary", children: "Frequently asked questions" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-2 max-w-3xl text-sm text-base/75 dark:text-sage md:mx-0", children: "Straight answers to questions procurement and site teams often ask first." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-3", children: content.faqs.map((faq) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("details", { className: "group rounded-xl border border-sage/40 bg-base/5 open:border-primary/40 dark:border-sage/30 dark:bg-secondary/5", children: [
        /* @__PURE__ */ jsx("summary", { className: "cursor-pointer list-none px-5 py-4 font-semibold text-base dark:text-secondary [&::-webkit-details-marker]:hidden", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-between gap-4", children: [
          faq.question,
          /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 shrink-0 text-primary transition group-open:rotate-90" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "border-t border-sage/25 px-5 pb-4 pt-3 text-sm leading-relaxed text-base/80 dark:text-sage", children: faq.answer })
      ] }) }, faq.question)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-sage/20 py-10", children: /* @__PURE__ */ jsx("div", { className: "page-container page-align", children: /* @__PURE__ */ jsx(
      Link,
      {
        href: "/services",
        className: "text-sm font-semibold text-primary hover:text-accent",
        children: "\u2190 Back to all services"
      }
    ) }) })
  ] });
}
export {
  ServiceDetailLayout
};
