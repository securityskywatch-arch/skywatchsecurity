import { NextResponse } from "next/server";

const REDIRECTS = {
  // Aliases redirecting to canonical service URLs
  "/services/manned-guarding": "/services/manned-security-guards",
  "/services/reception-concierge": "/services/concierge-security",
  "/services/sia-guarding": "/services/manned-security-guards",
  "/services/security-patrol": "/services/mobile-patrols",
  "/services/hotel-office-reception": "/services/concierge-security",

  // Policy redirects (from legacy catalog to 8 lean UK policies)
  "/about/policies/mission-statement": "/about",
  "/about/policies/drugs-alcohol-policy": "/about/policies/health-and-safety",
  "/about/policies/quality-policy-statement": "/standards",
  "/about/policies/environmental-policy": "/about/policies/health-and-safety",
  "/about/policies/health-safety-wellbeing": "/about/policies/health-and-safety",
  "/about/policies/modern-slavery-trafficking": "/about/policies/modern-slavery-statement",
  "/about/policies/anti-tax-evasion": "/about/policies/terms-of-service",
  "/about/policies/data-protection-policy": "/about/policies/privacy-policy",
  "/about/policies/counter-terror-policy": "/standards",
  "/about/policies/whistleblowing-policy": "/about/policies/customer-complaints",
  "/about/policies/training-development-policy": "/standards",
  "/about/policies/csr-policy": "/about/policies/modern-slavery-statement",
  "/about/policies/anti-bribery-corruption": "/about/policies/terms-of-service",
  "/about/policies/equality-diversity": "/about/policies/equal-opportunities",
  "/about/policies/workplace-violence": "/about/policies/health-and-safety",
  "/about/policies/tupe-policy": "/about/policies/terms-of-service",
  "/about/policies/communication-media-policy": "/about/policies/terms-of-service",
  "/about/policies/business-ethics": "/about/policies/terms-of-service"
};

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const destination = REDIRECTS[pathname];

  if (destination) {
    return NextResponse.redirect(new URL(destination, request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|brand/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"
  ]
};
