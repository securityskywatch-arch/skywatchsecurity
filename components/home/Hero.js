"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { ArrowRight, Check, Shield } from "lucide-react";
import { LoadingSubmitButton } from "@/components/forms/LoadingSubmitButton";
import { ValidatedForm } from "@/components/forms/ValidatedForm";

const heroServices = [
  "Security guarding",
  "Door supervision",
  "Event security",
  "Corporate security",
  "Concierge security",
  "Construction site security",
  "Key holding",
];

const labelClass =
  "mb-0 block text-[0.8125rem] font-medium tracking-wide text-base/75 dark:text-[#d8d3c8]";
const fieldClass =
  "mt-1 w-full rounded-lg border border-sage/45 bg-white px-3 py-2 text-[0.875rem] text-base shadow-[0_1px_2px_rgba(0,0,0,0.05)] outline-none transition placeholder:text-base/45 focus:border-primary focus:ring-2 focus:ring-primary/15 dark:border-white/12 dark:bg-white/[0.07] dark:text-[#f4f0e6] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:placeholder:text-[#9a9488] dark:focus:border-primary/65 dark:focus:ring-primary/20 backdrop-blur-sm";

function Hero({ heroSent }) {
  return /* @__PURE__ */ jsxs("section", {
    className:
      "relative overflow-hidden border-b border-sage/25 bg-secondary px-4 pb-14 pt-8 dark:border-white/[0.06] dark:bg-[#0c0c0c] sm:px-6 sm:pb-16 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-12",
    children: [
      /* @__PURE__ */ jsx("div", {
        className:
          "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#faf6ec_0%,#f3ecdc_42%,#efe6d4_100%)] dark:bg-[linear-gradient(180deg,#141414_0%,#0c0c0c_45%,#0a0a0a_100%)]",
        "aria-hidden": true,
      }),
      /* @__PURE__ */ jsx("div", {
        className:
          "pointer-events-none absolute inset-0 opacity-70 dark:opacity-100",
        "aria-hidden": true,
        style: {
          background:
            "radial-gradient(ellipse 85% 55% at 100% 0%, rgba(196,129,0,0.14), transparent 52%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(255,204,0,0.08), transparent 48%)",
        },
      }),
      /* @__PURE__ */ jsx("div", {
        className: "relative z-[1] mx-auto w-full min-w-0 max-w-page",
        children: /* @__PURE__ */ jsxs("div", {
          className:
            "grid min-w-0 items-start gap-10 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-6 xl:gap-8",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "min-w-0 max-w-xl lg:max-w-none",
              children: [
                /* @__PURE__ */ jsxs("div", {
                  className:
                    "mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/[0.12] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5c3d06] dark:text-accent sm:text-[11px]",
                  children: [
                    /* @__PURE__ */ jsxs("span", {
                      className: "relative flex h-2 w-2",
                      children: [
                        /* @__PURE__ */ jsx("span", {
                          className:
                            "absolute inline-flex h-full w-full motion-safe:animate-ping motion-reduce:animate-none rounded-full bg-accent opacity-50",
                        }),
                        /* @__PURE__ */ jsx("span", {
                          className: "relative inline-flex h-2 w-2 rounded-full bg-accent",
                        }),
                      ],
                    }),
                    "Live enquiries welcome",
                  ],
                }),
                /* @__PURE__ */ jsx("p", {
                  className:
                    "text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5c3d06] dark:text-accent sm:text-xs sm:tracking-[0.26em]",
                  children: "UK's trusted security services",
                }),
                /* @__PURE__ */ jsx("h1", {
                  className:
                    "mt-3 text-balance text-[1.625rem] font-bold leading-snug tracking-tight text-base sm:mt-4 sm:text-3xl sm:leading-snug lg:text-[2.125rem] lg:leading-tight xl:text-[2.25rem] dark:text-white",
                  children: "Professional protection for businesses that demand reliability.",
                }),
                /* @__PURE__ */ jsx("p", {
                  className:
                    "mt-4 text-base leading-relaxed text-base/75 sm:mt-5 sm:max-w-[34rem] sm:text-[1.0625rem] sm:leading-relaxed lg:max-w-none lg:text-[1.085rem] xl:pr-4 dark:text-[#c4bfb4]",
                  children:
                    "SIA-aligned guarding, patrols, key holding, and monitoring with officers who represent your brand with calm authority.",
                }),
                /* @__PURE__ */ jsx("p", {
                  className:
                    "mt-3 text-xs font-medium text-[#5c574c] sm:text-[13px] dark:text-[#a69f8f]",
                  children: "Typical response within one business day.",
                }),
                /* @__PURE__ */ jsx("ul", {
                  className:
                    "mt-6 grid grid-cols-1 gap-2.5 sm:mt-7 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-2 lg:gap-x-12",
                  children: heroServices.map((item) =>
                    /* @__PURE__ */ jsxs(
                      "li",
                      {
                        className:
                          "flex min-w-0 items-center gap-2.5 text-sm font-medium text-base/85 dark:text-[#e8e4dc]",
                        children: [
                          /* @__PURE__ */ jsx("span", {
                            className:
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/55 bg-white text-[#5c3d06] shadow-[0_1px_2px_rgba(0,0,0,0.06)] dark:border-transparent dark:bg-primary/25 dark:text-accent dark:shadow-none",
                            children: /* @__PURE__ */ jsx(Check, {
                              className: "h-3.5 w-3.5",
                              strokeWidth: 2.5,
                            }),
                          }),
                          item,
                        ],
                      },
                      item,
                    ),
                  ),
                }),
                /* @__PURE__ */ jsxs("div", {
                  className:
                    "mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4",
                  children: [
                    /* @__PURE__ */ jsxs(Link, {
                      href: "/services",
                      className:
                        "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-sage/50 bg-base/[0.04] px-5 py-2.5 text-sm font-semibold text-base transition hover:border-primary/50 hover:bg-base/[0.07] hover:text-primary dark:border-white/25 dark:bg-white/[0.06] dark:text-white dark:hover:border-accent/60 dark:hover:bg-white/[0.1] dark:hover:text-accent",
                      children: [
                        "Explore services",
                        /* @__PURE__ */ jsx(ArrowRight, {
                          className: "h-4 w-4 shrink-0",
                          "aria-hidden": true,
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsx(Link, {
                      href: "/quote",
                      className:
                        "inline-flex min-h-[44px] items-center justify-center text-sm font-semibold text-[#5c574c] underline decoration-[#5c3d06]/35 underline-offset-[5px] transition hover:text-[#3d2904] sm:min-h-0 sm:py-2.5 dark:text-[#b5ae9e] dark:decoration-white/20 dark:hover:text-accent",
                      children: "Full quote form",
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsx("div", {
              className:
                "min-w-0 w-full flex justify-center lg:justify-start",
              children: /* @__PURE__ */ jsxs("div", {
                className:
                  "relative w-full max-w-[30rem] overflow-hidden rounded-2xl border border-sage/40 bg-gradient-to-b from-white/70 via-secondary/50 to-white/40 shadow-md ring-1 ring-sage/25 backdrop-blur-xl sm:max-w-[32rem] lg:max-w-none dark:border-sage/30 dark:from-secondary/[0.08] dark:via-base/45 dark:to-base/35 dark:shadow-[0_28px_56px_-20px_rgba(0,0,0,0.65)] dark:shadow-lift-gold dark:ring-sage/25",
                children: [
                  /* @__PURE__ */ jsx("div", {
                    className:
                      "pointer-events-none absolute inset-0 opacity-40 dark:opacity-[0.85]",
                    "aria-hidden": true,
                    style: {
                      background:
                        "radial-gradient(ellipse 100% 80% at 10% 0%, rgba(196,129,0,0.12), transparent 55%), radial-gradient(ellipse 90% 70% at 100% 100%, rgba(255,204,0,0.06), transparent 50%)",
                    },
                  }),
                  /* @__PURE__ */ jsx("div", {
                    className:
                      "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent",
                    "aria-hidden": true,
                  }),
                  /* @__PURE__ */ jsx("div", {
                    className: "h-0.5 w-full bg-gradient-to-r from-primary/80 via-accent/90 to-primary/80",
                    "aria-hidden": true,
                  }),
                  /* @__PURE__ */ jsxs("div", {
                    className: "relative px-4 pb-4 pt-4 sm:px-5 sm:pb-4 sm:pt-4",
                    children: [
                      /* @__PURE__ */ jsxs("div", {
                        className: "flex gap-2.5",
                        children: [
                          /* @__PURE__ */ jsx("span", {
                            className:
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary shadow-sm backdrop-blur-sm",
                            children: /* @__PURE__ */ jsx(Shield, {
                              className: "h-[1.125rem] w-[1.125rem]",
                              strokeWidth: 2,
                              "aria-hidden": true,
                            }),
                          }),
                          /* @__PURE__ */ jsxs("div", {
                            className: "min-w-0 pt-0.5",
                            children: [
                              /* @__PURE__ */ jsx("h2", {
                                id: "hero-quote-heading",
                                className:
                                  "text-base font-bold tracking-tight text-base sm:text-lg dark:text-secondary",
                                children: "Request a quote",
                              }),
                              /* @__PURE__ */ jsx("p", {
                                className:
                                  "mt-0.5 text-xs leading-snug text-base/65 sm:text-[13px] dark:text-sage",
                                children:
                                  "Tell us what you need. We’ll reply with next steps.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs(ValidatedForm, {
                        className: "mt-3 space-y-2.5 sm:mt-4 sm:space-y-2.5",
                        action: "/api/forms/quote",
                        method: "post",
                        "aria-labelledby": "hero-quote-heading",
                        children: [
                          /* @__PURE__ */ jsx("input", { type: "hidden", name: "quote_source", value: "hero" }),
                          heroSent === "1" ? /* @__PURE__ */ jsx("p", { className: "rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300", children: "Quote request sent successfully. We will contact you shortly." }) : null,
                          heroSent === "0" ? /* @__PURE__ */ jsx("p", { className: "rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-300", children: "Could not send request right now. Please try again." }) : null,
                          /* @__PURE__ */ jsxs("div", {
                            children: [
                              /* @__PURE__ */ jsx("label", {
                                htmlFor: "hero-quote-name",
                                className: labelClass,
                                children: "Name",
                              }),
                              /* @__PURE__ */ jsx("input", {
                                id: "hero-quote-name",
                                name: "name",
                                required: true,
                                minLength: 2,
                                maxLength: 80,
                                autoComplete: "name",
                                placeholder: "Your name",
                                className: fieldClass,
                              }),
                            ],
                          }),
                          /* @__PURE__ */ jsx("p", { className: "field-error", children: "Please enter your name (at least 2 characters)." }),
                          /* @__PURE__ */ jsxs("div", {
                            children: [
                              /* @__PURE__ */ jsx("label", {
                                htmlFor: "hero-quote-email",
                                className: labelClass,
                                children: "Work email",
                              }),
                              /* @__PURE__ */ jsx("input", {
                                id: "hero-quote-email",
                                name: "email",
                                type: "email",
                                required: true,
                                autoComplete: "email",
                                placeholder: "you@company.com",
                                className: fieldClass,
                              }),
                            ],
                          }),
                          /* @__PURE__ */ jsx("p", { className: "field-error", children: "Please enter a valid work email, e.g. name@company.co.uk." }),
                          /* @__PURE__ */ jsxs("div", {
                            children: [
                              /* @__PURE__ */ jsx("label", {
                                htmlFor: "hero-quote-phone",
                                className: labelClass,
                                children: "Phone",
                              }),
                              /* @__PURE__ */ jsx("input", {
                                id: "hero-quote-phone",
                                name: "phone",
                                type: "tel",
                                required: true,
                                autoComplete: "tel",
                                pattern: "^\\+?[0-9()\\-\\s]{7,20}$",
                                title: "Please enter a valid phone number",
                                placeholder: "Best number to reach you",
                                className: fieldClass,
                              }),
                            ],
                          }),
                          /* @__PURE__ */ jsx("p", { className: "field-error", children: "Please enter a valid UK contact number." }),
                          /* @__PURE__ */ jsxs("div", {
                            children: [
                              /* @__PURE__ */ jsx("label", {
                                htmlFor: "hero-quote-msg",
                                className: labelClass,
                                children: "How can we help?",
                              }),
                              /* @__PURE__ */ jsx("textarea", {
                                id: "hero-quote-msg",
                                name: "message",
                                rows: 2,
                                required: true,
                                minLength: 10,
                                maxLength: 1000,
                                placeholder: "Site, hours, service type…",
                                className: `${fieldClass} min-h-[3.75rem] resize-y sm:min-h-16`,
                              }),
                            ],
                          }),
                          /* @__PURE__ */ jsx("p", { className: "field-error", children: "Please add at least 10 characters in your message." }),
                          /* @__PURE__ */ jsx("div", { className: "mt-0.5", children:
                            /* @__PURE__ */ jsx(LoadingSubmitButton, {
                              idleLabel: "Get my quote",
                              loadingLabel: "Sending...",
                              className:
                                "flex min-h-[42px] w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold tracking-wide text-[#141414] shadow-sm transition hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-75",
                            }),
                          }),
                          /* @__PURE__ */ jsx("p", {
                            className:
                              "mt-1 text-center text-[10px] leading-tight text-base/55 sm:text-[11px] dark:text-sage/75",
                            children: "We never share your details.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}

export { Hero };
