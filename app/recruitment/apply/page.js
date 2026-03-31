import { jsx, jsxs } from "react/jsx-runtime";
import { LoadingSubmitButton } from "@/components/forms/LoadingSubmitButton";
import { ValidatedForm } from "@/components/forms/ValidatedForm";
import Link from "next/link";
import { Reveal } from "@/components/motion/scroll-reveal";
const metadata = {
  title: "Application Form",
  description: "Register your details for future security opportunities. No CV upload required."
};
function ApplyPage({ searchParams }) {
  const sent = searchParams?.sent;
  return /* @__PURE__ */ jsx("main", { className: "flex-1 bg-secondary px-4 py-14 dark:bg-base sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl", children: [
    /* @__PURE__ */ jsx(Link, { href: "/recruitment", className: "text-sm text-primary hover:text-accent", children: "\u2190 Recruitment" }),
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("h1", { className: "mt-4 text-3xl font-bold tracking-tight text-base dark:text-secondary sm:text-4xl", children: "Application form" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed text-base/75 dark:text-sage", children: "Share your core details for manual shortlisting. We review applications and contact suitable candidates when roles are available." })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0.06, children: /* @__PURE__ */ jsxs(
      ValidatedForm,
      {
        className: "brand-card brand-card-interactive mt-10 space-y-5 p-6 sm:p-8",
        action: "/api/forms/application",
        method: "post",
        children: [
          sent === "1" ? /* @__PURE__ */ jsx("p", { className: "rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300", children: "Application submitted successfully. We will contact suitable candidates." }) : null,
          sent === "0" ? /* @__PURE__ */ jsx("p", { className: "rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300", children: "We could not submit your application right now. Please try again shortly." }) : null,
          [
            ["full_name", "Full name", "text", true],
            ["email", "Email address", "email", true],
            ["phone", "Phone number", "tel", true],
            ["postcode", "Home postcode", "text", true],
            ["sia_number", "SIA licence number (if you have one)", "text", false]
          ].map(([id, label, type, req]) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: id,
                className: "block text-sm font-medium text-base dark:text-secondary",
                children: label
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                id,
                name: id,
                type,
                required: req,
                minLength: id === "full_name" ? 2 : id === "postcode" ? 3 : void 0,
                maxLength: id === "full_name" ? 100 : id === "postcode" ? 12 : id === "sia_number" ? 30 : void 0,
                autoComplete: id === "full_name" ? "name" : id === "email" ? "email" : id === "phone" ? "tel" : "off",
                pattern: id === "phone" ? "^\\+?[0-9()\\-\\s]{7,20}$" : void 0,
                title: id === "phone" ? "Please enter a valid UK phone number" : id === "postcode" ? "Please enter a valid UK postcode" : void 0,
                className: "mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 dark:bg-base dark:text-secondary"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "field-error", children: id === "email" ? "Please enter a valid email address, e.g. name@email.co.uk." : id === "phone" ? "Please enter a valid UK phone number." : id === "postcode" ? "Please enter a valid UK postcode, e.g. RG1 1AA." : `Please enter a valid ${label.toLowerCase()}.` })
          ] }, id)),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "right_to_work",
                className: "block text-sm font-medium text-base dark:text-secondary",
                children: "Do you have the right to work in the UK?"
              }
            ),
            /* @__PURE__ */ jsx(
              "select",
              {
                id: "right_to_work",
                name: "right_to_work",
                required: true,
                defaultValue: "",
                className: "mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 dark:bg-base dark:text-secondary",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select an option" }),
                  /* @__PURE__ */ jsx("option", { value: "yes", children: "Yes" }),
                  /* @__PURE__ */ jsx("option", { value: "no", children: "No" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "field-error", children: "Please select if you have the right to work in the UK." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "experience_years", className: "block text-sm font-medium text-base dark:text-secondary", children: "Security experience" }),
              /* @__PURE__ */ jsx(
                "select",
                {
                  id: "experience_years",
                  name: "experience_years",
                  required: true,
                  defaultValue: "",
                  className: "mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 dark:bg-base dark:text-secondary",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select" }),
                    /* @__PURE__ */ jsx("option", { value: "none", children: "No direct experience" }),
                    /* @__PURE__ */ jsx("option", { value: "0-1", children: "Up to 1 year" }),
                    /* @__PURE__ */ jsx("option", { value: "1-3", children: "1 to 3 years" }),
                    /* @__PURE__ */ jsx("option", { value: "3-5", children: "3 to 5 years" }),
                    /* @__PURE__ */ jsx("option", { value: "5+", children: "5+ years" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "field-error", children: "Please select your security experience." })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "availability", className: "block text-sm font-medium text-base dark:text-secondary", children: "Availability" }),
              /* @__PURE__ */ jsx(
                "select",
                {
                  id: "availability",
                  name: "availability",
                  required: true,
                  defaultValue: "",
                  className: "mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 dark:bg-base dark:text-secondary",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select" }),
                    /* @__PURE__ */ jsx("option", { value: "days", children: "Days" }),
                    /* @__PURE__ */ jsx("option", { value: "nights", children: "Nights" }),
                    /* @__PURE__ */ jsx("option", { value: "weekends", children: "Weekends" }),
                    /* @__PURE__ */ jsx("option", { value: "flexible", children: "Flexible" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "field-error", children: "Please select your availability." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "preferred_regions", className: "block text-sm font-medium text-base dark:text-secondary", children: "Preferred work area(s)" }),
            /* @__PURE__ */ jsx("input", { id: "preferred_regions", name: "preferred_regions", type: "text", required: true, minLength: 2, maxLength: 120, placeholder: "e.g. South East, London, Reading, Oxford", className: "mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 dark:bg-base dark:text-secondary" }),
            /* @__PURE__ */ jsx("p", { className: "field-error", children: "Please enter your preferred work areas." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "notes", className: "block text-sm font-medium text-base dark:text-secondary", children: "Relevant notes" }),
            /* @__PURE__ */ jsx("textarea", { id: "notes", name: "notes", rows: 4, required: true, minLength: 10, maxLength: 1800, placeholder: "Any additional details (licences, transport, notice period, preferred role)", className: "mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 dark:bg-base dark:text-secondary" }),
            /* @__PURE__ */ jsx("p", { className: "field-error", children: "Please add at least 10 characters in relevant notes." })
          ] }),
          /* @__PURE__ */ jsx(LoadingSubmitButton, { idleLabel: "Submit application", loadingLabel: "Sending...", className: "w-full rounded-md bg-primary py-3 text-sm font-semibold text-base hover:bg-accent disabled:cursor-not-allowed disabled:opacity-75 sm:w-auto sm:px-10" })
        ]
      }
    ) })
  ] }) });
}
export {
  ApplyPage as default,
  metadata
};
