import { jsx, jsxs } from "react/jsx-runtime";
import { notFound } from "next/navigation";
import { ServiceDetailLayout } from "@/components/services/ServiceDetailLayout";
import { getServicePageContent } from "@/lib/servicePageContent";
import { getServiceImage } from "@/lib/serviceImages";
import { getServiceBySlug, services } from "@/lib/services";

function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service" };

  const content = getServicePageContent(params.slug);
  const raw = (content?.heroSubtitle ?? service.short ?? "").trim();
  const description = raw.length > 155 ? `${raw.slice(0, 152).trimEnd()}...` : raw;
  const title = `${service.title} | SkyWatch Security Ltd`;

  return {
    title: service.title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://skywatchsecurity.co.uk/services/${params.slug}`
    }
  };
}

function ServiceDetailPage({ params }) {
  const { slug } = params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const content = getServicePageContent(slug);
  if (!content) notFound();

  const serviceImage = getServiceImage(slug);

  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://skywatchsecurity.co.uk"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://skywatchsecurity.co.uk/services"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://skywatchsecurity.co.uk/services/${slug}`
      }
    ]
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    name: service.title,
    description: content.heroSubtitle || service.short,
    url: `https://skywatchsecurity.co.uk/services/${slug}`,
    image: serviceImage
      ? `https://skywatchsecurity.co.uk${serviceImage}`
      : "https://skywatchsecurity.co.uk/brand/logo.webp",
    provider: {
      "@type": "LocalBusiness",
      name: "SkyWatch Security Ltd",
      telephone: "+44 7365 128 680",
      email: "admin@skywatchsecurity.co.uk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "289 Park Street",
        addressLocality: "Luton",
        postalCode: "LU1 3HH",
        addressCountry: "GB"
      }
    },
    areaServed: [
      { "@type": "City", name: "Luton" },
      { "@type": "AdministrativeArea", name: "Bedfordshire" },
      { "@type": "AdministrativeArea", name: "Hertfordshire" },
      { "@type": "City", name: "London" }
    ]
  };

  const faqLd =
    content.faqs && content.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: content.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer
            }
          }))
        }
      : null;

  return (
    <main id="main-content" tabIndex={-1} className="flex-1 bg-secondary focus:outline-none dark:bg-base">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <ServiceDetailLayout service={service} content={content} />
    </main>
  );
}

export {
  ServiceDetailPage as default,
  generateMetadata,
  generateStaticParams
};
