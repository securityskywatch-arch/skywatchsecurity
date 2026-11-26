import {
  Boxes,
  Building,
  Building2,
  CalendarCheck,
  Car,
  Cctv,
  Compass,
  DoorOpen,
  Eye,
  GraduationCap,
  HardHat,
  KeyRound,
  Shield,
  ShoppingBag,
  UserCheck
} from "lucide-react";

/**
 * SkyWatch Security Ltd — 15 commercial service pages (one URL per search intent).
 */
const services = [
  {
    slug: "manned-security-guards",
    title: "Static Site & Manned Guarding Services",
    metaTitle: "Manned Guards Luton & London",
    metaDescription:
      "On-site security guards for gates, perimeters and shift logs across Luton, Bedfordshire, Hertfordshire and Greater London.",
    Icon: Shield,
    short:
      "Dedicated on-site security guards maintaining gate access, perimeter security, and shift occurrence logs across Luton and London."
  },
  {
    slug: "key-holding-alarm-response",
    title: "Key Holding & Rapid Alarm Response Services",
    metaTitle: "Key Holding & Alarm Response",
    metaDescription:
      "Commercial key custody and alarm attendance for intruder, fire and plant activations across Luton and the Home Counties.",
    Icon: KeyRound,
    short:
      "Secure off-site commercial key vaulting and rapid mobile responder attendance for intruder, fire, and plant alarm activations."
  },
  {
    slug: "mobile-patrols",
    title: "Mobile Security Patrols & Inspection Visits",
    metaTitle: "Mobile & Foot Security Patrols",
    metaDescription:
      "Vehicle patrol visits, lock and unlock, and on-foot checkpoint sweeps for commercial sites in Luton, Bedfordshire and London.",
    Icon: Car,
    short:
      "Liveried vehicle patrol sweeps, unpredictable timing checks, perimeter boundary inspections, lock-and-unlock and on-foot checkpoints."
  },
  {
    slug: "construction-security",
    title: "Construction Site Security & Compound Protection",
    metaTitle: "Construction Site Security",
    metaDescription:
      "Site guarding, delivery logging and compound protection for builds in Bedfordshire, Hertfordshire and Greater London.",
    Icon: HardHat,
    short:
      "High-value plant machinery protection, delivery gatehouse logging, perimeter checks, and out-of-hours theft deterrence."
  },
  {
    slug: "concierge-security",
    title: "Concierge Security & Access Desk Services",
    metaTitle: "Concierge & Reception Security",
    metaDescription:
      "Front-of-house concierge and lobby reception security for offices, hotels and residential developments in Luton and London.",
    Icon: Compass,
    short:
      "Executive front-desk concierges combining welcoming visitor reception with strict access pass control and contractor sign-in."
  },
  {
    slug: "corporate-security",
    title: "Corporate Building & Office Security Services",
    metaTitle: "Corporate Office Security",
    metaDescription:
      "Headquarters and office security: loading bays, floor checks and incident coordination in London and the Home Counties.",
    Icon: Building2,
    short:
      "Comprehensive facilities security for corporate offices, headquarters atriums, loading bays, and executive suites."
  },
  {
    slug: "cctv-monitoring",
    title: "CCTV Monitoring & Remote Surveillance Services",
    metaTitle: "CCTV Monitoring Services",
    metaDescription:
      "Remote video surveillance, alarm verification and mobile dispatch for commercial premises in Luton, Bedfordshire and London.",
    Icon: Cctv,
    short:
      "Round-the-clock remote video surveillance, virtual perimeter tripwire verification, and rapid mobile unit dispatch."
  },
  {
    slug: "event-security",
    title: "Event Security & Crowd Safety Management",
    metaTitle: "Event Security & Crowd Safety",
    metaDescription:
      "Crowd management, access screening and stewards for corporate and public events across Bedfordshire and Greater London.",
    Icon: CalendarCheck,
    short:
      "Structured crowd management, access screening, perimeter stewarding, and emergency coordination for corporate and public events."
  },
  {
    slug: "industrial-warehouse",
    title: "Warehouse & Logistics Security Services",
    metaTitle: "Warehouse & Logistics Security",
    metaDescription:
      "Gatehouse control, trailer checks and yard patrols for distribution sites along the M1 corridor and Greater London.",
    Icon: Boxes,
    short:
      "Distribution park gatehouse control, HGV trailer seal audits, inventory shrinkage deterrence, and perimeter sweeps."
  },
  {
    slug: "commercial-security",
    title: "Commercial Property & Business Park Security",
    metaTitle: "Business Park Security",
    metaDescription:
      "Multi-tenant estate security: shared gates, parking, vacant units and refuse compounds for managing agents in Bedfordshire.",
    Icon: Building,
    short:
      "Unified security for commercial business parks, industrial estates, and multi-tenant trade facilities."
  },
  {
    slug: "retail-security",
    title: "Retail Security Guards & Stock Loss Prevention",
    metaTitle: "Retail Security Guards",
    metaDescription:
      "Shop-floor deterrence and stock-loss prevention for retail premises in Luton, Bedfordshire and Greater London.",
    Icon: ShoppingBag,
    short:
      "Approachable customer-facing security presence, visual shop-floor deterrence, bag search assistance, and loss prevention."
  },
  {
    slug: "door-supervision",
    title: "Door Supervision & Licensed Venue Security",
    metaTitle: "Door Supervision Services",
    metaDescription:
      "Licensed venue entry control, capacity monitoring and calm de-escalation in Bedfordshire, Hertfordshire and London.",
    Icon: DoorOpen,
    short:
      "Disciplined entry point supervision, age validation, capacity control, and calm conflict de-escalation for licensed venues."
  },
  {
    slug: "educational-campus",
    title: "School & University Campus Security Services",
    metaTitle: "School & Campus Security",
    metaDescription:
      "Campus access control, safeguarding alignment and out-of-hours checks for schools and universities in the Home Counties.",
    Icon: GraduationCap,
    short:
      "Discreet campus boundary safety, safeguarding compliance alignment, visitor access control, and out-of-hours building checks."
  },
  {
    slug: "dog-handling",
    title: "K9 Security Dog Handling & Patrol Teams",
    metaTitle: "Security Dog Handling",
    metaDescription:
      "Handler and dog patrol teams for yards, compounds and void sites across Luton, Bedfordshire and Hertfordshire.",
    Icon: Eye,
    short:
      "Professional security dog handlers with trained canine deterrence units for expansive open yards, high-risk compounds, and void sites."
  },
  {
    slug: "close-protection",
    title: "Close Protection & Executive Escort Services",
    metaTitle: "Close Protection Services",
    metaDescription:
      "Discreet executive escort and personal protection coordination for corporate leaders in London and the Home Counties.",
    Icon: UserCheck,
    short:
      "Discreet personal protection officers, secure transit coordination, and route planning for executives, VIPs, and corporate leaders."
  }
];

const SLUG_ALIASES = {
  "manned-guarding": "manned-security-guards",
  "reception-concierge": "concierge-security"
};

function getServiceBySlug(slug) {
  const target = SLUG_ALIASES[slug] || slug;
  return services.find((s) => s.slug === target) || null;
}

export { getServiceBySlug, services };