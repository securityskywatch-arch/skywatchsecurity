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
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  UserCheck,
  Users
} from "lucide-react";

/**
 * SkyWatch Security Ltd - Complete 18 Core Commercial Services
 * Fully rewritten, original service naming.
 */
const services = [
  {
    slug: "manned-security-guards",
    title: "Static Site & Manned Guarding Services",
    Icon: Shield,
    short: "Dedicated on-site security guards maintaining gate access, perimeter security, and shift occurrence logs across Luton and London."
  },
  {
    slug: "key-holding-alarm-response",
    title: "Key Holding & Rapid Alarm Response Services",
    Icon: KeyRound,
    short: "Secure off-site commercial key vaulting and rapid mobile responder attendance for intruder, fire, and plant alarm activations."
  },
  {
    slug: "mobile-patrols",
    title: "Mobile Security Patrols & Inspection Visits",
    Icon: Car,
    short: "Liveried vehicle patrol sweeps, unpredictable timing checks, perimeter boundary inspections, and lock-and-unlock routines."
  },
  {
    slug: "construction-security",
    title: "Construction Site Security & Compound Protection",
    Icon: HardHat,
    short: "High-value plant machinery protection, delivery gatehouse logging, perimeter checks, and out-of-hours theft deterrence."
  },
  {
    slug: "concierge-security",
    title: "Concierge Security & Access Desk Services",
    Icon: Compass,
    short: "Executive front-desk concierges combining welcoming visitor reception with strict access pass control and contractor sign-in."
  },
  {
    slug: "corporate-security",
    title: "Corporate Building & Office Security Services",
    Icon: Building2,
    short: "Comprehensive facilities security for corporate offices, headquarters atriums, loading bays, and executive suites."
  },
  {
    slug: "cctv-monitoring",
    title: "CCTV Monitoring & Remote Surveillance Services",
    Icon: Cctv,
    short: "Round-the-clock remote video surveillance, virtual perimeter tripwire verification, and rapid mobile unit dispatch."
  },
  {
    slug: "event-security",
    title: "Event Security & Crowd Safety Management",
    Icon: CalendarCheck,
    short: "Structured crowd management, access screening, perimeter stewarding, and emergency coordination for corporate and public events."
  },
  {
    slug: "industrial-warehouse",
    title: "Warehouse & Logistics Security Services",
    Icon: Boxes,
    short: "Distribution park gatehouse control, HGV trailer seal audits, inventory shrinkage deterrence, and perimeter sweeps."
  },
  {
    slug: "commercial-security",
    title: "Commercial Property & Business Park Security",
    Icon: Building,
    short: "Scalable facility protection packages for commercial business parks, industrial estates, and multi-tenant trade facilities."
  },
  {
    slug: "retail-security",
    title: "Retail Security Guards & Stock Loss Prevention",
    Icon: ShoppingBag,
    short: "Approachable customer-facing security presence, visual shop-floor deterrence, bag search assistance, and loss prevention."
  },
  {
    slug: "hotel-office-reception",
    title: "Front-of-House Reception & Lobby Security",
    Icon: Users,
    short: "Smartly turned-out front-of-house officers managing reception arrival protocols, electronic visitor badges, and building safety."
  },
  {
    slug: "door-supervision",
    title: "Door Supervision & Licensed Venue Security",
    Icon: DoorOpen,
    short: "Disciplined entry point supervision, age validation, capacity control, and calm conflict de-escalation for licensed venues."
  },
  {
    slug: "educational-campus",
    title: "School & University Campus Security Services",
    Icon: GraduationCap,
    short: "Discreet campus boundary safety, safeguarding compliance alignment, visitor access control, and out-of-hours building checks."
  },
  {
    slug: "security-patrol",
    title: "Security Foot Patrols & Checkpoint Sweeps",
    Icon: ShieldCheck,
    short: "Disciplined on-foot guard sweeps scanning internal NFC checkpoints, fire exit doors, plant rooms, and perimeter boundaries."
  },
  {
    slug: "dog-handling",
    title: "K9 Security Dog Handling & Patrol Teams",
    Icon: Eye,
    short: "Professional security dog handlers with trained canine deterrence units for expansive open yards, high-risk compounds, and void sites."
  },
  {
    slug: "close-protection",
    title: "Close Protection & Executive Escort Services",
    Icon: UserCheck,
    short: "Discreet personal protection officers, secure transit coordination, and route planning for executives, VIPs, and corporate leaders."
  },
  {
    slug: "sia-guarding",
    title: "Dedicated SIA Security Guarding Operations",
    Icon: ShieldAlert,
    short: "Disciplined static guarding operations, gatehouse access control, and perimeter protection across Bedfordshire and London."
  }
];

// Alias mapping to support consolidated or alternate slugs seamlessly
const SLUG_ALIASES = {
  "manned-guarding": "manned-security-guards",
  "reception-concierge": "hotel-office-reception"
};

function getServiceBySlug(slug) {
  const target = SLUG_ALIASES[slug] || slug;
  return services.find((s) => s.slug === target) || null;
}

export {
  getServiceBySlug,
  services
};
