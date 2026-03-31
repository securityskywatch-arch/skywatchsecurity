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
  children,
  menuKey,
  openMenu,
  setOpenMenu
}) {
  const isOpen = openMenu === menuKey;
  return /* @__PURE__ */ jsxs("div", {
    className: `relative z-0 shrink-0 ${isOpen ? "z-[120]" : ""}`,
    onMouseEnter: () => setOpenMenu(menuKey),
    onMouseLeave: () => setOpenMenu(null),
    onBlur: (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setOpenMenu((current) => current === menuKey ? null : current);
      }
    },
    children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          tabIndex: 0,
          "aria-haspopup": "true",
          "aria-expanded": isOpen,
          className: `flex shrink-0 items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-[0.8125rem] font-medium outline-none transition ring-accent/0 focus-visible:ring-2 xl:px-3.5 xl:text-sm ${active ? "bg-primary/15 text-[#5c3d06] dark:text-accent" : "text-[#1a1a1a]/90 hover:bg-base/[0.06] hover:text-primary dark:text-secondary/90 dark:hover:bg-white/5 dark:hover:text-accent"}`,
          onFocus: () => setOpenMenu(menuKey),
          children: [
            label,
            /* @__PURE__ */ jsx(
              ChevronDown,
              {
                className: `h-4 w-4 shrink-0 transition duration-200 ${isOpen ? "rotate-180" : ""}`,
                "aria-hidden": true
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute left-0 top-full z-[110] pt-2 transition-[opacity,visibility] duration-200 ease-out ${isOpen ? "visible pointer-events-auto opacity-100" : "invisible pointer-events-none opacity-0"}`,
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
    ]
  });
}
function NavbarInner({ logoSrc }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAcc, setMobileAcc] = useState(null);
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null);
  useEffect(() => {
    setMobileOpen(false);
    setMobileAcc(null);
    setOpenDesktopMenu(null);
  }, [pathname]);
  const isActive = (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`);
  /** Policies live under /about/policies; keep the About pill for the main about page only so the header state matches the page. */
  const aboutActive = pathname === "/about" || isActive("/standards");
  const servicesActive = isActive("/services");
  const recruitmentActive = isActive("/recruitment");
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileAcc(null);
  };
  const closeDesktopMenus = () => setOpenDesktopMenu(null);
  const desktopDropdownLinkItems = (items) => items.map(({ href, label }) => /* @__PURE__ */ jsx(Link, { href, role: "menuitem", className: dropdownLinkClass(), onClick: closeDesktopMenus, children: label }, href));
  const mobileDrawerLinkClass = "block w-full border-b border-sage/15 px-3 py-3 text-left text-sm font-medium leading-relaxed text-[#1a1a1a] transition hover:bg-base/[0.06] last:border-b-0 dark:border-sage/20 dark:text-secondary dark:hover:bg-white/5";
  const mobileDrawerLinkItems = (items) => items.map(({ href, label }) => /* @__PURE__ */ jsx(Link, { href, role: "menuitem", onClick: closeMobile, className: mobileDrawerLinkClass, children: label }, href));
  const aboutLinks = /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2", children: desktopDropdownLinkItems(aboutNavItems) });
  const serviceLinks = /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2", children: desktopDropdownLinkItems(serviceNavItems) });
  const recruitmentLinks = /* @__PURE__ */ jsx(Fragment, { children: desktopDropdownLinkItems(recruitmentNavItems) });
  const mobileAboutLinks = /* @__PURE__ */ jsx("div", { className: "min-w-0", children: mobileDrawerLinkItems(aboutNavItems) });
  const mobileServiceLinks = /* @__PURE__ */ jsx("div", { className: "min-w-0", children: mobileDrawerLinkItems(serviceNavItems) });
  const mobileRecruitmentLinks = /* @__PURE__ */ jsx("div", { className: "min-w-0", children: mobileDrawerLinkItems(recruitmentNavItems) });
  return /* @__PURE__ */ jsxs("header", { className: "fixed inset-x-0 top-0 z-[60] isolate overflow-visible border-b border-sage/30 bg-secondary/95 text-[#1a1a1a] shadow-sm backdrop-blur-md backdrop-saturate-150 dark:border-sage/30 dark:bg-base/95 dark:text-secondary", children: [
    /* @__PURE__ */ jsxs("div", { className: "header-container relative z-20", children: [
      /* @__PURE__ */ jsx("div", { className: "flex min-w-0 flex-1 justify-start lg:flex-none lg:shrink-0", children: /* @__PURE__ */ jsx(
        Link,
        {
          href: "/",
          className:
            "relative z-10 flex min-h-[44px] min-w-0 max-w-full items-center gap-2.5 overflow-visible rounded-lg pr-1 outline-none ring-primary/0 transition hover:opacity-95 focus-visible:ring-2 focus-visible:ring-primary/50 sm:gap-3 lg:max-w-none lg:gap-3",
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
                    "h-11 w-auto shrink-0 object-contain object-left sm:h-12 md:h-[4rem] lg:h-[4.75rem]",
                  priority: true,
                  sizes: "(max-width: 768px) 128px, (max-width: 1024px) 192px, 240px"
                }
              ),
              /* @__PURE__ */ jsxs("span", {
                className:
                  "flex min-w-0 flex-1 flex-col justify-center gap-0.5 leading-none lg:flex-none lg:gap-1",
                children: [
                  /* @__PURE__ */ jsxs("span", {
                    className:
                      "min-w-0 truncate text-[1rem] font-black tracking-[-0.02em] text-[#141414] sm:text-base md:text-[1.05rem] lg:text-[1.15rem] lg:leading-[1.1] xl:text-[1.2rem] dark:text-[#faf8f3]",
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
                      "relative inline-block w-max max-w-full truncate text-[0.625rem] font-bold uppercase leading-none tracking-[0.08em] text-primary after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:rounded-full after:bg-gradient-to-r after:from-primary/40 after:via-accent/80 after:to-primary/40 dark:text-accent dark:after:from-accent/30 dark:after:via-accent dark:after:to-primary/40 sm:text-[0.625rem] sm:tracking-[0.1em]",
                    children: "SECURITY"
                  })
                ]
              })
            ]
          })
        }
      ) }),
      /* @__PURE__ */ jsxs(
        "nav",
        {
          className: "hidden min-w-0 shrink-0 flex-nowrap items-center justify-start gap-0.5 overflow-visible lg:flex lg:gap-1 xl:gap-1.5",
          "aria-label": "Main",
          children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/",
                className: `shrink-0 whitespace-nowrap rounded-md px-2.5 py-2 text-[0.8125rem] font-medium transition xl:px-3.5 xl:text-sm ${pathname === "/" ? "bg-primary/15 text-[#5c3d06] dark:text-accent" : "text-[#1a1a1a]/90 hover:bg-base/[0.06] hover:text-primary dark:text-secondary/90 dark:hover:bg-white/5 dark:hover:text-accent"}`,
                children: "Home"
              }
            ),
            /* @__PURE__ */ jsx(DesktopHoverDropdown, { label: "About Us", wide: true, active: aboutActive, menuKey: "about", openMenu: openDesktopMenu, setOpenMenu: setOpenDesktopMenu, children: aboutLinks }),
            /* @__PURE__ */ jsx(DesktopHoverDropdown, { label: "Services", wide: true, active: servicesActive, menuKey: "services", openMenu: openDesktopMenu, setOpenMenu: setOpenDesktopMenu, children: serviceLinks }),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/why-choose-us",
                className: `shrink-0 whitespace-nowrap rounded-md px-2.5 py-2 text-[0.8125rem] font-medium transition xl:px-3.5 xl:text-sm ${isActive("/why-choose-us") ? "bg-primary/15 text-[#5c3d06] dark:text-accent" : "text-[#1a1a1a]/90 hover:bg-base/[0.06] hover:text-primary dark:text-secondary/90 dark:hover:bg-white/5 dark:hover:text-accent"}`,
                children: "Why Choose Us"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/accreditation",
                className: `shrink-0 whitespace-nowrap rounded-md px-2.5 py-2 text-[0.8125rem] font-medium transition xl:px-3.5 xl:text-sm ${isActive("/accreditation") ? "bg-primary/15 text-[#5c3d06] dark:text-accent" : "text-[#1a1a1a]/90 hover:bg-base/[0.06] hover:text-primary dark:text-secondary/90 dark:hover:bg-white/5 dark:hover:text-accent"}`,
                children: "Accreditation"
              }
            ),
            /* @__PURE__ */ jsx(DesktopHoverDropdown, { label: "Recruitment", active: recruitmentActive, menuKey: "recruitment", openMenu: openDesktopMenu, setOpenMenu: setOpenDesktopMenu, children: recruitmentLinks }),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/contact",
                className: `shrink-0 whitespace-nowrap rounded-md px-2.5 py-2 text-[0.8125rem] font-medium transition xl:px-3.5 xl:text-sm ${isActive("/contact") ? "bg-primary/15 text-[#5c3d06] dark:text-accent" : "text-[#1a1a1a]/90 hover:bg-base/[0.06] hover:text-primary dark:text-secondary/90 dark:hover:bg-white/5 dark:hover:text-accent"}`,
                children: "Contact"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/blog",
                className: `shrink-0 whitespace-nowrap rounded-md px-2.5 py-2 text-[0.8125rem] font-medium transition xl:px-3.5 xl:text-sm ${isActive("/blog") ? "bg-primary/15 text-[#5c3d06] dark:text-accent" : "text-[#1a1a1a]/90 hover:bg-base/[0.06] hover:text-primary dark:text-secondary/90 dark:hover:bg-white/5 dark:hover:text-accent"}`,
                children: "Blog"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 items-center gap-2 lg:gap-2.5", children: [
        /* @__PURE__ */ jsx(ThemeToggle, {}),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/quote",
            className: "hidden shrink-0 whitespace-nowrap rounded-md bg-primary px-3 py-2 text-[0.8125rem] font-semibold text-[#141414] shadow-sm transition hover:bg-accent hover:text-[#141414] lg:inline-flex xl:px-4 xl:text-sm",
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
            "aria-label": mobileOpen ? "Close navigation menu" : "Open navigation menu",
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
          className:
            "fixed bottom-0 left-0 right-0 top-[var(--header-h)] z-[150] bg-black/50 lg:hidden",
          "aria-label": "Close menu",
          onClick: closeMobile
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          id: "mobile-nav",
          className:
            "fixed bottom-0 left-0 right-0 top-[var(--header-h)] z-[160] flex max-h-[calc(100dvh-var(--header-h))] min-h-[min(55dvh,24rem)] min-w-0 flex-col items-stretch overflow-y-auto overscroll-y-contain border-t border-sage/25 bg-secondary px-3 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 shadow-2xl dark:border-sage/25 dark:bg-base lg:hidden",
          children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                key: "mn-home",
                href: "/",
                onClick: closeMobile,
                className: `block w-full min-w-0 rounded-md px-3 py-3 text-left text-sm font-medium leading-relaxed touch-manipulation ${pathname === "/" ? "bg-primary/15 text-[#5c3d06] dark:text-accent" : "text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5"}`,
                children: "Home"
              }
            ),
            ...[
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
                key: "mn-why",
                href: "/why-choose-us",
                onClick: closeMobile,
                className: "block w-full min-w-0 rounded-md px-3 py-3 text-left text-sm font-medium leading-relaxed touch-manipulation text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5",
                children: "Why Choose Us"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                key: "mn-acc",
                href: "/accreditation",
                onClick: closeMobile,
                className: "block w-full min-w-0 rounded-md px-3 py-3 text-left text-sm font-medium leading-relaxed touch-manipulation text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5",
                children: "Accreditation"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "w-full shrink-0", key: "mn-contact", children: /* @__PURE__ */ jsx(
              Link,
              {
                href: "/contact",
                onClick: closeMobile,
                className: "block w-full min-w-0 rounded-md px-3 py-3 text-left text-sm font-medium leading-relaxed touch-manipulation text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5",
                children: "Contact"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "w-full shrink-0", key: "mn-blog", children: /* @__PURE__ */ jsx(
              Link,
              {
                href: "/blog",
                onClick: closeMobile,
                className: "block w-full min-w-0 rounded-md px-3 py-3 text-left text-sm font-medium leading-relaxed touch-manipulation text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5",
                children: "Blog"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "mt-3 w-full shrink-0 border-t border-sage/30 pt-4 dark:border-sage/25", role: "separator", "aria-hidden": true }),
            /* @__PURE__ */ jsx("div", { className: "w-full shrink-0", key: "mn-quote", children: /* @__PURE__ */ jsx(
              Link,
              {
                href: "/quote",
                onClick: closeMobile,
                className: "block w-full min-w-0 rounded-md bg-primary px-3 py-3 text-center text-sm font-semibold leading-relaxed text-[#141414] touch-manipulation",
                children: "Request a Quote"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 w-full shrink-0", key: "mn-reviews", children: /* @__PURE__ */ jsx(
              Link,
              {
                href: "/reviews",
                onClick: closeMobile,
                className: "block w-full min-w-0 rounded-md border border-sage/40 px-3 py-3 text-center text-sm leading-relaxed text-[#4a4538] touch-manipulation dark:text-sage",
                children: "Customer Reviews"
              }
            ) })
          ]
        }
      )
    ] }) : null
  ] });
}
export {
  NavbarInner
};
