import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  FileText,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Users
} from "lucide-react";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
const metadata = {
  title: "Recruitment",
  description: "Careers at SkyWatch Security: SIA roles, training, vetting, wellbeing, and fair progression for licensed officers and supervisors."
};
const steps = [
  {
    step: "01",
    title: "Apply",
    text: "Share your licence details, availability, and preferred regions. We respond with realistic next steps, not automated silence."
  },
  {
    step: "02",
    title: "Screening",
    text: "Right-to-work, SIA validity, references, and role-appropriate checks aligned to client and safeguarding expectations."
  },
  {
    step: "03",
    title: "Induction",
    text: "Site-specific briefings covering hazards, customer service tone, reporting tools, and escalation contacts."
  },
  {
    step: "04",
    title: "Ongoing support",
    text: "Supervisor visits, refresher training, and open channels when rosters or welfare need adjusting."
  }
];
const benefits = [
  {
    Icon: ShieldCheck,
    title: "Licensed work, done properly",
    text: "Posts matched to your licence category, no informal \u201Cjust stand here\u201D deployments that put you or the client at risk."
  },
  {
    Icon: GraduationCap,
    title: "Training pathways",
    text: "Door, retail, education, and event contexts each need different skills. We invest in role-specific briefings."
  },
  {
    Icon: HeartPulse,
    title: "Welfare-aware rosters",
    text: "Lone working, night shifts, and travel time are planned with human limits in mind, not spreadsheet optimism."
  },
  {
    Icon: Award,
    title: "Recognition",
    text: "Strong performance shows up in repeat placements, supervisor notes, and progression into lead or site liaison roles."
  }
];
function RecruitmentPage() {
  return /* @__PURE__ */ jsxs("main", { className: "flex-1 bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-b border-sage/30 bg-base px-4 py-16 text-secondary sm:px-6 lg:px-8 lg:py-20", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "pointer-events-none absolute inset-0 opacity-25",
          "aria-hidden": true,
          style: {
            background: "radial-gradient(circle at 70% 30%, rgba(196,129,0,0.5), transparent 55%)"
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-page", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-2 lg:items-center", children: [
        /* @__PURE__ */ jsxs(Reveal, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-accent", children: "Careers" }),
          /* @__PURE__ */ jsx("h1", { className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl", children: "Build a security career with standards, not shortcuts." }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-relaxed text-sage", children: "We recruit professional SIA licence-holders who want clear instructions, respectful management, and sites where their judgement matters. Whether you\u2019re experienced or returning to the industry, we\u2019ll be honest about fit, hours, and expectations." })
        ] }),
        /* @__PURE__ */ jsx(Reveal, { delay: 0.08, children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: "/recruitment/vacancies",
              className: "group flex flex-col rounded-2xl border border-primary/40 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-primary/10",
              children: [
                /* @__PURE__ */ jsx(Users, { className: "h-9 w-9 text-accent" }),
                /* @__PURE__ */ jsx("span", { className: "mt-4 text-lg font-bold text-secondary", children: "Current vacancies" }),
                /* @__PURE__ */ jsx("span", { className: "mt-2 text-sm text-sage", children: "Roles, locations, and shift patterns we\u2019re hiring for now." }),
                /* @__PURE__ */ jsxs("span", { className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent", children: [
                  "View roles",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: "/recruitment/apply",
              className: "group flex flex-col rounded-2xl border border-sage/40 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-primary/50",
              children: [
                /* @__PURE__ */ jsx(FileText, { className: "h-9 w-9 text-primary" }),
                /* @__PURE__ */ jsx("span", { className: "mt-4 text-lg font-bold text-secondary", children: "Application form" }),
                /* @__PURE__ */ jsx("span", { className: "mt-2 text-sm text-sage", children: "Join our talent pool for upcoming mobilisations." }),
                /* @__PURE__ */ jsxs("span", { className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary", children: [
                  "Apply now",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })
                ] })
              ]
            }
          )
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-page px-4 py-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary sm:text-3xl", children: "Equality, diversity & inclusion" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl leading-relaxed text-base/80 dark:text-sage", children: "We are committed to fair recruitment and respectful workplaces. Selection is based on competence, licence suitability, and business need, never unlawful discrimination. If you need reasonable adjustments during application or interview, tell us and we will work with you pragmatically." })
    ] }) }),
    /* @__PURE__ */ jsx(StaggerSection, { className: "border-y border-sage/20 bg-base/[0.04] px-4 py-16 dark:border-sage/25 dark:bg-secondary/[0.06] sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-page", children: [
      /* @__PURE__ */ jsxs(StaggerItem, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-center text-2xl font-bold text-base dark:text-secondary sm:text-3xl", children: "From application to first shift" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-2xl text-center text-sm text-base/75 dark:text-sage", children: "Transparent stages so you always know what happens next." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: steps.map(({ step, title, text }) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "relative h-full rounded-2xl border border-sage/40 bg-secondary/80 p-6 dark:border-sage/30 dark:bg-base/40", children: [
        /* @__PURE__ */ jsx("span", { className: "text-4xl font-black text-primary/25", children: step }),
        /* @__PURE__ */ jsx("h3", { className: "mt-2 text-lg font-bold text-base dark:text-secondary", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-base/75 dark:text-sage", children: text })
      ] }) }, step)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-page px-4 py-16 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-base dark:text-secondary sm:text-3xl", children: "What officers tell us they value" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-2", children: benefits.map(({ Icon, title, text }) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4 rounded-2xl border border-sage/40 bg-base/5 p-6 dark:border-sage/30 dark:bg-secondary/5", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/35 text-primary", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-base dark:text-secondary", children: title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-base/75 dark:text-sage", children: text })
        ] })
      ] }) }, title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-4 pb-20 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/15 to-transparent px-8 py-10 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-base dark:text-secondary", children: "Ready to explore roles?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-base/75 dark:text-sage", children: "Vacancies change weekly, start with live roles or leave a general application." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/recruitment/vacancies",
            className: "rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-base hover:bg-accent",
            children: "View vacancies"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/recruitment/apply",
            className: "rounded-md border border-sage/50 px-5 py-2.5 text-sm font-semibold text-primary hover:border-primary",
            children: "Application form"
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  RecruitmentPage as default,
  metadata
};
