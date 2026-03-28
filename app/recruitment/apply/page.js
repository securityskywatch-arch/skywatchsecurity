import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { Reveal } from "@/components/motion/scroll-reveal";
const metadata = {
  title: "Application Form",
  description: "Apply to join SkyWatch Security."
};
function ApplyPage() {
  return /* @__PURE__ */ jsx("main", { className: "flex-1 bg-secondary px-4 py-14 dark:bg-base sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl", children: [
    /* @__PURE__ */ jsx(Link, { href: "/recruitment", className: "text-sm text-primary hover:text-accent", children: "\u2190 Recruitment" }),
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("h1", { className: "mt-4 text-3xl font-bold tracking-tight text-base dark:text-secondary sm:text-4xl", children: "Application form" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed text-base/75 dark:text-sage", children: "Submit your details for recruitment screening. This demo form does not post anywhere\u2014connect an API route or form backend when live." })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0.06, children: /* @__PURE__ */ jsxs(
      "form",
      {
        className: "mt-10 space-y-5 rounded-2xl border border-sage/45 bg-base/5 p-6 dark:border-sage/35 dark:bg-secondary/5 sm:p-8",
        action: "#",
        method: "post",
        children: [
          [
            ["full_name", "Full name", "text", true],
            ["email", "Email", "email", true],
            ["phone", "Phone", "tel", true],
            ["sia_number", "SIA licence number (if applicable)", "text", false]
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
                className: "mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 dark:bg-base dark:text-secondary"
              }
            )
          ] }, id)),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "cv",
                className: "block text-sm font-medium text-base dark:text-secondary",
                children: "CV upload (when backend connected)"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "cv",
                name: "cv",
                type: "file",
                disabled: true,
                className: "mt-2 w-full text-sm text-base/60"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "w-full rounded-md bg-primary py-3 text-sm font-semibold text-base hover:bg-accent sm:w-auto sm:px-10",
              children: "Submit application"
            }
          )
        ]
      }
    ) })
  ] }) });
}
export {
  ApplyPage as default,
  metadata
};
