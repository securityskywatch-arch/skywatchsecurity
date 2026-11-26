import { schemaAddress, siteContact } from "./siteContact";

const SITE = "https://skywatchsecurity.co.uk";
const COMPANY_ID = `${SITE}/#company`;

const AREA_SERVED = [
  { "@type": "AdministrativeArea", name: "Luton" },
  { "@type": "AdministrativeArea", name: "Bedfordshire" },
  { "@type": "AdministrativeArea", name: "Hertfordshire" },
  { "@type": "AdministrativeArea", name: "Greater London" }
];

function companyNode() {
  return {
    "@type": ["LocalBusiness", "Organization"],
    "@id": COMPANY_ID,
    name: "SkyWatch Security Ltd",
    url: SITE,
    logo: `${SITE}/brand/logo.webp`,
    telephone: siteContact.phone.display,
    email: siteContact.email,
    address: {
      "@type": "PostalAddress",
      ...schemaAddress
    },
    areaServed: AREA_SERVED.map((a) => a.name)
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: "SkyWatch Security Ltd",
    publisher: { "@id": COMPANY_ID }
  };
}

function rootGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [companyNode(), websiteNode()]
  };
}

function breadcrumbList(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item
    }))
  };
}

function serviceSchema({ name, description, url, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    image: image ? `${SITE}${image}` : `${SITE}/brand/logo.webp`,
    provider: { "@id": COMPANY_ID },
    areaServed: AREA_SERVED
  };
}

function faqPage(faqs) {
  if (!faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
}

function aboutFaqPage(faqs) {
  if (!faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a }
    }))
  };
}

function blogPosting(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    author: {
      "@type": "Organization",
      name: post.author
    },
    publisher: { "@id": COMPANY_ID },
    image: `${SITE}${post.coverImage}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE}/blog/${post.slug}`
    }
  };
}

export {
  AREA_SERVED,
  COMPANY_ID,
  SITE,
  aboutFaqPage,
  blogPosting,
  breadcrumbList,
  faqPage,
  rootGraph,
  serviceSchema
};