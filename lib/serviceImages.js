/**
 * SkyWatch Security Ltd - Service Image Resolver
 * Provides reliable, isomorphic (server & client) mapping of service slugs to public image paths.
 * Matches all 18 commercial service assets in /public/services.
 */

const serviceImageMap = {
  "cctv-monitoring": "/services/cctv-monitoring.webp",
  "close-protection": "/services/close-protection.webp",
  "commercial-security": "/services/commercial-security.webp",
  "concierge-security": "/services/concierge-security.webp",
  "construction-security": "/services/construction-security.webp",
  "corporate-security": "/services/corporate-security.webp",
  "dog-handling": "/services/dog-handling.webp",
  "door-supervision": "/services/door-supervision.webp",
  "educational-campus": "/services/educational-campus.webp",
  "event-security": "/services/event-security.webp",
  "hotel-office-reception": "/services/hotel-office-reception.webp",
  "industrial-warehouse": "/services/industrial-warehouse.webp",
  "key-holding-alarm-response": "/services/key-holding-alarm-response.webp",
  "manned-security-guards": "/services/manned-security-guards.webp",
  "mobile-patrols": "/services/mobile-patrols.webp",
  "retail-security": "/services/retail-security.webp",
  "security-patrol": "/services/security-patrol.webp",
  "sia-guarding": "/services/sia-guarding.webp",
};

export function getServiceImage(slug) {
  if (!slug) return null;
  return serviceImageMap[slug] || null;
}
