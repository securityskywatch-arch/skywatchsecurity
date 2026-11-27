import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  ClipboardCheck,
  FileCheck,
  HardHat,
  Headphones,
  Lock,
  Shield
} from "lucide-react";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { withCanonical } from "@/lib/pageMetadata";
import { aboutFaqPage, breadcrumbList, SITE } from "@/lib/schema";
import {
  BS_7499_STATIC_GUARDING,
  BS_7858_SCREENING,
  BS_7984_KEY_HOLDING,
  publicLiabilityCoverText
} from "@/lib/siteContact";

const publicLiability = publicLiabilityCoverText();

const metadata = withCanonical({
  title: "Compliance and Operating Practices",
  description: publicLiability
    ? `SkyWatch Security Ltd: 24/7 operations desk, pre-deployment checks, ${publicLiability}, health and safety surveys, and UK GDPR handling.`
    : "SkyWatch Security Ltd: 24/7 operations desk, pre-deployment checks, health and safety surveys, and UK GDPR handling."
}, "/accreditation");

const items = [
  {
    Icon: Headphones,
    title: "24/7 Operations Desk",
    body: "Phone coordination for lone-worker welfare check-ins, alarm response dispatch, and emergency escalation across Luton, Bedfordshire, Hertfordshire, and Greater London."
  },
  {
    Icon: FileCheck,
    title: "Pre-Deployment Checks",
    body: "Before an officer is deployed we check UK Right to Work, employment history, references, and criminal disclosure."
  },
  ...(publicLiability
    ? [
        {
          Icon: Shield,
          title: publicLiability,
          body: publicLiability + "."
        }
      ]
    : []),
  {
    Icon: HardHat,
    title: "Health and Safety on Assignment",
    body: "SkyWatch Security Ltd recognises its responsibilities under the Health and Safety at Work etc. Act 1974. A new assignment starts with a site hazard survey, written notes in the Assignment Instructions, PPE for the site, and scheduled lone-worker check-ins with the operations desk."
  },
  {
    Icon: Lock,
    title: "UK GDPR and Data Handling",
    body: "Client site records, digital occurrence books, visitor logs, and CCTV footage are handled in line with the UK GDPR, the Data Protection Act 2018, and our published data retention policy."
  },
  {
    Icon: ClipboardCheck,
    title: "Supervisory Checks You Can Review",
    body: "Written assignment instructions, NFC or RFID patrol scans, unannounced supervisor visits, and monthly client service reviews give a record of what happened on site."
  }
];

const insuranceFaqs = publicLiability
  ? [
      {
        q: "What public liability cover do you carry?",
        a: `${publicLiability}.`
      }
    ]
  : [];

const highlightStats = [
  {
    value: "24/7",
    label: "Operations Desk",
    hint: "Phone coordination for welfare checks and alarm dispatch"
  },
  ...(publicLiability
    ? [
        {
          value: publicLiability,
          label: "Public liability insurance",
          hint: publicLiability
        }
      ]
    : [])
];

function AccreditationPage() {
  const breadcrumbsLd = breadcrumbList([
    { name: "Home", item: SITE },
    { name: "Compliance and Operating Practices", item: `${SITE}/accreditation` }
  ]);
  const faqLd = aboutFaqPage(insuranceFaqs);

  return (
    <main id="main-content" tabIndex={-1} className="min-w-0 flex-1 overflow-x-hidden bg-secondary focus:outline-none dark:bg-base">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
      {faqLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      ) : null}
      <section className="border-b border-sage/30 bg-base py-12 text-secondary lg:py-16">
        <div className="page-container page-align">
          <nav aria-label="Breadcrumb" className="text-sm text-sage">
            <ol className="flex flex-wrap items-center justify-center gap-1 md:justify-start">
              <li>
                <Link href="/" className="inline-flex min-h-[44px] items-center px-1 py-1 transition hover:text-accent sm:min-h-[24px] sm:py-0.5">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="flex items-center">
                <ChevronRight className="h-4 w-4 shrink-0 opacity-60" aria-hidden="true" />
              </li>
              <li className="font-medium text-secondary">Compliance and Operating Practices</li>
            </ol>
          </nav>
          <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
            Compliance and Operating Practices
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-sage md:mx-0">
            How we run commercial security across Luton, Bedfordshire, Hertfordshire, and Greater London.
            Contact is by phone, WhatsApp, email, and the online forms.
          </p>
          <ul className="mx-auto mt-4 max-w-3xl space-y-1 text-base text-sage md:mx-0">
            <li>{BS_7858_SCREENING}.</li>
            <li>{BS_7984_KEY_HOLDING}.</li>
            <li>{BS_7499_STATIC_GUARDING}.</li>
          </ul>
        </div>
      </section>

      <section className="page-container page-align py-8">
        <Reveal>
          <div className={`brand-card brand-card-interactive grid gap-4 p-6 text-left sm:p-8 ${highlightStats.length > 1 ? "sm:grid-cols-2" : ""}`}>
            {highlightStats.map(({ value, label, hint }) => (
              <div
                key={label}
                className="rounded-lg border border-primary/25 bg-primary/[0.06] p-4 dark:border-primary/30 dark:bg-primary/[0.12]"
              >
                <p className="text-sm font-bold uppercase tracking-wide text-[#5c3d06] dark:text-accent">
                  {value}
                </p>
                <p className="mt-1 text-sm font-semibold text-base dark:text-secondary">{label}</p>
                <p className="mt-1 text-xs text-base/70 dark:text-sage">{hint}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <StaggerSection className="page-container page-align py-12 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ Icon, title, body }) => (
            <StaggerItem key={title}>
              <div className="brand-card h-full p-6 text-left">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/35 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-[#1a1a1a] dark:text-secondary">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]/85 dark:text-[#d8d3c8]">{body}</p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerSection>

      {insuranceFaqs.length > 0 ? (
        <section className="page-container page-align pb-4">
          <Reveal>
            <h2 className="text-2xl font-bold text-base dark:text-secondary sm:text-3xl">
              Insurance cover
            </h2>
            <div className="mt-6 space-y-3">
              {insuranceFaqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-sage/40 bg-base/5 open:border-primary/40 dark:border-sage/30 dark:bg-secondary/5"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-base dark:text-secondary [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {faq.q}
                      <ChevronRight className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-90" aria-hidden="true" />
                    </span>
                  </summary>
                  <div className="border-t border-sage/25 px-5 pb-4 pt-3 text-sm leading-relaxed text-base/80 dark:text-sage">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </Reveal>
        </section>
      ) : null}

      <section className="page-container pb-14 page-align">
        <Reveal>
          <div className="brand-card-cta brand-card-interactive px-6 py-10 sm:px-10">
            <h2 className="text-2xl font-bold text-base dark:text-secondary sm:text-3xl">
              Commercial Tender & Compliance Due Diligence
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-base/80 dark:text-sage md:mx-0">
              Procurement and facilities management teams can request our company insurance certificates,
              standard Assignment Instructions template, and health & safety documentation for their vendor
              onboarding process.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 sm:justify-center md:justify-start">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-base transition hover:bg-accent"
              >
                Contact Compliance Desk
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/about/policies"
                className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-sage/50 px-5 py-2.5 text-sm font-semibold text-primary-text transition hover:border-primary dark:text-primary"
              >
                Review Company Policies
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export { AccreditationPage as default, metadata };
