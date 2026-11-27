import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import {
  BookOpen,
  Eye,
  FileWarning,
  Headphones,
  Shirt,
  Smartphone
} from "lucide-react";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { withCanonical } from "@/lib/pageMetadata";
import {
  BS_7499_STATIC_GUARDING,
  BS_7858_SCREENING,
  BS_7984_KEY_HOLDING
} from "@/lib/siteContact";

const metadata = withCanonical({
  title: "Operating Standards on Site",
  description:
    "Uniforms, assignment instructions, patrol scans, incident logs and supervision on SkyWatch assignments."
}, "/standards");

const blocks = [
  {
    Icon: Shirt,
    title: "Uniform & Professional Presentation",
    body: "Dress standards tailored to your site environment: crisp black corporate attire for corporate front-of-house reception, or British Standard high-visibility outerwear, safety boots, and PPE for construction yards and logistics docks."
  },
  {
    Icon: Eye,
    title: "Proactive Supervisory Spot-Checks",
    body: "Unannounced visits by regional mobile supervisors during day and nocturnal shifts to verify guard vigilance, uniform presentation, occurrence log accuracy, and adherence to site-specific post orders."
  },
  {
    Icon: BookOpen,
    title: "Site Assignment Instructions (AIs)",
    body: "Every assignment operates under agreed written Assignment Instructions detailing gatehouse entry rules, delivery protocols, key control, lone-worker check-in intervals, and emergency contact escalation trees."
  },
  {
    Icon: Smartphone,
    title: "Electronic Patrol Waypoint Tagging",
    body: "Guards scan checkpoint NFC/RFID tags at critical perimeter points, plant rooms, and boundary gates during patrol rounds, producing timestamped records you can review and audit."
  },
  {
    Icon: FileWarning,
    title: "Factual Incident & Occurrence Logging",
    body: "Prompt, objective incident reports documenting exact timelines, parties involved, actions taken, and police CAD references where emergency services are called. Daily occurrence books provided electronically."
  },
  {
    Icon: Headphones,
    title: "24/7 Operations Desk Coordination",
    body: "Direct 24/7 access to our central operations team for emergency cover surges, alarm activations, lone-worker welfare calls, and immediate out-of-hours incident coordination."
  }
];

function StandardsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 bg-secondary focus:outline-none dark:bg-base">
      <section className="border-b border-sage/30 bg-base px-4 py-16 text-secondary sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Our Operating Standards
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Commercial Guarding Standards on Site
            </h1>
            <p className="mt-6 text-lg text-sage">
              Clear, practical standards governing guard appearance, patrol discipline, incident reporting,
              and supervisory oversight—ensuring reliable protection on every shift.
            </p>
          </Reveal>
        </div>
      </section>

      <StaggerSection className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map(({ Icon, title, body }) => (
            <StaggerItem key={title}>
              <article className="brand-card brand-card-interactive h-full p-6 transition hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-base dark:text-secondary">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-base/80 dark:text-sage">{body}</p>
              </article>
            </StaggerItem>
          ))}
        </div>
      </StaggerSection>

      <section className="border-t border-sage/20 px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-bold text-base dark:text-secondary">
              Working methods
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-base/80 dark:text-sage">
              <li>{BS_7858_SCREENING}.</li>
              <li>{BS_7984_KEY_HOLDING}.</li>
              <li>{BS_7499_STATIC_GUARDING}.</li>
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-sage/20 px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <div className="brand-card brand-card-interactive mx-auto max-w-3xl p-8 text-center">
            <h2 className="text-xl font-bold text-base dark:text-secondary">
              Corporate Governance & Legal Policies
            </h2>
            <p className="mt-3 text-sm text-base/80 dark:text-sage">
              Our operating standards operate alongside published corporate policies covering UK GDPR data
              protection, health and safety, modern slavery, and terms of commercial engagement.
            </p>
            <Link
              href="/about/policies"
              className="mt-4 inline-flex min-h-[44px] items-center py-1.5 text-sm font-semibold text-primary-text hover:text-[#5c3d06] sm:min-h-[24px] sm:py-1 dark:text-primary dark:hover:text-accent"
            >
              Review Company Policies →
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export { StandardsPage as default, metadata };
