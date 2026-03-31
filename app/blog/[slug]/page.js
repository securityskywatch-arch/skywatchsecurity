import { jsx, jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/scroll-reveal";
import { blogPosts, getPostBySlug } from "@/lib/blog";
function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}
function generateMetadata({ params }) {
  const p = getPostBySlug(params.slug);
  if (!p) return { title: "Article" };
  return { title: p.title, description: p.excerpt };
}
function BlogPostPage({ params }) {
  const p = getPostBySlug(params.slug);
  if (!p) notFound();
  const hasLinks = Array.isArray(p.links) && p.links.length > 0;
  return /* @__PURE__ */ jsx("main", { className: "min-w-0 flex-1 overflow-x-hidden bg-secondary dark:bg-base", children: /* @__PURE__ */ jsxs("article", { className: "page-container py-14 page-align", children: [
    /* @__PURE__ */ jsx(
      Link,
      {
        href: "/blog",
        className: "text-sm text-primary hover:text-accent dark:text-accent",
        children: "\u2190 All articles"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto mt-6 aspect-[2/1] max-w-4xl overflow-hidden rounded-2xl border border-sage/35 dark:border-sage/30 md:mx-0 md:max-w-none", children: [
      /* @__PURE__ */ jsx(
        Image,
        {
          src: p.coverImage,
          alt: "",
          fill: true,
          className: "object-cover",
          sizes: "(max-width: 768px) 100vw, 1280px",
          priority: true
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-base/50 to-transparent dark:from-base/70" })
    ] }),
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx(
        "time",
        {
          dateTime: p.date,
          className: "mt-6 block text-xs font-medium uppercase tracking-wider text-primary dark:text-accent",
          children: p.date
        }
      ),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-3xl font-bold tracking-tight text-base dark:text-secondary sm:text-4xl", children: p.title }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-3xl text-lg text-base/80 dark:text-sage md:mx-0", children: p.excerpt })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0.08, children: /* @__PURE__ */ jsx("div", { className: "prose prose-neutral mx-auto mt-10 max-w-none space-y-4 text-left dark:prose-invert md:mx-0", children: p.body.map((para, i) => /* @__PURE__ */ jsx(
      "p",
      {
        className: "leading-relaxed text-base/85 dark:text-sage",
        children: para
      },
      i
    )) }) })
    ,
    hasLinks ? /* @__PURE__ */ jsx(Reveal, { delay: 0.12, children: /* @__PURE__ */ jsxs("section", { className: "brand-card mt-10 p-6 text-left sm:p-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-base dark:text-secondary", children: "Useful links" }),
      /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2 text-sm", children: p.links.map((link) => {
        const external = typeof link.href === "string" && link.href.startsWith("http");
        return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            href: link.href,
            className: "font-medium text-primary underline-offset-4 hover:underline",
            target: external ? "_blank" : void 0,
            rel: external ? "noopener noreferrer" : void 0,
            children: link.label
          }
        ) }, link.href);
      }) })
    ] }) }) : null
  ] }) });
}
export {
  BlogPostPage as default,
  generateMetadata,
  generateStaticParams
};
