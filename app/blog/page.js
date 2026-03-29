import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { blogPosts } from "@/lib/blog";
const metadata = {
  title: "Blog",
  description: "Security insights, regional updates, and service guidance."
};
function BlogIndexPage() {
  return /* @__PURE__ */ jsxs("main", { className: "min-w-0 flex-1 overflow-x-hidden bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/30 bg-base py-12 text-secondary", children: /* @__PURE__ */ jsxs("div", { className: "page-container page-align", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight sm:text-4xl", children: "News & articles" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-3xl text-sage md:mx-0", children: "Practical perspectives on guarding, retail, and corporate security." })
    ] }) }),
    /* @__PURE__ */ jsx(StaggerSection, { className: "page-container py-12 page-align", children: /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 gap-6 text-left md:grid-cols-3", children: blogPosts.map((post) => /* @__PURE__ */ jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsx("li", { className: "h-full", children: /* @__PURE__ */ jsxs("article", { className: "brand-card brand-card-interactive flex h-full flex-col p-6", children: [
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
      /* @__PURE__ */ jsx("p", { className: "mt-2 flex-1 text-sm text-base/75 dark:text-sage", children: post.excerpt }),
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
