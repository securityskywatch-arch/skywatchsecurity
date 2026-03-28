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
  const linkItems = (items) => items.map(({ href, label }) => /* @__PURE__ */ jsx(Link, { href, role: "menuitem", className: dropdownLinkClass(), children: label }, href));
  const aboutLinks = /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2", children: linkItems(aboutNavItems) });
  const serviceLinks = /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2", children: linkItems(serviceNavItems) });
  const recruitmentLinks = /* @__PURE__ */ jsx(Fragment, { children: linkItems(recruitmentNavItems) });
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-[60] overflow-visible border-b border-sage/30 bg-secondary text-[#1a1a1a] shadow-sm dark:border-sage/30 dark:bg-base dark:text-secondary", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex min-w-0 max-w-page items-center justify-between gap-2 overflow-visible px-3 py-3 sm:gap-3 sm:px-5 sm:py-4 lg:gap-4 lg:px-6 lg:py-5", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          href: "/",
          className: "relative z-[70] flex h-10 min-w-0 max-w-[calc(100%-6.5rem)] shrink items-center overflow-visible sm:max-w-none",
          onClick: () => setMobileOpen(false),
          children: /* @__PURE__ */ jsx(
            Image,
            {
              src: logoSrc,
              alt: "SkyWatch Security",
              width: 520,
              height: 156,
              className: "h-16 w-auto max-w-full object-contain object-left sm:h-[4.5rem] sm:max-w-[min(300px,calc(100vw-10.5rem))] md:h-20 md:max-w-[min(340px,calc(100vw-26rem))] lg:h-[5.25rem] lg:max-w-[min(360px,calc(100vw-27rem))]",
              priority: true,
              sizes: "(max-width: 640px) 200px, (max-width: 1024px) 300px, 380px"
            }
          )
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
    mobileOpen ? /* @__PURE__ */ jsxs(
      "div",
      {
        id: "mobile-nav",
        className: "max-h-[calc(100dvh-6.5rem)] overflow-y-auto overscroll-y-contain border-t border-sage/25 bg-secondary px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] dark:border-sage/25 dark:bg-base lg:hidden",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 pt-3", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/",
                onClick: () => setMobileOpen(false),
                className: `rounded-md px-3 py-2.5 text-sm font-medium ${pathname === "/" ? "bg-primary/15 text-[#5c3d06] dark:text-accent" : "text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5"}`,
                children: "Home"
              }
            ),
            [
              {
                key: "about",
                label: "About Us",
                content: aboutLinks
              },
              {
                key: "services",
                label: "Services",
                content: serviceLinks
              },
              {
                key: "recruitment",
                label: "Recruitment",
                content: recruitmentLinks
              }
            ].map(({ key, label, content }) => {
              const open = mobileAcc === key;
              return /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-sage/25 dark:border-sage/20", children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    className: "flex w-full items-center justify-between px-3 py-2.5 text-left text-sm font-medium text-[#1a1a1a] dark:text-secondary",
                    "aria-expanded": open,
                    onClick: () => setMobileAcc(open ? null : key),
                    children: [
                      label,
                      /* @__PURE__ */ jsx(
                        ChevronDown,
                        {
                          className: `h-4 w-4 shrink-0 transition ${open ? "rotate-180" : ""}`
                        }
                      )
                    ]
                  }
                ),
                open ? /* @__PURE__ */ jsx("div", { className: "border-t border-sage/20 bg-base/[0.04] px-1 py-2 dark:border-sage/15 dark:bg-base/50", children: content }) : null
              ] }, key);
            }),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/why-choose-us",
                onClick: () => setMobileOpen(false),
                className: "rounded-md px-3 py-2.5 text-sm font-medium text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5",
                children: "Why Choose Us"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/accreditation",
                onClick: () => setMobileOpen(false),
                className: "rounded-md px-3 py-2.5 text-sm font-medium text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5",
                children: "Accreditation"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/contact",
                onClick: () => setMobileOpen(false),
                className: "rounded-md px-3 py-2.5 text-sm font-medium text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5",
                children: "Contact"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/blog",
                onClick: () => setMobileOpen(false),
                className: "rounded-md px-3 py-2.5 text-sm font-medium text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5",
                children: "Blog"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/quote",
              onClick: () => setMobileOpen(false),
              className: "mt-4 block rounded-md bg-primary px-3 py-2.5 text-center text-sm font-semibold text-[#141414]",
              children: "Request a Quote"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/reviews",
              onClick: () => setMobileOpen(false),
              className: "mt-2 block rounded-md border border-sage/40 px-3 py-2.5 text-center text-sm text-[#4a4538] dark:text-sage",
              children: "Customer Reviews"
            }
          )
        ]
      }
    ) : null
  ] });
}
export {
  NavbarInner
};
