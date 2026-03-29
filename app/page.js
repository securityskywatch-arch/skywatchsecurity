import { jsx, jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Newspaper, ShieldCheck, Users } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { HomeReviewsCarousel } from "@/components/home/HomeReviewsCarousel";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { WhyChooseHomeSection } from "@/components/home/WhyChooseHomeSection";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { blogPosts } from "@/lib/blog";
import { reviews } from "@/lib/reviews";
import { getServiceBySlug } from "@/lib/services";
const featuredSlugs = [
  "manned-security-guards",
  "dog-handling",
  "corporate-security",
  "concierge-security",
  "door-supervision",
  "event-security",
  "key-holding-alarm-response"
];
const featured = featuredSlugs.map((slug) => getServiceBySlug(slug)).filter((s) => s != null);
function HomePage() {
  return /* @__PURE__ */ jsxs("main", { className: "flex min-w-0 flex-1 flex-col overflow-x-clip", children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(WelcomeSection, {}),
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/20 bg-secondary px-4 py-14 dark:border-sage/25 dark:bg-base sm:px-6 sm:py-16 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid min-w-0 max-w-page gap-6 sm:grid-cols-3 sm:gap-8", children: [
      {
        Icon: ShieldCheck,
        title: "SIA-approved standards",
        body: "Licensed officers, disciplined patrols, and accountable handovers."
      },
      {
        Icon: Users,
        title: "Customer-focused teams",
        body: "Polite, confident guards who represent your brand at the door."
      },
      {
        Icon: Award,
        title: "Quality you can audit",
        body: "Structured reporting and management visibility on every shift."
      }
    ].map(({ Icon, title, body }) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 gap-4 rounded-xl border border-sage/35 bg-base/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lift-gold dark:border-sage/30 dark:bg-secondary/5 dark:hover:border-primary/40", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/40 text-primary", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5", "aria-hidden": true }) }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "break-words font-semibold text-base dark:text-secondary", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 break-words text-sm text-base/70 dark:text-sage", children: body })
      ] })
    ] }) }, title)) }) }),
    /* @__PURE__ */ jsxs(StaggerSection, { className: "relative overflow-hidden border-b border-sage/20 bg-secondary px-4 py-16 dark:border-sage/25 dark:bg-base sm:px-6 sm:py-20 lg:px-8", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "pointer-events-none absolute left-1/2 top-0 h-72 w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[100px] dark:bg-primary/15",
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "pointer-events-none absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-accent/[0.06] blur-[80px] dark:bg-accent/10",
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto min-w-0 max-w-page", children: [
        /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.22em] text-[#5c3d06] dark:text-accent sm:text-sm sm:tracking-[0.26em]", children: "What we deliver" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-3 text-balance text-[1.65rem] font-bold leading-tight tracking-tight text-base dark:text-secondary sm:text-3xl md:text-4xl", children: "Featured security services" }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-base/75 dark:text-sage", children: "Bespoke packages spanning manned guarding, concierge, patrols, and rapid alarm response\u2014structured like leading UK contractors." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-14 grid min-w-0 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3", children: featured.map((service) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx(ServiceCard, { slug: service.slug }) }, service.slug)) }),
        /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-12 max-w-2xl rounded-2xl border border-primary/35 bg-gradient-to-br from-primary/[0.08] via-primary/[0.04] to-transparent p-6 text-center shadow-lg dark:from-primary/15 dark:via-primary/10 dark:to-transparent sm:p-8", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-[#5c3d06] dark:text-accent", children: "Need a blended package?" }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto mt-2 max-w-lg text-sm leading-relaxed text-base/75 dark:text-sage", children: "Combine guarding with patrols, CCTV coordination, or key holding on one instruction set." }),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/quote",
              className: "mt-5 inline-flex min-h-[44px] items-center justify-center gap-1 text-sm font-bold text-[#5c3d06] touch-manipulation transition hover:gap-2 hover:text-[#3d2904] dark:text-accent dark:hover:text-accent",
              children: "Build a quote \u2192"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/services",
            className: "inline-flex items-center gap-2 rounded-md border border-primary/50 px-5 py-2.5 text-sm font-semibold text-[#5c3d06] transition hover:bg-primary hover:text-[#141414] dark:text-accent dark:hover:text-base",
            children: [
              "Browse the full service catalogue",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(WhyChooseHomeSection, {}),
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/20 bg-secondary px-4 py-16 dark:border-sage/25 dark:bg-base sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-page", children: /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold tracking-tight text-base dark:text-secondary sm:text-3xl", children: "Accreditation partners" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-2 max-w-2xl text-sm text-base/75 dark:text-sage", children: "Aligned with schemes and standards your procurement team expects." }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/accreditation",
            className: "mt-4 inline-flex text-sm font-semibold text-[#5c3d06] hover:text-[#3d2904] dark:text-accent dark:hover:text-accent",
            children: "Learn more \u2192"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
        "Safe Contractor",
        "Constructionline",
        "ISO 9001\u2013minded QMS",
        "SIA disciplines",
        "UKAS-aligned thinking"
      ].map((label) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "rounded-full border border-sage/45 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-base/80 transition hover:border-primary/50 dark:border-sage/35 dark:text-sage",
          children: label
        },
        label
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/20 bg-secondary px-4 py-16 dark:border-sage/25 dark:bg-base sm:px-6 sm:py-20 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto min-w-0 max-w-page", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-[#5c3d06] dark:text-accent sm:text-sm", children: "Testimonials" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 text-[1.65rem] font-bold leading-tight tracking-tight text-base dark:text-secondary sm:text-3xl md:text-4xl", children: "What our clients say" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-2 max-w-xl text-sm text-base/75 dark:text-sage", children: "Rated experiences from estates, operations, and property teams we support across the UK." }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/reviews",
            className: "mt-4 inline-flex text-sm font-semibold text-[#5c3d06] hover:text-[#3d2904] dark:text-accent dark:hover:text-accent",
            children: "View all reviews \u2192"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(HomeReviewsCarousel, { reviews })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary px-4 py-16 dark:bg-base sm:px-6 sm:py-20 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto min-w-0 max-w-page", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/40 text-primary", children: /* @__PURE__ */ jsx(Newspaper, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-[1.65rem] font-bold leading-tight tracking-tight text-base dark:text-secondary sm:text-3xl md:text-4xl", children: "Recent blogs" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-2 max-w-xl text-sm text-base/75 dark:text-sage", children: "Insights across retail, corporate, and regional security." }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/blog",
            className: "mt-4 inline-flex text-sm font-semibold text-[#5c3d06] hover:text-[#3d2904] dark:text-accent dark:hover:text-accent",
            children: "View all blogs \u2192"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 lg:grid-cols-3", children: blogPosts.map((post) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("article", { className: "group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-sage/40 bg-base/5 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift-gold dark:border-sage/30 dark:bg-secondary/5", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: `/blog/${post.slug}`,
            className: "relative aspect-[16/10] overflow-hidden",
            children: [
              /* @__PURE__ */ jsx(
                Image,
                {
                  src: post.coverImage,
                  alt: "",
                  fill: true,
                  className: "object-cover transition duration-500 group-hover:scale-105",
                  sizes: "(max-width: 1024px) 100vw, 33vw"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-base/60 to-transparent opacity-80 dark:from-base/80" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 flex-col p-5 sm:p-6", children: [
          /* @__PURE__ */ jsx("time", { className: "text-xs font-medium uppercase tracking-wider text-[#5c3d06] dark:text-accent", children: post.date }),
          /* @__PURE__ */ jsx("h3", { className: "mt-2 text-base font-semibold dark:text-secondary sm:text-lg", children: /* @__PURE__ */ jsx(
            Link,
            {
              href: `/blog/${post.slug}`,
              className: "break-words text-[#1a1a1a] transition hover:text-primary dark:text-secondary dark:hover:text-accent",
              children: post.title
            }
          ) }),
          /* @__PURE__ */ jsxs("p", { className: "mt-2 flex-1 break-words text-sm text-base/75 dark:text-sage", children: [
            post.excerpt.slice(0, 140),
            "\u2026"
          ] }),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: `/blog/${post.slug}`,
              className: "mt-4 text-sm font-semibold text-[#5c3d06] hover:text-[#3d2904] dark:text-accent dark:hover:text-accent",
              children: "Read more \u2192"
            }
          )
        ] })
      ] }) }, post.slug)) })
    ] }) })
  ] });
}
export {
  HomePage as default
};
