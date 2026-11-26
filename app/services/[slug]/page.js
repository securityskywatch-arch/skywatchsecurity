import { jsx, jsxs } from "react/jsx-runtime";
import { notFound } from "next/navigation";
import { ServiceDetailLayout } from "@/components/services/ServiceDetailLayout";
import { getServicePageContent } from "@/lib/servicePageContent";
import { getServiceImage } from "@/lib/serviceImages";
import { withCanonical } from "@/lib/pageMetadata";
import { getServiceBySlug, services } from "@/lib/services";
import { breadcrumbList, faqPage, serviceSchema, SITE } from "@/lib/schema";

function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service" };

  return withCanonical(
    {
      title: service.metaTitle,
      description: service.metaDescription,
      openGraph: {
        title: `${service.metaTitle} | SkyWatch Security Ltd`,
        description: service.metaDescription,
        type: "website"
      }
    },
    `/services/${params.slug}`
  );
}

function ServiceDetailPage({ params }) {
  const { slug } = params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const content = getServicePageContent(slug);
  if (!content) notFound();

  const serviceImage = getServiceImage(slug);
  const description = content.heroSubtitle || service.short;

  const breadcrumbsLd = breadcrumbList([
    { name: "Home", item: SITE },
    { name: "Services", item: `${SITE}/services` },
    { name: service.title, item: `${SITE}/services/${slug}` }
  ]);

  const serviceLd = serviceSchema({
    name: service.title,
    description,
    url: `${SITE}/services/${slug}`,
    image: serviceImage
  });

  const faqLd = faqPage(content.faqs);

  return (
    <main id="main-content" tabIndex={-1} className="flex-1 bg-secondary focus:outline-none dark:bg-base">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}
      <ServiceDetailLayout service={service} content={content} />
    </main>
  );
}

export { ServiceDetailPage as default, generateMetadata, generateStaticParams };