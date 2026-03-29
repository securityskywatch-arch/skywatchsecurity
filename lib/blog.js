const blogPosts = [
  {
    slug: "corporate-security-reading-2026",
    title: "Corporate Security Services in Reading 2026: Protecting Businesses in a Fast-Growing Hub",
    date: "2026-03-22",
    excerpt: "Reading remains one of the UK\u2019s most important commercial centres outside London, with strong links, business parks, and a growing professional services footprint.",
    body: [
      "Organisations in Reading balance open campuses with duty-of-care expectations. Corporate security is most effective when it blends visible professionalism with discreet access control and clear escalation paths.",
      "SkyWatch works with estates and facilities teams to align guarding hours, patrol routes, and reception protocols with how your building actually operates, not a one-size-fits-all template."
    ],
    coverImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "retail-security-uk-2026",
    title: "Retail Security in the UK 2026: Protecting Businesses, Staff, and Customers",
    date: "2026-03-16",
    excerpt: "From high streets to retail parks, stores are adapting to changing footfall, digital integration, and higher expectations around safety.",
    body: [
      "Retail loss and conflict risk rarely disappear, they shift. Training, reporting discipline, and store-specific post orders help teams respond consistently without compromising customer experience.",
      "We deploy uniformed and blended approaches depending on your brand, store layout, and peak trading patterns."
    ],
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "concierge-security-oxfordshire-2026",
    title: "Concierge Security in Oxfordshire 2026: Protection Meets First-Class Service",
    date: "2026-03-13",
    excerpt: "Oxfordshire blends heritage institutions, research campuses, and expanding residential developments, each with distinct reception and access challenges.",
    body: [
      "Concierge security succeeds when officers can communicate with warmth while maintaining boundaries: visitor vetting, contractor coordination, and calm handling of sensitive arrivals.",
      "We tailor dress code, scripting, and induction depth to your front-of-house standards."
    ],
    coverImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
  }
];
function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
export {
  blogPosts,
  getPostBySlug
};
