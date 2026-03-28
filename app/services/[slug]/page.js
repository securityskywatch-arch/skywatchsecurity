import { jsx } from "react/jsx-runtime";
import { notFound } from "next/navigation";
import { ServiceDetailLayout } from "@/components/services/ServiceDetailLayout";
import { getServicePageContent } from "@/lib/servicePageContent";
import { getServiceBySlug, services } from "@/lib/services";
function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service" };
  const content = getServicePageContent(params.slug);
  const raw = (content?.introParagraphs[0] ?? service.short).trim();
  const description = raw.length > 160 ? `${raw.slice(0, 157).trimEnd()}\u2026` : raw;
  return {
    title: content?.heroTitle ?? service.title,
    description
  };
}
function ServiceDetailPage({ params }) {
  const { slug } = params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const content = getServicePageContent(slug);
  if (!content) notFound();
  return /* @__PURE__ */ jsx("main", { className: "flex-1 bg-secondary dark:bg-base", children: /* @__PURE__ */ jsx(ServiceDetailLayout, { service, content }) });
}
export {
  ServiceDetailPage as default,
  generateMetadata,
  generateStaticParams
};
