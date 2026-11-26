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

const metadata = {
  title: "Accreditation & Compliance Assurance",
  description:
    "BS 7858 screening alignment, statutory health & safety protocols, UK GDPR controls, and £5,000,000 liability protection."
};

const items = [
  {
    Icon: Headphones,
    title: "24/7 Operations Control Desk",
    body: "Round-the-clock operational coordination from our Luton base supporting lone-worker welfare check-ins, alarm response dispatch, and emergency escalation across Bedfordshire, Hertfordshire, and London."
  },
  {
    Icon: FileCheck,
    title: "BS 7858 Screening Alignment",
    body: "Our recruitment procedures align with the BS 7858 standard for security screening. This includes 5-year checkable UK employment history, direct Home Office Right to Work verification, and criminal record disclosures prior to site deployment."
  },
  {
    Icon: Shield,
    title: "£5,000,000 Commercial Liability Cover",
    body: "We carry comprehensive Public Liability (£5,000,000) and Employers' Liability (£5,000,000) Insurance designed specifically for UK private security operations, providing full financial assurance to client stakeholders."
  },
  {
    Icon: HardHat,
    title: "Statutory Health & Safety Protocols",
    body: "Fully compliant with the Health and Safety at Work etc. Act 1974. Every assignment includes a pre-deployment site hazard survey, documented risk assessments, standard PPE issuance, and a mandatory Lone Worker Welfare check-in procedure."
  },
  {
    Icon: Lock,
    title: "UK GDPR & Data Protection Integrity",
    body: "All client site records, digital occurrence books (DOBs), visitor manifests, and CCTV logs are processed and retained in strict alignment with the UK GDPR and Data Protection Act 2018."
  },
  {
    Icon: ClipboardCheck,
    title: "Auditable Supervisory Governance",
    body: "Clear assignment instructions, NFC/RFID patrol waypoint scans, unannounced supervisor inspections, and structured monthly client service reviews provide auditable proof of service delivery."
  }
];

function AccreditationPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-w-0 flex-1 overflow-x-hidden bg-secondary focus:outline-none dark:bg-base">
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
              <li className="font-medium text-secondary">Accreditation</li>
            </ol>
          </nav>
          <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
            Accreditation & Compliance Assurance
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-sage md:mx-0">
            Clear, verifiable compliance standards for procurement teams, compliance managers, and insurer due
            diligence—delivered with complete transparency.
          </p>
        </div>
      </section>

      <section className="page-container page-align py-8">
        <Reveal>
          <div className="brand-card brand-card-interactive grid gap-4 p-6 text-left sm:grid-cols-2 sm:p-8">
            {[
              {
                value: "BS 7858",
                label: "Screening Alignment",
                hint: "5-year checkable UK employment history"
              },
              {
                value: "£5,000,000",
                label: "Liability Indemnity",
                hint: "Public and employers' liability insurance"
              }
            ].map(({ value, label, hint }) => (
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
