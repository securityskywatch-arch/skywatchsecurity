/**
 * SkyWatch Security Ltd — service slug to public image path.
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
  "industrial-warehouse": "/services/industrial-warehouse.webp",
  "key-holding-alarm-response": "/services/key-holding-alarm-response.webp",
  "manned-security-guards": "/services/manned-security-guards.webp",
  "mobile-patrols": "/services/mobile-patrols.webp",
  "retail-security": "/services/retail-security.webp"
};

export function getServiceImage(slug) {
  if (!slug) return null;
  return serviceImageMap[slug] || null;
}