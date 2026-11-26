import Link from "next/link";
import { ArrowRight, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Page not found",
  description:
    "The page you requested could not be found. Explore SkyWatch Security Ltd services, request a quote, or contact our 24/7 operations desk.",
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-w-0 flex-1 overflow-x-hidden bg-secondary focus:outline-none dark:bg-base"
    >
      <section className="border-b border-sage/30 bg-base py-12 text-secondary lg:py-16">
        <div className="page-container page-align">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
            <ShieldAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Error 404</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-sage sm:text-lg md:mx-0">
            Sorry, we could not find the page you were looking for. It may have been moved or the
            address may have been typed incorrectly.
          </p>
        </div>
      </section>

      <section className="page-container py-12 lg:py-16">
        <div className="brand-card brand-card-interactive mx-auto max-w-3xl p-6 text-center sm:p-10">
          <h2 className="text-xl font-bold text-base dark:text-secondary sm:text-2xl">
            Where would you like to go next?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-base/80 dark:text-sage">
            Use one of the quick links below to return to our homepage, browse our commercial
            security services, request a quotation, or speak with our operations desk.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-[#141414] transition hover:bg-accent"
            >
              Home
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-sage/50 px-5 py-2.5 text-sm font-semibold text-base transition hover:border-primary hover:text-primary-text dark:text-secondary dark:hover:text-accent"
            >
              Services
            </Link>
            <Link
              href="/quote"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-sage/50 px-5 py-2.5 text-sm font-semibold text-base transition hover:border-primary hover:text-primary-text dark:text-secondary dark:hover:text-accent"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-sage/50 px-5 py-2.5 text-sm font-semibold text-base transition hover:border-primary hover:text-primary-text dark:text-secondary dark:hover:text-accent"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
