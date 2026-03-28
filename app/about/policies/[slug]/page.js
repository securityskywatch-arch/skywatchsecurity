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
  return /* @__PURE__ */ jsxs("main", { className: "flex-1 bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/30 bg-base px-4 py-12 text-secondary sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          href: "/about/policies",
          className: "text-sm font-medium text-sage hover:text-accent",
          children: "\u2190 All policies"
        }
      ),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 text-3xl font-bold tracking-tight sm:text-4xl", children: p.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-lg text-sage", children: p.summary })
    ] }) }),
    /* @__PURE__ */ jsx("article", { className: "mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4 leading-relaxed text-base/85 dark:text-sage", children: p.body.map((para, i) => /* @__PURE__ */ jsx("p", { children: para }, i)) }) }) })
  ] });
}
export {
  PolicyPage as default,
  generateMetadata,
  generateStaticParams
};
