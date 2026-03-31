import { jsx, jsxs } from "react/jsx-runtime";
import { LoadingSubmitButton } from "@/components/forms/LoadingSubmitButton";
import { ValidatedForm } from "@/components/forms/ValidatedForm";
import { Reveal } from "@/components/motion/scroll-reveal";
import { siteContact } from "@/lib/siteContact";
const metadata = {
  title: "Request a Quote",
  description: "Tell us about your site, hours, and risks. We will respond with a tailored guarding or monitoring proposal."
};
function QuotePage({ searchParams }) {
  const sent = searchParams?.sent;
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
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0.08, children: /* @__PURE__ */ jsxs(
      ValidatedForm,
      {
        className: "brand-card brand-card-interactive mt-10 space-y-6 p-6 sm:p-8",
        action: "/api/forms/quote",
        method: "post",
        children: [
          sent === "1" ? /* @__PURE__ */ jsx("p", { className: "rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300", children: "Quote request sent successfully. We will reply with next steps shortly." }) : null,
          sent === "0" ? /* @__PURE__ */ jsx("p", { className: "rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300", children: "We could not send your quote request right now. Please try again or contact us directly." }) : null,
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
                minLength: 2,
                maxLength: 80,
                autoComplete: "name",
                className: "mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none ring-primary/30 placeholder:text-base/40 focus:border-primary focus:ring-2 dark:bg-base dark:text-secondary",
                placeholder: "Jane Smith"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "field-error", children: "Please enter your full name (at least 2 characters)." }),
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
          /* @__PURE__ */ jsx("p", { className: "field-error", children: "Please enter a valid work email address, e.g. name@company.co.uk." }),
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
                required: true,
                autoComplete: "tel",
                pattern: "^\\+?[0-9()\\-\\s]{7,20}$",
                title: "Please enter a valid phone number",
                className: "mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none ring-primary/30 placeholder:text-base/40 focus:border-primary focus:ring-2 dark:bg-base dark:text-secondary",
                placeholder: "020 7123 4567"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "field-error", children: "Please enter a valid UK contact number." }),
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
                required: true,
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
          /* @__PURE__ */ jsx("p", { className: "field-error", children: "Please select a service." }),
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
                required: true,
                minLength: 10,
                maxLength: 1800,
                className: "mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none ring-primary/30 placeholder:text-base/40 focus:border-primary focus:ring-2 dark:bg-base dark:text-secondary",
                placeholder: "Location, hours, risks, start date\u2026"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "field-error", children: "Please provide site details such as location, hours, and risks (minimum 10 characters)." }),
          /* @__PURE__ */ jsx(LoadingSubmitButton, { idleLabel: "Submit enquiry", loadingLabel: "Sending...", className: "w-full rounded-md bg-primary py-3 text-sm font-semibold text-base transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-75 sm:w-auto sm:px-10" })
        ]
      }
    ) })
  ] }) });
}
export {
  QuotePage as default,
  metadata
};
