const policies = [
  {
    slug: "mission-statement",
    title: "Mission Statement",
    summary: "Our commitment to safe sites, trusted people, and measurable service quality.",
    body: [
      "SkyWatch Security exists to protect people, property, and reputation through disciplined, licensed security services. We align our officers, supervisors, and control-room processes to your operational reality, not generic templates.",
      "We invest in training, supervision, and feedback loops so that every shift reinforces professionalism, accountability, and clear communication with your teams."
    ]
  },
  {
    slug: "drugs-alcohol-policy",
    title: "Drugs and Alcohol Policy",
    summary: "Zero-tolerance expectations for impairment on duty and support for reporting concerns.",
    body: [
      "All personnel must attend work fit for duty. Alcohol, non-prescribed drugs, or impairment that could affect judgement or safety is not permitted before or during a shift.",
      "We maintain reporting routes for concerns and investigate allegations proportionately, with safeguarding for whistle-blowers where appropriate."
    ]
  },
  {
    slug: "quality-policy-statement",
    title: "Quality Policy Statement",
    summary: "Defined standards, audits, and client feedback drive continuous improvement.",
    body: [
      "Service delivery is documented through assignment instructions, post orders, and incident reporting. Management reviews performance data, client feedback, and near-miss trends to refine training and deployment.",
      "We aim for consistent handovers, punctuality, and uniform standards that reflect your brand and regulatory expectations."
    ]
  },
  {
    slug: "environmental-policy",
    title: "Environmental Policy",
    summary: "Practical steps to reduce waste and travel impact without compromising response times.",
    body: [
      "We encourage digital reporting, efficient patrol routing where agreed, and responsible disposal of uniform and equipment at end-of-life.",
      "Partners and subcontractors are expected to respect local environmental rules and site-specific waste procedures."
    ]
  },
  {
    slug: "health-safety-wellbeing",
    title: "Health, Safety & Wellbeing Policy",
    summary: "Risk assessments, PPE, and welfare checks for lone and night working.",
    body: [
      "We identify hazards with you, record significant risks, and brief teams before deployment. Lone-worker protocols and welfare calls are used where roles require them.",
      "Officers are encouraged to report unsafe conditions immediately so issues can be escalated to site management and resolved quickly."
    ]
  },
  {
    slug: "modern-slavery-trafficking",
    title: "Modern Slavery & Trafficking Policy",
    summary: "Due diligence across recruitment, supply chains, and subcontractor oversight.",
    body: [
      "We do not tolerate modern slavery or human trafficking in any part of our business or supply chain. Recruitment checks and right-to-work verification are core controls.",
      "Suspicions or intelligence are escalated responsibly in line with statutory guidance and your escalation preferences."
    ]
  },
  {
    slug: "anti-tax-evasion",
    title: "Anti Tax Evasion Policy",
    summary: "Commitment to lawful tax conduct and refusal to facilitate evasion.",
    body: [
      "We conduct business transparently and comply with UK tax obligations. Facilitation of tax evasion by staff or associates is prohibited.",
      "Training highlights red flags and reporting expectations where third-party arrangements could create risk."
    ]
  },
  {
    slug: "data-protection-policy",
    title: "Data Protection Policy",
    summary: "Lawful processing, minimisation, and secure handling of personal data.",
    body: [
      "Personal data is processed only where necessary for contracts, legal obligations, or legitimate interests, with appropriate transparency and retention limits.",
      "Access controls, training, and breach procedures support compliance with UK GDPR and the Data Protection Act."
    ]
  },
  {
    slug: "counter-terror-policy",
    title: "Counter Terror Policy",
    summary: "Awareness, vigilance, and coordination with authorities where required.",
    body: [
      "Officers receive awareness training on suspicious behaviour, hostile reconnaissance concepts, and emergency communication pathways appropriate to your venue.",
      "We support your site\u2019s contingency plans and cooperate with police and emergency services during incidents."
    ]
  },
  {
    slug: "whistleblowing-policy",
    title: "Whistleblowing Policy",
    summary: "Protected routes to raise serious wrongdoing without fear of retaliation.",
    body: [
      "We encourage disclosure of malpractice affecting safety, legality, or public interest through confidential channels managed impartially.",
      "Retaliation against genuine whistle-blowers is not tolerated and concerns are investigated with appropriate confidentiality."
    ]
  },
  {
    slug: "training-development-policy",
    title: "Training & Development Policy",
    summary: "Licence maintenance, refresher skills, and role-specific briefings.",
    body: [
      "SIA licence holders maintain competencies and receive site-specific inductions covering hazards, customer service expectations, and escalation contacts.",
      "Development plans support progression into supervisory and specialist roles where business needs allow."
    ]
  },
  {
    slug: "csr-policy",
    title: "Corporate Social Responsibility Policy",
    summary: "Ethical employment, community respect, and charitable engagement where practical.",
    body: [
      "We seek fair employment practices, local recruitment where possible, and respectful engagement with neighbours around our operations.",
      "Community and charitable initiatives are supported when aligned with company values and client requirements."
    ]
  },
  {
    slug: "anti-bribery-corruption",
    title: "Anti-Bribery & Corruption Policy",
    summary: "No improper inducements; gifts and hospitality are controlled and recorded.",
    body: [
      "Bribery and corruption in any form are prohibited. Hospitality must be reasonable, transparent, and pre-approved where policy requires.",
      "Third parties acting for us are expected to uphold equivalent standards."
    ]
  },
  {
    slug: "equality-diversity",
    title: "Equality & Diversity Policy",
    summary: "Inclusive recruitment, fair treatment, and dignity at work.",
    body: [
      "We oppose unlawful discrimination and harassment. Selection, promotion, and day-to-day management are based on merit and business need.",
      "Reasonable adjustments are considered for disability and flexible approaches discussed where operationally viable."
    ]
  },
  {
    slug: "workplace-violence",
    title: "Workplace Violence Policy",
    summary: "Prevention, de-escalation, and after-incident support for staff affected by violence.",
    body: [
      "We assess violence risks with clients, provide training in de-escalation where appropriate, and support reporting to police when crimes occur.",
      "Post-incident welfare and investigation procedures aim to learn and reduce recurrence."
    ]
  },
  {
    slug: "tupe-policy",
    title: "TUPE Policy",
    summary: "Lawful handling of service transfers and employee information requirements.",
    body: [
      "Where TUPE may apply, we engage early with outgoing and incoming contractors, seek legal advice, and communicate honestly with affected staff.",
      "Employee liability information is exchanged in line with statutory timescales."
    ]
  },
  {
    slug: "communication-media-policy",
    title: "Communication and Media Policy",
    summary: "Who may speak for the company and how incidents are described externally.",
    body: [
      "Only authorised spokespersons respond to press or social media enquiries. Operational staff refer media to management unless you instruct otherwise jointly.",
      "Client confidentiality and ongoing investigations limit what can be shared publicly."
    ]
  },
  {
    slug: "corporate-criminal-offence",
    title: "Corporate Criminal Offence Policy",
    summary: "Reasonable procedures to prevent facilitation of tax evasion by associated persons.",
    body: [
      "We maintain procedures proportionate to our risk exposure, including due diligence, training, and escalation where tax evasion facilitation is suspected.",
      "Breaches are investigated and may lead to disciplinary or contractual action."
    ]
  }
];
function getPolicyBySlug(slug) {
  return policies.find((p) => p.slug === slug);
}
export {
  getPolicyBySlug,
  policies
};
