import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import {
  Award,
  ChevronRight,
  ClipboardCheck,
  FileText,
  MapPinned,
  Radio,
  Shield,
  Users
} from "lucide-react";
import { Reveal } from "@/components/motion/scroll-reveal";
import { withCanonical } from "@/lib/pageMetadata";
import { breadcrumbList, SITE } from "@/lib/schema";

const metadata = withCanonical({
  title: "Why Choose Us",
  description:
    "Assignment instructions, patrol verification, supervisory visits and reporting across Luton and the Home Counties."
}, "/why-choose-us");

function WhyChooseUsPage() {
  const breadcrumbsLd = breadcrumbList([
    { name: "Home", item: SITE },
    { name: "Why Choose Us", item: `${SITE}/why-choose-us` }
  ]);

  return (
    <main id="main-content" tabIndex={-1} className="min-w-0 flex-1 overflow-x-hidden bg-secondary focus:outline-none dark:bg-base">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
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
              <li className="font-medium text-secondary">Why Choose Us</li>
            </ol>
          </nav>
          <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose SkyWatch Security Ltd
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-sage md:mx-0">
            Commercial security built for buyers who require active field supervision, verified guard attendance,
            and complete operational accountability across every shift.
          </p>
        </div>
      </section>

      <section className="page-container page-align py-12 lg:py-16">
        <Reveal>
          <div className="brand-card brand-card-interactive p-6 text-left sm:p-8">
            <h2 className="text-2xl font-bold text-base dark:text-secondary">
              What Commercial Buyers Expect & What We Deliver
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-base/80 dark:text-sage">
              Prior to awarding a commercial security contract, facilities managers and procurement directors
              need confidence in statutory compliance, staff vetting, supervisory frequency, and reporting
              integrity. Our operating framework delivers exactly that.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Direct UK Right to Work verification across all deployed security officers",
                "Employment history, references, and criminal disclosure checks before deployment",
                "Electronic NFC/RFID checkpoint patrol tags providing timestamped audit trails",
                "£5,000,000 Public and Employers' Liability Insurance specifically tailored for security risks",
                "Unannounced daytime and nocturnal site audits conducted by mobile field supervisors",
                "Dedicated 24/7 operations control desk for lone-worker welfare and rapid emergency escalation"
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 rounded-lg border border-primary/25 bg-primary/[0.06] px-3 py-2 text-sm text-base/85 dark:border-primary/30 dark:bg-primary/[0.12] dark:text-sage"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="brand-card brand-card-interactive flex gap-4 p-6 text-left sm:gap-5 sm:p-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/5 text-primary">
                <Award className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl font-semibold text-base dark:text-secondary">Our Operating Motto</h2>
                <p className="mt-3 leading-relaxed text-base/85 dark:text-sage">
                  We are committed to delivering dependable protection that protects your people, premises,
                  and corporate reputation through disciplined execution and constant vigilance.
                </p>
                <blockquote className="mt-4 border-l-4 border-primary pl-4 italic text-base/90 dark:text-secondary/90">
                  “Vigilance, Integrity, and Disciplined Site Protection.”
                </blockquote>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="brand-card brand-card-interactive flex gap-4 p-6 text-left sm:gap-5 sm:p-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/5 text-primary">
                <Shield className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl font-semibold text-base dark:text-secondary">
                  Documented Post Orders & Site Handovers
                </h2>
                <p className="mt-3 leading-relaxed text-base/85 dark:text-sage">
                  Handover protocols, post orders, and occurrence books are documented for every
                  assignment to support operational audits, client assurance, and insurer review.
                </p>
                <p className="mt-3 text-sm text-base/75 dark:text-sage">
                  Every shift operates under clear site-specific Assignment Instructions and direct
                  supervisory oversight.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Reveal delay={0.06}>
            <div className="brand-card brand-card-interactive h-full p-6 text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 text-primary">
                <Users className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-base dark:text-secondary">
                Ethical Screening & Vetting
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-base/80 dark:text-sage">
                UK Right to Work, employment history, references, and criminal disclosure checks before
                deployment on client sites.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.09}>
            <div className="brand-card brand-card-interactive h-full p-6 text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 text-primary">
                <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-base dark:text-secondary">
                Rigorous Mobilisation Framework
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-base/80 dark:text-sage">
                Site risk surveys, client-approved Assignment Instructions (AIs), key management protocols, and
                structured relief handovers prepared prior to contract launch.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="brand-card brand-card-interactive h-full p-6 text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 text-primary">
                <Radio className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-base dark:text-secondary">
                Proactive Field Supervision
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-base/80 dark:text-sage">
                Unannounced visits by regional mobile supervisors, random patrol log checks, lone-worker safety
                calls, and rapid escalation support on critical incidents.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.14}>
            <div className="brand-card brand-card-interactive flex gap-4 p-6 text-left sm:gap-5 sm:p-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/5 text-primary">
                <FileText className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl font-semibold text-base dark:text-secondary">
                  Auditable Digital Reporting
                </h2>
                <p className="mt-3 leading-relaxed text-base/85 dark:text-sage">
                  Clear, factual reports containing exact timestamps, patrol waypoints, visitor entries, and
                  incident logs designed for client review meetings, insurer compliance, and risk assessments.
                </p>
                <p className="mt-3 text-sm text-base/75 dark:text-sage">
                  Daily digital occurrence logs delivered electronically, with immediate incident notices when
                  events require escalation.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="brand-card brand-card-interactive flex gap-4 p-6 text-left sm:gap-5 sm:p-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/5 text-primary">
                <MapPinned className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl font-semibold text-base dark:text-secondary">
                  Operating Areas & Focus
                </h2>
                <p className="mt-3 leading-relaxed text-base/85 dark:text-sage">
                  We deploy security personnel across{" "}
                  <strong className="font-semibold text-base dark:text-secondary">
                    Luton, Dunstable, Bedford, Milton Keynes, Watford, St Albans, Hemel Hempstead, Stevenage
                  </strong>
                  , and{" "}
                  <strong className="font-semibold text-base dark:text-secondary">
                    Greater London (M1 corridor)
                  </strong>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="brand-card-cta brand-card-interactive mt-8 px-6 py-8 text-center sm:mt-10 sm:px-10 sm:py-10">
            <p className="text-sm font-semibold text-[#5c3d06] dark:text-accent">Request a Proposal</p>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-base/80 dark:text-sage">
              Share your site profile, required coverage hours, and risk priorities. Our commercial team will
              return an itemised proposal with clear mobilisation milestones.
            </p>
            <Link
              href="/quote"
              className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-bold text-base transition hover:bg-accent"
            >
              Request a Quotation
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export { WhyChooseUsPage as default, metadata };
