import { jsx, jsxs } from "react/jsx-runtime";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { siteContact } from "@/lib/siteContact";
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "border-t border-sage/30 bg-secondary text-base dark:border-sage/30 dark:bg-base dark:text-secondary", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto grid min-w-0 max-w-page gap-10 px-4 py-12 pb-[max(3rem,env(safe-area-inset-bottom))] sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 lg:col-span-1", children: [
        /* @__PURE__ */ jsx(BrandLogo, { href: "/", variant: "footer" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xs text-sm text-[#4a4538] dark:text-sage", children: "SIA-aligned guarding, patrols, and monitoring, delivered with discipline, discretion, and clear communication." }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs text-[#5c574c] dark:text-sage/80", children: "Registered in England and Wales. Company No. 00000000 \xB7 VAT GB000000000" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-[#5c3d06] dark:text-accent", children: "Get in touch" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-3 text-sm text-[#4a4538] dark:text-sage", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
            /* @__PURE__ */ jsx("span", {
              className: "min-w-0 text-[#1a1a1a] dark:text-sage",
              children: siteContact.addressLines.map((line, i) => /* @__PURE__ */ jsxs("span", { children: [
                i > 0 && /* @__PURE__ */ jsx("br", {}),
                line
              ] }, line))
            })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `tel:${siteContact.phone.tel}`,
                className: "text-[#1a1a1a] transition hover:text-primary dark:text-sage dark:hover:text-accent",
                children: siteContact.phone.display
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `mailto:${siteContact.email}`,
                className: "break-all text-[#1a1a1a] transition hover:text-primary dark:text-sage dark:hover:text-accent",
                children: siteContact.email
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary opacity-60" }),
            /* @__PURE__ */ jsx("span", { children: siteContact.coverageArea })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-[#5c3d06] dark:text-accent", children: "Links" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", className: "text-[#4a4538] transition hover:text-primary dark:text-sage dark:hover:text-accent", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/services", className: "text-[#4a4538] transition hover:text-primary dark:text-sage dark:hover:text-accent", children: "Services" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/why-choose-us", className: "text-[#4a4538] transition hover:text-primary dark:text-sage dark:hover:text-accent", children: "Why choose us" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/blog", className: "text-[#4a4538] transition hover:text-primary dark:text-sage dark:hover:text-accent", children: "News & articles" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/reviews", className: "text-[#4a4538] transition hover:text-primary dark:text-sage dark:hover:text-accent", children: "Reviews" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/quote", className: "text-[#4a4538] transition hover:text-primary dark:text-sage dark:hover:text-accent", children: "Request a quote" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-[#5c3d06] dark:text-accent", children: "Company" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/about", className: "text-[#4a4538] transition hover:text-primary dark:text-sage dark:hover:text-accent", children: "About us" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/standards", className: "text-[#4a4538] transition hover:text-primary dark:text-sage dark:hover:text-accent", children: "Our standards" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/about/policies", className: "text-[#4a4538] transition hover:text-primary dark:text-sage dark:hover:text-accent", children: "Policies" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/accreditation", className: "text-[#4a4538] transition hover:text-primary dark:text-sage dark:hover:text-accent", children: "Accreditation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/recruitment", className: "text-[#4a4538] transition hover:text-primary dark:text-sage dark:hover:text-accent", children: "Recruitment" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/contact", className: "text-[#4a4538] transition hover:text-primary dark:text-sage dark:hover:text-accent", children: "Contact" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-sage/25 dark:border-sage/20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-page flex-col gap-2 px-4 py-6 text-xs text-[#5c574c] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 dark:text-sage", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " SkyWatch Security. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[#6b6355] dark:text-sage/80", children: "Professional security services, with structure inspired by leading UK contractors." })
    ] }) })
  ] });
}
export {
  Footer
};
