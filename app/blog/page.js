import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { blogPosts } from "@/lib/blog";
const metadata = {
  title: "Blog",
  description: "Security insights, regional updates, and service guidance."
};
function BlogIndexPage() {
  return /* @__PURE__ */ jsxs("main", { className: "flex-1 bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/30 bg-base px-4 py-12 text-secondary sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight sm:text-4xl", children: "News & articles" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sage", children: "Practical perspectives on guarding, retail, and corporate security." })
    ] }) }),
    /* @__PURE__ */ jsx(StaggerSection, { className: "mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("ul", { className: "space-y-6", children: blogPosts.map((post) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-sage/40 bg-base/5 p-6 dark:border-sage/30 dark:bg-secondary/5", children: [
      /* @__PURE__ */ jsx(
        "time",
        {
          dateTime: post.date,
          className: "text-xs font-medium uppercase tracking-wider text-primary",
          children: post.date
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-xl font-semibold text-base dark:text-secondary", children: /* @__PURE__ */ jsx(
        Link,
        {
          href: `/blog/${post.slug}`,
          className: "hover:text-primary",
          children: post.title
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-base/75 dark:text-sage", children: post.excerpt }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: `/blog/${post.slug}`,
          className: "mt-4 inline-block text-sm font-semibold text-primary hover:text-accent",
          children: "Read more \u2192"
        }
      )
    ] }) }) }, post.slug)) }) })
  ] });
}
export {
  BlogIndexPage as default,
  metadata
};
