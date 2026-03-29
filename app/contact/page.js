import { jsx, jsxs } from "react/jsx-runtime";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/scroll-reveal";
import { siteContact } from "@/lib/siteContact";
const metadata = {
  title: "Contact Us",
  description: "Address, phone, and email for SkyWatch Security\u2014professional guarding across England."
};
function ContactPage() {
  return /* @__PURE__ */ jsxs("main", { className: "flex-1 bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/30 bg-base px-4 py-14 text-secondary sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight sm:text-4xl", children: "Contact us" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-sage", children: "Speak to our team about guarding, patrols, key holding, or monitoring packages." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto grid max-w-page gap-8 px-4 py-14 lg:grid-cols-2 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6 rounded-2xl border border-sage/40 bg-base/5 p-8 dark:border-sage/30 dark:bg-secondary/5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "mt-1 h-5 w-5 shrink-0 text-primary" }),
          /* @__PURE__ */ jsx("p", {
            className: "min-w-0 text-sm leading-relaxed text-base/80 dark:text-sage",
            children: siteContact.addressLines.map((line, i) => /* @__PURE__ */ jsxs("span", { children: [
              i > 0 && /* @__PURE__ */ jsx("br", {}),
              line
            ] }, line))
          })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx(Phone, { className: "mt-1 h-5 w-5 shrink-0 text-primary" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-base dark:text-secondary", children: "Phone" }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: `tel:${siteContact.phone.tel}`,
                className: "mt-1 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent",
                children: siteContact.phone.display
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx(Mail, { className: "mt-1 h-5 w-5 shrink-0 text-primary" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-base dark:text-secondary", children: "Email" }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `mailto:${siteContact.email}`,
                className: "mt-1 text-sm text-primary hover:text-accent",
                children: siteContact.email
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "mt-1 h-5 w-5 shrink-0 text-primary opacity-70" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-base dark:text-secondary", children: "Coverage" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-base/80 dark:text-sage", children: siteContact.coverageArea })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.06, children: /* @__PURE__ */ jsxs(
        "form",
        {
          className: "space-y-4 rounded-2xl border border-sage/45 bg-base/5 p-8 dark:border-sage/35 dark:bg-secondary/5",
          action: "#",
          method: "post",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-base dark:text-secondary", children: "Quick message" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                name: "name",
                placeholder: "Name",
                className: "w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none focus:border-primary focus:ring-2 dark:bg-base dark:text-secondary"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                name: "email",
                type: "email",
                placeholder: "Email",
                className: "w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none focus:border-primary focus:ring-2 dark:bg-base dark:text-secondary"
              }
            ),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                name: "message",
                rows: 4,
                placeholder: "How can we help?",
                className: "w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none focus:border-primary focus:ring-2 dark:bg-base dark:text-secondary"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-base hover:bg-accent",
                children: "Send (demo)"
              }
            )
          ]
        }
      ) })
    ] })
  ] });
}
export {
  ContactPage as default,
  metadata
};
