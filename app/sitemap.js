import { blogPosts } from "@/lib/blog";
import { policies } from "@/lib/policies";
import { services } from "@/lib/services";

const BASE_URL = "https://skywatchsecurity.co.uk";

function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/about/policies",
    "/accreditation",
    "/blog",
    "/contact",
    "/quote",
    "/recruitment",
    "/services",
    "/standards",
    "/why-choose-us"
  ];

  const staticEntries = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  const serviceEntries = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  const policyEntries = policies.map((policy) => ({
    url: `${BASE_URL}/about/policies/${policy.slug}`,
    changeFrequency: "yearly",
    priority: 0.5
  }));

  return [...staticEntries, ...serviceEntries, ...blogEntries, ...policyEntries];
}

export { sitemap as default };