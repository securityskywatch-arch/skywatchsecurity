import { jsx, jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Clock, Newspaper, Users } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { HomeReviewsCarousel } from "@/components/home/HomeReviewsCarousel";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { WhyChooseHomeSection } from "@/components/home/WhyChooseHomeSection";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { blogPosts } from "@/lib/blog";
import { reviews } from "@/lib/reviews";
import { withCanonical } from "@/lib/pageMetadata";
import { getServiceBySlug } from "@/lib/services";
import { publicLiabilityCoverText } from "@/lib/siteContact";

const featuredSlugs = [
  "manned-security-guards",
  "key-holding-alarm-response",
  "mobile-patrols",
  "construction-security",
  "concierge-security",
  "corporate-security",
  "cctv-monitoring",
  "industrial-warehouse"
];

const featured = featuredSlugs.map((slug) => getServiceBySlug(slug)).filter((s) => s != null);

function HomePage({ searchParams }) {
  const heroSent = searchParams?.hero_sent;

  return (
    <main id="main-content" tabIndex={-1} className="flex min-w-0 flex-1 flex-col overflow-x-clip focus:outline-none">
      <Hero heroSent={heroSent} />
      <WelcomeSection />

      {/* Core Value Pillars */}
      <section className="border-b border-sage/20 bg-secondary px-4 py-14 dark:border-sage/25 dark:bg-base sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid min-w-0 max-w-page gap-6 sm:grid-cols-3 sm:gap-8">
          {[
            {
              Icon: Clock,
              title: "24/7 Operations Desk",
              body: "Round-the-clock phone coordination for sites in Luton, Bedfordshire, Hertfordshire, and Greater London."
            },
            {
              Icon: Users,
              title: "Disciplined Site Handover",
              body: "Electronic shift logging, transparent occurrence books, and clear incident escalation protocols."
            },
            {
              Icon: Award,
              title: "Active Field Supervision",
              body: "Unannounced mobile supervisory visits and lone-worker welfare check-ins."
            }
          ].map(({ Icon, title, body }) => (
            <Reveal key={title}>
              <div className="brand-card brand-card-interactive flex min-w-0 gap-4 p-5 transition duration-300 hover:-translate-y-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/40 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h2 className="break-words font-semibold text-base dark:text-secondary">{title}</h2>
                  <p className="mt-1 break-words text-sm text-base/70 dark:text-sage">{body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Services Grid */}
      <StaggerSection className="relative overflow-hidden border-b border-sage/20 bg-secondary px-4 py-16 dark:border-sage/25 dark:bg-base sm:px-6 sm:py-20 lg:px-8">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[100px] dark:bg-primary/15"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-accent/[0.06] blur-[80px] dark:bg-accent/10"
          aria-hidden="true"
        />
        <div className="relative mx-auto min-w-0 max-w-page">
          <StaggerItem>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5c3d06] dark:text-accent sm:text-sm sm:tracking-[0.26em]">
                Commercial Solutions Portfolio
              </p>
              <h2 className="mt-3 text-balance text-[1.65rem] font-bold leading-tight tracking-tight text-base dark:text-secondary sm:text-3xl md:text-4xl">
                Commercial Security Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-base/75 dark:text-sage">
                Structured security assignments spanning static guarding, mobile patrols, key holding,
                compound plant security, and remote monitoring across Luton, Bedfordshire, and London.
              </p>
            </div>
          </StaggerItem>

          <div className="mt-14 grid min-w-0 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {featured.map((service) => (
              <StaggerItem key={service.slug} className="h-full min-h-0 flex flex-col">
                <ServiceCard slug={service.slug} />
              </StaggerItem>
            ))}
          </div>

          <StaggerItem>
            <div className="brand-card-cta brand-card-interactive mx-auto mt-12 max-w-2xl p-6 text-center sm:p-8">
              <p className="text-sm font-semibold text-[#5c3d06] dark:text-accent">
                Require a Blended Site Security Agreement?
              </p>
              <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-base/75 dark:text-sage">
                Combine static manned guarding with mobile patrol visits, key holding, and remote monitoring
                under a single unified service agreement.
              </p>
              <Link
                href="/quote"
                className="mt-5 inline-flex min-h-[44px] items-center justify-center gap-1 text-sm font-bold text-[#5c3d06] touch-manipulation transition hover:gap-2 hover:text-[#3d2904] dark:text-accent dark:hover:text-accent"
              >
                Request a Custom Quote →
              </Link>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-primary/50 px-5 py-2.5 text-sm font-semibold text-[#5c3d06] transition hover:bg-primary hover:text-[#141414] dark:text-accent dark:hover:text-base"
              >
                Browse All 18 Services in Catalogue
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </StaggerItem>
        </div>
      </StaggerSection>

      <WhyChooseHomeSection />

      {/* Verified Standards & Compliance Strip */}
      <section className="border-b border-sage/20 bg-secondary px-4 py-16 dark:border-sage/25 dark:bg-base sm:px-6 lg:px-8">
        <div className="mx-auto max-w-page">
          <Reveal>
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-base dark:text-secondary sm:text-3xl">
                Our Standards & Governance
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-base/75 dark:text-sage">
                Written assignment instructions, supervisory checks, and a 24/7 operations desk.
              </p>
              <Link
                href="/standards"
                className="mt-3 inline-flex min-h-[44px] items-center py-1.5 text-sm font-semibold text-[#5c3d06] hover:text-[#3d2904] sm:min-h-[24px] sm:py-1 dark:text-accent dark:hover:text-accent"
              >
                Review Operating Standards →
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                "Right to Work Checks",
                ...(publicLiabilityCoverText() ? [publicLiabilityCoverText()] : []),
                "Written Assignment Instructions",
                "UK GDPR Controls",
                "24/7 Operations Desk"
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-sage/45 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-base/80 transition hover:border-primary/50 dark:border-sage/35 dark:text-sage"
                >
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Conditionally Rendered Testimonials Carousel */}
      {reviews && reviews.length > 0 && (
        <section className="border-b border-sage/20 bg-secondary px-4 py-16 dark:border-sage/25 dark:bg-base sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto min-w-0 max-w-page">
            <Reveal>
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#5c3d06] dark:text-accent sm:text-sm">
                  Client Feedback
                </p>
                <h2 className="mt-2 text-[1.65rem] font-bold leading-tight tracking-tight text-base dark:text-secondary sm:text-3xl md:text-4xl">
                  Client Testimonials
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-sm text-base/75 dark:text-sage">
                  Feedback from commercial property and logistics operations teams across our coverage area.
                </p>
              </div>
            </Reveal>
            <HomeReviewsCarousel reviews={reviews} />
          </div>
        </section>
      )}

      {/* Blog & Industry Articles */}
      <section className="bg-secondary px-4 py-16 dark:bg-base sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto min-w-0 max-w-page">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/40 text-primary">
              <Newspaper className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="mt-3 text-[1.65rem] font-bold leading-tight tracking-tight text-base dark:text-secondary sm:text-3xl md:text-4xl">
              Security Insights & Guidance
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-base/75 dark:text-sage">
              Expert analysis on loss prevention, site security procurement, key holding, and compliance.
            </p>
            <Link
              href="/blog"
              className="mt-3 inline-flex min-h-[44px] items-center py-1.5 text-sm font-semibold text-[#5c3d06] hover:text-[#3d2904] sm:min-h-[24px] sm:py-1 dark:text-accent dark:hover:text-accent"
            >
              View All Articles →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Reveal key={post.slug}>
                <article className="brand-card brand-card-interactive group flex h-full min-w-0 flex-col overflow-hidden transition duration-300 hover:-translate-y-1">
                  <Link
                    href={`/blog/${post.slug}`}
                    prefetch={false}
                    className="relative aspect-[16/10] overflow-hidden"
                  >
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill={true}
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base/60 to-transparent opacity-80 dark:from-base/80" />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                    <time
                      dateTime={post.date}
                      className="text-xs font-medium uppercase tracking-wider text-[#5c3d06] dark:text-accent"
                    >
                      {post.date}
                    </time>
                    <h3 className="mt-2 text-base font-semibold dark:text-secondary sm:text-lg">
                      <Link
                        href={`/blog/${post.slug}`}
                        prefetch={false}
                        className="break-words text-[#1a1a1a] transition hover:text-primary-text dark:text-secondary dark:hover:text-accent"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2 flex-1 break-words text-sm text-base/75 dark:text-sage">
                      {post.excerpt.slice(0, 140)}…
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      prefetch={false}
                      className="mt-3 inline-flex min-h-[44px] items-center self-start py-1.5 text-sm font-semibold text-[#5c3d06] hover:text-[#3d2904] sm:min-h-[24px] sm:py-1 dark:text-accent dark:hover:text-accent"
                    >
                      Read Full Article →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const metadata = withCanonical(
  {
    title: { absolute: "SkyWatch Security Ltd | Commercial Security" },
    description:
      "Manned guarding, key holding, mobile patrols and site security across Luton, Bedfordshire, Hertfordshire and Greater London."
  },
  "/"
);

export { HomePage as default, metadata };
