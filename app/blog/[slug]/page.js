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
  return /* @__PURE__ */ jsx("main", { className: "flex-1 bg-secondary dark:bg-base", children: /* @__PURE__ */ jsxs("article", { className: "mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      Link,
      {
        href: "/blog",
        className: "text-sm text-primary hover:text-accent dark:text-accent",
        children: "\u2190 All articles"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-6 aspect-[2/1] overflow-hidden rounded-2xl border border-sage/35 dark:border-sage/30", children: [
      /* @__PURE__ */ jsx(
        Image,
        {
          src: p.coverImage,
          alt: "",
          fill: true,
          className: "object-cover",
          sizes: "(max-width: 768px) 100vw, 768px",
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
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-base/80 dark:text-sage", children: p.excerpt })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0.08, children: /* @__PURE__ */ jsx("div", { className: "prose prose-neutral mt-10 max-w-none space-y-4 dark:prose-invert", children: p.body.map((para, i) => /* @__PURE__ */ jsx(
      "p",
      {
        className: "leading-relaxed text-base/85 dark:text-sage",
        children: para
      },
      i
    )) }) })
  ] }) });
}
export {
  BlogPostPage as default,
  generateMetadata,
  generateStaticParams
};
