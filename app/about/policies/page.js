import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { policies } from "@/lib/policies";
import { withCanonical } from "@/lib/pageMetadata";
import { breadcrumbList, SITE } from "@/lib/schema";

const metadata = withCanonical({
  title: "Corporate Policies",
  description:
    "UK GDPR, health and safety, modern slavery, complaints, data retention, cookies and commercial terms for SkyWatch Security Ltd."
}, "/about/policies");

function PoliciesIndexPage() {
  const breadcrumbsLd = breadcrumbList([
    { name: "Home", item: SITE },
    { name: "About", item: `${SITE}/about` },
    { name: "Policies", item: `${SITE}/about/policies` }
  ]);

  return (
    <main id="main-content" tabIndex={-1} className="min-w-0 flex-1 overflow-x-hidden bg-secondary focus:outline-none dark:bg-base">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
      <section className="border-b border-sage/30 bg-base py-12 text-secondary">
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
              <li>
                <Link href="/about" className="inline-flex min-h-[44px] items-center px-1 py-1 transition hover:text-accent sm:min-h-[24px] sm:py-0.5">
                  About
                </Link>
              </li>
              <li aria-hidden="true" className="flex items-center">
                <ChevronRight className="h-4 w-4 shrink-0 opacity-60" aria-hidden="true" />
              </li>
              <li className="font-medium text-secondary">Policies</li>
            </ol>
          </nav>
          <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
            Corporate Governance & Compliance Policies
          </h1>
          <p className="mx-auto mt-3 max-w-4xl text-sage md:mx-0">
            SkyWatch Security Ltd maintains transparent, plain-language corporate policies governing
            workforce welfare, client data protection under UK GDPR, workplace safety, and ethical conduct.
          </p>
        </div>
      </section>

      <StaggerSection className="page-container py-12">
        <ul className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {policies.map((p) => (
            <StaggerItem key={p.slug} as="li" className="h-full">
              <Link
                href={`/about/policies/${p.slug}`}
                className="brand-card brand-card-interactive flex h-full flex-col justify-between p-5 transition hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-[1.05rem] text-[#1a1a1a] dark:text-secondary">
                      {p.title}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]/75 dark:text-[#d8d3c8]">
                    {p.summary}
                  </p>
                </div>
                <span className="mt-4 text-xs font-semibold text-primary-text hover:text-[#5c3d06] dark:text-primary dark:hover:text-accent">
                  Read Policy Document →
                </span>
              </Link>
            </StaggerItem>
          ))}
        </ul>
      </StaggerSection>
    </main>
  );
}

export { PoliciesIndexPage as default, metadata };
