import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  MapPin,
  Radio,
  Sparkles
} from "lucide-react";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/lib/services";

const metadata = {
  title: "Commercial Security Services | SkyWatch Security Ltd",
  description:
    "Static guarding, key holding, mobile patrols, and compound security across Luton, Bedfordshire, and London."
};

const highlights = [
  {
    Icon: Clock,
    title: "Disciplined Shift Handovers",
    text: "Punctual relief shifts, verified attendance, and electronic daily occurrence logging (DOB) sent directly to your desk."
  },
  {
    Icon: Radio,
    title: "Active Field Supervision",
    text: "Mobile patrol supervisors conduct unannounced daytime and nocturnal site audits to maintain guard vigilance."
  },
  {
    Icon: MapPin,
    title: "Strategic Regional Hub",
    text: "Luton operational base serving the M1 corridor, Bedfordshire, Hertfordshire, and Greater London commercial sites."
  }
];

function ServicesPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 bg-secondary focus:outline-none dark:bg-base">
      <section className="relative overflow-hidden border-b border-sage/25 bg-base py-16 text-secondary lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 100% 0%, rgba(196,129,0,0.45), transparent 50%), radial-gradient(ellipse 50% 50% at 0% 100%, rgba(255,204,0,0.08), transparent 45%)"
          }}
        />
        <div className="relative page-container page-align">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent md:justify-start">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Full Service Portfolio
                </p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                  Commercial security services shaped around your operational risk.
                </h1>
                <p className="mx-auto mt-6 max-w-none text-lg leading-relaxed text-sage md:mx-0">
                  SkyWatch Security Ltd delivers 18 specialised commercial disciplines spanning static
                  guarding, key holding and alarm response, mobile patrols, construction compound protection,
                  concierge access, corporate facilities, CCTV monitoring, event safety, and logistics loss prevention.
                </p>
                <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap md:justify-start">
                  <Link
                    href="/quote"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-base shadow-lg transition hover:bg-accent md:w-auto"
                  >
                    Request a Quotation
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-sage/50 px-6 py-3 text-sm font-semibold text-secondary transition hover:border-accent hover:text-accent md:w-auto"
                  >
                    Contact Operations Desk
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-2">
              <Reveal delay={0.1}>
                <div className="brand-card-dark p-6 sm:p-8">
                  <p className="text-sm font-semibold text-accent">Typical Commercial Deployments</p>
                  <ul className="mt-4 space-y-3 text-sm text-sage">
                    <li className="flex gap-2 border-b border-sage/15 pb-3">
                      <span className="font-semibold text-secondary">Gatehouses</span>
                      Logistics hubs, distribution yards, and compound access control
                    </li>
                    <li className="flex gap-2 border-b border-sage/15 pb-3">
                      <span className="font-semibold text-secondary">Mobile Visits</span>
                      Nocturnal lock-and-unlock sweeps and RFID patrol tag scans
                    </li>
                    <li className="flex gap-2 border-b border-sage/15 pb-3">
                      <span className="font-semibold text-secondary">Key Holding</span>
                      Rapid alarm response dispatch within target SLA windows
                    </li>
                    <li className="flex gap-2 pt-1">
                      <span className="font-semibold text-secondary">Front-of-House</span>
                      Concierge security with customer-friendly access control
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="page-container py-14 page-align">
        <Reveal>
          <h2 className="text-2xl font-bold text-base dark:text-secondary sm:text-3xl">
            Why Commercial Buyers Choose SkyWatch
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-base/75 dark:text-sage md:mx-0">
            Our contracts are built on transparent SLAs, proactive local supervision, and officers who
            uphold site discipline and protect your commercial reputation.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 text-left md:grid-cols-3">
          {highlights.map(({ Icon, title, text }) => (
            <Reveal key={title}>
              <div className="flex h-full flex-col rounded-xl border border-sage/35 bg-base/5 p-5 dark:border-sage/30 dark:bg-secondary/5">
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-bold text-base dark:text-secondary">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-base/75 dark:text-sage">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <StaggerSection className="border-t border-sage/20 bg-base/[0.03] py-16 dark:bg-secondary/[0.05]">
        <div className="page-container page-align">
          <StaggerItem>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-base dark:text-secondary sm:text-3xl">
                  Complete Service Catalogue
                </h2>
                <p className="mx-auto mt-2 max-w-3xl text-sm text-base/75 dark:text-sage md:mx-0">
                  Select any service below to review deployment models, included deliverables, pricing factors,
                  and detailed commercial FAQs.
                </p>
              </div>
              <Link
                href="/standards"
                className="inline-flex min-h-[44px] shrink-0 items-center py-1.5 text-sm font-semibold text-primary-text hover:text-[#5c3d06] sm:min-h-[24px] sm:py-1 md:self-end dark:text-primary dark:hover:text-accent"
              >
                Our Service Standards →
              </Link>
            </div>
          </StaggerItem>
          <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug} className="h-full min-h-0 flex flex-col">
                <ServiceCard slug={service.slug} />
              </StaggerItem>
            ))}
          </div>
        </div>
      </StaggerSection>
    </main>
  );
}

export { ServicesPage as default, metadata };
