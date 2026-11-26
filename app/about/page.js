import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  ClipboardCheck,
  HeartHandshake,
  MapPin,
  Users
} from "lucide-react";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { serviceNavItems } from "@/lib/navigation";
import { withCanonical } from "@/lib/pageMetadata";
import { aboutFaqPage, breadcrumbList, SITE } from "@/lib/schema";

const metadata = withCanonical({
  title: "About Us | Luton Commercial Security",
  description:
    "Commercial guarding, key holding and mobile patrols from Luton across Bedfordshire, Hertfordshire and Greater London."
}, "/about");

const pillars = [
  {
    Icon: ClipboardCheck,
    title: "Accountable Site Handovers",
    text: "Digital occurrence logs, electronic patrol waypoint scans, and unannounced supervisory site audits you can verify."
  },
  {
    Icon: HeartHandshake,
    title: "Professional Front-Line Presence",
    text: "Officers trained in calm, confident communication—protecting your premises without alienating staff, visitors, or clients."
  },
  {
    Icon: Building2,
    title: "Commercial & Industrial Focus",
    text: "Specialised security procedures for corporate offices, distribution centres, industrial yards, and construction compounds."
  }
];

const stats = [
  { value: "24/7", label: "Operations Desk & Control" },
  { value: "15", label: "Commercial Security Services" },
  { value: "£5m", label: "Commercial Liability Insurance" }
];

const aboutFaqs = [
  {
    q: "What security services does SkyWatch Security deliver?",
    a: "We deliver 15 commercial services across Luton, Bedfordshire, Hertfordshire and Greater London, including static site guarding, key holding and alarm response, mobile patrols, construction site security, concierge and reception security, corporate office security, CCTV monitoring, event security, warehouse security, business park security, retail security, door supervision, campus security, dog handling and close protection."
  },
  {
    q: "Where is SkyWatch Security based and which areas do you serve?",
    a: "SkyWatch Security Ltd, 289 Park Street, Luton, Bedfordshire LU1 3HH, United Kingdom. There is no walk-in office—contact us by phone, WhatsApp, email, or the online forms. We serve Luton, Bedfordshire, Hertfordshire, and Greater London."
  },
  {
    q: "How do you ensure service consistency and guard vigilance?",
    a: "We implement structured Assignment Instructions, electronic NFC/RFID patrol checkpoint tagging, daily occurrence reporting, and frequent unannounced visits by regional mobile supervisors."
  }
];

function AboutPage() {
  const breadcrumbsLd = breadcrumbList([
    { name: "Home", item: SITE },
    { name: "About Us", item: `${SITE}/about` }
  ]);
  const faqLd = aboutFaqPage(aboutFaqs);

  return (
    <main id="main-content" tabIndex={-1} className="flex-1 bg-secondary focus:outline-none dark:bg-base">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <section className="relative overflow-hidden border-b border-sage/30 bg-base py-16 text-secondary lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 80% 0%, rgba(196,129,0,0.4), transparent), radial-gradient(ellipse 40% 40% at 10% 100%, rgba(255,204,0,0.1), transparent)"
          }}
        />
        <div className="relative page-container page-align">
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
              <li className="font-medium text-secondary">About Us</li>
            </ol>
          </nav>
          <Reveal>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              About SkyWatch Security Ltd
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-5xl md:max-w-none">
              Disciplined Commercial Security Built on Vigilance and Accountability.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-sage md:mx-0">
              SkyWatch Security Ltd (Company No. 16520149) is a UK commercial security provider.
              Our registered address is in Luton, and there is no walk-in office. We deploy security personnel to safeguard commercial premises,
              industrial logistics compounds, construction developments, and corporate offices across
              Bedfordshire, Hertfordshire, and Greater London.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <Reveal key={s.label} delay={0.05}>
                <div className="brand-card-dark px-5 py-4">
                  <p className="text-2xl font-bold text-accent">{s.value}</p>
                  <p className="mt-1 text-sm text-sage">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-container py-16 page-align lg:py-20">
        <div className="grid gap-12 text-left lg:grid-cols-2 lg:items-start">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-base dark:text-secondary sm:text-3xl">
              Who We Are & How We Operate
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-base/85 dark:text-sage">
              <p>
                SkyWatch Security was established to provide commercial property managers, operations
                directors, and site facilities teams with a reliable security partner who delivers what is
                promised on paper: punctual, smartly turned-out guards, proactive supervisory oversight, and
                immediate reporting transparency.
              </p>
              <p>
                Before assigning any officer to a commercial post, we conduct an on-site security survey and
                draft bespoke Assignment Instructions (AIs). These instructions establish exact gate
                protocols, visitor logging steps, health and safety obligations, and emergency escalation
                trees so officers operate with clear operational purpose from shift one.
              </p>
              <p>
                With £5,000,000 commercial liability coverage, lone-worker welfare monitoring,
                and mobile supervision across Luton, Bedfordshire, Hertfordshire, and Greater London,
                stakeholders can review attendance and incident reports.
              </p>
            </div>
            <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap md:justify-start">
              <Link
                href="/standards"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-base transition hover:bg-accent md:w-auto"
              >
                Our Standards
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/why-choose-us"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-sage/45 px-5 py-2.5 text-sm font-semibold text-primary-text transition hover:border-primary dark:text-primary md:w-auto"
              >
                Why Choose SkyWatch
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="brand-card brand-card-interactive p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/40 text-primary">
                  <Users className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-base dark:text-secondary">
                  Ethical, Vetted & Accountable Workforce
                </h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-base/80 dark:text-sage">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  UK Right to Work checks before deployment
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Employment history, references, and criminal disclosure checks before deployment
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Scheduled welfare check-ins and lone-worker tracking via our 24/7 operations desk
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Pay at or above the UK National Living Wage, with written employment contracts
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <StaggerSection className="border-y border-sage/20 bg-base/[0.04] py-16 dark:border-sage/25 dark:bg-secondary/[0.06]">
        <div className="page-container page-align">
          <StaggerItem>
            <h2 className="text-2xl font-bold text-base dark:text-secondary sm:text-3xl">
              Commercial Security Services Catalogue
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-sm text-base/75 dark:text-sage md:mx-0">
              Explore our complete 18-service portfolio, with detailed deployment models and scope of works.
            </p>
          </StaggerItem>
          <ul className="mt-10 grid grid-cols-1 gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
            {serviceNavItems.map((item) => (
              <StaggerItem key={item.href} as="li">
                <Link
                  href={item.href}
                  className="brand-card brand-card-interactive flex h-full items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-base transition hover:text-primary-text dark:text-secondary dark:hover:text-accent"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 opacity-60" aria-hidden="true" />
                </Link>
              </StaggerItem>
            ))}
          </ul>
        </div>
      </StaggerSection>

      {/* Operating Areas */}
      <section className="page-container py-16 page-align">
        <div className="grid gap-10 text-left lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/40 text-primary">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-base dark:text-secondary">
                Operating Areas & Regional Reach
              </h2>
            </div>
            <p className="mt-4 leading-relaxed text-base/85 dark:text-sage">
              SkyWatch Security works across Luton, Bedfordshire, Hertfordshire, and Greater London.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Luton",
                "Dunstable",
                "Bedford",
                "Milton Keynes",
                "Watford",
                "St Albans",
                "Hemel Hempstead",
                "Stevenage",
                "Greater London"
              ].map((town) => (
                <span
                  key={town}
                  className="rounded-full border border-sage/40 bg-base/5 px-3 py-1 text-xs font-medium text-base/85 dark:border-sage/30 dark:bg-secondary/5 dark:text-secondary"
                >
                  {town}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="brand-card brand-card-interactive p-6 sm:p-8">
              <h3 className="text-lg font-bold text-base dark:text-secondary">
                Need Fast Deployment on Your Site?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-base/80 dark:text-sage">
                Contact our commercial desk today to schedule a site security assessment or discuss relief cover.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/quote"
                  className="rounded-md bg-primary px-5 py-2.5 text-center text-sm font-bold text-base transition hover:bg-accent"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md border border-sage/50 px-5 py-2.5 text-center text-sm font-semibold text-base transition hover:border-primary dark:text-secondary"
                >
                  Contact Desk
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-sage/20 bg-secondary/50 py-16 dark:bg-base/50">
        <div className="page-container page-align">
          <Reveal>
            <h2 className="text-2xl font-bold text-base dark:text-secondary sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-base/75 dark:text-sage">
              Key operational facts regarding our company structure, standards, and service deployment.
            </p>
          </Reveal>
          <div className="mt-8 space-y-3">
            {aboutFaqs.map((faq) => (
              <Reveal key={faq.q}>
                <details className="group rounded-xl border border-sage/40 bg-base/5 open:border-primary/40 dark:border-sage/30 dark:bg-secondary/5">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export { AboutPage as default, metadata };
