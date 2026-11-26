import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { HeroQuoteCard } from "@/components/home/HeroQuoteCard";
import { siteContact } from "@/lib/siteContact";

const heroServices = [
  "Static Site & Perimeter Guarding",
  "Key Holding & Alarm Response",
  "Mobile Vehicle Patrols",
  "Construction Compound Security",
  "Concierge Security & Access Desks",
  "Corporate Headquarters Security",
  "CCTV & Remote Surveillance",
  "Logistics Hub & Warehouse Security",
];

const successMessage =
  "Quote request sent successfully. Our operations desk will contact you shortly.";
const errorMessage = `Could not send request right now. Please call our 24/7 desk directly on ${siteContact.phone.display}.`;

function resolveHeroInitialStatus(heroSent) {
  if (heroSent === "1") {
    return { type: "success", message: successMessage };
  }
  if (heroSent === "0") {
    return { type: "error", message: errorMessage };
  }
  return null;
}

function Hero({ heroSent }) {
  const initialStatus = resolveHeroInitialStatus(heroSent);

  return (
    <section className="relative overflow-hidden border-b border-sage/25 bg-secondary px-4 pb-14 pt-8 dark:border-white/[0.06] dark:bg-[#0c0c0c] sm:px-6 sm:pb-16 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#faf6ec_0%,#f3ecdc_42%,#efe6d4_100%)] dark:bg-[linear-gradient(180deg,#141414_0%,#0c0c0c_45%,#0a0a0a_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-70 dark:opacity-100"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 85% 55% at 100% 0%, rgba(196,129,0,0.14), transparent 52%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(255,204,0,0.08), transparent 48%)",
        }}
      />
      <div className="relative z-[1] mx-auto w-full min-w-0 max-w-page">
        <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-6 xl:gap-8">
          <div className="min-w-0 max-w-xl lg:max-w-none">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/[0.12] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5c3d06] dark:text-accent sm:text-[11px]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full motion-safe:animate-ping motion-reduce:animate-none rounded-full bg-accent opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Commercial Enquiries Open
            </div>
            <h1 className="text-balance text-[1.625rem] font-bold leading-snug tracking-tight text-base sm:text-3xl sm:leading-snug lg:text-[2.125rem] lg:leading-tight xl:text-[2.25rem] dark:text-white">
              Professional Site & Commercial Security Across Bedfordshire & London
            </h1>
            <p className="mt-4 text-base leading-relaxed text-base/75 sm:mt-5 sm:max-w-[34rem] sm:text-[1.0625rem] sm:leading-relaxed lg:max-w-none lg:text-[1.085rem] xl:pr-4 dark:text-[#c4bfb4]">
              Vigilance, Integrity, and Disciplined Site Protection. Dedicated static guarding, mobile
              patrols, key holding, and CCTV monitoring for commercial and industrial sites.
            </p>
            <p className="mt-3 text-xs font-medium text-[#5c574c] sm:text-[13px] dark:text-[#a69f8f]">
              Covering Luton, Bedfordshire, Hertfordshire, and Greater London.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-7 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-2 lg:gap-x-12">
              {heroServices.map((item) => (
                <li
                  key={item}
                  className="flex min-w-0 items-center gap-2.5 text-sm font-medium text-base/85 dark:text-[#e8e4dc]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/55 bg-white text-[#5c3d06] shadow-[0_1px_2px_rgba(0,0,0,0.06)] dark:border-transparent dark:bg-primary/25 dark:text-accent dark:shadow-none">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/services"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-sage/50 bg-base/[0.04] px-5 py-2.5 text-sm font-semibold text-base transition hover:border-primary/50 hover:bg-base/[0.07] hover:text-primary-text dark:border-white/25 dark:bg-white/[0.06] dark:text-white dark:hover:border-accent/60 dark:hover:bg-white/[0.1] dark:hover:text-accent"
              >
                Explore All 18 Services
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                href="/quote"
                className="inline-flex min-h-[44px] items-center justify-center text-sm font-semibold text-[#5c574c] underline decoration-[#5c3d06]/35 underline-offset-[5px] transition hover:text-[#3d2904] sm:min-h-0 sm:py-2.5 dark:text-[#b5ae9e] dark:decoration-white/20 dark:hover:text-accent"
              >
                Detailed Tender Form
              </Link>
            </div>
          </div>
          <HeroQuoteCard initialStatus={initialStatus} />
        </div>
      </div>
    </section>
  );
}

export { Hero, resolveHeroInitialStatus };