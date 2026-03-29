"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import {
  aboutNavItems,
  recruitmentNavItems,
  serviceNavItems
} from "@/lib/navigation";
function dropdownLinkClass() {
  return "block px-4 py-2.5 text-sm leading-snug text-[#1a1a1a]/90 transition hover:bg-primary/10 hover:text-primary dark:text-secondary/95 dark:hover:bg-primary/15 dark:hover:text-accent";
}
function DesktopHoverDropdown({
  label,
  wide,
  active,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "group relative z-0 hover:z-[120] focus-within:z-[120]", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        tabIndex: 0,
        "aria-haspopup": "true",
        className: `flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium outline-none transition ring-accent/0 focus-visible:ring-2 ${active ? "bg-primary/15 text-[#5c3d06] dark:text-accent" : "text-[#1a1a1a]/90 hover:bg-base/[0.06] hover:text-primary dark:text-secondary/90 dark:hover:bg-white/5 dark:hover:text-accent"}`,
        children: [
          label,
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              className: "h-4 w-4 shrink-0 transition duration-200 group-hover:rotate-180 group-focus-within:rotate-180",
              "aria-hidden": true
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none invisible absolute left-0 top-full z-[110] pt-2 opacity-0 transition-[opacity,visibility] duration-200 ease-out group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100",
        role: "menu",
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: `max-h-[min(72vh,480px)] overflow-y-auto overflow-x-hidden rounded-xl border border-sage/40 bg-white py-2 shadow-lg ring-1 ring-black/[0.04] dark:border-primary/45 dark:bg-[#121212] dark:shadow-lift-gold dark:ring-sage/15 ${wide ? "w-[min(36rem,calc(100vw-2rem))]" : "min-w-[17rem] max-w-[calc(100vw-2rem)]"}`,
            children
          }
        )
      }
    )
  ] });
}
function NavbarInner({ logoSrc }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAcc, setMobileAcc] = useState(null);
  useEffect(() => {
    setMobileOpen(false);
    setMobileAcc(null);
  }, [pathname]);
  const isActive = (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`);
  const aboutActive = isActive("/about") || isActive("/standards");
  const servicesActive = isActive("/services");
  const recruitmentActive = isActive("/recruitment");
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileAcc(null);
  };
  const linkItems = (items) => items.map(({ href, label }) => /* @__PURE__ */ jsx(Link, { href, role: "menuitem", className: dropdownLinkClass(), children: label }, href));
  const mobileDrawerLinkClass = "block w-full border-b border-sage/15 px-3 py-3 text-left text-sm font-medium leading-relaxed text-[#1a1a1a] transition hover:bg-base/[0.06] last:border-b-0 dark:border-sage/20 dark:text-secondary dark:hover:bg-white/5";
  const mobileDrawerLinkItems = (items) => items.map(({ href, label }) => /* @__PURE__ */ jsx(Link, { href, role: "menuitem", onClick: closeMobile, className: mobileDrawerLinkClass, children: label }, href));
  const aboutLinks = /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2", children: linkItems(aboutNavItems) });
  const serviceLinks = /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2", children: linkItems(serviceNavItems) });
  const recruitmentLinks = /* @__PURE__ */ jsx(Fragment, { children: linkItems(recruitmentNavItems) });
  const mobileAboutLinks = /* @__PURE__ */ jsx("div", { className: "min-w-0", children: mobileDrawerLinkItems(aboutNavItems) });
  const mobileServiceLinks = /* @__PURE__ */ jsx("div", { className: "min-w-0", children: mobileDrawerLinkItems(serviceNavItems) });
  const mobileRecruitmentLinks = /* @__PURE__ */ jsx("div", { className: "min-w-0", children: mobileDrawerLinkItems(recruitmentNavItems) });
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-[60] overflow-visible border-b border-sage/30 bg-secondary text-[#1a1a1a] shadow-sm dark:border-sage/30 dark:bg-base dark:text-secondary", children: [
    /* @__PURE__ */ jsxs("div", { className: "page-container flex items-center justify-between gap-2 overflow-visible py-2 sm:gap-3 sm:py-3 lg:gap-4 lg:py-4", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          href: "/",
          className:
            "relative z-[70] flex min-w-0 max-w-[calc(100%-6.5rem)] shrink items-center gap-2.5 overflow-visible rounded-lg pr-1 outline-none ring-primary/0 transition hover:opacity-95 focus-visible:ring-2 focus-visible:ring-primary/50 sm:max-w-none sm:gap-3",
          onClick: closeMobile,
          "aria-label": "SkyWatch Security, home",
          children: /* @__PURE__ */ jsxs(Fragment, {
            children: [
              /* @__PURE__ */ jsx(
                Image,
                {
                  src: logoSrc,
                  alt: "",
                  width: 520,
                  height: 156,
                  className:
                    "h-8 w-auto shrink-0 object-contain object-left md:h-12 lg:h-14",
                  priority: true,
                  sizes: "(max-width: 768px) 96px, (max-width: 1024px) 140px, 180px"
                }
              ),
              /* @__PURE__ */ jsxs("span", {
                className:
                  "flex min-w-0 flex-col justify-center gap-0.5 leading-none sm:gap-1",
                children: [
                  /* @__PURE__ */ jsxs("span", {
                    className:
                      "truncate text-[0.95rem] font-black tracking-[-0.02em] text-[#141414] sm:text-lg md:text-xl lg:text-[1.35rem] lg:leading-[1.1] dark:text-[#faf8f3]",
                    children: [
                      "Sky",
                      /* @__PURE__ */ jsx("span", {
                        className:
                          "text-primary dark:bg-gradient-to-r dark:from-[#fff4d4] dark:via-accent dark:to-primary dark:bg-clip-text dark:text-transparent",
                        children: "Watch"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsx("span", {
                    className:
                      "relative inline-block w-max max-w-full text-[0.625rem] font-bold uppercase leading-none tracking-[0.08em] text-primary after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:rounded-full after:bg-gradient-to-r after:from-primary/40 after:via-accent/80 after:to-primary/40 dark:text-accent dark:after:from-accent/30 dark:after:via-accent dark:after:to-primary/40 sm:text-[0.6875rem] sm:tracking-[0.1em]",
                    children: "SECURITY"
                  })
                ]
              })
            ]
          })
        }
      ),
      /* @__PURE__ */ jsxs(
        "nav",
        {
          className: "hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-visible lg:flex xl:gap-1",
          "aria-label": "Main",
          children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/",
                className: `rounded-md px-3 py-2 text-sm font-medium transition ${pathname === "/" ? "bg-primary/15 text-[#5c3d06] dark:text-accent" : "text-[#1a1a1a]/90 hover:bg-base/[0.06] hover:text-primary dark:text-secondary/90 dark:hover:bg-white/5 dark:hover:text-accent"}`,
                children: "Home"
              }
            ),
            /* @__PURE__ */ jsx(DesktopHoverDropdown, { label: "About Us", wide: true, active: aboutActive, children: aboutLinks }),
            /* @__PURE__ */ jsx(DesktopHoverDropdown, { label: "Services", wide: true, active: servicesActive, children: serviceLinks }),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/why-choose-us",
                className: `rounded-md px-3 py-2 text-sm font-medium transition ${isActive("/why-choose-us") ? "bg-primary/15 text-[#5c3d06] dark:text-accent" : "text-[#1a1a1a]/90 hover:bg-base/[0.06] hover:text-primary dark:text-secondary/90 dark:hover:bg-white/5 dark:hover:text-accent"}`,
                children: "Why Choose Us"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/accreditation",
                className: `rounded-md px-3 py-2 text-sm font-medium transition ${isActive("/accreditation") ? "bg-primary/15 text-[#5c3d06] dark:text-accent" : "text-[#1a1a1a]/90 hover:bg-base/[0.06] hover:text-primary dark:text-secondary/90 dark:hover:bg-white/5 dark:hover:text-accent"}`,
                children: "Accreditation"
              }
            ),
            /* @__PURE__ */ jsx(
              DesktopHoverDropdown,
              {
                label: "Recruitment",
                active: recruitmentActive,
                children: recruitmentLinks
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/contact",
                className: `rounded-md px-3 py-2 text-sm font-medium transition ${isActive("/contact") ? "bg-primary/15 text-[#5c3d06] dark:text-accent" : "text-[#1a1a1a]/90 hover:bg-base/[0.06] hover:text-primary dark:text-secondary/90 dark:hover:bg-white/5 dark:hover:text-accent"}`,
                children: "Contact"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/blog",
                className: `rounded-md px-3 py-2 text-sm font-medium transition ${isActive("/blog") ? "bg-primary/15 text-[#5c3d06] dark:text-accent" : "text-[#1a1a1a]/90 hover:bg-base/[0.06] hover:text-primary dark:text-secondary/90 dark:hover:bg-white/5 dark:hover:text-accent"}`,
                children: "Blog"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 items-center gap-2", children: [
        /* @__PURE__ */ jsx(ThemeToggle, {}),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/quote",
            className: "hidden whitespace-nowrap rounded-md bg-primary px-3 py-2 text-sm font-semibold text-[#141414] shadow-sm transition hover:bg-accent hover:text-[#141414] lg:inline-flex",
            children: "Request a Quote"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "inline-flex h-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-sage/40 text-[#1a1a1a] touch-manipulation dark:text-secondary lg:hidden",
            "aria-expanded": mobileOpen,
            "aria-controls": "mobile-nav",
            onClick: () => setMobileOpen((v) => !v),
            children: mobileOpen ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
          }
        )
      ] })
    ] }),
    mobileOpen ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "fixed inset-0 z-[54] bg-black/45 lg:hidden",
          "aria-label": "Close menu",
          onClick: closeMobile
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          id: "mobile-nav",
          className:
            "fixed bottom-0 left-0 right-0 top-16 z-[55] max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-y-contain border-t border-sage/25 bg-secondary px-3 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-2 shadow-2xl dark:border-sage/25 dark:bg-base lg:hidden",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex min-h-0 flex-col gap-0", children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/",
                  onClick: closeMobile,
                  className: `rounded-md px-3 py-3 text-sm font-medium leading-relaxed ${pathname === "/" ? "bg-primary/15 text-[#5c3d06] dark:text-accent" : "text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5"}`,
                  children: "Home"
                }
              ),
              [
                {
                  key: "about",
                  label: "About Us",
                  content: mobileAboutLinks
                },
                {
                  key: "services",
                  label: "Services",
                  content: mobileServiceLinks
                },
                {
                  key: "recruitment",
                  label: "Recruitment",
                  content: mobileRecruitmentLinks
                }
              ].map(({ key, label, content }) => {
                const open = mobileAcc === key;
                return /* @__PURE__ */ jsxs("div", { className: "border-b border-sage/30 py-1 dark:border-sage/25", children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      type: "button",
                      className: "flex w-full items-center justify-between gap-2 rounded-md px-3 py-3 text-left text-sm font-medium leading-relaxed text-[#1a1a1a] dark:text-secondary",
                      "aria-expanded": open,
                      onClick: () => setMobileAcc(open ? null : key),
                      children: [
                        label,
                        /* @__PURE__ */ jsx(
                          ChevronDown,
                          {
                            className: `h-5 w-5 shrink-0 text-primary transition duration-200 ${open ? "rotate-180" : ""}`,
                            "aria-hidden": true
                          }
                        )
                      ]
                    }
                  ),
                  open ? /* @__PURE__ */ jsx("div", { className: "border-t border-sage/20 bg-base/[0.04] dark:border-sage/15 dark:bg-base/50", children: content }) : null
                ] }, key);
              }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/why-choose-us",
                  onClick: closeMobile,
                  className: "rounded-md px-3 py-3 text-sm font-medium leading-relaxed text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5",
                  children: "Why Choose Us"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/accreditation",
                  onClick: closeMobile,
                  className: "rounded-md px-3 py-3 text-sm font-medium leading-relaxed text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5",
                  children: "Accreditation"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/contact",
                  onClick: closeMobile,
                  className: "rounded-md px-3 py-3 text-sm font-medium leading-relaxed text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5",
                  children: "Contact"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/blog",
                  onClick: closeMobile,
                  className: "rounded-md px-3 py-3 text-sm font-medium leading-relaxed text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5",
                  children: "Blog"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/quote",
                onClick: closeMobile,
                className: "mt-4 block w-full rounded-md bg-primary px-3 py-3 text-center text-sm font-semibold leading-relaxed text-[#141414]",
                children: "Request a Quote"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/reviews",
                onClick: closeMobile,
                className: "mt-2 block w-full rounded-md border border-sage/40 px-3 py-3 text-center text-sm leading-relaxed text-[#4a4538] dark:text-sage",
                children: "Customer Reviews"
              }
            )
          ]
        }
      )
    ] }) : null
  ] });
}
export {
  NavbarInner
};
