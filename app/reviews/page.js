import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { ArrowRight, FileCheck, ShieldCheck } from "lucide-react";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { StarRating } from "@/components/ui/StarRating";
import { reviews } from "@/lib/reviews";

const metadata = {
  title: "Client References & Assurance | SkyWatch Security Ltd",
  description:
    "Commercial client references, assignment case studies, and compliance audits provided directly during formal procurement tenders."
};

function ReviewsPage() {
  const hasReviews = reviews && reviews.length > 0;

  return (
    <main id="main-content" tabIndex={-1} className="flex-1 bg-secondary focus:outline-none dark:bg-base">
      <section className="border-b border-sage/30 bg-base px-4 py-12 text-secondary sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Client Assurance & References
          </h1>
          <p className="mt-3 text-sage">
            Verifiable performance records for facilities managers and commercial procurement teams.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:px-8">
        {hasReviews ? (
          <StaggerSection>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r, i) => (
                <StaggerItem key={i}>
                  <blockquote className="brand-card brand-card-interactive group relative flex h-full flex-col justify-between p-6">
                    <div>
                      <StarRating value={r.rating ?? 5} />
                      <p className="mt-4 text-sm leading-relaxed text-base/90 dark:text-sage">
                        “{r.quote}”
                      </p>
                    </div>
                    <footer className="mt-5 border-t border-sage/25 pt-4 dark:border-sage/20">
                      <p className="font-semibold text-base dark:text-secondary">{r.name}</p>
                      <p className="text-xs text-base/65 dark:text-sage">
                        {r.role}
                        {r.company ? ` · ${r.company}` : ""}
                      </p>
                      {r.date && (
                        <p className="mt-1 text-[11px] text-[#5c574c] dark:text-sage/85">{r.date}</p>
                      )}
                    </footer>
                  </blockquote>
                </StaggerItem>
              ))}
            </div>
          </StaggerSection>
        ) : (
          <Reveal>
            <div className="brand-card brand-card-interactive mx-auto max-w-2xl p-8 text-center sm:p-12">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary">
                <FileCheck className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-base dark:text-secondary">
                Commercial Procurement & Tender References
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-base/80 dark:text-sage">
                In accordance with commercial client confidentiality agreements, written testimonials and
                named assignment references are provided directly to prospective buyers during the formal
                site survey and tender evaluation process.
              </p>
              <div className="mt-6 rounded-xl border border-sage/30 bg-base/[0.04] p-4 text-xs leading-relaxed text-base/70 dark:border-sage/20 dark:text-sage">
                <ShieldCheck className="mx-auto mb-1 h-5 w-5 text-accent" aria-hidden="true" />
                Verified site audits, shift occurrence logs, and client point-of-contact details are
                available upon execution of standard mutual NDA.
              </div>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/quote"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-base transition hover:bg-accent"
                >
                  Request Tender References
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-sage/50 px-6 py-2.5 text-sm font-semibold text-base transition hover:border-primary dark:text-secondary"
                >
                  Contact Operations Desk
                </Link>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </main>
  );
}

export { ReviewsPage as default, metadata };
