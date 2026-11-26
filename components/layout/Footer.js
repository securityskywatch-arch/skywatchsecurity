import { jsx, jsxs } from "react/jsx-runtime";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { FooterNavLink } from "@/components/layout/FooterNavLink";
import { siteContact } from "@/lib/siteContact";
function Footer() {
  const footerLinkClass = "inline-flex min-h-[44px] items-center py-1 text-[#4a4538] transition hover:text-primary-text sm:min-h-[24px] sm:py-0.5 dark:text-sage dark:hover:text-accent";
  return /* @__PURE__ */ jsxs("footer", { className: "border-t border-sage/30 bg-secondary text-base dark:border-sage/30 dark:bg-base dark:text-secondary", children: [
    /* @__PURE__ */ jsxs("div", { className: "page-container grid min-w-0 gap-10 py-12 pb-[max(3rem,env(safe-area-inset-bottom))] sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 lg:col-span-1", children: [
        /* @__PURE__ */ jsx(BrandLogo, { href: "/", variant: "footer" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xs text-sm text-[#4a4538] dark:text-sage", children: "SIA-aligned guarding, patrols, and monitoring, delivered with discipline, discretion, and clear communication." }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs text-[#5c574c] dark:text-sage/80", children: "Registered in England and Wales. Company No. 16520149" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold uppercase tracking-wider text-[#5c3d06] dark:text-accent", children: "Get in touch" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-[#4a4538] sm:space-y-2.5 dark:text-sage", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary", "aria-hidden": true }),
            /* @__PURE__ */ jsx("span", {
              className: "min-w-0 text-[#1a1a1a] dark:text-sage",
              children: siteContact.addressLines.map((line, i) => /* @__PURE__ */ jsxs("span", { children: [
                i > 0 && /* @__PURE__ */ jsx("br", {}),
                line
              ] }, line))
            })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 shrink-0 text-primary", "aria-hidden": true }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `tel:${siteContact.phone.tel}`,
                className: "inline-flex min-h-[44px] items-center py-1 text-[#1a1a1a] transition hover:text-primary-text sm:min-h-[24px] sm:py-0.5 dark:text-sage dark:hover:text-accent",
                children: siteContact.phone.display
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 shrink-0 text-primary", "aria-hidden": true }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `mailto:${siteContact.email}`,
                className: "inline-flex min-h-[44px] items-center break-all py-1 text-[#1a1a1a] transition hover:text-primary-text sm:min-h-[24px] sm:py-0.5 dark:text-sage dark:hover:text-accent",
                children: siteContact.email
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary opacity-60", "aria-hidden": true }),
            /* @__PURE__ */ jsx("span", { children: siteContact.coverageArea })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold uppercase tracking-wider text-[#5c3d06] dark:text-accent", children: "Links" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-0.5 text-sm sm:space-y-1", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(FooterNavLink, { href: "/", className: footerLinkClass, children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(FooterNavLink, { href: "/services", className: footerLinkClass, children: "Services" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(FooterNavLink, { href: "/why-choose-us", className: footerLinkClass, children: "Why choose us" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(FooterNavLink, { href: "/blog", className: footerLinkClass, children: "News & articles" }) }),

          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(FooterNavLink, { href: "/quote", className: footerLinkClass, children: "Request a quote" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold uppercase tracking-wider text-[#5c3d06] dark:text-accent", children: "Company" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-0.5 text-sm sm:space-y-1", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(FooterNavLink, { href: "/about", className: footerLinkClass, children: "About us" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(FooterNavLink, { href: "/standards", className: footerLinkClass, children: "Our standards" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(FooterNavLink, { href: "/about/policies", className: footerLinkClass, children: "Policies" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(FooterNavLink, { href: "/accreditation", className: footerLinkClass, children: "Accreditation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(FooterNavLink, { href: "/recruitment", className: footerLinkClass, children: "Recruitment" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(FooterNavLink, { href: "/contact", className: footerLinkClass, children: "Contact" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-sage/25 dark:border-sage/20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-page items-center justify-between px-4 py-6 text-xs text-[#5c574c] sm:px-6 lg:px-8 dark:text-sage", children: /* @__PURE__ */ jsxs("p", { children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " SkyWatch Security. All rights reserved."
    ] }) }) })
  ] });
}
export {
  Footer
};
