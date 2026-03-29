import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/scroll-reveal";
import { getPolicyBySlug, policies } from "@/lib/policies";
function generateStaticParams() {
  return policies.map((p) => ({ slug: p.slug }));
}
function generateMetadata({ params }) {
  const p = getPolicyBySlug(params.slug);
  if (!p) return { title: "Policy" };
  return { title: p.title, description: p.summary };
}
function PolicyPage({ params }) {
  const p = getPolicyBySlug(params.slug);
  if (!p) notFound();
  return /* @__PURE__ */ jsxs("main", { className: "min-w-0 flex-1 overflow-x-hidden bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/30 bg-base py-12 text-secondary", children: /* @__PURE__ */ jsxs("div", { className: "page-container page-align", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          href: "/about/policies",
          className: "text-sm font-medium text-sage hover:text-accent",
          children: "\u2190 All policies"
        }
      ),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 text-3xl font-bold tracking-tight sm:text-4xl", children: p.title }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-4xl text-lg text-sage md:mx-0", children: p.summary })
    ] }) }),
    /* @__PURE__ */ jsx("article", { className: "page-container py-12", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-sage/40 bg-base/[0.04] p-6 shadow-sm dark:border-sage/30 dark:bg-secondary/[0.06] sm:p-10 md:p-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl space-y-5 text-left text-base/90 dark:text-sage", children: p.body.map((para, i) => /* @__PURE__ */ jsx(
      "p",
      {
        className: "leading-[1.75] text-[0.95rem] sm:text-base",
        children: para
      },
      i
    )) }) }) }) })
  ] });
}
export {
  PolicyPage as default,
  generateMetadata,
  generateStaticParams
};
