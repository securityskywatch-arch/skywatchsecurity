import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronRight,
  ClipboardList,
  FileText,
  HelpCircle,
  Layers,
  Shield,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { getServiceImage } from "@/lib/serviceImages";

function ServiceDetailLayout({ service, content }) {
  const { Icon } = service;
  const serviceImage = getServiceImage(service.slug);

  return (
    <Fragment>
      {/* Hero Header (Option A: Executive Visual Showcase) */}
      <section className="relative overflow-hidden border-b border-sage/30 bg-base py-12 text-secondary sm:py-16">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-[120px]"
          aria-hidden="true"
        />
        <div className="relative page-container page-align">
          <nav aria-label="Breadcrumb" className="text-sm text-sage">
            <ol className="flex min-w-0 flex-wrap items-center justify-center gap-1 md:justify-start">
              <li>
                <Link href="/" className="inline-flex min-h-[44px] items-center px-1 py-1 transition hover:text-accent sm:min-h-[24px] sm:py-0.5">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="flex items-center">
                <ChevronRight className="h-4 w-4 shrink-0 opacity-60" aria-hidden="true" />
              </li>
              <li>
                <Link href="/services" className="inline-flex min-h-[44px] items-center px-1 py-1 transition hover:text-accent sm:min-h-[24px] sm:py-0.5">
                  Services
                </Link>
              </li>
              <li aria-hidden="true" className="flex items-center">
                <ChevronRight className="h-4 w-4 shrink-0 opacity-60" aria-hidden="true" />
              </li>
              <li className="min-w-0 max-w-full break-words font-medium text-secondary">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid min-w-0 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left: Headline, Description & CTAs */}
            <div className="min-w-0 lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm sm:tracking-[0.2em]">
                {content.heroKicker}
              </p>
              <h1 className="mt-3 text-balance text-[1.65rem] font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                {content.heroTitle}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-sage sm:text-lg">
                {content.heroSubtitle}
              </p>
              <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap md:justify-start">
                <Link
                  href={`/quote?service=${service.slug}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-base shadow-lg transition hover:bg-accent md:w-auto"
                >
                  Request Assignment Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-sage/50 px-6 py-3 text-sm font-semibold text-secondary transition hover:border-accent hover:text-accent md:w-auto"
                >
                  Speak with Operations Desk
                </Link>
              </div>
            </div>

            {/* Right: Option A Visual Showcase Frame */}
            <div className="min-w-0 lg:col-span-5">
              {serviceImage ? (
                <div className="group relative aspect-[16/11] w-full overflow-hidden rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-base/90 to-black/80 shadow-2xl ring-1 ring-primary/20 transition duration-500 hover:border-primary/50">
                  <Image
                    src={serviceImage}
                    alt={service.title}
                    fill={true}
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent opacity-75" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-base/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent backdrop-blur-md shadow-md">
                      <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      SkyWatch Certified Service
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/40 bg-primary/20 text-accent">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-sage/25 bg-gradient-to-br from-base via-[#1a1915] to-[#241e12] p-6 shadow-xl ring-1 ring-primary/25 flex flex-col justify-between">
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/20 blur-2xl"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Service Specification
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/45 bg-primary/15 text-accent shadow-sm">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="relative my-auto py-3 space-y-2">
                    <div className="flex items-center gap-2.5 text-xs text-sage">
                      <Check className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                      <span>BS 7858 Vetted & Screened Personnel</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-sage">
                      <Check className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                      <span>£5,000,000 Commercial Liability Cover</span>
                    </div>
                  </div>

                  <div className="relative pt-4 border-t border-sage/20 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-secondary">
                        {service.title}
                      </p>
                      <p className="mt-0.5 text-xs text-sage">
                        Luton, Bedfordshire, Hertfordshire & London
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-accent uppercase tracking-wider">
                      24/7 Desk
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Strip */}
      <section className="border-b border-sage/20 bg-secondary/80 py-5 dark:bg-base/50">
        <div className="page-container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm font-medium text-base/80 dark:text-sage sm:text-left">
            BS 7858 Vetting Alignment · £5,000,000 Liability Cover · 24/7 Operations Desk
          </p>
          <Link
            href="/standards"
            className="inline-flex min-h-[44px] items-center py-1.5 text-sm font-semibold text-primary-text transition hover:text-[#5c3d06] sm:min-h-[24px] sm:py-1 dark:text-primary dark:hover:text-accent"
          >
            Review Operating Standards →
          </Link>
        </div>
      </section>

      {/* Part 1: Operational Challenge & Risk Mitigation */}
      {content.problemSolved && (
        <section className="border-b border-sage/20 bg-base/[0.02] py-14 dark:bg-secondary/[0.04]">
          <div className="page-container page-align">
            <Reveal>
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-primary-text dark:text-amber-400">
                <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                <span>Risk Assessment & Site Vulnerabilities</span>
              </div>
              <h2 className="mt-2 text-2xl font-bold text-base dark:text-secondary sm:text-3xl">
                {content.problemSolved.title}
              </h2>
              <p className="mt-4 max-w-4xl leading-relaxed text-base/85 dark:text-sage">
                {content.problemSolved.body}
              </p>
              <div className="mt-8 rounded-xl border border-sage/30 bg-base/[0.03] p-6 dark:border-sage/20 dark:bg-secondary/[0.05]">
                <h3 className="text-base font-semibold text-base dark:text-secondary">
                  Primary vulnerabilities addressed on site:
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {content.problemSolved.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-base/80 dark:text-sage">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-primary-text dark:text-amber-400">
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Part 2: Deployment Model */}
      {content.deploymentModel && (
        <section className="py-16">
          <div className="page-container page-align">
            <Reveal>
              <div className="text-center md:text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-text dark:text-accent">
                  Structured Mobilisation
                </p>
                <h2 className="mt-2 text-2xl font-bold text-base dark:text-secondary sm:text-3xl">
                  {content.deploymentModel.title}
                </h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-base/75 dark:text-sage">
                  {content.deploymentModel.intro}
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {content.deploymentModel.steps.map((st) => (
                <Reveal key={st.step}>
                  <div className="brand-card brand-card-interactive flex h-full flex-col p-6">
                    <span className="text-2xl font-black text-primary-text dark:text-accent/80">
                      {st.step}
                    </span>
                    <h3 className="mt-3 text-base font-semibold text-base dark:text-secondary">
                      {st.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-base/75 dark:text-sage">
                      {st.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Part 3: What Is Included In Your Agreement */}
      {content.whatIsIncluded && (
        <section className="border-y border-sage/20 bg-secondary/60 py-16 dark:bg-base/40">
          <div className="page-container page-align">
            <Reveal>
              <div className="text-center md:text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-text dark:text-accent">
                  Contract Deliverables
                </p>
                <h2 className="mt-2 text-2xl font-bold text-base dark:text-secondary sm:text-3xl">
                  {content.whatIsIncluded.title}
                </h2>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.whatIsIncluded.items.map((item) => (
                <Reveal key={item.title}>
                  <div className="brand-card brand-card-interactive flex h-full gap-4 p-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                      <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-base dark:text-secondary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-base/75 dark:text-sage">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Part 4: Target Commercial Sectors */}
      {content.sectorsServed && (
        <section className="py-16">
          <div className="page-container page-align">
            <Reveal>
              <div className="text-center md:text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-text dark:text-accent">
                  Operational Experience
                </p>
                <h2 className="mt-2 text-2xl font-bold text-base dark:text-secondary sm:text-3xl">
                  {content.sectorsServed.title}
                </h2>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {content.sectorsServed.sectors.map((sec) => (
                <Reveal key={sec.name}>
                  <div className="brand-card brand-card-interactive flex h-full flex-col p-6">
                    <h3 className="text-base font-semibold text-base dark:text-secondary">
                      {sec.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-base/75 dark:text-sage">
                      {sec.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Part 5: Pricing Factors & Commercial Transparency */}
      {content.pricingFactors && (
        <section className="border-t border-sage/20 bg-base py-16 text-secondary">
          <div className="page-container page-align">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                Transparent Economics
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                {content.pricingFactors.title}
              </h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-sage">
                {content.pricingFactors.body}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {content.pricingFactors.factors.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-sage/30 bg-secondary/5 p-4 text-sm text-sage"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-base shadow-md transition hover:bg-accent"
                >
                  Get an Itemised Quotation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Part 6: Deep Commercial FAQs */}
      {content.faqs && content.faqs.length > 0 && (
        <section className="border-t border-sage/20 bg-secondary py-16 dark:bg-base">
          <div className="page-container page-align">
            <Reveal>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-text dark:text-accent">
                <HelpCircle className="h-4 w-4" aria-hidden="true" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="mt-2 text-2xl font-bold text-base dark:text-secondary sm:text-3xl">
                Commercial Contract & Deployment FAQs
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-base/75 dark:text-sage">
                Straight answers to procurement, staffing, supervision, and operational compliance queries.
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              {content.faqs.map((faq) => (
                <Reveal key={faq.question}>
                  <details className="group rounded-xl border border-sage/40 bg-base/5 open:border-primary/40 dark:border-sage/30 dark:bg-secondary/5">
                    <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-base dark:text-secondary [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center justify-between gap-4">
                        {faq.question}
                        <ChevronRight className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-90" aria-hidden="true" />
                      </span>
                    </summary>
                    <div className="border-t border-sage/25 px-5 pb-4 pt-3 text-sm leading-relaxed text-base/80 dark:text-sage">
                      {faq.answer}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final Action & Navigation */}
      <section className="border-t border-sage/20 py-12">
        <div className="page-container flex flex-col items-center justify-between gap-6 sm:flex-row page-align">
          <Link
            href="/services"
            className="inline-flex min-h-[44px] items-center py-1.5 text-sm font-semibold text-primary-text hover:text-[#5c3d06] sm:min-h-[24px] sm:py-1 dark:text-primary dark:hover:text-accent"
          >
            ← Back to all services
          </Link>
          <div className="flex gap-4">
            <Link
              href="/quote"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-base transition hover:bg-accent"
            >
              Request a Site Quote
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-sage/50 px-5 py-2.5 text-sm font-semibold text-base transition hover:border-primary dark:text-secondary"
            >
              Contact Operations
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export { ServiceDetailLayout };
