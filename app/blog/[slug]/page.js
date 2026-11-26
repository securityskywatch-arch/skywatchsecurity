import { jsx, jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/scroll-reveal";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { withCanonical } from "@/lib/pageMetadata";
import { blogPosting } from "@/lib/schema";

function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function generateMetadata({ params }) {
  const p = getPostBySlug(params.slug);
  if (!p) return { title: "Article" };
  const title = p.metaTitle || p.title;
  const description = p.metaDescription || p.excerpt;
  return withCanonical(
    {
      title,
      description,
      openGraph: {
        type: "article",
        title: `${title} | SkyWatch Security Ltd`,
        description
      }
    },
    `/blog/${params.slug}`
  );
}

function BlogPostPage({ params }) {
  const p = getPostBySlug(params.slug);
  if (!p) notFound();
  const hasLinks = Array.isArray(p.links) && p.links.length > 0;
  const postLd = blogPosting(p);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-w-0 flex-1 overflow-x-hidden bg-secondary focus:outline-none dark:bg-base"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postLd) }} />
      <article className="page-container py-14 page-align">
        <Link
          href="/blog"
          className="inline-flex min-h-[44px] items-center py-1.5 text-sm text-primary-text hover:text-[#5c3d06] sm:min-h-[24px] sm:py-1 dark:text-accent dark:hover:text-accent"
        >
          ← All articles
        </Link>
        <div className="relative mx-auto mt-6 aspect-[2/1] max-w-4xl overflow-hidden rounded-2xl border border-sage/35 dark:border-sage/30 md:mx-0 md:max-w-none">
          <Image
            src={p.coverImage}
            alt={p.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1280px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base/50 to-transparent dark:from-base/70" />
        </div>
        <Reveal>
          <time
            dateTime={p.date}
            className="mt-6 block text-xs font-medium uppercase tracking-wider text-primary-text dark:text-accent"
          >
            {p.date}
          </time>
          <p className="mt-2 text-sm text-base/75 dark:text-sage">By {p.author}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-base dark:text-secondary sm:text-4xl">
            {p.title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-base/80 dark:text-sage md:mx-0">{p.excerpt}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="prose prose-neutral mx-auto mt-10 max-w-none space-y-4 text-left dark:prose-invert md:mx-0">
            {p.body.map((para, i) => (
              <p key={i} className="leading-relaxed text-base/85 dark:text-sage">
                {para}
              </p>
            ))}
          </div>
        </Reveal>
        {hasLinks ? (
          <Reveal delay={0.12}>
            <section className="brand-card mt-10 p-6 text-left sm:p-8">
              <h2 className="text-lg font-semibold text-base dark:text-secondary">Useful links</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {p.links.map((link) => {
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
      </article>
    </main>
  );
}

export { BlogPostPage as default, generateMetadata, generateStaticParams };