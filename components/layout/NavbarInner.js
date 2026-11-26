"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import {
  aboutNavItems,
  recruitmentNavItems,
  serviceNavItems,
} from "@/lib/navigation";
import { siteContact } from "@/lib/siteContact";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const DROPDOWN_LINK_CLASS =
  "block px-4 py-2.5 text-sm leading-snug text-[#1a1a1a]/90 transition hover:bg-primary/10 hover:text-primary-text dark:text-secondary/95 dark:hover:bg-primary/15 dark:hover:text-accent";

const MOBILE_DRAWER_LINK_CLASS =
  "block w-full border-b border-sage/15 px-3 py-3 text-left text-sm font-medium leading-relaxed text-[#1a1a1a] transition hover:bg-base/[0.06] last:border-b-0 dark:border-sage/20 dark:text-secondary dark:hover:bg-white/5";

function DesktopDisclosureDropdown({
  label,
  href,
  wide = false,
  active,
  pathname,
  items,
  menuKey,
  openMenu,
  setOpenMenu,
  registerRefs,
}) {
  const isOpen = openMenu?.key === menuKey;
  const panelId = `desktop-nav-${menuKey}`;
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const pointerEnterAtRef = useRef(0);

  useEffect(() => {
    registerRefs(menuKey, {
      wrapper: wrapperRef.current,
      button: buttonRef.current,
    });
    return () => registerRefs(menuKey, null);
  }, [menuKey, registerRefs]);

  const closeMenu = () => setOpenMenu(null);

  return (
    <div
      ref={wrapperRef}
      className={`relative z-0 shrink-0 ${isOpen ? "z-[120]" : ""}`}
      onPointerEnter={(e) => {
        if (e.pointerType !== "mouse") return;
        pointerEnterAtRef.current = performance.now();
        setOpenMenu((current) =>
          current?.key === menuKey ? current : { key: menuKey, via: "hover" }
        );
      }}
      onPointerLeave={(e) => {
        if (e.pointerType !== "mouse") return;
        setOpenMenu((current) =>
          current?.key === menuKey && current.via === "hover" ? null : current
        );
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpenMenu((current) =>
            current?.key === menuKey ? null : current
          );
        }
      }}
    >
      <div className="flex items-center">
        <Link
          href={href}
          aria-current={pathname === href ? "page" : undefined}
          className={`shrink-0 whitespace-nowrap rounded-l-md px-2.5 py-2 text-[0.8125rem] font-medium outline-none transition focus-visible:ring-2 ring-[#5C3D06] dark:ring-accent xl:px-3.5 xl:text-sm ${
            active
              ? "bg-primary/15 text-[#5c3d06] dark:text-accent"
              : "text-[#1a1a1a]/90 hover:bg-base/[0.06] hover:text-primary-text dark:text-secondary/90 dark:hover:bg-white/5 dark:hover:text-accent"
          }`}
        >
          {label}
        </Link>
        <button
          ref={buttonRef}
          type="button"
          aria-label={`${label} menu`}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className={`rounded-r-md px-2 py-2 outline-none transition focus-visible:ring-2 ring-[#5C3D06] dark:ring-accent ${
            active
              ? "bg-primary/15 text-[#5c3d06] dark:text-accent"
              : "text-[#1a1a1a]/90 hover:bg-base/[0.06] hover:text-primary-text dark:text-secondary/90 dark:hover:bg-white/5 dark:hover:text-accent"
          }`}
          onClick={() => {
            setOpenMenu((current) => {
              if (current?.key === menuKey) {
                // Keep open when pointerenter fired moments before the click on a closed button
                if (
                  current.via === "hover" &&
                  performance.now() - pointerEnterAtRef.current < 250
                ) {
                  return { key: menuKey, via: "click" };
                }
                return null;
              }
              return { key: menuKey, via: "click" };
            });
          }}
        >
          <ChevronDown
            className={`h-4 w-4 shrink-0 transition duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </div>
      <div
        aria-hidden={!isOpen}
        className={`absolute left-0 top-full z-[110] pt-2 transition-[opacity,visibility] duration-200 ease-out ${
          isOpen
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`max-h-[min(72vh,480px)] overflow-y-auto overflow-x-hidden rounded-xl border border-sage/40 bg-white py-2 shadow-lg ring-1 ring-black/[0.04] dark:border-primary/45 dark:bg-[#121212] dark:shadow-lift-gold dark:ring-sage/15 ${
            wide
              ? "w-[min(36rem,calc(100vw-2rem))]"
              : "min-w-[17rem] max-w-[calc(100vw-2rem)]"
          }`}
        >
          <ul
            id={panelId}
            className={wide ? "grid sm:grid-cols-2" : undefined}
          >
            {items.map(({ href: itemHref, label: itemLabel }) => (
              <li key={itemHref}>
                <Link
                  href={itemHref}
                  aria-current={pathname === itemHref ? "page" : undefined}
                  className={DROPDOWN_LINK_CLASS}
                  onClick={closeMenu}
                >
                  {itemLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function NavbarInner({ logoSrc }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAcc, setMobileAcc] = useState(null);
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(null);

  const headerRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileNavRef = useRef(null);
  const firstMobileLinkRef = useRef(null);
  const dropdownRefsMap = useRef({});
  const shouldReturnFocusToHamburgerRef = useRef(false);
  const prevMobileOpenRef = useRef(false);

  const registerDropdownRefs = useCallback((key, refs) => {
    if (refs) {
      dropdownRefsMap.current[key] = refs;
    } else {
      delete dropdownRefsMap.current[key];
    }
  }, []);

  const closeMobile = useCallback(() => {
    shouldReturnFocusToHamburgerRef.current = false;
    setMobileOpen(false);
    setMobileAcc(null);
  }, []);

  const closeMobileAndReturnFocus = useCallback(() => {
    shouldReturnFocusToHamburgerRef.current = true;
    setMobileOpen(false);
    setMobileAcc(null);
  }, []);

  // Close menus on route change
  useEffect(() => {
    shouldReturnFocusToHamburgerRef.current = false;
    setMobileOpen(false);
    setMobileAcc(null);
    setOpenDesktopMenu(null);
  }, [pathname]);

  // Measure real header height via ResizeObserver and sync --header-h
  useLayoutEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return undefined;

    const syncHeight = () => {
      const h = Math.round(headerEl.getBoundingClientRect().height);
      if (h > 0) {
        document.documentElement.style.setProperty("--header-h", `${h}px`);
        setHeaderHeight(h);
      }
    };

    syncHeight();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", syncHeight);
      return () => window.removeEventListener("resize", syncHeight);
    }

    const observer = new ResizeObserver(syncHeight);
    observer.observe(headerEl);
    return () => observer.disconnect();
  }, []);

  // Desktop dropdown: Escape (returning focus to its button) and click outside
  useEffect(() => {
    if (!openDesktopMenu) return undefined;

    const handleKeyDown = (e) => {
      if (e.key !== "Escape") return;
      const activeRefs = dropdownRefsMap.current[openDesktopMenu.key];
      const shouldFocusButton =
        openDesktopMenu.via === "click" ||
        activeRefs?.wrapper?.contains(document.activeElement);
      e.preventDefault();
      setOpenDesktopMenu(null);
      if (shouldFocusButton) {
        activeRefs?.button?.focus();
      }
    };

    const handlePointerDown = (e) => {
      const activeRefs = dropdownRefsMap.current[openDesktopMenu.key];
      if (activeRefs?.wrapper && !activeRefs.wrapper.contains(e.target)) {
        setOpenDesktopMenu(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [openDesktopMenu]);

  // Mobile drawer: focus management, focus trap, Escape, inert/aria-hidden background, scroll lock
  useEffect(() => {
    const wasOpen = prevMobileOpenRef.current;
    prevMobileOpenRef.current = mobileOpen;

    if (!mobileOpen) {
      if (wasOpen && shouldReturnFocusToHamburgerRef.current) {
        shouldReturnFocusToHamburgerRef.current = false;
        hamburgerRef.current?.focus();
      }
      return undefined;
    }

    // Move focus to the first link inside the drawer when opened
    firstMobileLinkRef.current?.focus();

    // Lock page scroll while preserving sticky header position
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // Mark background content (<main>, top-level <footer>, quick contact <aside>, floating WhatsApp CTA) inert + aria-hidden
    const bgTargets = Array.from(
      document.querySelectorAll(
        'main, body > footer, aside[aria-label="Quick contact"], a[aria-label*="WhatsApp"]'
      )
    );
    const prevStates = bgTargets.map((el) => ({
      el,
      inert: el.inert,
      ariaHidden: el.getAttribute("aria-hidden"),
    }));
    bgTargets.forEach((el) => {
      el.inert = true;
      el.setAttribute("aria-hidden", "true");
    });

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMobileAndReturnFocus();
        return;
      }

      if (e.key !== "Tab" || !mobileNavRef.current) return;

      const focusables = Array.from(
        mobileNavRef.current.querySelectorAll(FOCUSABLE_SELECTOR)
      ).filter((el) => el.getClientRects().length > 0);

      if (focusables.length === 0) {
        e.preventDefault();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (!mobileNavRef.current.contains(document.activeElement)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
        return;
      }

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const lgMedia = window.matchMedia("(min-width: 1024px)");
    const handleMediaChange = (e) => {
      if (e.matches) {
        closeMobile();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    lgMedia.addEventListener("change", handleMediaChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      lgMedia.removeEventListener("change", handleMediaChange);
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      prevStates.forEach(({ el, inert, ariaHidden }) => {
        el.inert = inert;
        if (ariaHidden === null) {
          el.removeAttribute("aria-hidden");
        } else {
          el.setAttribute("aria-hidden", ariaHidden);
        }
      });
    };
  }, [mobileOpen, closeMobile, closeMobileAndReturnFocus]);

  const isActive = (prefix) =>
    pathname === prefix || pathname.startsWith(`${prefix}/`);
  /** Policies live under /about/policies; keep the About pill for the main about page only so the header state matches the page. */
  const aboutActive = pathname === "/about" || isActive("/standards");
  const servicesActive = isActive("/services");
  const recruitmentActive = isActive("/recruitment");

  const mobileNavTop =
    headerHeight !== null ? `${headerHeight}px` : "var(--header-h, 5rem)";

  const desktopLinkClass = (active) =>
    `shrink-0 whitespace-nowrap rounded-md px-2.5 py-2 text-[0.8125rem] font-medium outline-none transition focus-visible:ring-2 ring-[#5C3D06] dark:ring-accent xl:px-3.5 xl:text-sm ${
      active
        ? "bg-primary/15 text-[#5c3d06] dark:text-accent"
        : "text-[#1a1a1a]/90 hover:bg-base/[0.06] hover:text-primary-text dark:text-secondary/90 dark:hover:bg-white/5 dark:hover:text-accent"
    }`;

  const renderMobileDrawerList = (items) => (
    <ul className="min-w-0">
      {items.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            aria-current={pathname === href ? "page" : undefined}
            onClick={closeMobile}
            className={MOBILE_DRAWER_LINK_CLASS}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-[60] isolate shrink-0 overflow-visible border-b border-sage/30 bg-secondary/95 text-[#1a1a1a] shadow-sm backdrop-blur-md backdrop-saturate-150 dark:border-sage/30 dark:bg-base/95 dark:text-secondary"
    >
      <div className="header-container relative z-20">
        <div className="flex min-w-0 flex-1 justify-start lg:flex-none lg:shrink-0">
          <Link
            href="/"
            className="relative z-10 flex min-h-[44px] min-w-0 max-w-full items-center gap-2.5 overflow-visible rounded-lg pr-1 outline-none transition hover:opacity-95 focus-visible:ring-2 ring-[#5C3D06] dark:ring-accent sm:gap-3 lg:max-w-none lg:gap-3"
            onClick={closeMobile}
          >
            <Image
              src={logoSrc}
              alt=""
              width={520}
              height={156}
              className="header-logo-img h-11 w-auto shrink-0 object-contain object-left sm:h-12 md:h-[4rem] lg:h-[4.75rem]"
              priority
              sizes="(max-width: 768px) 128px, (max-width: 1024px) 192px, 240px"
            />
            <span className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 leading-none lg:flex-none lg:gap-1">
              <span className="min-w-0 truncate text-[1rem] font-black tracking-[-0.02em] text-[#141414] sm:text-base md:text-[1.05rem] lg:text-[1.15rem] lg:leading-[1.1] xl:text-[1.2rem] dark:text-[#faf8f3]">
                Sky
                <span className="text-primary-text dark:bg-gradient-to-r dark:from-[#fff4d4] dark:via-accent dark:to-primary dark:bg-clip-text dark:text-transparent">
                  Watch
                </span>
              </span>
              <span className="relative inline-block w-max max-w-full truncate text-[0.625rem] font-bold uppercase leading-none tracking-[0.08em] text-primary-text after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:rounded-full after:bg-gradient-to-r after:from-primary/40 after:via-accent/80 after:to-primary/40 dark:text-accent dark:after:from-accent/30 dark:after:via-accent dark:after:to-primary/40 sm:text-[0.625rem] sm:tracking-[0.1em]">
                SECURITY
              </span>
              <span className="sr-only"> home</span>
            </span>
          </Link>
        </div>

        <nav
          className="hidden min-w-0 shrink-0 flex-nowrap items-center justify-start gap-0.5 overflow-visible lg:flex lg:gap-1 xl:gap-1.5"
          aria-label="Main"
        >
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={desktopLinkClass(pathname === "/")}
          >
            Home
          </Link>
          <DesktopDisclosureDropdown
            label="About Us"
            href="/about"
            wide
            active={aboutActive}
            pathname={pathname}
            items={aboutNavItems}
            menuKey="about"
            openMenu={openDesktopMenu}
            setOpenMenu={setOpenDesktopMenu}
            registerRefs={registerDropdownRefs}
          />
          <DesktopDisclosureDropdown
            label="Services"
            href="/services"
            wide
            active={servicesActive}
            pathname={pathname}
            items={serviceNavItems}
            menuKey="services"
            openMenu={openDesktopMenu}
            setOpenMenu={setOpenDesktopMenu}
            registerRefs={registerDropdownRefs}
          />
          <Link
            href="/why-choose-us"
            aria-current={pathname === "/why-choose-us" ? "page" : undefined}
            className={desktopLinkClass(isActive("/why-choose-us"))}
          >
            Why Choose Us
          </Link>
          <Link
            href="/accreditation"
            aria-current={pathname === "/accreditation" ? "page" : undefined}
            className={desktopLinkClass(isActive("/accreditation"))}
          >
            Compliance
          </Link>
          <DesktopDisclosureDropdown
            label="Recruitment"
            href="/recruitment"
            active={recruitmentActive}
            pathname={pathname}
            items={recruitmentNavItems}
            menuKey="recruitment"
            openMenu={openDesktopMenu}
            setOpenMenu={setOpenDesktopMenu}
            registerRefs={registerDropdownRefs}
          />
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className={desktopLinkClass(isActive("/contact"))}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            aria-current={pathname === "/blog" ? "page" : undefined}
            className={desktopLinkClass(isActive("/blog"))}
          >
            Blog
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:gap-2.5">
          <ThemeToggle />
          <a
            href={`tel:${siteContact.phone.tel}`}
            className="hidden min-h-[44px] shrink-0 items-center gap-1.5 rounded-md px-2.5 py-2 text-[0.8125rem] font-semibold text-[#5c3d06] outline-none transition hover:bg-base/[0.06] hover:text-primary-text focus-visible:ring-2 ring-[#5C3D06] dark:text-accent dark:hover:bg-white/5 dark:ring-accent xl:px-3 xl:text-sm"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{siteContact.phone.display}</span>
          </a>
          <Link
            href="/quote"
            aria-current={pathname === "/quote" ? "page" : undefined}
            className="hidden shrink-0 whitespace-nowrap rounded-md bg-primary px-3 py-2 text-[0.8125rem] font-semibold text-[#141414] shadow-sm transition hover:bg-accent hover:text-[#141414] lg:inline-flex xl:px-4 xl:text-sm"
          >
            Request a Quote
          </Link>
          <button
            ref={hamburgerRef}
            type="button"
            className="inline-flex h-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-sage/40 text-[#1a1a1a] touch-manipulation dark:text-secondary lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => {
              if (mobileOpen) {
                closeMobileAndReturnFocus();
              } else {
                setMobileOpen(true);
              }
            }}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <>
          <div
            aria-hidden="true"
            style={{ top: mobileNavTop }}
            className="fixed bottom-0 left-0 right-0 z-[150] bg-black/50 lg:hidden"
            onClick={closeMobileAndReturnFocus}
          />
          <div
            ref={mobileNavRef}
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            style={{
              top: mobileNavTop,
              maxHeight: `calc(100dvh - ${mobileNavTop})`,
            }}
            className="fixed bottom-0 left-0 right-0 z-[160] flex min-h-[min(55dvh,24rem)] min-w-0 flex-col items-stretch overflow-y-auto overscroll-y-contain border-t border-sage/25 bg-secondary px-3 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 shadow-2xl dark:border-sage/25 dark:bg-base lg:hidden"
          >
            <nav aria-label="Mobile navigation links" className="flex flex-col">
              <Link
                ref={firstMobileLinkRef}
                href="/"
                aria-current={pathname === "/" ? "page" : undefined}
                onClick={closeMobile}
                className={`block w-full min-w-0 rounded-md px-3 py-3 text-left text-sm font-medium leading-relaxed touch-manipulation ${
                  pathname === "/"
                    ? "bg-primary/15 text-[#5c3d06] dark:text-accent"
                    : "text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5"
                }`}
              >
                Home
              </Link>
              {[
                {
                  key: "about",
                  label: "About Us",
                  items: aboutNavItems,
                },
                {
                  key: "services",
                  label: "Services",
                  items: serviceNavItems,
                },
                {
                  key: "recruitment",
                  label: "Recruitment",
                  items: recruitmentNavItems,
                },
              ].map(({ key, label, items }) => {
                const open = mobileAcc === key;
                const accPanelId = `mobile-acc-${key}`;
                return (
                  <div
                    key={key}
                    className="border-b border-sage/30 py-1 dark:border-sage/25"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-2 rounded-md px-3 py-3 text-left text-sm font-medium leading-relaxed text-[#1a1a1a] dark:text-secondary"
                      aria-expanded={open}
                      aria-controls={accPanelId}
                      onClick={() => setMobileAcc(open ? null : key)}
                    >
                      {label}
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-primary transition duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {open ? (
                      <div
                        id={accPanelId}
                        className="border-t border-sage/20 bg-base/[0.04] dark:border-sage/15 dark:bg-base/50"
                      >
                        {renderMobileDrawerList(items)}
                      </div>
                    ) : null}
                  </div>
                );
              })}
              <Link
                href="/why-choose-us"
                aria-current={pathname === "/why-choose-us" ? "page" : undefined}
                onClick={closeMobile}
                className="block w-full min-w-0 rounded-md px-3 py-3 text-left text-sm font-medium leading-relaxed touch-manipulation text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5"
              >
                Why Choose Us
              </Link>
              <Link
                href="/accreditation"
                aria-current={pathname === "/accreditation" ? "page" : undefined}
                onClick={closeMobile}
                className="block w-full min-w-0 rounded-md px-3 py-3 text-left text-sm font-medium leading-relaxed touch-manipulation text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5"
              >
                Compliance
              </Link>
              <div className="w-full shrink-0">
                <Link
                  href="/contact"
                  aria-current={pathname === "/contact" ? "page" : undefined}
                  onClick={closeMobile}
                  className="block w-full min-w-0 rounded-md px-3 py-3 text-left text-sm font-medium leading-relaxed touch-manipulation text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5"
                >
                  Contact
                </Link>
              </div>
              <div className="w-full shrink-0">
                <Link
                  href="/blog"
                  aria-current={pathname === "/blog" ? "page" : undefined}
                  onClick={closeMobile}
                  className="block w-full min-w-0 rounded-md px-3 py-3 text-left text-sm font-medium leading-relaxed touch-manipulation text-[#1a1a1a] hover:bg-base/[0.06] dark:text-secondary dark:hover:bg-white/5"
                >
                  Blog
                </Link>
              </div>
              <div className="w-full shrink-0">
                <a
                  href={`tel:${siteContact.phone.tel}`}
                  onClick={closeMobile}
                  className="flex w-full min-h-[44px] min-w-0 items-center gap-2 rounded-md px-3 py-3 text-left text-sm font-semibold leading-relaxed touch-manipulation text-[#5c3d06] hover:bg-base/[0.06] dark:text-accent dark:hover:bg-white/5"
                >
                  <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Call {siteContact.phone.display}
                </a>
              </div>
              <div
                className="mt-3 w-full shrink-0 border-t border-sage/30 pt-4 dark:border-sage/25"
                role="separator"
                aria-hidden="true"
              />
              <div className="w-full shrink-0">
                <Link
                  href="/quote"
                  aria-current={pathname === "/quote" ? "page" : undefined}
                  onClick={closeMobile}
                  className="block w-full min-w-0 rounded-md bg-primary px-3 py-3 text-center text-sm font-semibold leading-relaxed text-[#141414] touch-manipulation"
                >
                  Request a Quote
                </Link>
              </div>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}

export { NavbarInner };
