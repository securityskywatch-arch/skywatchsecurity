import {
  Briefcase,
  Building2,
  CalendarRange,
  CarFront,
  ConciergeBell,
  Dog,
  DoorOpen,
  Footprints,
  GraduationCap,
  HardHat,
  Hotel,
  KeyRound,
  Shield,
  ShieldUser,
  ShoppingBag,
  UserRound,
  Video,
  Warehouse
} from "lucide-react";
const services = [
  {
    slug: "manned-security-guards",
    title: "Manned Security Guards",
    short: "Uniformed presence on your site\u2014access control, patrols, and incident handling from licensed professionals.",
    description: "Manned guarding remains the backbone of site protection: visible deterrence, disciplined patrol patterns, and confident communication with visitors and contractors. We align post orders to your risk register and operating rhythm.",
    bullets: [
      "Static and roaming posts tailored to peaks, voids, and high-value areas",
      "Clear escalation and handover discipline between shifts",
      "Officers trained to represent your brand with courtesy and authority"
    ],
    Icon: ShieldUser
  },
  {
    slug: "dog-handling",
    title: "K9 Security & Dog Handling",
    short: "NASDU- and BIPDT-aligned K9 teams for guard, search, and high-visibility deterrence on demanding UK sites.",
    description: "Professional dog handling extends deterrence and detection beyond what a lone officer can reasonably cover. We deploy certified handler-and-dog teams for construction, warehousing, void properties, and search requirements\u2014with governance that respects the law, animal welfare, and your operational boundaries.",
    bullets: [
      "Handlers and dogs trained and certified to recognised UK schemes (including NASDU and BIPDT routes)",
      "Guard dog patrols scoped to site layout, hours, and public interface risk",
      "Search capability for drugs and explosives where contracted and proportionate",
      "Rapid-response K9 units available where your risk assessment supports that model"
    ],
    Icon: Dog
  },
  {
    slug: "commercial-security",
    title: "Commercial Security Services",
    short: "Practical protection for offices, business parks, and multi-tenant commercial estates.",
    description: "Commercial portfolios need consistency across buildings and suppliers. We standardise reporting, uniform standards, and supervisor visibility while remaining flexible to tenant variations and out-of-hours access.",
    bullets: [
      "Reception cover, patrols, and contractor supervision",
      "Support for FM providers and managing agents",
      "Scalable cover for refurbishments and vacant periods"
    ],
    Icon: Briefcase
  },
  {
    slug: "hotel-office-reception",
    title: "Hotel & Office Reception Security",
    short: "Front-desk teams that combine guest service with protective awareness in busy lobbies.",
    description: "Hotels and premium offices share a challenge: high visitor flow, deliveries, and occasional difficult behaviour. Our reception-trained officers balance hospitality with access discipline and calm incident management.",
    bullets: [
      "Night and day cover aligned to check-in peaks and events",
      "Coordination with concierge, housekeeping, and estates",
      "Support for evacuation and emergency communication"
    ],
    Icon: Hotel
  },
  {
    slug: "close-protection",
    title: "Close Protection Security",
    short: "Discreet, risk-assessed protection for principals, delegations, and high-profile visits.",
    description: "Close protection is built around advance planning, route assessment, and proportionate presence. Engagements are scoped to your threat profile, itinerary, and privacy expectations\u2014with clear command and communication structures.",
    bullets: [
      "Advance reconnaissance and venue liaison where required",
      "Low-profile or overt teams by agreement",
      "Coordination with police and venue security for complex movements"
    ],
    Icon: UserRound
  },
  {
    slug: "security-patrol",
    title: "Security Patrol",
    short: "Scheduled and randomised patrols to maintain visibility across sites and perimeters.",
    description: "Patrol services extend your security footprint without a permanent post on every corner. We combine agreed checkpoints with unpredictability to deter trespass, theft, and anti-social behaviour.",
    bullets: [
      "Keyed visits, lock-up support, and welfare checks",
      "Incident logs and photographic evidence where permitted",
      "Integration with alarm response and key-holding services"
    ],
    Icon: Footprints
  },
  {
    slug: "sia-guarding",
    title: "SIA Security Guarding",
    short: "Licensed, uniformed officers protecting your people, property, and reputation around the clock.",
    description: "Professional SIA-licensed guarding tailored to your risk profile. We maintain vigilance, clear reporting, and a composed presence that reinforces safety without disrupting operations.",
    bullets: [
      "24/7 manned guarding and site-specific post orders",
      "Incident logging, patrol patterns, and escalation protocols",
      "Customer-focused teams aligned with your brand standards"
    ],
    Icon: Shield
  },
  {
    slug: "cctv-monitoring",
    title: "CCTV & Remote Monitoring",
    short: "Deterrence, detection, and rapid review with monitored surveillance aligned to your site layout.",
    description: "Strategic camera coverage, observation routines, and coordinated response pathways help reduce loss, support investigations, and give stakeholders confidence that activity is being watched with intent.",
    bullets: [
      "Live and recorded review aligned to your operating hours",
      "Coordination with on-site teams and key holders",
      "Documentation suitable for insurance and compliance needs"
    ],
    Icon: Video
  },
  {
    slug: "mobile-patrols",
    title: "Mobile Patrols",
    short: "Visible, unpredictable routes that harden perimeters and keep vacant or multi-site portfolios in check.",
    description: "Marked or discreet patrol vehicles, lock-up/unlock support, and welfare checks for properties that need presence without a permanent post. Ideal for industrial estates, retail parks, and out-of-hours campuses.",
    bullets: [
      "Randomised visit windows to reduce pattern prediction",
      "Perimeter checks, void property visits, and alarm follow-up",
      "GPS-backed reporting available on request"
    ],
    Icon: CarFront
  },
  {
    slug: "corporate-security",
    title: "Corporate Security",
    short: "Polite, confident officers who protect offices, receptions, and business parks with executive polish.",
    description: "Corporate environments demand discretion and consistency. Our teams blend access control, visitor management, and patrol discipline to keep staff productive and assets secure.",
    bullets: [
      "Front-of-house presence with professional communication",
      "After-hours locking, access audits, and contractor supervision",
      "Scalable cover for peaks, projects, and absences"
    ],
    Icon: Building2
  },
  {
    slug: "concierge-security",
    title: "Concierge Security",
    short: "First impressions that are secure: reception, guest handling, and protective awareness in one service.",
    description: "Concierge security pairs hospitality with vigilance\u2014greeting visitors, managing fobs and passes, and maintaining situational awareness so your lobby feels welcoming, not vulnerable.",
    bullets: [
      "Visitor vetting, parcel logging, and contractor coordination",
      "Discreet handling of sensitive or high-profile arrivals",
      "Tailored scripts and dress code to match your estate"
    ],
    Icon: ConciergeBell
  },
  {
    slug: "door-supervision",
    title: "Door Supervision",
    short: "Licensed door supervisors for venues where crowd dynamics, licensing conditions, and duty of care intersect.",
    description: "From late-night hospitality to private members\u2019 clubs, we deploy calm, assertive teams trained to de-escalate, enforce entry policy, and support your duty of care obligations.",
    bullets: [
      "Entry management, search policies, and incident containment",
      "Coordination with venue management and emergency services",
      "Experience across bars, hotels, leisure, and private events"
    ],
    Icon: DoorOpen
  },
  {
    slug: "construction-security",
    title: "Construction Site Security",
    short: "Hoarding-to-perimeter coverage that protects plant, materials, and programme milestones.",
    description: "Construction sites attract theft and unauthorised access. We align guarding to your site phases, induction requirements, and HSE culture\u2014keeping deliveries flowing and losses down.",
    bullets: [
      "Gatehouse, patrols, and plant compound monitoring",
      "Out-of-hours protection for high-value installs",
      "Approach aligned with BS 7499 guarding principles"
    ],
    Icon: HardHat
  },
  {
    slug: "educational-campus",
    title: "Educational Campus Care & Security",
    short: "Safeguarding-aware teams for schools and campuses\u2014unlocking, patrols, and calm front-of-house support.",
    description: "Educational settings need patient communication, clear boundaries, and reliable routines. We support unlock/lock-up, reception cover, and patrols that respect students, staff, and safeguarding policies.",
    bullets: [
      "DBS-aligned recruitment processes on request",
      "Morning/evening routines aligned to term times",
      "Coordination with estates and pastoral teams"
    ],
    Icon: GraduationCap
  },
  {
    slug: "key-holding-alarm-response",
    title: "Key Holding & Alarm Response",
    short: "Rapid, accountable attendance when alarms activate\u2014without pulling your own team from bed.",
    description: "Secure key storage, documented handovers, and trained responders who assess, secure, and escalate. Reduce false alarm fatigue while keeping insurers and stakeholders assured.",
    bullets: [
      "24/7 call-off and attendance within agreed SLAs",
      "Lock-up integrity checks and temporary securing",
      "Detailed incident reports for audit trails"
    ],
    Icon: KeyRound
  },
  {
    slug: "industrial-warehouse",
    title: "Industrial & Warehouse Security",
    short: "Loss prevention for yards, docks, and distribution\u2014where throughput and vulnerability meet.",
    description: "Warehouses suffer shrinkage from internal and external threats. We combine access control, HGV coordination, and patrol discipline to protect stock, people, and SLAs.",
    bullets: [
      "Gate operations, trailer checks, and yard patrols",
      "Shift cover for peaks, stocktakes, and refits",
      "Integration with your WMS and site inductions"
    ],
    Icon: Warehouse
  },
  {
    slug: "event-security",
    title: "Event Security",
    short: "Planning-led event teams focused on flow, safety, and proportionate intervention.",
    description: "Event security is more than a physical presence. We work with your run-of-show, capacity plans, and licensing conditions to keep guests safe and experiences on brand.",
    bullets: [
      "Crowd management, access zones, and emergency pathways",
      "Corporate hospitality, festivals, and private functions",
      "Briefings aligned to your risk assessment"
    ],
    Icon: CalendarRange
  },
  {
    slug: "retail-security",
    title: "Retail Security",
    short: "Customer-friendly guarding that deters theft, supports staff, and protects your brand on the shop floor.",
    description: "Retail environments need approachable officers who can observe, intervene appropriately, and support duty managers during incidents\u2014without escalating unnecessarily on busy trading days.",
    bullets: [
      "Uniformed and plain-clothes options by agreement",
      "CCTV awareness, stop policies, and evidential notes",
      "Cover for centres, flagships, and out-of-town retail"
    ],
    Icon: ShoppingBag
  }
];
function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
export {
  getServiceBySlug,
  services
};
