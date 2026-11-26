import { jsx } from "react/jsx-runtime";
import { notFound } from "next/navigation";
import { BlogPostArticle } from "@/components/blog/BlogPostArticle";
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
        publishedTime: p.date,
        modifiedTime: p.dateModified || p.date,
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
  const postLd = blogPosting(p);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-w-0 flex-1 overflow-x-hidden bg-secondary focus:outline-none dark:bg-base"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postLd) }} />
      <BlogPostArticle post={p} />
    </main>
  );
}

export { BlogPostPage as default, generateMetadata, generateStaticParams };