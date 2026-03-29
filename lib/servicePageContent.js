import { getServiceBySlug, services } from "./services";
const RELATED_SLUGS = {
  "corporate-security": [
    "manned-security-guards",
    "door-supervision",
    "event-security",
    "concierge-security",
    "construction-security",
    "key-holding-alarm-response"
  ],
  "manned-security-guards": [
    "security-patrol",
    "mobile-patrols",
    "key-holding-alarm-response",
    "dog-handling",
    "cctv-monitoring",
    "commercial-security",
    "corporate-security"
  ],
  "dog-handling": [
    "manned-security-guards",
    "construction-security",
    "industrial-warehouse",
    "security-patrol",
    "mobile-patrols",
    "close-protection"
  ],
  "commercial-security": [
    "corporate-security",
    "manned-security-guards",
    "cctv-monitoring",
    "key-holding-alarm-response",
    "hotel-office-reception",
    "security-patrol"
  ],
  "hotel-office-reception": [
    "concierge-security",
    "corporate-security",
    "manned-security-guards",
    "event-security",
    "door-supervision",
    "close-protection"
  ],
  "close-protection": [
    "manned-security-guards",
    "event-security",
    "hotel-office-reception",
    "corporate-security",
    "security-patrol",
    "mobile-patrols"
  ],
  "security-patrol": [
    "mobile-patrols",
    "key-holding-alarm-response",
    "cctv-monitoring",
    "manned-security-guards",
    "industrial-warehouse",
    "construction-security"
  ],
  "sia-guarding": [
    "manned-security-guards",
    "door-supervision",
    "key-holding-alarm-response",
    "cctv-monitoring",
    "commercial-security",
    "retail-security"
  ],
  "cctv-monitoring": [
    "manned-security-guards",
    "key-holding-alarm-response",
    "security-patrol",
    "mobile-patrols",
    "retail-security",
    "industrial-warehouse"
  ],
  "mobile-patrols": [
    "security-patrol",
    "key-holding-alarm-response",
    "cctv-monitoring",
    "construction-security",
    "industrial-warehouse",
    "commercial-security"
  ],
  "concierge-security": [
    "hotel-office-reception",
    "corporate-security",
    "manned-security-guards",
    "commercial-security",
    "event-security",
    "close-protection"
  ],
  "door-supervision": [
    "event-security",
    "retail-security",
    "manned-security-guards",
    "hotel-office-reception",
    "close-protection",
    "commercial-security"
  ],
  "construction-security": [
    "manned-security-guards",
    "dog-handling",
    "security-patrol",
    "mobile-patrols",
    "cctv-monitoring",
    "key-holding-alarm-response",
    "industrial-warehouse"
  ],
  "educational-campus": [
    "manned-security-guards",
    "security-patrol",
    "key-holding-alarm-response",
    "event-security",
    "door-supervision",
    "close-protection"
  ],
  "key-holding-alarm-response": [
    "security-patrol",
    "mobile-patrols",
    "cctv-monitoring",
    "manned-security-guards",
    "commercial-security",
    "construction-security"
  ],
  "industrial-warehouse": [
    "manned-security-guards",
    "dog-handling",
    "cctv-monitoring",
    "mobile-patrols",
    "security-patrol",
    "retail-security",
    "key-holding-alarm-response"
  ],
  "event-security": [
    "door-supervision",
    "close-protection",
    "manned-security-guards",
    "security-patrol",
    "retail-security",
    "hotel-office-reception"
  ],
  "retail-security": [
    "door-supervision",
    "cctv-monitoring",
    "manned-security-guards",
    "event-security",
    "commercial-security",
    "security-patrol"
  ]
};
function fixRelated(slug) {
  const raw = RELATED_SLUGS[slug];
  if (!raw) {
    return services.filter((s) => s.slug !== slug).slice(0, 6).map((s) => s.slug);
  }
  return raw.filter((s) => getServiceBySlug(s));
}
function offeringsFor(slug) {
  return fixRelated(slug).map((s) => {
    const svc = getServiceBySlug(s);
    if (!svc) return null;
    return {
      title: svc.title,
      description: svc.short,
      href: `/services/${svc.slug}`
    };
  }).filter((o) => o !== null);
}
const DEFAULT_RISKS = [
  "Theft of stock, equipment, or company property",
  "Vandalism and malicious damage",
  "Trespassing and unauthorised access",
  "Disruption to staff, customers, or operations",
  "Reputational harm when incidents happen in public areas"
];
function buildDefault(service) {
  const topic = service.title;
  const lc = topic.toLowerCase();
  return {
    heroKicker: topic,
    heroTitle: `${topic} in the UK`,
    heroSubtitle: service.short,
    introParagraphs: [
      `${service.description} Professional ${lc} helps protect employees, visitors, clients, and the assets your organisation relies on, with SIA-licensed officers and vetting aligned to BS 7858 where your contract requires it.`,
      `Without a structured approach to ${lc}, sites can be exposed to risks that are preventable with the right people, training, supervision, and reporting. We plan deployments around your duty of care to staff, visitors, and contractors, not just perimeter checks.`
    ],
    riskBullets: DEFAULT_RISKS,
    whatIs: {
      title: `What is ${topic}?`,
      body: `${topic} combines physical presence, access discipline, monitoring, and clear escalation so threats are deterred or managed before they escalate. SkyWatch officers are briefed to your hazards, visitor profile, technology (access, CCTV, radios), and your brand expectations, so the front line feels consistent, not improvised.`
    },
    whyNeed: {
      title: `Why would I need ${topic}?`,
      body: `Organisations typically invest when footfall, asset value, licensing conditions, insurer expectations, or duty-of-care standards mean informal arrangements are no longer enough. The right package provides visible deterrence, documented routines, and trained judgement at the point of contact, without pulling your own managers into overnight incidents.`
    },
    advantagesTitle: `Advantages of ${topic}`,
    advantages: [
      "A visible deterrent to criminals and opportunists",
      "Improved safety for employees, contractors, and visitors",
      "Better protection for high-value areas, equipment, and stock",
      "Fewer incidents through access discipline, patrols, and monitoring",
      "Clear reporting for FM, legal, compliance, and insurer stakeholders"
    ],
    whyChooseTitle: "Why choose SkyWatch Security?",
    whyChooseBullets: [
      "Experienced SIA-licensed teams with site-specific assignment instructions",
      "Recruitment and vetting processes aligned to BS 7858 principles where clients mandate them",
      "Supervision, handovers, and escalation paths you can audit",
      "Officers comfortable with technology, from access systems to CCTV awareness",
      "A broad range of guarding disciplines to blend across your estate",
      "Responsive planning for peaks, projects, absence cover, and short-notice needs"
    ],
    offeringsTitle: `Our ${topic} and related services`,
    offerings: offeringsFor(service.slug),
    areasTitle: "Areas we serve",
    areasBody: "SkyWatch Security deploys teams across England with a focus on the South East, South West, and Central regions. We plan travel, response models, and cover depth around your locations, whether you operate a single flagship site or a regional portfolio.",
    finalCta: {
      title: `Protect your organisation with SkyWatch Security`,
      body: `Tell us about your hours, hazards, and access points. We\u2019ll propose ${lc} that fits your risk profile, budget, and brand expectations. Request a quote and we\u2019ll tailor a plan with clear deliverables.`
    },
    faqs: defaultFaqs(service)
  };
}
function defaultFaqs(service) {
  const t = service.title;
  return [
    {
      question: `What does ${t} typically include?`,
      answer: `Scope follows your risk assessment and assignment instructions. We align hours, patrol checkpoints, access procedures, incident reporting, and supervision visits to what you need to evidence internally and to insurers, not a generic \u201Cguard on site\u201D line item.`
    },
    {
      question: "Can you support short-notice cover or one-off events?",
      answer: "Yes, where contractually agreed we maintain bench depth for ad-hoc cover, peaks, and events, including evenings and weekends for many disciplines."
    },
    {
      question: "Are officers licensed and vetted?",
      answer: "Officers hold valid SIA licences for their roles. Screening and induction depth are aligned to your procurement rules, site hazards, and safeguarding requirements where applicable."
    },
    {
      question: "Will you coordinate with our FM, contractors, or other suppliers?",
      answer: "We routinely work alongside estates, cleaning, IT, retail operations, and construction teams so permits, escorts, lock-up programmes, and emergency plans stay coherent."
    }
  ];
}
const PATCHES = {
  "corporate-security": {
    heroKicker: "Corporate Security Services",
    heroTitle: "Corporate Security Services in the UK",
    introParagraphs: [
      "Corporate security plays a central role in protecting your organisation: the safety of employees, clients, and visitors, and the security of assets that underpin your operations.",
      "Without professional corporate security in the UK, businesses can face preventable risks, from theft and trespass to disruption that damages confidence in your brand."
    ],
    whatIs: {
      title: "What is corporate security?",
      body: "Corporate security brings together physical guarding, access control, and monitoring so unauthorised access is reduced and your business environment stays safer. SkyWatch aligns officers to reception standards, patrol routes, contractor flows, and escalation paths that match how your corporate estate actually runs."
    },
    whyNeed: {
      title: "Why would I need corporate security services?",
      body: "Investing in corporate security is essential when you need to protect assets and give employees and visitors confidence. Proper corporate cover helps mitigate theft, vandalism, and trespass while keeping access discipline consistent across buildings and shifts."
    },
    offeringsTitle: "Our corporate security services",
    faqs: [
      {
        question: "What does corporate security do?",
        answer: "Corporate security protects people, premises, and assets through trained guarding, access control, patrol discipline, and coordinated response. That includes monitoring suspicious activity, supporting emergency plans, and producing clear incident records for management and insurers."
      },
      {
        question: "Do I need corporate security for a smaller business?",
        answer: "Yes, smaller organisations still face theft, trespass, and out-of-hours vulnerability. The right package is scaled to your footprint, not oversized."
      },
      {
        question: "What is the difference between corporate security and general private security?",
        answer: "Corporate security is usually tailored to a single organisation\u2019s estate, culture, and policies. Broader private security can span multiple contracts and service types; we focus on assignment clarity and brand-appropriate conduct for your sites."
      },
      {
        question: "Can you provide event security for corporate functions?",
        answer: "Yes. We provide planning-led event teams for corporate hospitality, AGMs, launches, and staff events, aligned to capacity, licensing, and your duty of care."
      }
    ]
  },
  "retail-security": {
    riskBullets: [
      "Shrinkage and organised theft on the shop floor",
      "Abuse or aggression toward staff",
      "Vandalism and malicious damage",
      "Unsafe crowding during peaks or incidents",
      "Reputational issues when interventions are mishandled"
    ]
  },
  "event-security": {
    riskBullets: [
      "Unsafe crowding or bottlenecks at entry and circulation",
      "Incidents involving alcohol, drugs, or disorder",
      "Unauthorised access to backstage or VIP zones",
      "Medical or welfare emergencies requiring calm coordination",
      "Reputational risk when safety expectations aren\u2019t met"
    ]
  },
  "construction-security": {
    riskBullets: [
      "Theft of plant, tools, and high-value materials",
      "Trespass and unauthorised access to live works",
      "Vandalism and arson risk on open sites",
      "Safety incidents linked to poor access control",
      "Programme delays when security gaps cause losses"
    ]
  },
  "dog-handling": {
    heroKicker: "Dog Handling",
    heroTitle: "Professional Dog Handling Services",
    heroSubtitle: "Enhanced protection for high-risk sites across the UK.",
    primaryCtaLabel: "Request a Dog Handling Quote",
    introParagraphs: [
      "Professional dog handling pairs disciplined handlers with dogs selected and trained for the task, whether you need a visible deterrent on a live construction site, overnight cover for warehousing and yards, or controlled search capability where your risk assessment and policy support it.",
      "SkyWatch plans deployments around your boundaries, public interfaces, induction rules, and reporting expectations so dog-handling support strengthens your SIA-aligned guarding model rather than sitting alongside it as an ungoverned add-on.",
      "Deployments respect the Guard Dogs Act 1975. For security dog operations we work to BS 8517-1 (General code of practice for the use of security dogs) and BS 8517-2 (Code of practice for detection dogs), including welfare, signage, handler competence (including NASDU-certified routes where applicable), and lawful control of dogs on site."
    ],
    riskBullets: [
      "Repeat trespass, theft, and vandalism where human presence alone is insufficient deterrence",
      "Large perimeters, void buildings, and low-light environments that suit patrol dog coverage",
      "Need for proportionate search capability (e.g. drugs or explosives) under agreed protocols",
      "Insurer or client expectation of enhanced physical security on high-value or sensitive sites",
      "Incidents that escalate quickly without a credible rapid-response dog-handling option"
    ],
    whatIs: {
      title: "What is professional dog handling?",
      body: "Dog handling for security places a trained security dog under the control of a competent handler so deterrence, detection, and patrol coverage are amplified on sites where risk warrants it. Assignments are scoped to post orders, patrol routes, no-go zones, and how the team interfaces with staff, contractors, and the public where relevant. SkyWatch emphasises NASDU- and BIPDT-aligned standards for handler competence and dog suitability so delivery stays professional, accountable, and defensible."
    },
    whyNeed: {
      title: "Why would I need dog handling on site?",
      body: "Organisations turn to handler-and-dog teams when asset value, incident history, site layout, or contract standards mean a stronger deterrent and faster detection footprint is required. Guard dogs can support construction phases, vacant property programmes, industrial estates, and search tasks where methodology, certification, and legal compliance must be demonstrable to procurement, insurers, and your own governance teams."
    },
    advantagesTitle: "What our dog-handling teams deliver",
    advantages: [
      "NASDU- and BIPDT-certified handlers and dogs, deployed with clear assignment instructions",
      "Guard dogs for construction sites, warehouses, and vacant properties, aligned to your hours and hazards",
      "Drug and explosive detection (search dogs) where contracted, briefed, and proportionate to risk",
      "Visual deterrent and rapid-response dog-handling units that reinforce your wider guarding and patrol package"
    ],
    whyChooseBullets: [
      "SIA-aligned guarding culture extended into professional dog handling, not ad-hoc \u201Cdog on site\u201D arrangements",
      "Compliance framing around the Guard Dogs Act 1975 and BS 8517-1 / BS 8517-2",
      "Handlers trained for professional communication, incident reporting, and site discipline",
      "Deployment planning that respects welfare, boundaries, and your brand expectations",
      "Ability to blend dog-handling cover with manned guarding, patrols, and monitoring on the same instruction set"
    ],
    offeringsTitle: "Related security services",
    faqs: [
      {
        question: "Are your dog handlers and security dogs certified?",
        answer: "We deploy teams trained and certified through recognised UK routes such as NASDU and BIPDT, matched to the role (general purpose, guard, or search) and to your site risk profile. Certificates and training records can be made available for tender and audit where required."
      },
      {
        question: "How do you comply with the Guard Dogs Act 1975?",
        answer: "Deployments follow statutory requirements on control, signage, and circumstances in which dogs may be used. We scope assignments with you so lawful use, public interface risk, and handler accountability are clear before the first shift."
      },
      {
        question: "Can you provide search dogs for drugs or explosives?",
        answer: "Yes, where the requirement is agreed in writing, risk-assessed, and operated under policies that match BS 8517 and your own governance. Scope, access rules, and handover to management or police are defined in advance."
      },
      {
        question: "Will dog handling replace manned guarding on my site?",
        answer: "Usually dog handling complements SIA-licensed guarding: handlers hold appropriate licences for security roles, and dogs extend deterrence and detection. We recommend blended models unless your risk assessment clearly supports a dog-handling-led deployment."
      }
    ]
  }
};
function deepMerge(base, patch) {
  const out = { ...base, ...patch };
  if (patch.whatIs) out.whatIs = { ...base.whatIs, ...patch.whatIs };
  if (patch.whyNeed) out.whyNeed = { ...base.whyNeed, ...patch.whyNeed };
  if (patch.finalCta) out.finalCta = { ...base.finalCta, ...patch.finalCta };
  if (patch.introParagraphs) out.introParagraphs = patch.introParagraphs;
  if (patch.riskBullets) out.riskBullets = patch.riskBullets;
  if (patch.advantages) out.advantages = patch.advantages;
  if (patch.whyChooseBullets) out.whyChooseBullets = patch.whyChooseBullets;
  if (patch.offerings) out.offerings = patch.offerings;
  if (patch.faqs) out.faqs = patch.faqs;
  if (patch.advantagesTitle) out.advantagesTitle = patch.advantagesTitle;
  if (patch.offeringsTitle) out.offeringsTitle = patch.offeringsTitle;
  if (patch.areasTitle) out.areasTitle = patch.areasTitle;
  if (patch.areasBody) out.areasBody = patch.areasBody;
  if (patch.whyChooseTitle) out.whyChooseTitle = patch.whyChooseTitle;
  if (patch.heroKicker) out.heroKicker = patch.heroKicker;
  if (patch.heroTitle) out.heroTitle = patch.heroTitle;
  if (patch.heroSubtitle) out.heroSubtitle = patch.heroSubtitle;
  if (patch.primaryCtaLabel) out.primaryCtaLabel = patch.primaryCtaLabel;
  return out;
}
function getServicePageContent(slug) {
  const service = getServiceBySlug(slug);
  if (!service) return null;
  const base = buildDefault(service);
  const patch = PATCHES[slug];
  return patch ? deepMerge(base, patch) : base;
}
export {
  getServicePageContent
};
