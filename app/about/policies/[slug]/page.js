import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/scroll-reveal";
import { withCanonical } from "@/lib/pageMetadata";
import { getPolicyBySlug, policies } from "@/lib/policies";

function generateStaticParams() {
  return policies.map((p) => ({ slug: p.slug }));
}

function generateMetadata({ params }) {
  const p = getPolicyBySlug(params.slug);
  if (!p) return { title: "Policy" };
  return withCanonical({
    title: p.metaTitle,
    description: p.metaDescription,
    openGraph: {
      title: `${p.metaTitle} | SkyWatch Security Ltd`,
      description: p.metaDescription
    }
  }, `/about/policies/${params.slug}`);
}

function PolicyPage({ params }) {
  const p = getPolicyBySlug(params.slug);
  if (!p) notFound();

  return (
    <main id="main-content" tabIndex={-1} className="min-w-0 flex-1 overflow-x-hidden bg-secondary focus:outline-none dark:bg-base">
      <section className="border-b border-sage/30 bg-base py-12 text-secondary">
        <div className="page-container page-align">
          <Link
            href="/about/policies"
            className="inline-flex min-h-[44px] items-center py-1.5 text-sm font-medium text-primary transition hover:text-accent sm:min-h-[24px] sm:py-1 dark:text-accent dark:hover:text-secondary"
          >
            ← All policies
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            {p.title}
          </h1>
          <p className="mx-auto mt-3 max-w-4xl text-lg text-sage md:mx-0 dark:text-sage/95">
            {p.summary}
          </p>
        </div>
      </section>

      <article className="page-container py-12">
        <Reveal>
          <div className="brand-card p-6 sm:p-10 md:p-12">
            <div className="mx-auto max-w-3xl space-y-5 text-left">
              {p.body.map((para, i) => (
                <p
                  key={i}
                  className="leading-[1.75] text-[0.95rem] text-[#1a1a1a]/95 sm:text-base dark:text-[#ebe6d8]"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </article>
    </main>
  );
}

export { PolicyPage as default, generateMetadata, generateStaticParams };
