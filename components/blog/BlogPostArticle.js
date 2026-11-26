import { jsx, jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/scroll-reveal";
import { BlogParagraph, formatBlogDate } from "@/lib/blogParagraph";

function BlogPostArticle({ post }) {
  const hasLinks = Array.isArray(post.links) && post.links.length > 0;
  const hasRelatedService =
    post.relatedService &&
    typeof post.relatedService.href === "string" &&
    typeof post.relatedService.label === "string";

  return (
    <article className="page-container py-14 page-align">
      <Link
        href="/blog"
        className="inline-flex min-h-[44px] items-center py-1.5 text-sm text-primary-text hover:text-[#5c3d06] sm:min-h-[24px] sm:py-1 dark:text-accent dark:hover:text-accent"
      >
        ← All articles
      </Link>
      <div className="relative mx-auto mt-6 aspect-[2/1] max-w-4xl overflow-hidden rounded-2xl border border-sage/35 dark:border-sage/30 md:mx-0 md:max-w-none">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1280px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base/50 to-transparent dark:from-base/70" />
      </div>
      <Reveal>
        <p className="mt-6 text-xs font-medium uppercase tracking-wider text-primary-text dark:text-accent">
          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
          {post.dateModified && post.dateModified !== post.date ? (
            <>
              {" · "}
              <span className="normal-case tracking-normal text-base/70 dark:text-sage">
                Updated{" "}
                <time dateTime={post.dateModified}>{formatBlogDate(post.dateModified)}</time>
              </span>
            </>
          ) : null}
        </p>
        <p className="mt-2 text-sm text-base/75 dark:text-sage">
          By <span itemProp="author">{post.author}</span>
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-base dark:text-secondary sm:text-4xl">
          {post.title}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-base/80 dark:text-sage md:mx-0">{post.excerpt}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="prose prose-neutral mx-auto mt-10 max-w-none space-y-4 text-left dark:prose-invert md:mx-0">
          {post.body.map((para, i) => (
            <BlogParagraph key={i} text={para} />
          ))}
        </div>
      </Reveal>
      {hasLinks ? (
        <Reveal delay={0.12}>
          <section className="brand-card mt-10 p-6 text-left sm:p-8">
            <h2 className="text-lg font-semibold text-base dark:text-secondary">Useful links</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {post.links.map((link) => {
                const external = typeof link.href === "string" && link.href.startsWith("http");
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-[44px] items-center py-1 font-medium text-primary-text underline-offset-4 hover:underline sm:min-h-[24px] sm:py-0.5 dark:text-primary"
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </Reveal>
      ) : null}
      {hasRelatedService ? (
        <Reveal delay={0.14}>
          <section className="brand-card mt-6 p-6 text-left sm:p-8">
            <h2 className="text-lg font-semibold text-base dark:text-secondary">Related service</h2>
            <p className="mt-3 text-sm text-base/75 dark:text-sage">
              <Link
                href={post.relatedService.href}
                className="inline-flex min-h-[44px] items-center font-medium text-primary-text underline-offset-4 hover:underline sm:min-h-[24px] dark:text-accent"
              >
                {post.relatedService.label}
              </Link>
            </p>
          </section>
        </Reveal>
      ) : null}
    </article>
  );
}

export { BlogPostArticle };