import Image from "next/image";
import Link from "next/link";
import { StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { blogPosts } from "@/lib/blog";

const metadata = {
  title: "Security Insights & Guidance | SkyWatch Security Ltd",
  description: "Practical operational guidance on loss prevention, site security procurement, key holding, and compliance.",
};

function BlogIndexPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-w-0 flex-1 overflow-x-hidden bg-secondary focus:outline-none dark:bg-base">
      <section className="border-b border-sage/30 bg-base py-12 text-secondary">
        <div className="page-container page-align">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            Industry Perspectives
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Security Insights & Guidance
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-sage md:mx-0">
            Practical operational guidance on commercial manned guarding, logistics loss prevention,
            construction site protection, and compliance standards.
          </p>
        </div>
      </section>

      <StaggerSection className="page-container py-12 page-align">
        <ul className="grid grid-cols-1 gap-7 text-left md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <StaggerItem key={post.slug} as="li" className="h-full">
              <article className="brand-card brand-card-interactive group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1">
                {post.coverImage && (
                  <Link
                    href={`/blog/${post.slug}`}
                    prefetch={false}
                    className="relative aspect-[16/10] w-full overflow-hidden bg-base/80"
                  >
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      priority={index === 0}
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-base/20 to-transparent opacity-80 dark:from-[#141414] dark:via-[#141414]/30" />
                  </Link>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-primary-text dark:text-accent">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-bold leading-snug text-base dark:text-secondary">
                    <Link
                      href={`/blog/${post.slug}`}
                      prefetch={false}
                      className="transition duration-300 group-hover:text-primary-text dark:group-hover:text-accent"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-base/75 dark:text-sage">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 border-t border-sage/15 pt-3.5 dark:border-sage/20">
                    <Link
                      href={`/blog/${post.slug}`}
                      prefetch={false}
                      className="inline-flex min-h-[44px] items-center gap-1.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#5c3d06] transition duration-300 group-hover:text-primary-text sm:min-h-[24px] sm:py-1 dark:text-accent dark:group-hover:text-primary"
                    >
                      Read Full Article
                      <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </ul>
      </StaggerSection>
    </main>
  );
}

export { BlogIndexPage as default, metadata };
