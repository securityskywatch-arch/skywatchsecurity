import { blogPosts } from "@/lib/blog";
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
    "/recruitment/apply",
    "/recruitment/vacancies",
    "/reviews",
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
    changeFrequency: "monthly",
    priority: 0.7
  }));
  const serviceEntries = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.7
  }));
  return [...staticEntries, ...blogEntries, ...serviceEntries];
}

export {
  sitemap as default
};
