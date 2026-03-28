import { jsx, jsxs } from "react/jsx-runtime";
import { Reveal } from "@/components/motion/scroll-reveal";
import { siteContact } from "@/lib/siteContact";
const metadata = {
  title: "Request a Quote",
  description: "Tell us about your site, hours, and risks\u2014we will respond with a tailored guarding or monitoring proposal."
};
function QuotePage() {
  return /* @__PURE__ */ jsx("main", { className: "flex-1 bg-secondary px-4 py-16 dark:bg-base sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight text-base dark:text-secondary sm:text-4xl", children: "Request a quote" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 leading-relaxed text-base/75 dark:text-sage", children: [
        "Submit the form below and our team will be in touch shortly. For urgent cover, call us on",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `tel:${siteContact.phone.tel}`,
            className: "font-semibold text-primary underline-offset-2 hover:underline",
            children: siteContact.phone.display
          }
        ),
        " ",
        "(placeholder until your number is live)."
      ] })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0.08, children: /* @__PURE__ */ jsxs(
      "form",
      {
        className: "mt-10 space-y-6 rounded-2xl border border-sage/45 bg-base/5 p-6 dark:border-sage/35 dark:bg-secondary/5 sm:p-8",
        action: "#",
        method: "post",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "name",
                className: "block text-sm font-medium text-base dark:text-secondary",
                children: "Full name"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "name",
                name: "name",
                required: true,
                autoComplete: "name",
                className: "mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none ring-primary/30 placeholder:text-base/40 focus:border-primary focus:ring-2 dark:bg-base dark:text-secondary",
                placeholder: "Jane Smith"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "email",
                className: "block text-sm font-medium text-base dark:text-secondary",
                children: "Work email"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                required: true,
                autoComplete: "email",
                className: "mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none ring-primary/30 placeholder:text-base/40 focus:border-primary focus:ring-2 dark:bg-base dark:text-secondary",
                placeholder: "you@company.com"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "phone",
                className: "block text-sm font-medium text-base dark:text-secondary",
                children: "Phone"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "phone",
                name: "phone",
                type: "tel",
                autoComplete: "tel",
                className: "mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none ring-primary/30 placeholder:text-base/40 focus:border-primary focus:ring-2 dark:bg-base dark:text-secondary",
                placeholder: "020 7123 4567"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "service",
                className: "block text-sm font-medium text-base dark:text-secondary",
                children: "Service interest"
              }
            ),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "service",
                name: "service",
                className: "mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 dark:bg-base dark:text-secondary",
                defaultValue: "",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select a service" }),
                  /* @__PURE__ */ jsx("option", { value: "guarding", children: "SIA guarding" }),
                  /* @__PURE__ */ jsx("option", { value: "cctv", children: "CCTV & monitoring" }),
                  /* @__PURE__ */ jsx("option", { value: "patrols", children: "Mobile patrols" }),
                  /* @__PURE__ */ jsx("option", { value: "keyholding", children: "Key holding & alarm response" }),
                  /* @__PURE__ */ jsx("option", { value: "other", children: "Other / multiple" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "message",
                className: "block text-sm font-medium text-base dark:text-secondary",
                children: "Site details & requirements"
              }
            ),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "message",
                name: "message",
                rows: 5,
                className: "mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none ring-primary/30 placeholder:text-base/40 focus:border-primary focus:ring-2 dark:bg-base dark:text-secondary",
                placeholder: "Location, hours, risks, start date\u2026"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "w-full rounded-md bg-primary py-3 text-sm font-semibold text-base transition hover:bg-accent sm:w-auto sm:px-10",
              children: "Submit enquiry"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-base/60 dark:text-sage", children: "This demo form does not post to a server\u2014wire your API route or form provider when you go live." })
        ]
      }
    ) })
  ] }) });
}
export {
  QuotePage as default,
  metadata
};
